import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();
const dist = path.join(root, 'dist');
const shell = await readFile(path.join(dist, 'index.html'), 'utf8');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  const { render, getSiteMetadata, publicRoutes } = await server.ssrLoadModule('/src/entry-server.tsx');
  const routes = publicRoutes();
  for (const route of [...routes, '/404']) {
    const metadata = getSiteMetadata(route);
    // Keep the same React page and copy for browsers and crawlers. Reveal animations
    // must not hide the generated content when JavaScript is unavailable.
    const body = render(route).replace(/class="([^"]*\breveal\b[^"]*)"/g, (match, classes) => `class="${classes} active"`);
    let html = shell.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
      .replace(/<html lang="[^"]*"/, `<html lang="${metadata.lang}"`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(metadata.title)}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?>/, `<meta name="description" content="${escape(metadata.description)}" />`);
    const structured = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'PDOX 普特奥斯官方网站', alternateName: ['PDOX', 'PDOX普特奥斯', '普特奥斯'], url: 'https://www.pdoxserum.com/' };
    const head = `<meta name="robots" content="${metadata.indexable ? 'index,follow' : 'noindex,follow'}" />\n${metadata.indexable ? `<link rel="canonical" href="${escape(metadata.canonical)}" />` : ''}\n<meta property="og:title" content="${escape(metadata.title)}" />\n<meta property="og:description" content="${escape(metadata.description)}" />\n<meta property="og:url" content="${escape(metadata.canonical)}" />\n<script type="application/ld+json">${JSON.stringify(structured).replaceAll('<', '\\u003c')}</script>\n`;
    html = html.replace('</head>', head + '</head>');
    const destination = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, `${route.slice(1)}.html`);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }
  await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route => `  <url><loc>https://www.pdoxserum.com${route}</loc></url>`).join('\n')}\n</urlset>\n`);
  console.log(`Generated full HTML for ${routes.length} public pages and a noindex error page.`);
} finally {
  await server.close();
}
