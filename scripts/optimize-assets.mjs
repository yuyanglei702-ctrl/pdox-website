import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const imageRoot = path.join(root, 'public', 'images');
const optimizedRoot = path.join(imageRoot, 'optimized');
const optimizedProductsRoot = path.join(imageRoot, 'products', 'optimized');

const assetGroups = [
  {
    outDir: optimizedRoot,
    quality: 72,
    effort: 5,
    assets: [
      ['hero-bg-gold.png', 'hero-bg-gold.webp', 1280],
      ['bg-molecular-gold-flow.png', 'bg-molecular-gold-flow.webp', 1280],
      ['bg-lab-champagne.png', 'bg-lab-champagne.webp', 1280],
      ['tech-lipase-complex.png', 'tech-lipase-complex.webp', 720],
      ['tech-collagenase-complex.png', 'tech-collagenase-complex.webp', 720],
      ['tech-hyaluronidase-complex.png', 'tech-hyaluronidase-complex.webp', 720],
      ['tech-keratinase-complex.png', 'tech-keratinase-complex.webp', 720],
      ['insight-madrid-origin.png', 'insight-madrid-origin.webp', 720],
      ['insight-enzyme-platform.png', 'insight-enzyme-platform.webp', 720],
      ['insight-stability-target.png', 'insight-stability-target.webp', 720],
      ['insight-eu-quality.png', 'insight-eu-quality.webp', 720],
      ['source-traceability-en.png', 'source-traceability-en.webp', 760],
      ['product-liquid-bandage.png', 'product-liquid-bandage.webp', 620],
    ],
  },
  {
    outDir: optimizedProductsRoot,
    quality: 76,
    effort: 5,
    assets: [
      ['products/product-01-bandage-needle-dark.png', 'product-01-bandage-needle-dark.webp', 520],
      ['products/product-02-remodeling-needle-dark.png', 'product-02-remodeling-needle-dark.webp', 520],
      ['products/product-03-wrinkle-eraser-dark.png', 'product-03-wrinkle-eraser-dark.webp', 520],
      ['products/product-04-collagen-activator-dark.png', 'product-04-collagen-activator-dark.webp', 520],
      ['products/product-05-hydration-complex-dark.png', 'product-05-hydration-complex-dark.webp', 520],
    ],
  },
];

async function formatBytes(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

async function optimizeOne({ input, output, width, quality, effort }) {
  const sourcePath = path.join(imageRoot, input);
  const outputPath = path.join(output.dir, output.name);
  const source = await stat(sourcePath);

  await sharp(sourcePath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort, smartSubsample: true })
    .toFile(outputPath);

  const optimized = await stat(outputPath);
  console.log(
    `${input} -> ${path.relative(imageRoot, outputPath)} ` +
      `${await formatBytes(source.size)} -> ${await formatBytes(optimized.size)}`,
  );
}

for (const group of assetGroups) {
  await mkdir(group.outDir, { recursive: true });
}

for (const group of assetGroups) {
  for (const [input, name, width] of group.assets) {
    await optimizeOne({
      input,
      output: { dir: group.outDir, name },
      width,
      quality: group.quality,
      effort: group.effort,
    });
  }
}
