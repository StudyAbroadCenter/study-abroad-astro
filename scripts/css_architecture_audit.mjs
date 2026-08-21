import fs from 'node:fs/promises';

const checks=[];
let failed=false;
const read=async(path)=>fs.readFile(path,'utf8');
const imports=(source)=>[...source.matchAll(/import\s+['"]([^'"]+\.css)['"]/g)].map((match)=>match[1]);

const shell=await read('src/components/EnglishPageLayout.astro');
const route=await read('src/pages/en/programs/rwjp/index.astro');
const legacyLayout=await read('src/components/Layout.astro');
const legacyEnglishHome=await read('src/components/EnglishStudentRecruitmentLayout.astro');
const shellImports=imports(shell);
const routeImports=imports(route);
const legacyImports=imports(legacyLayout);
const homeImports=imports(legacyEnglishHome);
const forbiddenPattern=/(fix|tuning|polish|reference|approved|rebuild)/i;
const forbiddenNew=[...shellImports,...routeImports].filter((item)=>forbiddenPattern.test(item));

const assert=(name,condition,detail)=>{checks.push({name,passed:Boolean(condition),detail});if(!condition)failed=true;};
assert('English detail shell has one CSS entry',shellImports.length===1&&shellImports[0].endsWith('english-shell.css'),shellImports);
assert('RWJP route has one page CSS entry',routeImports.length===1&&routeImports[0].endsWith('english-rwjp-2027-v2.css'),routeImports);
assert('New English architecture imports no tuning/fix/rebuild layers',forbiddenNew.length===0,forbiddenNew);
assert('New English route does not import Japanese/global legacy CSS',![...shellImports,...routeImports].some((item)=>/(japanese|global\.css|prospectus|sample)/i.test(item)),[...shellImports,...routeImports]);

const report={generatedAt:new Date().toISOString(),checks,legacyDebt:{sharedLayoutCssImports:legacyImports.length,englishHomeCssImports:homeImports.length,sharedLayoutImports:legacyImports,englishHomeImports:homeImports,note:'Legacy counts are reported, not failed, because the Japanese Master is FIXED and the existing English home requires visual-preserving migration. New localised detail routes are gated against this pattern.'}};
await fs.mkdir('audit-output',{recursive:true});
await fs.writeFile('audit-output/css-architecture.json',JSON.stringify(report,null,2));
for(const check of checks)console.log(`${check.passed?'PASS':'FAIL'} ${check.name}: ${JSON.stringify(check.detail)}`);
console.log(`LEGACY DEBT shared=${legacyImports.length} EnglishHome=${homeImports.length}`);
if(failed)process.exit(1);
