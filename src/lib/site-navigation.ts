type Lang = 'en' | 'es';
export const hubRoutes = ['/about', '/why-pdox', '/products', '/technology', '/partners', '/resources', '/contact', '/faq', '/traceability'];
export function siteNavigation(lang: Lang): { href: string; label: string }[] {
  const labels = lang === 'en' ? ['About', 'Why PDOX', 'Products', 'Technology', 'Partners', 'Resources', 'Contact'] : ['Nosotros', 'Por que PDOX', 'Productos', 'Tecnologia', 'Socios', 'Recursos', 'Contacto'];
  return hubRoutes.slice(0, 7).map((href, i) => ({ href, label: labels[i] }));
}
