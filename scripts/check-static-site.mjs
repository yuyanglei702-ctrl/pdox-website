import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const dist = path.resolve('dist');
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert(urls.length >= 27, 'Expected all current public routes in the sitemap.');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs.');
const routes = new Set(urls.map(url => new URL(url).pathname));
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = await readFile(path.join(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${route}: must have one H1.`);
  assert(html.includes(`<link rel="canonical" href="${url}"`), `${route}: wrong canonical.`);
  assert(!html.includes('<div id="root"></div>'), `${route}: empty app shell.`);
  const bodyText = html.split('<body>')[1].replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, '').trim();
  assert(bodyText.length > 300, `${route}: insufficient static content.`);
  assert(html.includes('index,follow'), `${route}: missing index permission.`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"#]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (href.startsWith('/')) assert(routes.has(new URL(href, url).pathname), `${route}: unknown internal link ${href}.`);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/(?:images|assets|fonts)\/[^"?]+)"/g)) {
    await access(path.join(dist, match[1].slice(1)));
  }
}
const chinese = await readFile(path.join(dist, 'zh-cn.html'), 'utf8');
assert(chinese.includes('<html lang="zh-CN"'));
assert(chinese.includes('PDOX 普特奥斯官方网站'));
assert((await readFile(path.join(dist, '404.html'), 'utf8')).includes('noindex,follow'));
assert((await readFile(path.join(dist, 'robots.txt'), 'utf8')).includes('Allow: /'));
console.log(`Verified ${urls.length} fully rendered public pages, sitemap, links, local assets and Chinese brand content.`);
