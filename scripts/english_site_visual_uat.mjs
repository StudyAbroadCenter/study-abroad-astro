import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = (process.env.VISUAL_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const outputDir = process.env.EN_SITE_OUTPUT_DIR || 'english-site-visual-uat';
const viewports = [
  { name: 'desktop', width: 1536, height: 1024 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile390', width: 390, height: 844 },
  { name: 'mobile320', width: 320, height: 720 },
];

const routes = [
  { id: 'home', path: '/en/', minText: 1200, required: ['Study beyond', 'Ritsumeikan Summer Japanese Program', 'RSJP Express', 'Ritsumeikan Winter Japanese Program', 'RWJP Express', 'RDSP', 'Ritsumeikan Business Management Program'], forbidden: [] },
  { id: 'rsjp', path: '/en/programs/rsjp/', minText: 1300, required: ['Annual details pending verification', 'Ritsumeikan Summer Japanese Program', 'Kinugasa Campus, Kyoto', 'Published after verification'], forbidden: ['JPY 370,000', 'JPY 200,000', 'Start the application'] },
  { id: 'rsjp-express', path: '/en/programs/rsjp-express/', minText: 1300, required: ['Annual details pending verification', 'RSJP Express', 'Kinugasa Campus, Kyoto', 'Published after verification'], forbidden: ['JPY 370,000', 'JPY 200,000', 'Start the application'] },
  { id: 'rwjp', path: '/en/programs/rwjp/', minText: 1800, required: ['January 12, 2027', 'February 11, 2027', 'JPY 370,000', '57.5', '16.5', '11 sessions', 'JPY 92,500', '20 minutes', 'Route 53', 'JPY 54,000', 'September 30, 2026', 'October 14, 2026'], forbidden: ['10–15 minute', '10-15 minute'] },
  { id: 'rwjp-express', path: '/en/programs/rwjp-express/', minText: 1500, required: ['2027 core information confirmed', 'February 16, 2027', 'February 26, 2027', '22.5 hours', '360 minutes', 'Convera', 'JPY 27,000', 'Taishogun Dormitory'], forbidden: ['JPY 370,000', 'September 30, 2026', 'October 14, 2026'] },
  { id: 'rdsp', path: '/en/programs/rdsp/', minText: 1500, required: ['Current working plan', 'AI', 'Data Science', 'Robotics', '570 minutes', '190 minutes', 'Microsoft Base Ritsumeikan', 'Osaka Ibaraki Campus'], forbidden: ['Ritsumeikan Data Science Program', 'JPY 200,000'] },
  { id: 'rbmp', path: '/en/programs/rbmp/', minText: 1600, required: ['2027 working plan', 'February 12, 2027', 'February 24, 2027', 'JPY 200,000', '8 planned', 'Microsoft Base', 'Cup Noodles Museum', 'External accommodation arranged by participant'], forbidden: ['Applications are open', 'Start the application'] },
];

const expectedHomeLinks = [
  '/en/programs/rsjp/',
  '/en/programs/rsjp-express/',
  '/en/programs/rwjp/',
  '/en/programs/rwjp-express/',
  '/en/programs/rdsp/',
  '/en/programs/rbmp/',
];

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
let failed = false;

for (const viewport of viewports) {
  for (const route of routes) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
      colorScheme: 'light',
    });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const localResourceErrors = [];

    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) {
        consoleErrors.push(message.text());
      }
    });
    page.on('response', (response) => {
      if (response.status() < 400) return;
      try {
        if (new URL(response.url()).origin === new URL(baseUrl).origin) {
          localResourceErrors.push(`${response.status()} ${response.url()}`);
        }
      } catch {}
    });

    const response = await page.goto(`${baseUrl}${route.path}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      const images = [...document.querySelectorAll('main img')];
      images.forEach((img) => { img.loading = 'eager'; });
      const step = Math.max(480, Math.floor(innerHeight * 0.75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 45));
      }
      scrollTo(0, 0);
      await Promise.race([
        Promise.all(images.map(async (img) => {
          if (!img.complete) {
            await new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            });
          }
          if (img.naturalWidth && img.decode) {
            try { await img.decode(); } catch {}
          }
        })),
        new Promise((resolve) => setTimeout(resolve, 10000)),
      ]);
      await new Promise((resolve) => setTimeout(resolve, 160));
    });

    const metrics = await page.evaluate(({ routeId, required, forbidden }) => {
      const main = document.querySelector('main');
      const mainText = main?.innerText || '';
      const mainTextLower = mainText.toLocaleLowerCase();
      const headings = [...document.querySelectorAll('main h1, main h2, main h3')];
      const levels = headings.map((heading) => Number(heading.tagName.slice(1)));
      const headingSkips = levels.slice(1).filter((level, index) => level - levels[index] > 1).length;

      const visibleInteractive = [...document.querySelectorAll('main a[href], main button')].filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
      });
      const smallTargets = innerWidth <= 390
        ? visibleInteractive
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return {
                text: (element.textContent || '').trim().slice(0, 60),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
              };
            })
            .filter((item) => item.width < 44 && item.height < 44)
        : [];

      const textNodes = [...document.querySelectorAll('main p, main li, main dd, main a, main small')].filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
      });
      const tooSmall = textNodes
        .map((element) => ({
          text: (element.textContent || '').trim().slice(0, 70),
          size: Number.parseFloat(getComputedStyle(element).fontSize),
        }))
        .filter((item) => item.text && item.size < 11.5);

      const detailLinks = routeId === 'home'
        ? [...document.querySelectorAll('[data-en-programme-link]')].map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              id: element.getAttribute('data-en-programme-link') || '',
              href: element.getAttribute('href') || '',
              rect: { width: Math.round(rect.width), height: Math.round(rect.height) },
            };
          })
        : [];

      return {
        lang: document.documentElement.lang,
        robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
        jaAlternate: document.querySelector('link[rel="alternate"][hreflang="ja"]')?.getAttribute('href') || '',
        h1Count: document.querySelectorAll('main h1').length,
        headingSkips,
        textLength: mainText.trim().length,
        overflowX: Math.max(0, Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - innerWidth),
        requiredMissing: required.filter((text) => !mainTextLower.includes(text.toLocaleLowerCase())),
        forbiddenPresent: forbidden.filter((text) => mainTextLower.includes(text.toLocaleLowerCase())),
        unloadedImages: [...document.querySelectorAll('main img')]
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute('src') || ''),
        smallTargets,
        tooSmall,
        detailLinks,
        japaneseLeak: [...document.querySelectorAll('main *')]
          .map((element) => element.textContent || '')
          .find((text) => /[ぁ-んァ-ン一-龯]/.test(text)) || '',
      };
    }, { routeId: route.id, required: route.required, forbidden: route.forbidden });

    const homeLinkPaths = metrics.detailLinks.map((link) => link.href);
    const homeLinksMissing = route.id === 'home'
      ? expectedHomeLinks.filter((expected) => !homeLinkPaths.some((href) => href.includes(expected)))
      : [];
    const homeSmallLinks = route.id === 'home' && viewport.width <= 390
      ? metrics.detailLinks.filter((link) => link.rect.width < 44 && link.rect.height < 44)
      : [];
    const status = response?.status() ?? 0;

    const routeFailed =
      status >= 400 ||
      metrics.lang !== 'en' ||
      !metrics.robots.includes('noindex') ||
      !metrics.canonical.includes(route.path) ||
      !metrics.jaAlternate ||
      metrics.h1Count !== 1 ||
      metrics.headingSkips > 0 ||
      metrics.textLength < route.minText ||
      metrics.overflowX > 2 ||
      metrics.requiredMissing.length > 0 ||
      metrics.forbiddenPresent.length > 0 ||
      metrics.unloadedImages.length > 0 ||
      metrics.smallTargets.length > 0 ||
      metrics.tooSmall.length > 0 ||
      Boolean(metrics.japaneseLeak) ||
      homeLinksMissing.length > 0 ||
      homeSmallLinks.length > 0 ||
      pageErrors.length > 0 ||
      consoleErrors.length > 0 ||
      localResourceErrors.length > 0;

    if (routeFailed) failed = true;
    const screenshot = path.join(outputDir, `${route.id}-${viewport.name}.jpg`);
    await page.screenshot({ path: screenshot, fullPage: true, type: 'jpeg', quality: 76 });
    results.push({
      viewport: viewport.name,
      route: route.path,
      id: route.id,
      httpStatus: status,
      ...metrics,
      homeLinksMissing,
      homeSmallLinks,
      pageErrors,
      consoleErrors,
      localResourceErrors,
      screenshot,
      passed: !routeFailed,
    });
    await context.close();
  }
}

await browser.close();
const summary = {
  generatedAt: new Date().toISOString(),
  total: results.length,
  passed: results.filter((item) => item.passed).length,
  failed: results.filter((item) => !item.passed).length,
  routes: routes.map((route) => route.path),
  viewports: viewports.map((viewport) => viewport.name),
  results,
};
await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(summary, null, 2));

for (const item of results) {
  console.log(`${item.passed ? 'PASS' : 'FAIL'} ${item.viewport} ${item.route} status=${item.httpStatus} overflow=${item.overflowX}px missing=${item.requiredMissing.length} forbidden=${item.forbiddenPresent.length} smallTargets=${item.smallTargets.length} tiny=${item.tooSmall.length} images=${item.unloadedImages.length}`);
}

if (failed) {
  console.error('English site-wide UAT failed. Inspect english-site-visual-uat/report.json and screenshots.');
  process.exit(1);
}
