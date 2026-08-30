import fs from 'node:fs/promises';

const requirements = [
  ['src/components/RecruitmentHero.astro', ['sharedSiteImages.home.hero']],
  ['src/components/RealPhotoStory.astro', ['sharedSiteImages.home.story']],
  ['src/components/EnglishHome.astro', ['sharedSiteImages.home.hero', 'sharedSiteImages.home.story']],
  ['src/components/KoreanHome.astro', ['sharedSiteImages.home.hero', 'sharedSiteImages.home.story']],
  ['src/components/ChineseHome.astro', ['sharedSiteImages.home.hero', 'sharedSiteImages.home.story']],
  ['src/data/programs.ts', ['sharedSiteImages.programmes']],
  ['src/components/EnglishProgrammeDetail.astro', ['sharedProgramme.image']],
  ['src/components/KoreanProgrammeDetail.astro', ['sharedProgramme.image']],
  ['src/components/ChineseProgrammeDetail.astro', ['sharedProgramme.image']],
  ['src/data/rwjp-express-media.ts', ['sharedSiteImages.rwjp']],
];

const forbidden = [
  ['src/components/EnglishHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?IMG_/g],
  ['src/components/KoreanHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?IMG_/g],
  ['src/components/ChineseHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?IMG_/g],
  ['src/components/EnglishHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?programs\//g],
  ['src/components/KoreanHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?programs\//g],
  ['src/components/ChineseHome.astro', /(?:image|img)\(\s*['"](?:\/images\/)?programs\//g],
  ['src/data/programs.ts', /image:\s*['"]/g],
];

let failed = false;

for (const [file, needles] of requirements) {
  const text = await fs.readFile(file, 'utf8');
  for (const needle of needles) {
    if (!text.includes(needle)) {
      console.error(`FAIL ${file}: missing shared image reference ${needle}`);
      failed = true;
    }
  }
}

for (const [file, pattern] of forbidden) {
  const text = await fs.readFile(file, 'utf8');
  const matches = text.match(pattern);
  if (matches?.length) {
    console.error(`FAIL ${file}: found ${matches.length} hard-coded image reference(s) covered by shared image governance.`);
    failed = true;
  }
}

if (failed) {
  console.error('Shared multilingual image audit failed. Update src/data/shared-site-images.ts and consume its keys instead of adding locale-specific image paths.');
  process.exit(1);
}

console.log('PASS shared multilingual image governance');
