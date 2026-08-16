import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl=(process.env.VISUAL_BASE_URL||'http://127.0.0.1:4175').replace(/\/$/,'');
const outputDir=process.env.EN_RWJP_VISUAL_OUTPUT_DIR||'english-rwjp-visual-uat';
const route='/en/programs/rwjp/';
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
  const response=await page.goto(`${baseUrl}${route}`,{waitUntil:'domcontentloaded',timeout:30000});

  await page.evaluate(async()=>{
    if(document.fonts?.ready)await document.fonts.ready;
    const imgs=[...document.querySelectorAll('img')];
    imgs.forEach((img)=>{img.loading='eager';});
    const step=Math.max(480,Math.floor(window.innerHeight*.75));
    for(let y=0;y<document.documentElement.scrollHeight;y+=step){window.scrollTo(0,y);await new Promise((resolve)=>setTimeout(resolve,80));}
    window.scrollTo(0,0);
    await Promise.race([
      Promise.all(imgs.map(async(img)=>{
        if(!img.complete){await new Promise((resolve)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});}
        if(typeof img.decode==='function'&&img.naturalWidth>0){try{await img.decode();}catch{}}
      })),
      new Promise((resolve)=>setTimeout(resolve,12000)),
    ]);
    await new Promise((resolve)=>setTimeout(resolve,300));
  });

  const metrics=await page.evaluate(()=>{
    const apply=document.querySelector('[data-rwjp-en-apply]');
    const closed=document.querySelector('[data-rwjp-en-closed]');
    const start=apply?.getAttribute('data-start')||closed?.getAttribute('data-start')||'';
    const end=apply?.getAttribute('data-end')||closed?.getAttribute('data-end')||'';
    const jstToday=new Date(Date.now()+9*60*60*1000).toISOString().slice(0,10);
    const shouldBeOpen=Boolean(start&&end&&jstToday>=start&&jstToday<=end);
    const imageUpscaleRisk=[...document.querySelectorAll('main img')].map((img)=>{
      const rect=img.getBoundingClientRect();
      const dpr=window.devicePixelRatio||1;
      return {src:img.getAttribute('src')||'',naturalWidth:img.naturalWidth,renderedDeviceWidth:Math.round(rect.width*dpr),ratio:img.naturalWidth?Number((rect.width*dpr/img.naturalWidth).toFixed(2)):999};
    }).filter((item)=>item.ratio>1.12);
    const bodyText=document.body.innerText;
    return {
      lang:document.documentElement.lang,
      title:document.title,
      robots:document.querySelector('meta[name="robots"]')?.getAttribute('content')||'',
      bodyText:bodyText.trim().length,
      overflowX:Math.max(0,Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-window.innerWidth),
      h1:document.querySelector('.en-rwjp-cinematic-hero h1')?.textContent?.replace(/\s+/g,' ').trim()||'',
      hero:Boolean(document.querySelector('.en-rwjp-cinematic-hero__image')),
      globalReach:Boolean(document.querySelector('#global-reach .global-evidence__network')),
      taishogun:bodyText.includes('Taishogun Dormitory'),
      badRomanization:/\bDaishogun\b|\bDaihogun\b/i.test(bodyText),
      essentials:Boolean(document.querySelector('#essentials')),
      applySection:Boolean(document.querySelector('#apply')),
      japaneseLeak:[...document.querySelectorAll('main *')].map((el)=>el.textContent||'').find((text)=>/[ぁ-んァ-ン一-龯]/.test(text))||'',
      unloadedImages:[...document.querySelectorAll('main img')].filter((img)=>!img.complete||img.naturalWidth===0).map((img)=>img.getAttribute('src')||'').filter(Boolean),
      imageUpscaleRisk,
      shouldBeOpen,
      applyVisible:apply instanceof HTMLElement?!apply.hidden:false,
      closedVisible:closed instanceof HTMLElement?!closed.hidden:false,
      headerLinks:[...document.querySelectorAll('.en-header__nav a:not(.en-header__language)')].map((a)=>a.getAttribute('href')||''),
    };
  });

  const applicationStateCorrect=metrics.shouldBeOpen?metrics.applyVisible&&!metrics.closedVisible:!metrics.applyVisible&&metrics.closedVisible;
  const headerLinksCorrect=metrics.headerLinks.every((href)=>href.includes('/en/#'));
  const status=response?.status()??0;
  const routeFailed=status>=400||metrics.lang!=='en'||!metrics.title.includes('RWJP')||metrics.robots!=='noindex,nofollow'||metrics.bodyText<1500||metrics.overflowX>2||!metrics.h1.includes('Study Japanese')||!metrics.h1.includes('Live in Kyoto')||!metrics.hero||!metrics.globalReach||!metrics.taishogun||metrics.badRomanization||!metrics.essentials||!metrics.applySection||Boolean(metrics.japaneseLeak)||metrics.unloadedImages.length>0||metrics.imageUpscaleRisk.length>0||!applicationStateCorrect||!headerLinksCorrect||pageErrors.length>0||consoleErrors.length>0||localResourceErrors.length>0;
  if(routeFailed)failed=true;
  const screenshot=path.join(outputDir,`en-rwjp-${viewport.name}.jpg`);
  await page.screenshot({path:screenshot,fullPage:true,type:'jpeg',quality:82});
  report.push({viewport:viewport.name,httpStatus:status,...metrics,applicationStateCorrect,headerLinksCorrect,pageErrors,consoleErrors,localResourceErrors,screenshot,passed:!routeFailed});
  await context.close();
}

await browser.close();
await fs.writeFile(path.join(outputDir,'report.json'),JSON.stringify({generatedAt:new Date().toISOString(),route,report},null,2));
for(const item of report)console.log(`${item.passed?'PASS':'FAIL'} ${item.viewport} ${route} status=${item.httpStatus} overflowX=${item.overflowX}px images=${item.unloadedImages.length} upscaleRisk=${item.imageUpscaleRisk.length} globe=${item.globalReach} taishogun=${item.taishogun}`);
if(failed){console.error('English RWJP visual UAT failed. Inspect english-rwjp-visual-uat/report.json and screenshots.');process.exit(1);}
