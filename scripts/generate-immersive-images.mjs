import { mkdir, stat, writeFile } from 'node:fs/promises';
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

const manifest = {
  generatedAt: new Date().toISOString(),
  format: 'webp',
  sources: {},
  assets: [],
};

let totalOutputBytes = 0;

for (const sourceFile of sourceFiles) {
  const source = path.join(sourceDirectory, sourceFile);
  const stem = path.parse(sourceFile).name;
  const sourceStats = await stat(source);
  manifest.sources[sourceFile] = { bytes: sourceStats.size };

  for (const variant of variants) {
    const outputFile = `${stem}-${variant.width}.webp`;
    const output = path.join(outputDirectory, outputFile);

    if (await isCurrent(source, output)) {
      console.log(`current ${path.relative(root, output)}`);
    } else {
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

    const [outputStats, metadata] = await Promise.all([stat(output), sharp(output).metadata()]);
    totalOutputBytes += outputStats.size;
    manifest.assets.push({
      source: sourceFile,
      file: outputFile,
      requestedWidth: variant.width,
      width: metadata.width,
      height: metadata.height,
      quality: variant.quality,
      bytes: outputStats.size,
    });
  }
}

manifest.totalOutputBytes = totalOutputBytes;
await writeFile(
  path.join(outputDirectory, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

console.log(`immersive image total ${(totalOutputBytes / 1024 / 1024).toFixed(2)} MiB across ${manifest.assets.length} files`);
