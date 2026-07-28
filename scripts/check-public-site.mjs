import { access, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'public');
const failures = [];

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else files.push(target);
  }
  return files;
}

const sourceFiles = (await walk(srcRoot)).filter((file) => /\.(ts|tsx|css)$/.test(file));
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/["'](\/images\/[^"'`$]+)["']/g)) {
    try {
      await access(path.join(publicRoot, match[1]));
    } catch {
      failures.push(`Missing public asset: ${match[1]} referenced by ${path.relative(root, file)}`);
    }
  }
}

for (const name of ['hero-obsidian-atelier', 'platinum-laboratory-archive', 'bioenzyme-material-field']) {
  for (const variant of ['desktop', 'mobile']) {
    for (const format of ['avif', 'webp']) {
      const file = path.join(publicRoot, 'images', 'official', `${name}-${variant}.${format}`);
      try {
        const info = await stat(file);
        if (info.size > 260 * 1024) failures.push(`Official image exceeds budget: ${path.basename(file)}`);
      } catch {
        failures.push(`Missing official image: ${path.basename(file)}`);
      }
    }
  }
}

const robots = await readFile(path.join(publicRoot, 'robots.txt'), 'utf8');
if (!robots.includes('User-agent: *') || !robots.includes('Allow: /') || !robots.includes('https://www.pdoxserum.com/sitemap.xml')) {
  failures.push('robots.txt does not contain the required crawler policy.');
}

const sitemap = await readFile(path.join(publicRoot, 'sitemap.xml'), 'utf8');
if (!sitemap.startsWith('<?xml') || !sitemap.includes('<urlset') || !sitemap.includes('/products/youthful-eye-aqua-essence')) {
  failures.push('sitemap.xml is incomplete or invalid.');
}

for (const file of sourceFiles.filter((file) => !file.includes(`${path.sep}components${path.sep}ui${path.sep}`))) {
  const source = await readFile(file, 'utf8');
  if (/\p{Script=Han}/u.test(source)) failures.push(`Public source contains Chinese text: ${path.relative(root, file)}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Public-site checks passed: ${sourceFiles.length} source files, all static assets present.`);
