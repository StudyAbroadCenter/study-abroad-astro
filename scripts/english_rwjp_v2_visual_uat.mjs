import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl=(process.env.VISUAL_BASE_URL||'http://127.0.0.1:4173').replace(/\/$/,'');
const outputDir=process.env.EN_RWJP_V2_OUTPUT_DIR||'english-rwjp-v2-visual-uat';
const route='/en/programs/rwjp/';
const viewports=[
  {name:'desktop',width:1536,height:1024},
  {name:'tablet',width:768,height:1024},
  {name:'mobile390',width:390,height:844},
  {name:'mobile320',width:320,height:720},
];

await fs.mkdir(outputDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
let failed=false;

for(const viewport of viewports){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce',colorScheme:'light'});
  const page=await context.newPage();
  const pageErrors=[];const consoleErrors=[];const localResourceErrors=[];
  page.on('pageerror',(error)=>pageErrors.push(error.message));
  page.on('console',(message)=>{if(message.type()==='error'&&!message.text().startsWith('Failed to load resource'))consoleErrors.push(message.text());});
  page.on('response',(response)=>{if(response.status()>=400){try{if(new URL(response.url()).origin===new URL(baseUrl).origin)localResourceErrors.push(`${response.status()} ${response.url()}`);}catch{}}});
  const response=await page.goto(`${baseUrl}${route}`,{waitUntil:'domcontentloaded',timeout:30000});
  await page.evaluate(async()=>{
    if(document.fonts?.ready)await document.fonts.ready;
    const images=[...document.querySelectorAll('main img')];
    images.forEach((img)=>{img.loading='eager';});
    for(let y=0;y<document.documentElement.scrollHeight;y+=Math.max(480,Math.floor(innerHeight*.75))){scrollTo(0,y);await new Promise((r)=>setTimeout(r,50));}
    scrollTo(0,0);
    await Promise.race([Promise.all(images.map(async(img)=>{if(!img.complete)await new Promise((resolve)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});if(img.naturalWidth&&img.decode){try{await img.decode();}catch{}}})),new Promise((r)=>setTimeout(r,10000))]);
    await new Promise((r)=>setTimeout(r,180));
  });

  const metrics=await page.evaluate(()=>{
    const main=document.querySelector('main');
    const mainText=main?.innerText||'';
    const allImages=[...document.querySelectorAll('main img')];
    const headings=[...document.querySelectorAll('main h1,main h2,main h3')];
    const headingLevels=headings.map((h)=>Number(h.tagName.slice(1)));
    const headingSkips=headingLevels.slice(1).filter((level,i)=>level-headingLevels[i]>1).length;
    const factRows=[...document.querySelectorAll('[data-fact-row]')].map((el)=>el.getAttribute('data-fact-row'));
    const requiredFacts=['official-name','programme-dates','application-period','campus','programme-fee','japanese-study','cultural-learning','accommodation','accommodation-dates','eligibility','japanese-requirement','refund-fee'];
    const missingFacts=requiredFacts.filter((fact)=>!factRows.includes(fact));
    const interactive=[...document.querySelectorAll('main a[href],main button')];
    const smallTargets=innerWidth<=390?interactive.map((el)=>({text:(el.textContent||'').trim().slice(0,50),h:Math.round(el.getBoundingClientRect().height),w:Math.round(el.getBoundingClientRect().width)})).filter((x)=>x.h<44&&x.w<44):[];
    const textNodes=[...document.querySelectorAll('main p,main li,main dd,main a')].filter((el)=>getComputedStyle(el).display!=='none'&&!el.closest('.rw27-note'));
    const tooSmall=textNodes.map((el)=>({text:(el.textContent||'').trim().slice(0,60),size:Number.parseFloat(getComputedStyle(el).fontSize)})).filter((x)=>x.text&&x.size<12);
    const apply=document.querySelector('[data-rw27-apply]');
    const closed=document.querySelector('[data-rw27-closed]');
    const start=apply?.getAttribute('data-start')||closed?.getAttribute('data-start')||'';
    const end=apply?.getAttribute('data-end')||closed?.getAttribute('data-end')||'';
    const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
    const get=(type)=>parts.find((part)=>part.type===type)?.value||'';
    const today=`${get('year')}-${get('month')}-${get('day')}`;
    const shouldOpen=Boolean(start&&end&&today>=start&&today<=end);
    const visible=(el)=>el instanceof HTMLElement&&!el.hidden&&getComputedStyle(el).display!=='none';
    const hero=document.querySelector('.rw27-hero');
    const heroRect=hero?.getBoundingClientRect();
    const jaAlternate=document.querySelector('link[rel="alternate"][hreflang="ja"]')?.getAttribute('href')||'';
    return {
      lang:document.documentElement.lang,
      title:document.title,
      robots:document.querySelector('meta[name="robots"]')?.getAttribute('content')||'',
      canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href')||'',
      jaAlternate,
      h1Count:document.querySelectorAll('main h1').length,
      headingSkips,
      bodyLength:mainText.trim().length,
      overflowX:Math.max(0,Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-innerWidth),
      heroWidthRatio:heroRect?Number((heroRect.width/innerWidth).toFixed(3)):0,
      missingFacts,
      unloadedImages:allImages.filter((img)=>!img.complete||img.naturalWidth===0).map((img)=>img.getAttribute('src')||''),
      imageCount:allImages.length,
      japaneseLeak:/[ぁ-んァ-ン一-龯]/.test(mainText),
      staleCommute:/10\s*[–-]\s*15\s*minute/i.test(mainText),
      currentCommute:/20\s*minutes?/i.test(mainText)&&/Route\s*53/i.test(mainText),
      programmeFee:mainText.includes('JPY 370,000'),
      accommodationFee:mainText.includes('JPY 92,500'),
      refundFee:mainText.includes('JPY 54,000'),
      academicLoad:mainText.includes('57.5')&&mainText.includes('16.5')&&mainText.includes('11'),
      applicationWindow:mainText.includes('September 30, 2026')&&mainText.includes('October 14, 2026'),
      smallTargets,
      tooSmall,
      shouldOpen,
      applyVisible:visible(apply),
      closedVisible:visible(closed),
    };
  });
  const applicationStateCorrect=metrics.shouldOpen?metrics.applyVisible&&!metrics.closedVisible:!metrics.applyVisible&&metrics.closedVisible;
  const status=response?.status()??0;
  const passed=status===200&&metrics.lang==='en'&&metrics.robots==='noindex,nofollow'&&metrics.canonical.includes('/en/programs/rwjp/')&&metrics.jaAlternate.includes('/programs/rwjp/')&&metrics.h1Count===1&&metrics.headingSkips===0&&metrics.bodyLength>2600&&metrics.overflowX<=2&&metrics.heroWidthRatio>=.99&&metrics.missingFacts.length===0&&metrics.unloadedImages.length===0&&metrics.imageCount>=4&&!metrics.japaneseLeak&&!metrics.staleCommute&&metrics.currentCommute&&metrics.programmeFee&&metrics.accommodationFee&&metrics.refundFee&&metrics.academicLoad&&metrics.applicationWindow&&metrics.smallTargets.length===0&&metrics.tooSmall.length===0&&applicationStateCorrect&&pageErrors.length===0&&consoleErrors.length===0&&localResourceErrors.length===0;
  if(!passed)failed=true;
  const screenshot=path.join(outputDir,`en-rwjp-v2-${viewport.name}.jpg`);
  await page.screenshot({path:screenshot,fullPage:true,type:'jpeg',quality:88});
  report.push({viewport:viewport.name,httpStatus:status,...metrics,applicationStateCorrect,pageErrors,consoleErrors,localResourceErrors,screenshot,passed});
  console.log(`${passed?'PASS':'FAIL'} ${viewport.name} status=${status} overflow=${metrics.overflowX}px images=${metrics.imageCount} missingFacts=${metrics.missingFacts.length} staleCommute=${metrics.staleCommute} smallTargets=${metrics.smallTargets.length}`);
  await context.close();
}
await browser.close();
await fs.writeFile(path.join(outputDir,'report.json'),JSON.stringify({generatedAt:new Date().toISOString(),route,report},null,2));
if(failed){console.error('English RWJP V2 visual UAT failed. Inspect report.json and screenshots.');process.exit(1);}
