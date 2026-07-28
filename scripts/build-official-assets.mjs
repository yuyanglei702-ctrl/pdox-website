import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourceRoot = path.join(root, 'design-assets', 'generated-masters');
const outputRoot = path.join(root, 'public', 'images', 'official');

const assets = [
  {
    source: 'hero-obsidian-atelier.png',
    name: 'hero-obsidian-atelier',
    desktop: { width: 1672, height: 941, position: 'centre' },
    mobile: { width: 780, height: 1040, position: 'centre' },
    quality: 76,
  },
  {
    source: 'platinum-laboratory-archive.png',
    name: 'platinum-laboratory-archive',
    desktop: { width: 1600, height: 900, position: 'centre' },
    mobile: { width: 780, height: 1040, position: 'centre' },
    quality: 72,
  },
  {
    source: 'bioenzyme-material-field.png',
    name: 'bioenzyme-material-field',
    desktop: { width: 1600, height: 900, position: 'centre' },
    mobile: { width: 780, height: 1040, position: 'centre' },
    quality: 72,
  },
];

async function renderVariant(input, output, options, format, quality) {
  const pipeline = sharp(input).resize({
    width: options.width,
    height: options.height,
    fit: 'cover',
    position: options.position,
    withoutEnlargement: true,
  });

  if (format === 'avif') {
    await pipeline.avif({ quality: Math.max(45, quality - 16), effort: 7 }).toFile(output);
  } else {
    await pipeline.webp({ quality, effort: 6, smartSubsample: true }).toFile(output);
  }

  const file = await stat(output);
  console.log(`${path.relative(root, output)} ${Math.round(file.size / 1024)} KB`);
}

await mkdir(outputRoot, { recursive: true });

for (const asset of assets) {
  const input = path.join(sourceRoot, asset.source);
  for (const [variant, options] of Object.entries({ desktop: asset.desktop, mobile: asset.mobile })) {
    for (const format of ['avif', 'webp']) {
      await renderVariant(
        input,
        path.join(outputRoot, `${asset.name}-${variant}.${format}`),
        options,
        format,
        asset.quality,
      );
    }
  }
}

for (const logo of [
  { name: 'pdox-logo-nav.webp', width: 320 },
  { name: 'pdox-logo-hero.webp', width: 960 },
]) {
  await sharp(path.join(root, 'public', 'images', 'logo.png'))
    .resize({ width: logo.width, withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 92, effort: 6 })
    .toFile(path.join(outputRoot, logo.name));
}

await sharp(path.join(root, 'public', 'images', 'logo.png'))
  .resize({ width: 180, height: 180, fit: 'contain', background: '#050505' })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'apple-touch-icon.png'));

await sharp(path.join(root, 'public', 'images', 'logo.png'))
  .resize({ width: 48, height: 48, fit: 'contain', background: '#050505' })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'favicon-48.png'));
