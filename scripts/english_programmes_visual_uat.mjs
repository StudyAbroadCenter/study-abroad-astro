import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl=(process.env.VISUAL_BASE_URL||'http://127.0.0.1:4176').replace(/\/$/,'');
const outputDir=process.env.EN_PROGRAMMES_VISUAL_OUTPUT_DIR||'english-programmes-visual-uat';
const routes=[
  {id:'rwjp-express',route:'/en/programs/rwjp-express/',required:['Two weeks.','Make them count.','Kinugasa Campus','2 weeks']},
  {id:'rdsp',route:'/en/programs/rdsp/',required:['Go deeper.','Ask better questions.','Osaka Ibaraki Campus','Under verification']},
  {id:'rbmp',route:'/en/programs/rbmp/',required:['Study business.','See it in motion.','Ritsumeikan Business Management Program','Business and management']},
];
const viewports=[
  {name:'desktop',width:1536,height:1024},
  {name:'mobile390',width:390,height:844},
  {name:'mobile320',width:320,height:720},
];

await fs.mkdir(outputDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
let failed=false;

for(const routeDef of routes){
  for(const viewport of viewports){
    const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce',colorScheme:'light'});
    const page=await context.newPage();
    const pageErrors=[];const consoleErrors=[];const localResourceErrors=[];
    page.on('pageerror',(error)=>pageErrors.push(error.message));
    page.on('console',(message)=>{if(message.type()==='error'&&!message.text().startsWith('Failed to load resource'))consoleErrors.push(message.text());});
    page.on('response',(response)=>{if(response.status()>=400){try{if(new URL(response.url()).origin===new URL(baseUrl).origin)localResourceErrors.push(`${response.status()} ${response.url()}`);}catch{}}});
    const response=await page.goto(`${baseUrl}${routeDef.route}`,{waitUntil:'domcontentloaded',timeout:30000});
    await page.evaluate(async()=>{
      if(document.fonts?.ready)await document.fonts.ready;
      const imgs=[...document.querySelectorAll('main img')];
      imgs.forEach((img)=>img.loading='eager');
      const step=Math.max(480,Math.floor(window.innerHeight*.7));
      for(let y=0;y<document.documentElement.scrollHeight;y+=step){window.scrollTo(0,y);await new Promise((resolve)=>setTimeout(resolve,50));}
      window.scrollTo(0,0);
      await Promise.race([
        Promise.all(imgs.map(async(img)=>{if(!img.complete)await new Promise((resolve)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});});if(typeof img.decode==='function'&&img.naturalWidth>0){try{await img.decode();}catch{}}})),
        new Promise((resolve)=>setTimeout(resolve,10000)),
      ]);
      await new Promise((resolve)=>setTimeout(resolve,150));
    });

    const metrics=await page.evaluate((required)=>{
      const root=document.querySelector('.pmvp[lang="en"]');
      const bodyText=document.querySelector('main')?.innerText||'';
      const hero=document.querySelector('.pmvp__hero');
      const heroTitle=document.querySelector('.pmvp__hero h1');
      const heroLead=document.querySelector('.pmvp__hero-lead');
      const photoStack=document.querySelector('.pmvp__photo-stack');
      const settingCopy=document.querySelector('.pmvp__setting-copy');
      const detailGrid=document.querySelector('.pmvp__detail-grid');
      const rect=(el)=>el?.getBoundingClientRect()||null;
      const overlap=(a,b)=>{
        const ar=rect(a),br=rect(b);if(!ar||!br)return 0;
        return Math.round(Math.max(0,Math.min(ar.right,br.right)-Math.max(ar.left,br.left))*Math.max(0,Math.min(ar.bottom,br.bottom)-Math.max(ar.top,br.top)));
      };
      const images=[...document.querySelectorAll('main img')].map((img)=>{const r=img.getBoundingClientRect();return{src:img.getAttribute('src')||'',naturalWidth:img.naturalWidth,renderedWidth:Math.round(r.width),ratio:img.naturalWidth?Number((r.width/img.naturalWidth).toFixed(2)):999};});
      const smallText=[...document.querySelectorAll('main p,main span,main dt,main dd,main a')].map((el)=>({text:(el.textContent||'').trim().slice(0,80),size:parseFloat(getComputedStyle(el).fontSize),display:getComputedStyle(el).display})).filter((item)=>item.text&&item.display!=='none'&&item.size<10.5);
      return {
        lang:document.documentElement.lang,
        root:Boolean(root),
        overflowX:Math.max(0,Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-window.innerWidth),
        requiredPresent:required.every((text)=>bodyText.includes(text)),
        japaneseLeak:/[ぁ-んァ-ン一-龯]/.test(bodyText),
        hero:Boolean(hero),
        heroTitleLines:heroTitle?Math.round(heroTitle.getBoundingClientRect().height/parseFloat(getComputedStyle(heroTitle).lineHeight)):0,
        heroTitleLeadOverlap:overlap(heroTitle,heroLead),
        settingOverlap:overlap(photoStack,settingCopy),
        pillars:document.querySelectorAll('.pmvp__pillars article').length,
        photos:document.querySelectorAll('.pmvp__photo img').length,
        detailRows:document.querySelectorAll('.pmvp__detail-grid > div').length,
        unloadedImages:images.filter((item)=>item.naturalWidth===0),
        imageUpscaleRisk:images.filter((item)=>item.ratio>1.12),
        smallText,
        hasPolish:Boolean([...document.styleSheets].some((sheet)=>String(sheet.href||'').includes('programme-mvp-english-polish'))),
      };
    },routeDef.required);

    const status=response?.status()??0;
    const passed=status<400&&metrics.lang==='en'&&metrics.root&&metrics.overflowX<=2&&metrics.requiredPresent&&!metrics.japaneseLeak&&metrics.hero&&metrics.heroTitleLines<=4&&metrics.heroTitleLeadOverlap===0&&metrics.settingOverlap===0&&metrics.pillars===4&&metrics.photos===2&&metrics.detailRows>=4&&metrics.unloadedImages.length===0&&metrics.imageUpscaleRisk.length===0&&metrics.smallText.length===0&&pageErrors.length===0&&consoleErrors.length===0&&localResourceErrors.length===0;
    if(!passed)failed=true;
    const screenshot=path.join(outputDir,`${routeDef.id}-${viewport.name}.jpg`);
    await page.screenshot({path:screenshot,fullPage:true,type:'jpeg',quality:90});
    if(viewport.name==='desktop'){
      for(const [section,selector] of [['hero','.pmvp__hero'],['learning','.pmvp__learning'],['setting','.pmvp__setting'],['details','.pmvp__details']]){
        const locator=page.locator(selector).first();
        if(await locator.count())await locator.screenshot({path:path.join(outputDir,`${routeDef.id}-${section}-desktop.jpg`),type:'jpeg',quality:92});
      }
    }
    report.push({program:routeDef.id,viewport:viewport.name,httpStatus:status,...metrics,pageErrors,consoleErrors,localResourceErrors,screenshot,passed});
    await context.close();
  }
}

await browser.close();
await fs.writeFile(path.join(outputDir,'report.json'),JSON.stringify({generatedAt:new Date().toISOString(),report},null,2));
for(const item of report)console.log(`${item.passed?'PASS':'FAIL'} ${item.program} ${item.viewport} status=${item.httpStatus} overflow=${item.overflowX}px upscale=${item.imageUpscaleRisk.length} overlap=${item.heroTitleLeadOverlap}/${item.settingOverlap} small=${item.smallText.length}`);
if(failed){console.error('English programme MVP visual UAT failed. Inspect screenshots and report.json.');process.exit(1);}
