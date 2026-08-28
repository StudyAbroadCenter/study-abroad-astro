import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = (process.env.VISUAL_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const outputDir = process.env.KO_SITE_OUTPUT_DIR || 'korean-site-visual-uat';
const viewports = [
  { name: 'desktop', width: 1536, height: 1024 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile390', width: 390, height: 844 },
  { name: 'mobile320', width: 320, height: 720 },
];

const routes = [
  { id: 'home', path: '/ko/', minText: 900, required: ['현재 프로그램', '2027 여름 프로그램', 'RWJP', 'RWJP EXPRESS', 'RBMP', 'RDSP', 'RSJP'], forbidden: ['현재 모집 중'] },
  { id: 'rsjp', path: '/ko/programs/rsjp/', minText: 850, required: ['2027년 세부 정보 확인 예정', 'Ritsumeikan Summer Japanese Program', '기누가사 캠퍼스', '확인 후 공개'], forbidden: ['JPY 370,000'] },
  { id: 'rsjp-express', path: '/ko/programs/rsjp-express/', minText: 800, required: ['2027년 세부 정보 확인 예정', 'RSJP Express', '기누가사 캠퍼스', '확인 후 공개'], forbidden: ['JPY 370,000'] },
  { id: 'rwjp', path: '/ko/programs/rwjp/', minText: 1100, required: ['2027년 1월 12일', '2027년 2월 11일', 'JPY 370,000', '57.5시간', '990분', 'JPY 92,500', '2026년 10월 14일', 'JPY 54,000'], forbidden: ['10–15'] },
  { id: 'rwjp-express', path: '/ko/programs/rwjp-express/', minText: 950, required: ['2027년 2월 16일', '2027년 2월 26일', '22.5시간', '360분', '15명', '다이쇼군'], forbidden: ['JPY 370,000'] },
  { id: 'rdsp', path: '/ko/programs/rdsp/', minText: 850, required: ['working plan', 'AI', 'Data Science', 'Robotics', 'Microsoft Base', '오사카 이바라키 캠퍼스'], forbidden: ['Ritsumeikan Data Science Program', 'JPY 200,000'] },
  { id: 'rbmp', path: '/ko/programs/rbmp/', minText: 950, required: ['2027 운영안', '2027년 2월 12일', '2027년 2월 24일', 'JPY 200,000', '8회', '컵누들 뮤지엄'], forbidden: [] },
];

const expectedHomeLinks = ['/ko/programs/rsjp/','/ko/programs/rsjp-express/','/ko/programs/rwjp/','/ko/programs/rwjp-express/','/ko/programs/rdsp/','/ko/programs/rbmp/'];
await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
let failed = false;

for (const viewport of viewports) {
  for (const route of routes) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1, reducedMotion: 'reduce', colorScheme: 'light' });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const localResourceErrors = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) consoleErrors.push(m.text()); });
    page.on('response', (r) => { if (r.status() >= 400) { try { if (new URL(r.url()).origin === new URL(baseUrl).origin) localResourceErrors.push(`${r.status()} ${r.url()}`); } catch {} } });

    const response = await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      const images = [...document.querySelectorAll('main img')];
      images.forEach((img) => { img.loading = 'eager'; });
      const step = Math.max(480, Math.floor(innerHeight * .75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 35)); }
      scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 120));
    });

    const metrics = await page.evaluate(({ required, forbidden, routeId }) => {
      const mainText = document.querySelector('main')?.innerText || '';
      const lower = mainText.toLocaleLowerCase('ko');
      const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden'; };
      const interactives = [...document.querySelectorAll('main a[href], main button')].filter(visible);
      const smallTargets = innerWidth <= 390 ? interactives.map((el) => { const r=el.getBoundingClientRect(); return { text:(el.textContent||'').trim().slice(0,50), width:Math.round(r.width), height:Math.round(r.height) }; }).filter((x) => x.width < 44 && x.height < 44) : [];
      const tinyText = [...document.querySelectorAll('main p, main li, main dd, main a, main small')].filter(visible).map((el) => ({ text:(el.textContent||'').trim().slice(0,60), size:parseFloat(getComputedStyle(el).fontSize) })).filter((x) => x.text && x.size < 11.5);
      const h2Issues = [...document.querySelectorAll('.epd h2')].filter(visible).map((el) => { const r=el.getBoundingClientRect(); const s=getComputedStyle(el); const lh=parseFloat(s.lineHeight); return { text:(el.textContent||'').trim().slice(0,80), lines:Number.isFinite(lh)&&lh>0?Math.max(1,Math.round(r.height/lh)):1 }; }).filter((x) => x.lines > (innerWidth <= 640 ? 6 : 4));
      const links = routeId === 'home' ? [...document.querySelectorAll('a[href*="/ko/programs/"]')].map((a) => a.getAttribute('href') || '') : [];
      return {
        lang: document.documentElement.lang,
        robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
        jaAlternate: document.querySelector('link[rel="alternate"][hreflang="ja"]')?.getAttribute('href') || '',
        enAlternate: document.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href') || '',
        koAlternate: document.querySelector('link[rel="alternate"][hreflang="ko"]')?.getAttribute('href') || '',
        h1Count: document.querySelectorAll('main h1').length,
        textLength: mainText.trim().length,
        overflowX: Math.max(0, Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - innerWidth),
        requiredMissing: required.filter((t) => !lower.includes(t.toLocaleLowerCase('ko'))),
        forbiddenPresent: forbidden.filter((t) => lower.includes(t.toLocaleLowerCase('ko'))),
        unloadedImages: [...document.querySelectorAll('main img')].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src') || ''),
        smallTargets, tinyText, h2Issues, links,
      };
    }, { required: route.required, forbidden: route.forbidden, routeId: route.id });

    const linksMissing = route.id === 'home' ? expectedHomeLinks.filter((p) => !metrics.links.some((href) => href.includes(p))) : [];
    const status = response?.status() ?? 0;
    const routeFailed = status >= 400 || metrics.lang !== 'ko' || !metrics.robots.includes('noindex') || !metrics.canonical.includes(route.path) || !metrics.jaAlternate || !metrics.enAlternate || !metrics.koAlternate || metrics.h1Count !== 1 || metrics.textLength < route.minText || metrics.overflowX > 2 || metrics.requiredMissing.length || metrics.forbiddenPresent.length || metrics.unloadedImages.length || metrics.smallTargets.length || metrics.tinyText.length || metrics.h2Issues.length || linksMissing.length || pageErrors.length || consoleErrors.length || localResourceErrors.length;
    if (routeFailed) failed = true;
    const screenshot = path.join(outputDir, `${route.id}-${viewport.name}.jpg`);
    await page.screenshot({ path: screenshot, fullPage: true, type: 'jpeg', quality: 76 });
    results.push({ viewport: viewport.name, route: route.path, httpStatus: status, ...metrics, linksMissing, pageErrors, consoleErrors, localResourceErrors, screenshot, passed: !routeFailed });
    await context.close();
  }
}

await browser.close();
const summary = { generatedAt: new Date().toISOString(), total: results.length, passed: results.filter((x) => x.passed).length, failed: results.filter((x) => !x.passed).length, routes: routes.map((x) => x.path), viewports: viewports.map((x) => x.name), results };
await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(summary, null, 2));
for (const item of results) console.log(`${item.passed ? 'PASS' : 'FAIL'} ${item.viewport} ${item.route} status=${item.httpStatus} overflow=${item.overflowX}px missing=${item.requiredMissing.length} tiny=${item.tinyText.length} h2=${item.h2Issues.length} images=${item.unloadedImages.length}`);
if (failed) { console.error('Korean site-wide UAT failed. Inspect korean-site-visual-uat/report.json and screenshots.'); process.exit(1); }