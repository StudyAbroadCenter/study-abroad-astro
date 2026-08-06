import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = path.join(root, 'public', 'images');
const outputDirectory = path.join(sourceDirectory, 'optimized');

const sourceFiles = [
  'IMG_1656.JPG',
  'IMG_8178.JPG',
  'IMG_1588.JPG',
  'IMG_5092.JPG',
  'IMG_1687.JPG',
  'IMG_3725.JPG',
];

const variants = [
  { width: 640, quality: 72 },
  { width: 960, quality: 74 },
  { width: 1280, quality: 76 },
  { width: 1920, quality: 78 },
];

const isCurrent = async (source, output) => {
  try {
    const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)]);
    return outputStats.mtimeMs >= sourceStats.mtimeMs;
  } catch {
    return false;
  }
};

await mkdir(outputDirectory, { recursive: true });

for (const sourceFile of sourceFiles) {
  const source = path.join(sourceDirectory, sourceFile);
  const stem = path.parse(sourceFile).name;

  for (const variant of variants) {
    const output = path.join(outputDirectory, `${stem}-${variant.width}.webp`);

    if (await isCurrent(source, output)) {
      console.log(`current ${path.relative(root, output)}`);
      continue;
    }

    await sharp(source, { failOn: 'warning' })
      .rotate()
      .resize({
        width: variant.width,
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({
        quality: variant.quality,
        effort: 5,
        smartSubsample: true,
      })
      .toFile(output);

    console.log(`generated ${path.relative(root, output)}`);
  }
}
