import { copy } from '../content/site-copy';
import type { Lang } from '../content/site-copy';
import { hubRoutes, siteNavigation } from './site-navigation';

export const siteOrigin = 'https://www.pdoxserum.com';
const descriptions: Record<string, string> = {
  '/about': 'Explore PDOX brand information, the product portfolio and the official contact path.',
  '/why-pdox': 'Explore PDOX product presentation, information review and professional support.',
  '/products': 'Explore the six products currently presented in the PDOX website portfolio.',
  '/technology': 'Explore the care themes and technology topics presented in the PDOX portfolio.',
  '/partners': 'Information for PDOX professional, clinic and distribution enquiries.',
  '/resources': 'Find PDOX product information, frequently asked questions, the visit archive and official support.',
  '/contact': 'Contact PDOX for distribution, clinic partnerships, product information and product support.',
  '/faq': 'Answers to common questions about PDOX product information and official contact routes.',
  '/traceability': 'View the PDOX laboratory-visit archive with its context and evidence scope explained.',
};
export function publicRoutes() {
  const content = copy.en;
  return ['/', '/zh-cn', ...hubRoutes, '/brand-story', '/official-channels',
    ...content.stats.map(item => `/insights/${item.slug}`),
    ...content.techCards.map(item => `/technology/${item.slug}`),
    ...content.products.map(item => `/products/${item.slug}`)];
}
export function getSiteMetadata(path: string, lang: Lang = 'en') {
  const normalized = path.replace(/\/$/, '') || '/';
  const route = normalized === '/verify' ? '/official-channels' : normalized;
  const content = copy[lang];
  const product = content.products.find(item => `/products/${item.slug}` === route);
  const technology = content.techCards.find(item => `/technology/${item.slug}` === route);
  const insight = content.stats.find(item => `/insights/${item.slug}` === route);
  const extraLabels: Record<string, string> = {
    '/faq': lang === 'en' ? 'Frequently Asked Questions' : 'Preguntas frecuentes',
    '/traceability': lang === 'en' ? 'Visit Archive' : 'Archivo de visita',
    '/official-channels': lang === 'en' ? 'Official Channels' : 'Canales oficiales',
  };
  const label = siteNavigation(lang).find(item => item.href === route)?.label || product?.name || technology?.title || insight?.title || extraLabels[route] || (route === '/brand-story' ? content.brandStoryTitle : 'Page not found');
  const chinese = route === '/zh-cn';
  return {
    title: route === '/' ? 'PDOX 普特奥斯官方网站 | Official Website' : chinese ? 'PDOX普特奥斯官网｜品牌介绍、产品资料与官方联系' : `${label} | PDOX 普特奥斯`,
    description: route === '/' || chinese ? 'PDOX普特奥斯官方网站。查看品牌介绍、官网产品展示、产品资料入口、官方渠道和合作咨询信息。' : product?.body || technology?.body || insight?.summary || (route === '/brand-story' ? content.brandStorySummary : descriptions[route]) || content.overviewBody,
    canonical: `${siteOrigin}${route}`,
    lang: chinese ? 'zh-CN' : lang,
    indexable: publicRoutes().includes(route),
  };
}
