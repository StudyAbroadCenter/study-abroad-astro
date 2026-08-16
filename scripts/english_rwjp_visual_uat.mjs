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

const routeSource=await fs.readFile('src/pages/en/programs/rwjp/index.astro','utf8');
const componentSource=await fs.readFile('src/components/EnglishRwjp2027Page.astro','utf8');
const retiredStyles=[
  'english-rwjp.css',
  'english-rwjp-layout-fixes.css',
  'english-rwjp-art-direction.css',
  'english-rwjp-art-fixes.css',
  'english-rwjp-rebuild.css',
  'rwjp-flagship.css',
  'rwjp-professional-polish.css',
  'global-learning-evidence.css',
  'global-reach-network.css',
];
const legacyStyleReferences=retiredStyles.filter((name)=>routeSource.includes(name)||componentSource.includes(name));
const singleRebuildStyle=routeSource.includes('english-rwjp-2027.css');

await fs.mkdir(outputDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
let failed=legacyStyleReferences.length>0||!singleRebuildStyle;

for(const viewport of viewports){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce',colorScheme:'light'});
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
    const step=Math.max(480,Math.floor(window.innerHeight*.72));
    for(let y=0;y<document.documentElement.scrollHeight;y+=step){window.scrollTo(0,y);await new Promise((resolve)=>setTimeout(resolve,70));}
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
    const rgb=(value)=>{
      const match=String(value).match(/rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)/i);
      return match?{r:Number(match[1]),g:Number(match[2]),b:Number(match[3])}:null;
    };
    const luminance=(value)=>{
      const c=rgb(value); if(!c)return -1;
      return c.r*.299+c.g*.587+c.b*.114;
    };
    const overlap=(a,b)=>{
      if(!a||!b)return 0;
      const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();
      return Math.round(Math.max(0,Math.min(ar.right,br.right)-Math.max(ar.left,br.left))*Math.max(0,Math.min(ar.bottom,br.bottom)-Math.max(ar.top,br.top)));
    };
    const pair=(label,aSelector,bSelector)=>({label,px2:overlap(document.querySelector(aSelector),document.querySelector(bSelector))});
    const textOverlapChecks=[
      pair('hero-title-lead','.rw26-hero__title','.rw26-hero__lead'),
      pair('hero-lead-facts','.rw26-hero__lead','.rw26-hero__facts'),
      pair('story-title-copy','.rw26-story h2','.rw26-story > p:last-child'),
      pair('academic-load-pillars','.rw26-load__number','.rw26-pillars'),
      pair('experience-heading-copy','.rw26-section-head > div','.rw26-section-head > p'),
      pair('fit-copy-rules','.rw26-fit__lead','.rw26-fit__rules'),
      pair('dorm-copy-walk','.rw26-dorm__copy','.rw26-dorm__walk'),
      pair('dorm-walk-facts','.rw26-dorm__walk','.rw26-dorm__facts'),
      pair('global-map-panel','.rw26-global__map','.rw26-global__panel'),
      pair('global-heading-lead','.rw26-global__panel h2','.rw26-global__lead'),
      pair('global-lead-stats','.rw26-global__lead','.rw26-global__stats'),
      pair('global-stats-note','.rw26-global__stats','.rw26-global__note'),
      pair('apply-heading-copy','.rw26-apply h2','.rw26-apply__grid > div > p:last-of-type'),
    ];
    const unexpectedTextOverlaps=textOverlapChecks.filter((item)=>item.px2>0);
    const localImages=[...document.querySelectorAll('main img:not([data-rwjp-official-logo])')];
    const imageUpscaleRisk=localImages.map((img)=>{
      const rect=img.getBoundingClientRect();
      return {src:img.getAttribute('src')||'',naturalWidth:img.naturalWidth,renderedWidth:Math.round(rect.width),ratio:img.naturalWidth?Number((rect.width/img.naturalWidth).toFixed(2)):999};
    }).filter((item)=>item.ratio>1.12);
    const bodyText=document.body.innerText;
    const mainText=document.querySelector('main')?.innerText||'';
    const hero=document.querySelector('.rw26-hero');
    const heroImage=document.querySelector('.rw26-hero__image');
    const heroRect=hero?.getBoundingClientRect();
    const heroTitle=document.querySelector('.rw26-hero__title');
    const storyTitle=document.querySelector('.rw26-story h2');
    const storyNumber=document.querySelector('.rw26-load__number');
    const pillars=document.querySelector('.rw26-pillars');
    const map=document.querySelector('.rw26-global__map');
    const globalPanel=document.querySelector('.rw26-global__panel');
    const globalHeading=globalPanel?.querySelector('h2');
    const wordmark=document.querySelector('.en-header__wordmark');
    const wordmarkColor=wordmark?getComputedStyle(wordmark).color:'';
    const wordmarkRgb=rgb(wordmarkColor);
    const globalBg=globalPanel?getComputedStyle(globalPanel).backgroundColor:'';
    const globalHeadingColor=globalHeading?getComputedStyle(globalHeading).color:'';
    const officialLogo=document.querySelector('[data-rwjp-official-logo]');
    const officialLogoLoaded=officialLogo instanceof HTMLImageElement&&officialLogo.complete&&officialLogo.naturalWidth>0;
    const heroBackground=getComputedStyle(hero,'::before').backgroundImage;
    const essentialsRows=document.querySelectorAll('.rw26-essentials__list > div').length;
    const snapshotPhotos=document.querySelectorAll('.rw26-snapshots figure').length;
    return {
      lang:document.documentElement.lang,
      title:document.title,
      robots:document.querySelector('meta[name="robots"]')?.getAttribute('content')||'',
      bodyTextLength:bodyText.trim().length,
      overflowX:Math.max(0,Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-window.innerWidth),
      h1:heroTitle?.textContent?.replace(/\s+/g,' ').trim()||'',
      heroTitleSegments:heroTitle?.querySelectorAll(':scope > span').length||0,
      storyTitleSegments:storyTitle?.querySelectorAll(':scope > span').length||0,
      wordmark:wordmark?.textContent?.trim()||'',
      wordmarkColor,
      wordmarkIsRed:Boolean(wordmarkRgb&&wordmarkRgb.r>130&&wordmarkRgb.r>wordmarkRgb.g*1.8&&wordmarkRgb.r>wordmarkRgb.b*1.25),
      hero:Boolean(heroImage),
      heroWidthRatio:heroRect?Number((heroRect.width/window.innerWidth).toFixed(3)):0,
      heroNaturalWidth:heroImage instanceof HTMLImageElement?heroImage.naturalWidth:0,
      heroFushimiDeclared:heroBackground.includes('Fushimi_Inari_Torii'),
      openingSpread:Boolean(document.querySelector('.rw26-load__grid')),
      studyNumber:Boolean(storyNumber),
      cultureStat:Boolean(document.querySelector('.rw26-load__culture-stat')),
      pillars:Boolean(pillars),
      studyStatOverlapPx2:overlap(storyNumber,pillars),
      dormWalk:Boolean(document.querySelector('.rw26-dorm__walk')),
      globalReach:Boolean(document.querySelector('.rw26-global')),
      globalMap:Boolean(document.querySelector('.rw26-global__network')),
      globalMapWorld:Boolean(document.querySelector('.rw26-map-world')),
      globalBrandPin:Boolean(document.querySelector('.rw26-global__brand-pin')),
      globalBrandFallback:(document.querySelector('.rw26-global__brand-fallback')?.textContent||'').trim(),
      officialLogoLoaded,
      globalMapPanelOverlapPx2:overlap(map,globalPanel),
      globalPanelDark:luminance(globalBg)>=0&&luminance(globalBg)<115,
      globalHeadingLight:luminance(globalHeadingColor)>=180,
      evidenceValues:['293','21','81'].every((value)=>document.querySelector('.rw26-global__stats')?.textContent?.includes(value)),
      snapshotPhotos,
      essentialsRows,
      verifiedEssentials:['Program fee','Eligibility','Japanese level','Refund administration fee','Dormitory stay'].every((label)=>document.querySelector('.rw26-essentials__list')?.textContent?.includes(label)),
      taishogun:mainText.includes('Taishogun Dormitory'),
      badRomanization:/\bDaishogun\b|\bDaihogun\b/i.test(mainText),
      essentials:Boolean(document.querySelector('#essentials')),
      applySection:Boolean(document.querySelector('#apply')),
      japaneseLeak:/[ぁ-んァ-ン一-龯]/.test(mainText),
      unloadedImages:localImages.filter((img)=>!img.complete||img.naturalWidth===0).map((img)=>img.getAttribute('src')||'').filter(Boolean),
      imageUpscaleRisk,
      localImageCount:localImages.length,
      textOverlapChecks,
      unexpectedTextOverlaps,
      shouldBeOpen,
      applyVisible:apply instanceof HTMLElement?!apply.hidden:false,
      closedVisible:closed instanceof HTMLElement?!closed.hidden:false,
      headerLinks:[...document.querySelectorAll('.en-header__nav a:not(.en-header__language)')].map((a)=>a.getAttribute('href')||''),
    };
  });

  const applicationStateCorrect=metrics.shouldBeOpen?metrics.applyVisible&&!metrics.closedVisible:!metrics.applyVisible&&metrics.closedVisible;
  const headerLinksCorrect=metrics.headerLinks.every((href)=>href.includes('/en/#'));
  const mockupStructureCorrect=metrics.wordmark==='RITSUMEIKAN UNIVERSITY'&&metrics.wordmarkIsRed&&metrics.hero&&metrics.heroWidthRatio>=.99&&metrics.heroTitleSegments===2&&metrics.storyTitleSegments===3&&metrics.heroFushimiDeclared&&metrics.openingSpread&&metrics.studyNumber&&metrics.cultureStat&&metrics.pillars&&metrics.studyStatOverlapPx2===0&&metrics.dormWalk&&metrics.globalReach&&metrics.globalMap&&metrics.globalMapWorld&&metrics.globalBrandPin&&metrics.globalBrandFallback==='RITSUMEIKAN'&&metrics.globalMapPanelOverlapPx2===0&&metrics.globalPanelDark&&metrics.globalHeadingLight&&metrics.evidenceValues&&metrics.snapshotPhotos===2&&metrics.essentialsRows>=12&&metrics.verifiedEssentials;
  const status=response?.status()??0;
  const routeFailed=status>=400||metrics.lang!=='en'||!metrics.title.includes('RWJP')||metrics.robots!=='noindex,nofollow'||metrics.bodyTextLength<2200||metrics.overflowX>2||!metrics.h1.includes('Study Japanese')||!metrics.h1.includes('Live in Kyoto')||!metrics.taishogun||metrics.badRomanization||!metrics.essentials||!metrics.applySection||metrics.japaneseLeak||metrics.unloadedImages.length>0||metrics.imageUpscaleRisk.length>0||metrics.unexpectedTextOverlaps.length>0||metrics.localImageCount<7||!applicationStateCorrect||!headerLinksCorrect||!mockupStructureCorrect||pageErrors.length>0||consoleErrors.length>0||localResourceErrors.length>0;
  if(routeFailed)failed=true;

  const screenshot=path.join(outputDir,`en-rwjp-${viewport.name}.jpg`);
  await page.screenshot({path:screenshot,fullPage:true,type:'jpeg',quality:90});
  if(viewport.name==='desktop'){
    for(const [name,selector] of [['hero','.rw26-hero'],['opening','.rw26-load'],['experience','.rw26-experience'],['fit','.rw26-fit'],['dorm','.rw26-dorm'],['global','.rw26-global'],['essentials','.rw26-essentials']]){
      const element=page.locator(selector).first();
      if(await element.count())await element.screenshot({path:path.join(outputDir,`en-rwjp-${name}-desktop.jpg`),type:'jpeg',quality:92});
    }
  }
  report.push({viewport:viewport.name,httpStatus:status,...metrics,applicationStateCorrect,headerLinksCorrect,mockupStructureCorrect,pageErrors,consoleErrors,localResourceErrors,screenshot,passed:!routeFailed});
  await context.close();
}

await browser.close();
await fs.writeFile(path.join(outputDir,'report.json'),JSON.stringify({generatedAt:new Date().toISOString(),route,legacyStyleReferences,singleRebuildStyle,report},null,2));
console.log(`RWJP CSS architecture: ${singleRebuildStyle&&legacyStyleReferences.length===0?'PASS':'FAIL'} legacy=${legacyStyleReferences.join(',')||'none'}`);
for(const item of report)console.log(`${item.passed?'PASS':'FAIL'} ${item.viewport} status=${item.httpStatus} overflow=${item.overflowX}px upscale=${item.imageUpscaleRisk.length} textOverlap=${item.unexpectedTextOverlaps.length} photos=${item.localImageCount} essentials=${item.essentialsRows} officialLogo=${item.officialLogoLoaded?'loaded':'fallback'} hero=${item.heroWidthRatio} globalDark=${item.globalPanelDark}`);
if(failed){console.error('English RWJP visual UAT failed. Inspect english-rwjp-visual-uat/report.json and screenshots.');process.exit(1);}
