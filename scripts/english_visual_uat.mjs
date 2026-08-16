import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl=(process.env.VISUAL_BASE_URL||'http://127.0.0.1:4173').replace(/\/$/,'');
const outputDir=process.env.EN_VISUAL_OUTPUT_DIR||'english-visual-uat';
const viewports=[
  {name:'desktop',width:1536,height:1024},
  {name:'mobile390',width:390,height:844},
  {name:'mobile320',width:320,height:720},
];
await fs.mkdir(outputDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
let failed=false;
for(const viewport of viewports){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},reducedMotion:'reduce',colorScheme:'light'});
  const page=await context.newPage();
  const pageErrors=[]; const consoleErrors=[]; const localResourceErrors=[];
  page.on('pageerror',(error)=>pageErrors.push(error.message));
  page.on('console',(message)=>{if(message.type()==='error'&&!message.text().startsWith('Failed to load resource'))consoleErrors.push(message.text());});
  page.on('response',(response)=>{if(response.status()>=400){try{if(new URL(response.url()).origin===new URL(baseUrl).origin)localResourceErrors.push(`${response.status()} ${response.url()}`);}catch{}}});
  const response=await page.goto(`${baseUrl}/en/`,{waitUntil:'domcontentloaded',timeout:30000});
  await page.evaluate(async()=>{if(document.fonts?.ready)await document.fonts.ready;const imgs=[...document.querySelectorAll('img')];await Promise.race([Promise.all(imgs.map((img)=>img.complete?Promise.resolve():new Promise((resolve)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});}))),new Promise((resolve)=>setTimeout(resolve,5000))]);});
  const metrics=await page.evaluate(()=>({
    lang:document.documentElement.lang,
    title:document.title,
    bodyText:document.body.innerText.trim().length,
    overflowX:Math.max(0,Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-window.innerWidth),
    hero:document.querySelector('#en-hero-title')?.textContent?.trim()||'',
    finder:document.querySelector('#en-finder-title')?.textContent?.trim()||'',
    japaneseLeak:[...document.querySelectorAll('main *')].map((el)=>el.textContent||'').find((text)=>/[ぁ-んァ-ン一-龯]/.test(text))||'',
  }));
  const status=response?.status()??0;
  const routeFailed=status>=400||metrics.lang!=='en'||metrics.bodyText<500||metrics.overflowX>2||!metrics.hero||!metrics.finder||Boolean(metrics.japaneseLeak)||pageErrors.length>0||consoleErrors.length>0||localResourceErrors.length>0;
  if(routeFailed)failed=true;
  const screenshot=path.join(outputDir,`en-home-${viewport.name}.jpg`);
  await page.screenshot({path:screenshot,fullPage:true,type:'jpeg',quality:75});
  report.push({viewport:viewport.name,httpStatus:status,...metrics,pageErrors,consoleErrors,localResourceErrors,screenshot,passed:!routeFailed});
  await context.close();
}
await browser.close();
await fs.writeFile(path.join(outputDir,'report.json'),JSON.stringify({generatedAt:new Date().toISOString(),report},null,2));
for(const item of report)console.log(`${item.passed?'PASS':'FAIL'} ${item.viewport} /en/ status=${item.httpStatus} overflowX=${item.overflowX}px lang=${item.lang}`);
if(failed){console.error('English home visual UAT failed. Inspect english-visual-uat/report.json and screenshots.');process.exit(1);}
