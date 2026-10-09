type Lang = 'en' | 'es' | 'zh';
export const hubRoutes = ['/about', '/why-pdox', '/products', '/technology', '/partners', '/resources', '/contact', '/faq', '/traceability'];
export function siteNavigation(lang: Lang): { href: string; label: string }[] {
  const labels = lang === 'zh' ? ['品牌介绍', '品牌优势', '产品目录', '技术资料', '合作咨询', '资料中心', '联系我们'] : lang === 'en' ? ['About', 'Why PDOX', 'Products', 'Technology', 'Partners', 'Resources', 'Contact'] : ['Nosotros', 'Por que PDOX', 'Productos', 'Tecnologia', 'Socios', 'Recursos', 'Contacto'];
  return hubRoutes.slice(0, 7).map((href, i) => ({ href, label: labels[i] }));
}
