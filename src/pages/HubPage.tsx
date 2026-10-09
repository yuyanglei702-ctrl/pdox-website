import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ArrowRight, Mail } from 'lucide-react';
import { siteNavigation } from '../lib/site-navigation';

type Lang = 'en' | 'es';
type Entry = { href: string; label: string; body?: string; image?: string };
type Content = {
  products: { slug: string; name: string; subtitle: string; body: string; image: string }[];
  techCards: { slug: string; title: string; body: string; image: string }[];
  stats: { slug: string; title: string; summary: string; image: string }[];
  faqs: { question: string; answer: string }[];
  brandStoryTitle: string; brandStorySummary: string;
  channelsTitle: string; channelsBody: string;
  channels: { title: string; body: string; points: string[] }[];
};
const titles: Record<Lang, Record<string, [string, string]>> = {
  en: {
    '/about': ['A closer look at PDOX.', 'Explore the brand, its product portfolio and the information behind each professional conversation.'],
    '/why-pdox': ['Clarity at every step.', 'Discover how product presentation, information review and official support connect across PDOX.'],
    '/products': ['The PDOX portfolio.', 'Explore the six products currently presented on this website. Open a product for its individual overview and supporting information.'],
    '/technology': ['Explore the technology story.', 'An introduction to the care themes in the PDOX portfolio. Review product-specific information before drawing conclusions about an individual formula.'],
    '/partners': ['Start a professional conversation.', 'Find the information path for your clinic, distribution business or brand partnership.'],
    '/resources': ['Information, within reach.', 'A single place for product pages, frequently asked questions, the visit archive and official support.'],
    '/contact': ['How can we help?', 'Prepare a focused enquiry about distribution, clinic partnerships or a specific product.'],
    '/faq': ['Your questions, answered.', 'Practical guidance for reviewing PDOX products and finding the right contact route.'],
    '/traceability': ['The PDOX visit archive.', 'Selected laboratory-visit imagery provides context for the brand story. Each product and supporting document has its own scope.'],
  },
  es: {
    '/about': ['Conoce PDOX.', 'Explora la marca, su portafolio y la informacion para cada conversacion profesional.'],
    '/why-pdox': ['Claridad en cada paso.', 'Descubre como se conectan la presentacion, la revision de informacion y el soporte oficial de PDOX.'],
    '/products': ['El portafolio PDOX.', 'Explora los seis productos presentados en este sitio. Abre cada producto para consultar su informacion individual.'],
    '/technology': ['Explora la tecnologia.', 'Una introduccion a los temas de cuidado del portafolio. Revisa la informacion especifica antes de sacar conclusiones sobre una formula.'],
    '/partners': ['Inicia una conversacion profesional.', 'Encuentra la informacion para tu clinica, distribucion o colaboracion de marca.'],
    '/resources': ['Informacion a tu alcance.', 'Productos, preguntas frecuentes, archivo de visita y soporte oficial en un solo lugar.'],
    '/contact': ['Como podemos ayudarte?', 'Prepara una consulta sobre distribucion, colaboracion con clinicas o un producto especifico.'],
    '/faq': ['Respuestas a tus preguntas.', 'Orientacion practica para revisar los productos y encontrar el contacto adecuado.'],
    '/traceability': ['Archivo de visita PDOX.', 'Las imagenes de visitas a laboratorios ofrecen contexto. Cada producto y documento tiene su propio alcance.'],
  },
};
function LinkRows({ entries, lang }: { entries: Entry[]; lang: Lang }) {
  return <div className="divide-y divide-white/10 border-y border-white/10">{entries.map((entry, index) => <Link key={entry.href} to={entry.href} className="group grid grid-cols-[1fr_24px] items-center gap-6 py-8 sm:grid-cols-[50px_1fr_32px]">
    <span className="hidden font-sans text-xs text-[#C9A96E] sm:block">{String(index + 1).padStart(2, '0')}</span>
    <div><h2 className="text-3xl leading-tight transition group-hover:text-[#C9A96E]">{entry.label}</h2>{entry.body && <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{entry.body}</p>}</div>
    <ArrowRight size={22} className="text-[#C9A96E] transition group-hover:translate-x-1" aria-label={lang === 'en' ? 'Open page' : 'Abrir pagina'} />
  </Link>)}</div>;
}
function ContactForm({ lang, products }: { lang: Lang; products: Content['products'] }) {
  const [params] = useSearchParams();
  const options = lang === 'en' ? [['distribution', 'Distribution'], ['clinic', 'Clinic partnerships'], ['documentation', 'Product documentation'], ['support', 'Product support']] : [['distribution', 'Distribucion'], ['clinic', 'Colaboracion con clinicas'], ['documentation', 'Documentacion de producto'], ['support', 'Soporte de producto']];
  const [topic, setTopic] = useState(options.some(([value]) => value === params.get('topic')) ? params.get('topic')! : 'distribution');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [product, setProduct] = useState(products.some(p => p.name === params.get('product')) ? params.get('product')! : '');
  const [message, setMessage] = useState('');
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const field = 'mt-2 w-full rounded-none border border-white/20 bg-[#101113] px-4 py-3 text-sm text-white focus:border-[#C9A96E] focus:outline-none';
  return <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
    <aside><h2 className="text-3xl">{lang === 'en' ? 'One official contact path.' : 'Un contacto oficial.'}</h2><a href="mailto:info@pdoxserum.com" className="mt-6 inline-flex items-center gap-3 break-all text-[#C9A96E]"><Mail size={20} />info@pdoxserum.com</a><p className="mt-6 text-sm leading-7 text-white/60">{lang === 'en' ? 'Choose a topic so your enquiry includes the right context. For product support, include the product name, purchase channel and available batch or code information.' : 'Elige un tema e incluye el contexto de tu consulta. Para soporte, indica el producto, canal de compra y lote o codigo disponible.'}</p><Link to="/official-channels" className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C9A96E]">{lang === 'en' ? 'Review official channels' : 'Ver canales oficiales'}<ArrowRight size={16} /></Link></aside>
    <form onChange={() => setDraft(null)} onSubmit={event => { event.preventDefault(); setDraft({ subject: `PDOX | ${options.find(([value]) => value === topic)?.[1]}${product ? ` | ${product}` : ''}`, body: `${lang === 'en' ? 'Name' : 'Nombre'}: ${name}\n${lang === 'en' ? 'Organization' : 'Organizacion'}: ${organization}\n${lang === 'en' ? 'Product' : 'Producto'}: ${product || '—'}\n\n${message}` }); }} className="border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2"><label className="text-sm text-white/75">{lang === 'en' ? 'Enquiry topic' : 'Tema'}<select value={topic} onChange={e => setTopic(e.target.value)} className={field}>{options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="text-sm text-white/75">{lang === 'en' ? 'Product (optional)' : 'Producto (opcional)'}<select value={product} onChange={e => setProduct(e.target.value)} className={field}><option value="">{lang === 'en' ? 'General enquiry' : 'Consulta general'}</option>{products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}</select></label><label className="text-sm text-white/75">{lang === 'en' ? 'Your name' : 'Nombre'}<input required maxLength={100} autoComplete="name" value={name} onChange={e => setName(e.target.value)} className={field} /></label><label className="text-sm text-white/75">{lang === 'en' ? 'Organization (optional)' : 'Organizacion (opcional)'}<input maxLength={150} autoComplete="organization" value={organization} onChange={e => setOrganization(e.target.value)} className={field} /></label></div>
      <label className="mt-6 block text-sm text-white/75">{lang === 'en' ? 'Your enquiry' : 'Consulta'}<textarea required maxLength={3000} rows={6} value={message} onChange={e => setMessage(e.target.value)} className={field} /></label>
      <p className="mt-4 text-xs leading-6 text-white/50">{lang === 'en' ? 'This form prepares an email draft on your device. Review it in your email app and send it yourself.' : 'Este formulario prepara un borrador en tu dispositivo. Revisalo y envialo desde tu aplicacion de correo.'}</p>
      <button type="submit" className="mt-6 inline-flex items-center gap-3 bg-[#C9A96E] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#D4B876]">{lang === 'en' ? 'Prepare email' : 'Preparar correo'}<ArrowRight size={16} /></button>
      {draft && <div role="status" className="mt-8 border-t border-white/10 pt-6"><h3 className="font-sans text-lg">{lang === 'en' ? 'Your email draft is ready.' : 'Tu borrador esta listo.'}</h3><p className="mt-4 break-words text-sm text-[#C9A96E]">{draft.subject}</p><p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-white/65">{draft.body}</p><a href={`mailto:info@pdoxserum.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`} className="mt-5 inline-flex items-center gap-2 text-sm text-[#C9A96E]">{lang === 'en' ? 'Open in email app' : 'Abrir en correo'}<ArrowRight size={16} /></a></div>}
    </form>
  </div>;
}
export function HubPage({ path, lang, content }: { path: string; lang: Lang; content: Content }) {
  const [query] = useSearchParams();
  const [title, intro] = titles[lang][path];
  const en = lang === 'en';
  const nav = siteNavigation(lang);
  const resources: Entry[] = [
    { href: '/products', label: en ? 'Product information' : 'Informacion de producto', body: en ? 'Individual pages for the current website portfolio.' : 'Paginas individuales del portafolio actual.' },
    { href: '/faq', label: en ? 'Frequently asked questions' : 'Preguntas frecuentes', body: en ? 'Guidance for products, documentation and professional enquiries.' : 'Orientacion sobre productos, documentos y consultas profesionales.' },
    { href: '/traceability', label: en ? 'Visit archive' : 'Archivo de visita', body: en ? 'Laboratory-visit imagery, with its context explained.' : 'Imagenes de visita con su contexto.' },
    { href: '/official-channels', label: en ? 'Official channels' : 'Canales oficiales', body: en ? 'Website, contact route and individual item support.' : 'Sitio web, contacto y soporte individual.' },
    { href: '/contact?topic=documentation', label: en ? 'Request product documentation' : 'Solicitar documentacion', body: en ? 'Tell us which product and document you would like to review.' : 'Indica que producto y documento deseas revisar.' },
  ];
  return <section className="min-h-screen pb-20 pt-20">
    <div className="relative overflow-hidden border-b border-white/10 bg-[#111214] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><img src="/images/optimized/hero-bg-gold.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" /><div className="relative mx-auto max-w-[1280px]"><nav aria-label="Breadcrumb" className="mb-9 flex gap-3 text-xs text-white/55"><Link to="/" className="hover:text-[#C9A96E]">{en ? 'Home' : 'Inicio'}</Link><span>/</span><span aria-current="page">{nav.find(item => item.href === path)?.label || (path === '/faq' ? 'FAQ' : en ? 'Visit archive' : 'Archivo de visita')}</span></nav><h1 className="max-w-4xl text-[clamp(40px,5.5vw,76px)] leading-[1.08]">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/65">{intro}</p></div></div>
    <div className="mx-auto max-w-[1280px] px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      {path === '/about' && <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"><img src="/images/lab-scene.jpg" alt={en ? 'PDOX brand imagery' : 'Imagen de marca PDOX'} className="w-full object-cover" /><LinkRows lang={lang} entries={[{ href: '/brand-story', label: content.brandStoryTitle, body: content.brandStorySummary }, { href: '/why-pdox', label: en ? 'Why PDOX' : 'Por que PDOX', body: titles[lang]['/why-pdox'][1] }, { href: '/traceability', label: en ? 'Explore the visit archive' : 'Explorar archivo de visita' }, { href: '/partners', label: en ? 'Professional partnerships' : 'Colaboraciones profesionales' }]} /></div>}
      {path === '/why-pdox' && <><LinkRows lang={lang} entries={content.stats.map(stat => ({ href: `/insights/${stat.slug}`, label: stat.title, body: stat.summary }))} /><div className="mt-12 flex flex-wrap gap-6 text-sm text-[#C9A96E]"><Link to="/technology">{en ? 'Explore technology' : 'Explorar tecnologia'}<ArrowRight size={16} className="ml-2 inline" /></Link><Link to="/resources">{en ? 'Review supporting information' : 'Revisar informacion'}<ArrowRight size={16} className="ml-2 inline" /></Link></div></>}
      {path === '/products' && <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{content.products.map(product => <Link key={product.slug} to={`/products/${product.slug}`} className="group flex flex-col border border-white/10 bg-[#111214]"><div className="aspect-[4/3] bg-black p-8"><img src={product.image} alt={product.name} className="h-full w-full object-contain transition group-hover:scale-[1.04]" /></div><div className="flex flex-1 flex-col p-7"><p className="text-xs uppercase tracking-wider text-[#C9A96E]">{product.subtitle}</p><h2 className="mt-4 font-sans text-xl leading-7">{product.name}</h2><p className="mt-4 text-sm leading-7 text-white/60">{product.body}</p><span className="mt-auto flex items-center gap-3 pt-7 text-xs uppercase tracking-wider text-[#C9A96E]">{en ? 'Product details' : 'Ver producto'}<ArrowRight size={16} /></span></div></Link>)}</div>}
      {path === '/technology' && <div className="grid gap-8 md:grid-cols-2">{content.techCards.map(card => <Link key={card.slug} to={`/technology/${card.slug}`} className="group border border-white/10"><img src={card.image} alt={card.title} className="aspect-[16/9] w-full object-cover" /><div className="p-8"><h2 className="text-3xl group-hover:text-[#C9A96E]">{card.title}</h2><p className="mt-4 text-sm leading-7 text-white/60">{card.body}</p><span className="mt-6 inline-flex items-center gap-2 text-sm text-[#C9A96E]">{en ? 'Explore topic' : 'Explorar tema'}<ArrowRight size={16} /></span></div></Link>)}</div>}
      {path === '/partners' && <><h2 className="max-w-3xl text-4xl leading-tight">{content.channelsTitle}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">{content.channelsBody}</p><div className="mt-12 grid gap-6 md:grid-cols-3">{content.channels.map((channel, i) => <article key={channel.title} className="flex flex-col border-t border-[#C9A96E]/50 pt-7"><h3 className="text-3xl">{channel.title}</h3><p className="mt-5 text-sm leading-7 text-white/60">{channel.body}</p><ul className="my-6 space-y-3 text-sm text-white/65">{channel.points.map(point => <li key={point}>{point}</li>)}</ul><Link to={`/contact?topic=${['clinic', 'distribution', 'documentation'][i]}`} className="mt-auto inline-flex items-center gap-2 text-sm text-[#C9A96E]">{en ? 'Prepare an enquiry' : 'Preparar consulta'}<ArrowRight size={16} /></Link></article>)}</div></>}
      {path === '/resources' && <LinkRows entries={resources} lang={lang} />}
      {path === '/faq' && <div className="max-w-4xl">{content.faqs.map(faq => <details key={faq.question} className="group border-b border-white/15 py-6"><summary className="cursor-pointer font-sans text-lg leading-7 text-white/85 marker:text-[#C9A96E]">{faq.question}</summary><p className="mt-5 max-w-3xl text-sm leading-8 text-white/65">{faq.answer}</p></details>)}<Link to="/contact" className="mt-10 inline-flex items-center gap-3 text-[#C9A96E]">{en ? 'Ask another question' : 'Hacer otra pregunta'}<ArrowRight size={18} /></Link></div>}
      {path === '/traceability' && <div className="grid gap-12 lg:grid-cols-2"><img src="/images/optimized/source-traceability-en.webp" alt="PDOX laboratory visit archive" className="mx-auto w-full max-w-[520px] object-contain" /><div><h2 className="text-4xl leading-tight">{en ? 'Context before conclusions.' : 'Contexto antes de conclusiones.'}</h2><p className="mt-6 text-base leading-8 text-white/65">{en ? 'Photographs document a visit and visual record. They do not by themselves certify a specific product, manufacturing site, formulation or performance claim.' : 'Las fotografias documentan una visita. Por si solas no certifican un producto, centro de fabricacion, formula o claim de rendimiento.'}</p><p className="mt-6 text-sm leading-8 text-white/60">{en ? 'For a product review, include its exact name and the document you need. Supporting information should match the product identity and actual document scope.' : 'Para revisar un producto, indica su nombre exacto y el documento que necesitas. La informacion debe corresponder al producto y alcance real del documento.'}</p><Link to="/contact?topic=documentation" className="mt-8 inline-flex items-center gap-3 text-[#C9A96E]">{en ? 'Request product information' : 'Solicitar informacion'}<ArrowRight size={18} /></Link></div></div>}
      {path === '/contact' && <ContactForm key={`${lang}-${path}-${query.toString()}`} lang={lang} products={content.products} />}
      {path !== '/contact' && <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8"><p className="text-sm text-white/60">{en ? 'Need information about a specific product?' : 'Necesitas informacion sobre un producto?'}</p><Link to="/contact?topic=documentation" className="inline-flex items-center gap-3 text-sm text-[#C9A96E]">{en ? 'Contact PDOX' : 'Contactar PDOX'}<ArrowRight size={18} /></Link></div>}
    </div>
  </section>;
}
