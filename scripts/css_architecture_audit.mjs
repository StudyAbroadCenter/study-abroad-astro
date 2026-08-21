import fs from 'node:fs/promises';

const checks = [];
let failed = false;

const read = async (filePath) => fs.readFile(filePath, 'utf8');
const imports = (source) =>
  [...source.matchAll(/import\s+['"]([^'"]+\.css)['"]/g)].map((match) => match[1]);

const shell = await read('src/components/EnglishPageLayout.astro');
const rwjpRoute = await read('src/pages/en/programs/rwjp/index.astro');
const genericComponent = await read('src/components/EnglishProgrammeDetail.astro');
const genericRoutes = await Promise.all(
  ['rsjp', 'rsjp-express', 'rwjp-express', 'rdsp', 'rbmp'].map((id) =>
    read(`src/pages/en/programs/${id}/index.astro`),
  ),
);
const legacyLayout = await read('src/components/Layout.astro');
const legacyEnglishHome = await read('src/components/EnglishStudentRecruitmentLayout.astro');

const shellImports = imports(shell);
const rwjpImports = imports(rwjpRoute);
const genericComponentImports = imports(genericComponent);
const genericRouteImports = genericRoutes.flatMap(imports);
const legacyImports = imports(legacyLayout);
const homeImports = imports(legacyEnglishHome);

const newArchitectureImports = [
  ...shellImports,
  ...rwjpImports,
  ...genericComponentImports,
  ...genericRouteImports,
];
const forbiddenPattern = /(fix|tuning|polish|reference|approved|rebuild)/i;
const forbiddenNew = newArchitectureImports.filter((item) => forbiddenPattern.test(item));
const forbiddenLegacy = newArchitectureImports.filter((item) =>
  /(japanese|global\.css|prospectus|sample)/i.test(item),
);

const assert = (name, condition, detail) => {
  checks.push({ name, passed: Boolean(condition), detail });
  if (!condition) failed = true;
};

assert(
  'English detail shell has one CSS entry',
  shellImports.length === 1 && shellImports[0].endsWith('english-shell.css'),
  shellImports,
);
assert(
  'RWJP flagship keeps one dedicated page CSS entry',
  rwjpImports.length === 1 && rwjpImports[0].endsWith('english-rwjp-2027-v2.css'),
  rwjpImports,
);
assert(
  'Five additional English program routes import no page-specific CSS',
  genericRouteImports.length === 0,
  genericRouteImports,
);
assert(
  'Shared English program detail component has one CSS entry',
  genericComponentImports.length === 1 && genericComponentImports[0].endsWith('english-programme-detail.css'),
  genericComponentImports,
);
assert(
  'New English architecture imports no tuning/fix/rebuild layers',
  forbiddenNew.length === 0,
  forbiddenNew,
);
assert(
  'New English detail architecture imports no Japanese/global legacy CSS',
  forbiddenLegacy.length === 0,
  forbiddenLegacy,
);

const report = {
  generatedAt: new Date().toISOString(),
  checks,
  englishDetailArchitecture: {
    shellCss: shellImports,
    rwjpCss: rwjpImports,
    sharedProgrammeCss: genericComponentImports,
    genericRouteCss: genericRouteImports,
  },
  legacyDebt: {
    sharedLayoutCssImports: legacyImports.length,
    englishHomeCssImports: homeImports.length,
    sharedLayoutImports: legacyImports,
    englishHomeImports: homeImports,
    note: 'Legacy counts are reported, not failed. The Japanese Master remains fixed, and the visually stable English home is preserved while all six detail destinations use isolated architecture.',
  },
};

await fs.mkdir('audit-output', { recursive: true });
await fs.writeFile('audit-output/css-architecture.json', JSON.stringify(report, null, 2));

for (const check of checks) {
  console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}: ${JSON.stringify(check.detail)}`);
}
console.log(`LEGACY DEBT shared=${legacyImports.length} EnglishHome=${homeImports.length}`);

if (failed) process.exit(1);
