import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = await readFile(path.join(dist, 'index.html'), 'utf8');

const products = [
  ['bandage-needle', 'Bandage Needle'],
  ['remodeling-needle', 'Remodeling Needle'],
  ['wrinkle-eraser', 'Wrinkle Eraser'],
  ['liquid-bandage', 'Liquid Bandage'],
  ['v-face-tightening-glow-ampoule', 'V-Face Tightening Glow Ampoule'],
  ['youthful-eye-aqua-essence', 'Youthful Eye Aqua Essence'],
];

const routes = [
  { path: '/', lang: 'en', title: 'PDOX | Spanish Premium Bio-Enzyme Skincare', description: 'Official PDOX brand website for professional clinics, distributors and international skincare partners.' },
  { path: '/es/', lang: 'es', title: 'PDOX | Cuidado Bio-Enzimatico Premium Espanol', description: 'Sitio oficial de PDOX para clinicas, distribuidores y socios profesionales internacionales.' },
  { path: '/brand-story', lang: 'en', title: 'Brand Credentials | PDOX', description: 'Spanish premium skincare identity, professional discipline and refined European presentation.' },
  { path: '/insights/spanish-brand-identity', lang: 'en', title: 'Spanish Brand Identity | PDOX', description: 'PDOX Spanish premium skincare identity for professional international communication.' },
  { path: '/insights/enzyme-platform', lang: 'en', title: 'Bio-Enzyme Care Platform | PDOX', description: 'Four cosmetic care directions for contour, firmness, hydration and surface refinement.' },
  { path: '/insights/product-portfolio', lang: 'en', title: 'Product Portfolio | PDOX', description: 'A focused six-product PDOX skincare portfolio for professional channels.' },
  { path: '/insights/international-communication', lang: 'en', title: 'International Communication | PDOX', description: 'English and Spanish brand communication with controlled public wording.' },
  { path: '/quality-traceability', lang: 'en', title: 'Quality & Traceability | PDOX', description: 'PDOX public evidence scope, brand archive context and controlled cosmetic claims standard.' },
  { path: '/official-channels', lang: 'en', title: 'Official Channels | PDOX', description: 'Confirm the official PDOX website and brand enquiry channel.' },
  { path: '/legal', lang: 'en', title: 'Legal Notice | PDOX', description: 'Legal notice for the PDOX official brand website.' },
  { path: '/privacy', lang: 'en', title: 'Privacy | PDOX', description: 'Privacy information for the PDOX official brand website.' },
  { path: '/terms', lang: 'en', title: 'Website Terms | PDOX', description: 'Website terms for PDOX brand, product and professional partnership information.' },
  ...['lipase-complex', 'collagenase-complex', 'hyaluronidase-complex', 'keratinase-complex'].map((slug) => ({ path: `/technology/${slug}`, lang: 'en', title: `${slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')} | PDOX`, description: 'PDOX bio-enzyme care direction for professional cosmetic skincare communication.' })),
  ...products.map(([slug, name]) => ({ path: `/products/${slug}`, lang: 'en', title: `${name} | PDOX`, description: `${name} by PDOX: professional cosmetic skincare positioning, care direction and usage boundaries.` })),
];

for (const route of [...routes, ...routes.filter((route) => route.path !== '/' && !route.path.startsWith('/es/')).map((route) => ({ ...route, path: `/es${route.path}`, lang: 'es' }))]) {
  const canonical = `https://www.pdoxserum.com${route.path === '/' ? '' : route.path.replace(/\/$/, '')}`;
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@type': route.path.includes('/products/') ? 'Product' : 'WebPage', name: route.title.replace(' | PDOX', ''), url: canonical, isPartOf: { '@type': 'WebSite', name: 'PDOX', url: 'https://www.pdoxserum.com/' } });
  const tags = `
    <link rel="canonical" href="${canonical}" />
    <meta name="description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="PDOX" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://www.pdoxserum.com/images/official/hero-obsidian-atelier-desktop.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${jsonLd}</script>`;
  const cleanTemplate = template
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<meta name="description"[^>]*>/g, '')
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/g, '');
  const html = cleanTemplate
    .replace(/<html lang="[^"]*">/, `<html lang="${route.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace('</head>', `${tags}\n  </head>`);
  if (route.path === '/') {
    await writeFile(path.join(dist, 'index.html'), html);
  } else {
    const directory = path.join(dist, route.path.replace(/^\//, '').replace(/\/$/, ''));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
}

const notFound = template
  .replace(/<title>.*?<\/title>/, '<title>Page Not Found | PDOX</title>')
  .replace('</head>', '<meta name="robots" content="noindex" />\n  </head>');
await writeFile(path.join(dist, '404.html'), notFound);
