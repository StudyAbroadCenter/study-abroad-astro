import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = (process.env.VISUAL_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const baseOrigin = new URL(baseUrl).origin;
const outputDir = process.env.VISUAL_OUTPUT_DIR || 'visual-uat';

const routes = [
  ['home', '/'],
  ['programs', '/programs/'],
  ['rsjp', '/programs/rsjp/'],
  ['rsjp-express', '/programs/rsjp-express/'],
  ['rwjp', '/programs/rwjp/'],
  ['rwjp-express', '/programs/rwjp-express/'],
  ['rdsp', '/programs/rdsp/'],
  ['rbmp', '/programs/rbmp/'],
  ['custom-programs', '/programs/custom-programs/'],
  ['about', '/about/'],
  ['faq', '/faq/'],
  ['contact', '/contact/'],
];

const viewports = [
  { name: 'desktop', width: 1536, height: 1024, allRoutes: true },
  { name: 'mobile390', width: 390, height: 844, allRoutes: false },
  { name: 'mobile320', width: 320, height: 720, allRoutes: false },
];

const mobileCritical = new Set([
  'home',
  'programs',
  'rsjp',
  'rwjp',
  'rwjp-express',
  'rdsp',
  'custom-programs',
  'faq',
  'contact',
]);

const classifyUrl = (rawUrl) => {
  try {
    return new URL(rawUrl).origin === baseOrigin ? 'local' : 'external';
  } catch {
    return 'unknown';
  }
};

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const report = [];
let failed = false;

for (const viewport of viewports) {
  const selectedRoutes = viewport.allRoutes ? routes : routes.filter(([name]) => mobileCritical.has(name));
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    reducedMotion: 'reduce',
    colorScheme: 'light',
  });

  for (const [name, route] of selectedRoutes) {
    const page = await context.newPage();
    const url = `${baseUrl}${route}`;
    const pageErrors = [];
    const consoleErrors = [];
    const localResourceErrors = [];
    const externalResourceWarnings = [];

    page.on('pageerror', (error) => pageErrors.push(error.message));

    page.on('console', (message) => {
      if (message.type() !== 'error') return;
      const text = message.text();
      if (!text.startsWith('Failed to load resource')) consoleErrors.push(text);
    });

    page.on('response', (response) => {
      if (response.status() < 400) return;
      const entry = `${response.status()} ${response.url()}`;
      if (classifyUrl(response.url()) === 'local') localResourceErrors.push(entry);
      else externalResourceWarnings.push(entry);
    });

    page.on('requestfailed', (request) => {
      const entry = `${request.failure()?.errorText || 'request failed'} ${request.url()}`;
      if (classifyUrl(request.url()) === 'local') localResourceErrors.push(entry);
      else externalResourceWarnings.push(entry);
    });

    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      const images = [...document.querySelectorAll('img[loading="lazy"]')];
      images.forEach((img) => { img.loading = 'eager'; });
      const imageReady = Promise.all(images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      }));
      await Promise.race([
        imageReady,
        new Promise((resolve) => window.setTimeout(resolve, 5000)),
      ]);
    });
    await page.waitForTimeout(350);

    const metrics = await page.evaluate(() => {
      const root = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(root.scrollWidth, body?.scrollWidth || 0);
      const overflowX = Math.max(0, scrollWidth - window.innerWidth);

      const visible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
      };

      const describe = (element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id || '',
          className: typeof element.className === 'string' ? element.className.slice(0, 180) : '',
          text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120),
          left: Math.round(rect.left * 10) / 10,
          right: Math.round(rect.right * 10) / 10,
          width: Math.round(rect.width * 10) / 10,
        };
      };

      const overflowOffenders = overflowX > 2
        ? [...document.querySelectorAll('body *')]
            .filter(visible)
            .filter((element) => {
              const rect = element.getBoundingClientRect();
              return rect.left < -2 || rect.right > window.innerWidth + 2;
            })
            .map(describe)
            .sort((a, b) => Math.max(Math.abs(b.left), b.right - window.innerWidth) - Math.max(Math.abs(a.left), a.right - window.innerWidth))
            .slice(0, 25)
        : [];

      const headingWarnings = [...document.querySelectorAll('main h1, main h2')]
        .filter(visible)
        .map((element) => {
          const style = getComputedStyle(element);
          const lineHeight = Number.parseFloat(style.lineHeight);
          const rect = element.getBoundingClientRect();
          const lines = Number.isFinite(lineHeight) && lineHeight > 0 ? rect.height / lineHeight : 0;
          return {
            text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120),
            lines: Math.round(lines * 10) / 10,
          };
        })
        .filter((item) => item.lines > 4.1);

      const tinyTextWarnings = [...document.querySelectorAll('main p, main li, main dd, main summary, main a, main button')]
        .filter(visible)
        .filter((element) => !element.closest('.rwjpx__phone, .rwjpx__feed, .global-evidence__network'))
        .map((element) => ({
          text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100),
          size: Number.parseFloat(getComputedStyle(element).fontSize),
        }))
        .filter((item) => item.text && item.size < 12)
        .slice(0, 25);

      return {
        title: document.title,
        lang: document.documentElement.lang,
        overflowX,
        scrollWidth,
        viewportWidth: window.innerWidth,
        overflowOffenders,
        headingWarnings,
        tinyTextWarnings,
      };
    });

    const screenshotPath = path.join(outputDir, `${name}-${viewport.name}.jpg`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      type: 'jpeg',
      quality: 72,
    });

    const status = response?.status() ?? 0;
    const routeFailed =
      status >= 400 ||
      metrics.overflowX > 2 ||
      pageErrors.length > 0 ||
      consoleErrors.length > 0 ||
      localResourceErrors.length > 0;
    if (routeFailed) failed = true;

    report.push({
      name,
      route,
      viewport: viewport.name,
      width: viewport.width,
      height: viewport.height,
      httpStatus: status,
      ...metrics,
      pageErrors,
      consoleErrors,
      localResourceErrors: [...new Set(localResourceErrors)],
      externalResourceWarnings: [...new Set(externalResourceWarnings)],
      screenshot: screenshotPath,
      passed: !routeFailed,
    });

    await page.close();
  }

  await context.close();
}

await browser.close();

await fs.writeFile(
  path.join(outputDir, 'report.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), baseUrl, report }, null, 2),
  'utf8',
);

for (const item of report) {
  const mark = item.passed ? 'PASS' : 'FAIL';
  console.log(`${mark} ${item.viewport.padEnd(9)} ${item.route.padEnd(28)} status=${item.httpStatus} overflowX=${item.overflowX}px headings>4=${item.headingWarnings.length} tiny<12=${item.tinyTextWarnings.length}`);
  if (item.pageErrors.length) item.pageErrors.forEach((error) => console.log(`  pageerror: ${error}`));
  if (item.consoleErrors.length) item.consoleErrors.forEach((error) => console.log(`  console: ${error}`));
  if (item.localResourceErrors.length) item.localResourceErrors.forEach((error) => console.log(`  local-resource: ${error}`));
  if (item.overflowOffenders.length) item.overflowOffenders.slice(0, 5).forEach((entry) => console.log(`  overflow: <${entry.tag}> .${entry.className} left=${entry.left} right=${entry.right} width=${entry.width} ${entry.text}`));
  if (item.externalResourceWarnings.length) console.log(`  external warnings: ${item.externalResourceWarnings.length}`);
}

if (failed) {
  console.error('Japanese visual UAT smoke failed. Inspect visual-uat/report.json and screenshots.');
  process.exit(1);
}
