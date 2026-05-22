import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Beaker,
  Clock,
  FlaskConical,
  Globe2,
  Menu,
  Microscope,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type Lang = 'en' | 'es';

type Copy = {
  nav: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  stats: { value: string; label: string }[];
  brandKicker: string;
  brandTitle: string;
  brandBody: string[];
  techKicker: string;
  techTitle: string;
  techBody: string;
  techCards: { title: string; body: string }[];
  productsKicker: string;
  productsTitle: string;
  productsBody: string;
  products: { name: string; subtitle: string; body: string; image: string; tags: string[] }[];
  scienceKicker: string;
  scienceTitle: string;
  scienceBody: string;
  sciencePoints: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  footerBody: string;
};

const copy: Record<Lang, Copy> = {
  en: {
    nav: ['Brand', 'Technology', 'Products', 'Science', 'Contact'],
    heroEyebrow: 'Spanish bio-enzyme skin science',
    heroTitle: 'Precision Derma-Oil-X for professional skin protocols.',
    heroBody:
      'PDOX develops bio-enzyme formulas in Madrid for clinics, distributors and premium skin programs that need measurable repair, contour and renewal performance.',
    heroPrimary: 'Explore Products',
    heroSecondary: 'View Technology',
    stats: [
      { value: '2010', label: 'Madrid laboratory origin' },
      { value: '4', label: 'precision enzyme complexes' },
      { value: '15Y', label: 'room-temperature stability target' },
      { value: 'EU', label: 'quality and compliance focus' },
    ],
    brandKicker: 'The Brand',
    brandTitle: 'Independent research, proprietary formulation and clinical-grade presentation.',
    brandBody: [
      'PDOX is positioned as an independent precision bio-enzyme skin brand with roots in Madrid. The site now presents the brand for international audiences with English and Spanish as the only public languages.',
      'The brand language is deliberately restrained: laboratory confidence, premium dermocosmetic finish, and clear product pathways for clinics and distribution partners.',
    ],
    techKicker: 'Core Technology',
    techTitle: 'A controlled multi-enzyme platform for visible skin transformation.',
    techBody:
      'The PDOX system is built around complementary enzyme actions designed to support lipid balance, collagen renewal, hydration pathways and surface refinement.',
    techCards: [
      {
        title: 'Lipase Complex',
        body: 'Targets localized lipid appearance and supports contour-focused professional protocols.',
      },
      {
        title: 'Collagenase Complex',
        body: 'Supports firmness, elasticity and dermal remodeling programs without invasive positioning.',
      },
      {
        title: 'Hyaluronidase Complex',
        body: 'Helps improve hydration delivery and the feel of deep skin replenishment.',
      },
      {
        title: 'Keratinase Complex',
        body: 'Encourages surface renewal, smoother texture and brighter-looking skin.',
      },
    ],
    productsKicker: 'Products',
    productsTitle: 'Clinical precision series',
    productsBody:
      'A compact product architecture makes the range easy to understand, demonstrate and expand across markets.',
    products: [
      {
        name: 'Bandage Needle',
        subtitle: 'Emergency Serum',
        body: 'High-penetration bio-enzyme repair for barrier support and intensive recovery protocols.',
        image: '/images/product-bandage.jpg',
        tags: ['Repair', 'Barrier', 'Hero'],
      },
      {
        name: 'Remodeling Needle',
        subtitle: 'Facial Bioremodeling',
        body: 'Designed for professional programs focused on facial contour and harmony.',
        image: '/images/product-remodeling.jpg',
        tags: ['Contour', 'Firmness'],
      },
      {
        name: 'Wrinkle Eraser',
        subtitle: 'Anti-Wrinkle',
        body: 'Collagen-support positioning for lines, texture and visible refinement.',
        image: '/images/product-eraser.jpg',
        tags: ['Lines', 'Texture'],
      },
      {
        name: 'Collagen Activator',
        subtitle: 'Total Revitalization',
        body: 'A daily professional-strength routine for elasticity, firmness and even tone.',
        image: '/images/product-collagen.jpg',
        tags: ['Collagen', 'Glow'],
      },
      {
        name: 'Hydration Complex',
        subtitle: 'Mesodermal Hydration',
        body: 'Hydration-focused protocol support with a premium clinical presentation.',
        image: '/images/product-activator.jpg',
        tags: ['Hydration', 'Comfort'],
      },
      {
        name: 'Liquid Bandage',
        subtitle: 'Active Biological Bandage',
        body: 'A repair-led concept for micro-lesion care, elasticity and fast visible comfort.',
        image: '/images/product-liquid-bandage.png',
        tags: ['Recovery', 'Elasticity'],
      },
    ],
    scienceKicker: 'Science',
    scienceTitle: 'Built for professional trust before mass visibility.',
    scienceBody:
      'The next phase should turn this website into a credible sales asset: verified product claims, distributor materials, clinical proof modules and conversion tracking.',
    sciencePoints: [
      {
        title: 'Traceable quality',
        body: 'Every product story should connect formula, batch discipline and market-ready documentation.',
      },
      {
        title: 'Premium education',
        body: 'Clinics need clear protocol logic, not vague cosmetic language.',
      },
      {
        title: 'Global expansion',
        body: 'English and Spanish keep the site focused for international launch and Spanish brand origin.',
      },
    ],
    ctaTitle: 'Start a precision skin protocol.',
    ctaBody:
      'For clinics, distributors and brand partners, PDOX is prepared to become a focused global dermocosmetic platform.',
    ctaButton: 'Contact PDOX',
    footerBody:
      'PDOX is an independent precision bio-enzyme skin science brand based in Madrid. Research, formulation and production story prepared for global distribution.',
  },
  es: {
    nav: ['Marca', 'Tecnologia', 'Productos', 'Ciencia', 'Contacto'],
    heroEyebrow: 'Ciencia cutanea bio-enzimatica espanola',
    heroTitle: 'Precision Derma-Oil-X para protocolos profesionales de piel.',
    heroBody:
      'PDOX desarrolla formulas bio-enzimaticas en Madrid para clinicas, distribuidores y programas premium que buscan reparacion, contorno y renovacion medibles.',
    heroPrimary: 'Explorar Productos',
    heroSecondary: 'Ver Tecnologia',
    stats: [
      { value: '2010', label: 'origen de laboratorio en Madrid' },
      { value: '4', label: 'complejos enzimaticos de precision' },
      { value: '15A', label: 'objetivo de estabilidad ambiente' },
      { value: 'UE', label: 'enfoque en calidad y cumplimiento' },
    ],
    brandKicker: 'La Marca',
    brandTitle: 'Investigacion independiente, formulacion propia y presentacion clinica premium.',
    brandBody: [
      'PDOX se presenta como una marca independiente de bio-enzimas de precision con raices en Madrid. El sitio queda preparado para audiencias internacionales con ingles y espanol como unicos idiomas publicos.',
      'El lenguaje visual es sobrio: confianza de laboratorio, acabado dermocosmetico premium y rutas claras para clinicas y socios de distribucion.',
    ],
    techKicker: 'Tecnologia Central',
    techTitle: 'Una plataforma multi-enzimatica controlada para transformacion visible de la piel.',
    techBody:
      'El sistema PDOX se construye alrededor de acciones enzimaticas complementarias para apoyar equilibrio lipidico, renovacion de colageno, hidratacion y refinamiento superficial.',
    techCards: [
      {
        title: 'Complejo Lipasa',
        body: 'Orientado a la apariencia de lipidos localizados y protocolos profesionales de contorno.',
      },
      {
        title: 'Complejo Colagenasa',
        body: 'Apoya programas de firmeza, elasticidad y remodelacion dermica con lenguaje no invasivo.',
      },
      {
        title: 'Complejo Hialuronidasa',
        body: 'Ayuda a mejorar la entrega de hidratacion y la sensacion de reposicion profunda.',
      },
      {
        title: 'Complejo Queratinasa',
        body: 'Favorece renovacion superficial, textura mas lisa y piel con aspecto mas luminoso.',
      },
    ],
    productsKicker: 'Productos',
    productsTitle: 'Serie de precision clinica',
    productsBody:
      'Una arquitectura compacta permite entender, demostrar y expandir la linea con claridad en distintos mercados.',
    products: [
      {
        name: 'Bandage Needle',
        subtitle: 'Serum de emergencia',
        body: 'Reparacion bio-enzimatica de alta penetracion para soporte de barrera y recuperacion intensiva.',
        image: '/images/product-bandage.jpg',
        tags: ['Reparacion', 'Barrera', 'Hero'],
      },
      {
        name: 'Remodeling Needle',
        subtitle: 'Bioremodelado facial',
        body: 'Disenado para programas profesionales centrados en contorno facial y armonia.',
        image: '/images/product-remodeling.jpg',
        tags: ['Contorno', 'Firmeza'],
      },
      {
        name: 'Wrinkle Eraser',
        subtitle: 'Antiarrugas',
        body: 'Posicionamiento de soporte de colageno para lineas, textura y refinamiento visible.',
        image: '/images/product-eraser.jpg',
        tags: ['Lineas', 'Textura'],
      },
      {
        name: 'Collagen Activator',
        subtitle: 'Revitalizacion total',
        body: 'Rutina diaria de fuerza profesional para elasticidad, firmeza y tono uniforme.',
        image: '/images/product-collagen.jpg',
        tags: ['Colageno', 'Luminosidad'],
      },
      {
        name: 'Hydration Complex',
        subtitle: 'Hidratacion mesodermica',
        body: 'Soporte para protocolos de hidratacion con presentacion clinica premium.',
        image: '/images/product-activator.jpg',
        tags: ['Hidratacion', 'Confort'],
      },
      {
        name: 'Liquid Bandage',
        subtitle: 'Vendaje biologico activo',
        body: 'Concepto de reparacion para microlesiones, elasticidad y confort visible rapido.',
        image: '/images/product-liquid-bandage.png',
        tags: ['Recuperacion', 'Elasticidad'],
      },
    ],
    scienceKicker: 'Ciencia',
    scienceTitle: 'Construido para confianza profesional antes de visibilidad masiva.',
    scienceBody:
      'La siguiente fase debe convertir esta web en un activo comercial creible: claims verificados, materiales para distribuidores, modulos clinicos y medicion de conversion.',
    sciencePoints: [
      {
        title: 'Calidad trazable',
        body: 'Cada historia de producto debe conectar formula, disciplina de lote y documentacion lista para mercado.',
      },
      {
        title: 'Educacion premium',
        body: 'Las clinicas necesitan logica de protocolo clara, no lenguaje cosmetico ambiguo.',
      },
      {
        title: 'Expansion global',
        body: 'Ingles y espanol mantienen el sitio enfocado para lanzamiento internacional y origen espanol.',
      },
    ],
    ctaTitle: 'Inicia un protocolo cutaneo de precision.',
    ctaBody:
      'Para clinicas, distribuidores y socios de marca, PDOX esta preparado para convertirse en una plataforma dermocosmetica global enfocada.',
    ctaButton: 'Contactar PDOX',
    footerBody:
      'PDOX es una marca independiente de ciencia cutanea bio-enzimatica de precision con base en Madrid. Historia de investigacion, formulacion y produccion preparada para distribucion global.',
  },
};

const sectionIds = ['brand', 'technology', 'products', 'science', 'contact'];
const techIcons = [FlaskConical, Microscope, Beaker, Sparkles];
const scienceIcons = [ShieldCheck, Award, Globe2];

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [lang]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => goTo('home')} className="flex items-center gap-3" aria-label="PDOX home">
            <img src="/images/logo.png" alt="PDOX" className="h-8 w-auto invert brightness-200" />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => goTo(sectionIds[index])}
                className="text-[11px] uppercase text-white/55 transition-colors hover:text-[#C9A96E]"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="rounded-full border border-white/10 bg-white/5 p-1">
              {(['en', 'es'] as Lang[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-medium uppercase transition ${
                    lang === item ? 'bg-[#C9A96E] text-black' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0A0A0A] px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => goTo(sectionIds[index])}
                  className="rounded-md px-3 py-3 text-left text-xs uppercase text-white/70 hover:bg-white/5 hover:text-[#C9A96E]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-[92vh] overflow-hidden pt-16">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A0A0A]/80 to-[#0A0A0A]" />
          <div className="relative mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="reveal mb-5 text-[11px] uppercase tracking-[0.45em] text-[#C9A96E]">
                {t.heroEyebrow}
              </p>
              <h1 className="reveal text-[clamp(44px,8vw,104px)] leading-[0.88] text-white">
                {t.heroTitle}
              </h1>
              <p className="reveal mt-7 max-w-2xl text-sm leading-8 text-white/62 sm:text-base">
                {t.heroBody}
              </p>
              <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => goTo('products')}
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
                >
                  {t.heroPrimary}
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => goTo('technology')}
                  className="inline-flex items-center justify-center border border-white/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 transition hover:border-[#C9A96E] hover:text-[#C9A96E]"
                >
                  {t.heroSecondary}
                </button>
              </div>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-2">
              {t.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <div className="font-serif text-4xl text-[#C9A96E]">{stat.value}</div>
                  <div className="mt-2 text-[11px] uppercase leading-5 tracking-[0.18em] text-white/48">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="brand" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal">
              <img src="/images/lab-scene.jpg" alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <p className="reveal mb-4 text-[11px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.brandKicker}
              </p>
              <h2 className="reveal text-[clamp(32px,5vw,64px)] leading-tight">{t.brandTitle}</h2>
              <div className="mt-7 grid gap-5 text-sm leading-8 text-white/58">
                {t.brandBody.map((paragraph) => (
                  <p className="reveal" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="border-y border-white/10 bg-[#111] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="reveal mb-4 text-[11px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.techKicker}
              </p>
              <h2 className="reveal text-[clamp(32px,5vw,62px)] leading-tight">{t.techTitle}</h2>
              <p className="reveal mt-6 text-sm leading-8 text-white/55">{t.techBody}</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.techCards.map((card, index) => {
                const Icon = techIcons[index];
                return (
                  <article key={card.title} className="reveal border border-white/10 bg-black/25 p-6">
                    <Icon className="mb-6 h-8 w-8 text-[#C9A96E]" />
                    <h3 className="font-sans text-base font-medium text-white">{card.title}</h3>
                    <p className="mt-4 text-xs leading-6 text-white/48">{card.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="reveal mb-4 text-[11px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.productsKicker}
              </p>
              <h2 className="reveal text-[clamp(32px,5vw,62px)] leading-tight">{t.productsTitle}</h2>
              <p className="reveal mt-6 text-sm leading-8 text-white/55">{t.productsBody}</p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.products.map((product) => (
                <article
                  key={product.name}
                  className="reveal group overflow-hidden border border-white/10 bg-[#111] transition hover:-translate-y-1 hover:border-[#C9A96E]/45"
                >
                  <div className="aspect-[4/3] bg-black p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]">{product.subtitle}</p>
                    <h3 className="mt-2 font-sans text-lg font-medium">{product.name}</h3>
                    <p className="mt-4 min-h-[72px] text-xs leading-6 text-white/48">{product.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="border border-white/10 px-2.5 py-1 text-[10px] text-white/45">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="science" className="relative overflow-hidden bg-[#0F0E0B] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/enzyme-visual.jpg"
            alt=""
            className="absolute right-0 top-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="reveal mb-4 text-[11px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.scienceKicker}
              </p>
              <h2 className="reveal text-[clamp(32px,5vw,62px)] leading-tight">{t.scienceTitle}</h2>
              <p className="reveal mt-6 text-sm leading-8 text-white/55">{t.scienceBody}</p>
            </div>

            <div className="grid gap-4">
              {t.sciencePoints.map((point, index) => {
                const Icon = scienceIcons[index];
                return (
                  <article key={point.title} className="reveal border border-white/10 bg-black/35 p-6 backdrop-blur">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="h-6 w-6 text-[#C9A96E]" />
                      <h3 className="font-sans text-base font-medium">{point.title}</h3>
                    </div>
                    <p className="text-xs leading-6 text-white/50">{point.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#C9A96E] px-4 py-18 text-black sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Clock className="reveal mx-auto mb-6 h-8 w-8" />
            <h2 className="reveal text-[clamp(30px,5vw,58px)] leading-tight">{t.ctaTitle}</h2>
            <p className="reveal mx-auto mt-5 max-w-2xl text-sm leading-8 text-black/65">{t.ctaBody}</p>
            <a
              href="mailto:info@pdoxserum.com"
              className="reveal mt-8 inline-flex items-center gap-2 bg-black px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96E] transition hover:bg-white hover:text-black"
            >
              {t.ctaButton}
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <img src="/images/logo.png" alt="PDOX" className="mx-auto h-8 w-auto invert brightness-200 sm:mx-0" />
            <p className="mt-4 max-w-xl text-xs leading-6 text-white/42">{t.footerBody}</p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            (c) 2026 PDOX - Madrid - Global Distribution
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
