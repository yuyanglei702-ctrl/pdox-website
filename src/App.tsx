import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { HubPage } from './pages/HubPage';
import { hubRoutes, siteNavigation } from './lib/site-navigation';
import VerifyPage from './pages/VerifyPage';
import ChineseHome from './pages/ChineseHome';
import { copy } from './content/site-copy';
import type { Lang, Product, Stat, Copy } from './content/site-copy';
import { getSiteMetadata } from './lib/site-metadata';
import {
  ArrowLeft,
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

const techIcons = [FlaskConical, Microscope, Beaker, Sparkles];
const scienceIcons = [ShieldCheck, Award, Globe2];
const goldParticles = [
  /* normal particles 2-4px */
  { left: '6%', top: '12%', size: '3px', delay: '0s', duration: '18s', type: 'normal' },
  { left: '14%', top: '68%', size: '2px', delay: '2.2s', duration: '22s', type: 'normal' },
  { left: '22%', top: '36%', size: '3px', delay: '1.1s', duration: '16s', type: 'blur' },
  { left: '31%', top: '78%', size: '2px', delay: '3.4s', duration: '24s', type: 'normal' },
  { left: '43%', top: '24%', size: '3px', delay: '0.8s', duration: '20s', type: 'normal' },
  { left: '52%', top: '62%', size: '4px', delay: '4.2s', duration: '26s', type: 'bright' },
  { left: '61%', top: '16%', size: '2px', delay: '1.5s', duration: '19s', type: 'normal' },
  { left: '69%', top: '70%', size: '3px', delay: '2.8s', duration: '23s', type: 'normal' },
  { left: '78%', top: '32%', size: '3px', delay: '5.1s', duration: '17s', type: 'blur' },
  { left: '87%', top: '58%', size: '2px', delay: '3.6s', duration: '21s', type: 'normal' },
  { left: '92%', top: '22%', size: '3px', delay: '6.4s', duration: '25s', type: 'normal' },
  { left: '36%', top: '48%', size: '2px', delay: '2.9s', duration: '14s', type: 'normal' },
  { left: '10%', top: '85%', size: '3px', delay: '7.2s', duration: '28s', type: 'blur' },
  { left: '18%', top: '8%', size: '2px', delay: '4.5s', duration: '16s', type: 'normal' },
  { left: '28%', top: '55%', size: '3px', delay: '1.8s', duration: '20s', type: 'normal' },
  { left: '39%', top: '88%', size: '2px', delay: '5.3s', duration: '24s', type: 'normal' },
  { left: '48%', top: '15%', size: '3px', delay: '8.1s', duration: '22s', type: 'blur' },
  { left: '57%', top: '42%', size: '2px', delay: '3.7s', duration: '18s', type: 'normal' },
  { left: '66%', top: '92%', size: '3px', delay: '6.8s', duration: '26s', type: 'normal' },
  { left: '74%', top: '8%', size: '2px', delay: '2.4s', duration: '15s', type: 'normal' },
  { left: '83%', top: '38%', size: '3px', delay: '9.2s', duration: '27s', type: 'blur' },
  { left: '91%', top: '75%', size: '2px', delay: '4.1s', duration: '19s', type: 'normal' },
  { left: '5%', top: '45%', size: '3px', delay: '7.5s', duration: '23s', type: 'normal' },
  { left: '96%', top: '52%', size: '2px', delay: '5.8s', duration: '21s', type: 'normal' },
  { left: '3%', top: '28%', size: '3px', delay: '1.2s', duration: '20s', type: 'blur' },
  { left: '12%', top: '55%', size: '2px', delay: '3.8s', duration: '26s', type: 'normal' },
  { left: '24%', top: '18%', size: '3px', delay: '6.1s', duration: '24s', type: 'normal' },
  { left: '33%', top: '62%', size: '2px', delay: '2.5s', duration: '18s', type: 'normal' },
  { left: '46%', top: '38%', size: '4px', delay: '8.5s', duration: '30s', type: 'bright' },
  { left: '55%', top: '78%', size: '2px', delay: '4.2s', duration: '22s', type: 'normal' },
  { left: '63%', top: '28%', size: '3px', delay: '1.9s', duration: '16s', type: 'normal' },
  { left: '71%', top: '52%', size: '2px', delay: '5.6s', duration: '28s', type: 'normal' },
  { left: '79%', top: '82%', size: '3px', delay: '3.3s', duration: '20s', type: 'blur' },
  { left: '85%', top: '18%', size: '2px', delay: '7.8s', duration: '24s', type: 'normal' },
  { left: '94%', top: '42%', size: '3px', delay: '2.1s', duration: '19s', type: 'normal' },
  { left: '8%', top: '92%', size: '2px', delay: '9.5s', duration: '32s', type: 'normal' },
  { left: '16%', top: '42%', size: '3px', delay: '4.8s', duration: '21s', type: 'blur' },
  { left: '38%', top: '8%', size: '2px', delay: '6.3s', duration: '25s', type: 'normal' },
  { left: '50%', top: '88%', size: '3px', delay: '1.6s', duration: '17s', type: 'normal' },
  { left: '58%', top: '12%', size: '2px', delay: '8.9s', duration: '29s', type: 'normal' },
  { left: '68%', top: '48%', size: '3px', delay: '3.1s', duration: '23s', type: 'blur' },
  { left: '76%', top: '68%', size: '2px', delay: '5.4s', duration: '15s', type: 'normal' },
  { left: '88%', top: '8%', size: '3px', delay: '7.1s', duration: '27s', type: 'normal' },
  { left: '98%', top: '72%', size: '2px', delay: '2.7s', duration: '20s', type: 'normal' },
  { left: '2%', top: '62%', size: '3px', delay: '10.2s', duration: '26s', type: 'blur' },
  { left: '44%', top: '72%', size: '2px', delay: '4.4s', duration: '18s', type: 'normal' },
  { left: '53%', top: '32%', size: '3px', delay: '9.1s', duration: '22s', type: 'normal' },
  { left: '81%', top: '58%', size: '2px', delay: '6.7s', duration: '24s', type: 'normal' },
  /* bright highlight particles 6-10px */
  { left: '20%', top: '25%', size: '8px', delay: '0.5s', duration: '24s', type: 'bright' },
  { left: '65%', top: '55%', size: '6px', delay: '3.5s', duration: '28s', type: 'bright' },
  { left: '40%', top: '75%', size: '10px', delay: '7.0s', duration: '20s', type: 'bright' },
  { left: '80%', top: '20%', size: '7px', delay: '5.5s', duration: '26s', type: 'bright' },
  { left: '15%', top: '50%', size: '9px', delay: '2.0s', duration: '22s', type: 'bright' },
  { left: '72%', top: '82%', size: '6px', delay: '8.5s', duration: '30s', type: 'bright' },
  { left: '35%', top: '15%', size: '8px', delay: '4.0s', duration: '18s', type: 'bright' },
  { left: '90%', top: '65%', size: '7px', delay: '1.0s', duration: '25s', type: 'bright' },
];

function GoldParticleField({
  subtle = false,
  count = 12,
  className = '',
}: {
  subtle?: boolean;
  count?: number;
  className?: string;
}) {
  const particleClass = (type: string) => {
    if (type === 'bright') return 'pdox-gold-particle-bright';
    if (type === 'blur') return 'pdox-gold-particle-blur';
    return 'pdox-gold-particle';
  };
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden z-[2] ${className}`}
      aria-hidden="true"
    >
      <div className={`pdox-gold-haze ${subtle ? 'opacity-45' : 'opacity-85'}`} />
      {goldParticles.slice(0, count).map((particle, i) => (
        <span
          key={`${particle.left}-${particle.top}-${i}`}
          className={particleClass(particle.type)}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

function SoftGlow() {
  return <div className="pdox-soft-glow" aria-hidden="true" />;
}

function GrainTexture() {
  return <div className="pdox-grain" aria-hidden="true" />;
}

function MolecularDriftLayer({ count = 6 }: { count?: number }) {
  const molecules = [
    { left: '5%', top: '12%', w: 120, h: 100, delay: '0s', duration: '26s', rotate: 12 },
    { left: '70%', top: '8%', w: 140, h: 120, delay: '5s', duration: '30s', rotate: -18 },
    { left: '30%', top: '55%', w: 160, h: 110, delay: '10s', duration: '34s', rotate: 22 },
    { left: '78%', top: '60%', w: 100, h: 90, delay: '3s', duration: '28s', rotate: -25 },
    { left: '12%', top: '70%', w: 130, h: 100, delay: '15s', duration: '32s', rotate: 8 },
    { left: '50%', top: '25%', w: 150, h: 130, delay: '7s', duration: '24s', rotate: -12 },
    { left: '40%', top: '80%', w: 110, h: 100, delay: '12s', duration: '36s', rotate: 16 },
    { left: '88%', top: '35%', w: 120, h: 110, delay: '2s', duration: '29s', rotate: -6 },
  ];

  return (
    <div className="pdox-molecular-drift z-[2]" aria-hidden="true">
      {molecules.slice(0, count).map((m, i) => (
        <div
          key={i}
          className="pdox-molecule"
          style={{
            left: m.left,
            top: m.top,
            width: m.w,
            height: m.h,
            animationDelay: m.delay,
            animationDuration: m.duration,
            opacity: 0.30,
          }}
        >
          <div
            className="pdox-molecule-node"
            style={{ left: 0, top: 0, width: 8, height: 8 }}
          />
          <div
            className="pdox-molecule-node"
            style={{ right: '15%', top: '25%', width: 6, height: 6 }}
          />
          <div
            className="pdox-molecule-node"
            style={{ left: '30%', bottom: '10%', width: 7, height: 7 }}
          />
          <div
            className="pdox-molecule-node"
            style={{ right: '5%', bottom: '30%', width: 5, height: 5 }}
          />
          <div
            className="pdox-molecule-node"
            style={{ left: '45%', top: '10%', width: 6, height: 6 }}
          />
          <div
            className="pdox-molecule-line"
            style={{
              left: 4,
              top: 4,
              width: m.w * 0.55,
              transform: `rotate(${m.rotate}deg)`,
            }}
          />
          <div
            className="pdox-molecule-line"
            style={{
              left: m.w * 0.35,
              top: m.h * 0.25,
              width: m.w * 0.45,
              transform: `rotate(${m.rotate + 55}deg)`,
            }}
          />
          <div
            className="pdox-molecule-line"
            style={{
              left: m.w * 0.20,
              top: m.h * 0.55,
              width: m.w * 0.40,
              transform: `rotate(${m.rotate - 40}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function GoldLightSweep() {
  return <div className="pdox-light-sweep z-[2]" aria-hidden="true" />;
}

function ProductMarquee({
  products,
  copy,
  onOpenProduct,
}: {
  products: Product[];
  copy: Copy;
  onOpenProduct: (slug: string) => void;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-20 lg:py-28">
      <img
        src="/images/optimized/bg-molecular-gold-flow.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25 z-0"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/88 via-[#0A0A0A]/75 to-[#0A0A0A]/88" />
      <GoldParticleField subtle count={10} />
      <GrainTexture />
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
            {copy.productMarqueeKicker}
          </p>
          <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">
            {copy.productMarqueeTitle}
          </h2>
          <p className="reveal mt-6 text-base leading-9 text-white/55">
            {copy.productMarqueeBody}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-14 overflow-hidden pl-4 sm:pl-6 lg:pl-8">
        <div className="pdox-marquee-track flex w-max">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="pdox-marquee-set flex shrink-0 items-stretch gap-6 pr-6"
              aria-hidden={groupIndex === 1}
            >
              {products.map((product) => (
                <button
                  key={`${groupIndex}-${product.slug}`}
                  onClick={() => onOpenProduct(product.slug)}
                  tabIndex={groupIndex === 1 ? -1 : 0}
                  className="pdox-card-premium group flex h-[410px] w-[min(76vw,300px)] shrink-0 flex-col overflow-hidden border border-white/10 bg-[#111] text-left sm:h-[430px] sm:w-[320px] lg:h-[455px] lg:w-[340px]"
                >
                  <div className="h-[250px] shrink-0 overflow-hidden bg-black p-6 sm:h-[270px] lg:h-[290px]">
                    <img
                      src={product.image}
                      alt={groupIndex === 1 ? '' : product.name}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A96E]">{product.subtitle}</p>
                    <h3 className="mt-3 line-clamp-2 font-sans text-lg font-medium">{product.name}</h3>
                    <div className="mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
                      {copy.productMarqueeCta}
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDetail({
  product,
  copy,
  lang,
  onBack,
}: {
  product: Product;
  copy: Copy;
  lang: Lang;
  onBack: () => void;
}) {
  const highlights =
    product.detailHighlights ?? (lang === 'en'
      ? [
          `${product.subtitle} presented for professional product education and portfolio review.`,
          'Cosmetic care language focused on appearance, comfort and a clear product role.',
          'Product-specific evidence and documentation should be reviewed separately when available.',
        ]
      : [
          `${product.subtitle} presentado para educacion profesional y revision del portafolio.`,
          'Lenguaje cosmetico centrado en apariencia, confort y un rol de producto claro.',
          'La evidencia y documentacion especifica deben revisarse por separado cuando esten disponibles.',
        ]);
  const protocol =
    product.detailProtocol ?? (lang === 'en'
      ? 'Use this page as the professional product snapshot: product role, visual identity, benefit language and a clear contact path for commercial follow-up.'
      : 'Usa esta pagina como ficha profesional del producto: rol, identidad visual, lenguaje de beneficio y contacto claro para seguimiento comercial.');

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <img src="/images/optimized/hero-bg-gold.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-[#0A0A0A]/95 to-[#0A0A0A]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <button
          onClick={onBack}
          className="reveal mb-10 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:text-white"
        >
          <ArrowLeft size={18} />
          {copy.detailBack}
        </button>

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="reveal border border-white/10 bg-black/35 p-10">
            <div className="aspect-square bg-[#090909] p-10">
              <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </div>
          </div>

          <div>
            <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              {copy.detailEyebrow}
            </p>
            <h1 className="reveal font-sans text-[clamp(42px,6vw,84px)] font-medium leading-none">
              {product.name}
            </h1>
            <p className="reveal mt-5 text-base uppercase tracking-[0.24em] text-[#C9A96E]">{product.subtitle}</p>
            <p className="reveal mt-8 max-w-2xl text-lg leading-9 text-white/62">{product.body}</p>

            <div className="reveal mt-8 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-white/50">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="reveal border border-white/10 bg-white/[0.03] p-8">
                <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                  {copy.detailOverview}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/52">{protocol}</p>
              </article>

              <article className="reveal border border-white/10 bg-white/[0.03] p-8">
                <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                  {copy.detailProtocol}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/52">
                  {lang === 'en'
                    ? 'Designed for professional consultation, product education and distributor-facing range presentation.'
                    : 'Disenado para consulta profesional, educacion de producto y presentacion de linea ante distribuidores.'}
                </p>
              </article>
            </div>

            <div className="reveal mt-10 border border-white/10 bg-black/25 p-8">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                {copy.detailHighlights}
              </h2>
              <div className="mt-6 grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-base leading-8 text-white/55">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`/contact?topic=documentation&product=${encodeURIComponent(product.name)}`}
              className="reveal mt-10 inline-flex items-center gap-2 bg-[#C9A96E] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white"
            >
              {copy.detailContact}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightDetail({
  insight,
  copy,
  onBack,
}: {
  insight: Stat;
  copy: Copy;
  onBack: () => void;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <img src="/images/optimized/hero-bg-gold.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-[#0A0A0A]/95 to-[#0A0A0A]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <button
          onClick={onBack}
          className="reveal mb-10 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:text-white"
        >
          <ArrowLeft size={18} />
          {copy.insightBack}
        </button>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              {copy.insightEyebrow}
            </p>
            <h1 className="reveal font-sans text-[clamp(42px,6vw,84px)] font-medium leading-none">
              {insight.title}
            </h1>
            <p className="reveal mt-8 max-w-2xl text-lg leading-9 text-white/62">{insight.summary}</p>

            <div className="reveal mt-12 border border-white/10 bg-white/[0.03] p-8">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                {copy.insightSections}
              </h2>
              <div className="mt-6 grid gap-5">
                {insight.sections.map((section) => (
                  <div key={section.title} className="flex gap-3 text-base leading-8 text-white/55">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E]" />
                    <div>
                      <span className="font-medium text-white/80">{section.title}</span>
                      <p className="text-white/50">{section.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-10 border border-white/10 bg-black/25 p-8">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                {copy.insightPartnerValue}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/52">{insight.partnerValue}</p>
            </div>

            <a
              href="/contact?topic=documentation"
              className="reveal mt-10 inline-flex items-center gap-2 bg-[#C9A96E] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white"
            >
              {copy.detailContact}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="reveal overflow-hidden border border-white/10 bg-black/20 transition hover:border-[#C9A96E]/45">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContentDetail({
  title,
  summary,
  sections,
  partnerValue,
  image,
  copy,
  onBack,
  eyebrow,
}: {
  title: string;
  summary: string;
  sections: { title: string; body: string }[];
  partnerValue: string;
  image: string;
  copy: Copy;
  onBack: () => void;
  eyebrow: string;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <img src="/images/optimized/hero-bg-gold.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-[#0A0A0A]/95 to-[#0A0A0A]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <button
          onClick={onBack}
          className="reveal mb-10 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:text-white"
        >
          <ArrowLeft size={18} />
          {copy.insightBack}
        </button>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              {eyebrow}
            </p>
            <h1 className="reveal font-sans text-[clamp(42px,6vw,84px)] font-medium leading-none">
              {title}
            </h1>
            <p className="reveal mt-8 max-w-2xl text-lg leading-9 text-white/62">{summary}</p>

            <div className="reveal mt-12 border border-white/10 bg-white/[0.03] p-8">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                {copy.insightSections}
              </h2>
              <div className="mt-6 grid gap-5">
                {sections.map((section) => (
                  <div key={section.title} className="flex gap-3 text-base leading-8 text-white/55">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E]" />
                    <div>
                      <span className="font-medium text-white/80">{section.title}</span>
                      <p className="text-white/50">{section.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-10 border border-white/10 bg-black/25 p-8">
              <h2 className="font-sans text-base font-medium uppercase tracking-[0.2em] text-white">
                {copy.insightPartnerValue}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/52">{partnerValue}</p>
            </div>

            <a
              href="/contact?topic=documentation"
              className="reveal mt-10 inline-flex items-center gap-2 bg-[#C9A96E] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white"
            >
              {copy.detailContact}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="reveal overflow-hidden border border-white/10 bg-black/20 transition hover:border-[#C9A96E]/45">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function App() {
  const [lang, setLang] = useState<Lang>(() => typeof window !== 'undefined' && localStorage.getItem('pdox-language') === 'es' ? 'es' : 'en');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = copy[lang];
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  const activeProduct = currentPath.startsWith('/products/')
    ? t.products.find((product) => `/products/${product.slug}` === currentPath)
    : undefined;
  const activeInsight = currentPath.startsWith('/insights/')
    ? t.stats.find((stat) => `/insights/${stat.slug}` === currentPath)
    : undefined;
  const activeBrandStory = currentPath === '/brand-story';
  const activeTechCard = currentPath.startsWith('/technology/')
    ? t.techCards.find((card) => `/technology/${card.slug}` === currentPath)
    : undefined;
  const activeHub = hubRoutes.includes(currentPath);
  const activeChineseHome = currentPath === '/zh-cn';
  const knownRoute = activeChineseHome || currentPath === '/' || activeHub || activeProduct || activeInsight || activeBrandStory || activeTechCard || currentPath === '/verify' || currentPath === '/official-channels';
  const navItems = siteNavigation(lang);
  const activeVerify = currentPath === '/verify' || currentPath === '/official-channels';
  const traceabilityCopy = lang === 'en'
    ? {
        kicker: 'Brand Visit Archive',
        title: 'Traceability, with scope made clear.',
        body: 'PDOX presents selected European laboratory-visit imagery as a brand archive. Product claims, manufacturing information and supporting documents must be reviewed according to the specific product and document scope.',
        cards: [
          { title: 'Visit archive', body: 'Photographs document a visit and visual record; they are not presented as product certification.', icon: Globe2 },
          { title: 'Product-specific review', body: 'Reports, certificates and public claims should be matched to the named product and actual document scope.', icon: ShieldCheck },
          { title: 'Official enquiries', body: 'Professional partners can request current product information through the official PDOX contact path.', icon: Award },
        ],
      }
    : {
        kicker: 'Archivo de Visita de Marca',
        title: 'Trazabilidad con un alcance claro.',
        body: 'PDOX presenta imagenes seleccionadas de visitas a laboratorios europeos como archivo de marca. Claims, fabricacion y documentos deben revisarse segun el producto y alcance especifico.',
        cards: [
          { title: 'Archivo de visita', body: 'Las fotografias documentan una visita; no se presentan como certificacion de producto.', icon: Globe2 },
          { title: 'Revision por producto', body: 'Informes, certificados y claims publicos deben corresponder al producto y alcance real del documento.', icon: ShieldCheck },
          { title: 'Consultas oficiales', body: 'Los socios profesionales pueden solicitar informacion actual mediante el contacto oficial PDOX.', icon: Award },
        ],
      };
  const contactTopics = lang === 'en'
    ? ['Distribution', 'Clinic Partnerships', 'Product Documentation']
    : ['Distribucion', 'Colaboracion con Clinicas', 'Documentacion de Producto'];

  useEffect(() => {
    localStorage.setItem('pdox-language', lang);
    window.scrollTo({ top: 0 });
    const metadata = getSiteMetadata(currentPath, lang);
    document.documentElement.lang = metadata.lang;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.title = metadata.title;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = metadata.canonical;

  }, [lang, currentPath]);

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
  }, [lang, currentPath]);

  const goTo = (id: string) => {
    const scrollToSection = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (currentPath !== '/') {
      navigate('/');
      window.setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
    setMenuOpen(false);
  };

  const openProduct = (slug: string) => {
    navigate(`/products/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openInsight = (slug: string) => {
    navigate(`/insights/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => goTo('home')} className="flex items-center gap-3" aria-label="PDOX home">
            <img src="/images/logo.png" alt="PDOX" decoding="async" fetchPriority="high" className="h-10 w-auto invert brightness-200" />
          </button>

          <nav aria-label={lang === 'en' ? 'Main navigation' : 'Navegacion principal'} className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} aria-current={currentPath === item.href ? 'page' : undefined}
                className={`text-[11px] xl:text-[12px] uppercase tracking-wide transition-colors hover:text-[#C9A96E] ${currentPath === item.href ? 'text-[#C9A96E]' : 'text-white/65'}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 p-1">
              {(['en', 'es'] as Lang[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase transition ${
                    lang === item ? 'bg-[#C9A96E] text-black' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {item === 'en' ? 'EN' : 'ES'}
                </button>
              ))}
            </div>
            <Link to="/zh-cn" onClick={() => setMenuOpen(false)} aria-label="PDOX 普特奥斯中文品牌介绍" className="px-1 text-[11px] text-[#C9A96E]">中文</Link>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-navigation" className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-white/10 bg-[#0A0A0A] px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-[1500px] gap-2">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} aria-current={currentPath === item.href ? 'page' : undefined}
                  className="rounded-md px-3 py-3 text-left text-sm uppercase text-white/70 hover:bg-white/5 hover:text-[#C9A96E]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {activeChineseHome ? (
          <ChineseHome />
        ) : activeHub ? (
          <HubPage path={currentPath} lang={lang} content={t} />
        ) : !knownRoute ? (
          <section className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center"><h1 className="text-5xl">{lang === 'en' ? 'Page not found' : 'Pagina no encontrada'}</h1><Link to="/products" className="mt-8 inline-block text-[#C9A96E]">{lang === 'en' ? 'Explore products' : 'Explorar productos'}</Link></section>
        ) : activeProduct ? (
          <ProductDetail product={activeProduct} copy={t} lang={lang} onBack={() => goTo('products')} />
        ) : activeInsight ? (
          <InsightDetail insight={activeInsight} copy={t} onBack={() => goTo('overview')} />
        ) : activeBrandStory ? (
          <ContentDetail
            title={t.brandStoryTitle}
            summary={t.brandStorySummary}
            sections={t.brandStorySections}
            partnerValue={t.brandStoryPartnerValue}
            image="/images/lab-scene.jpg"
            copy={t}
            onBack={() => goTo('brand')}
            eyebrow={lang === 'en' ? 'Brand Story' : 'Historia de Marca'}
          />
        ) : activeTechCard ? (
          <ContentDetail
            title={activeTechCard.detailTitle}
            summary={activeTechCard.detailSummary}
            sections={activeTechCard.detailSections}
            partnerValue={activeTechCard.detailPartnerValue}
            image={activeTechCard.image}
            copy={t}
            onBack={() => goTo('technology')}
            eyebrow={lang === 'en' ? 'Technology' : 'Tecnologia'}
          />
        ) : activeVerify ? (
          <VerifyPage />
        ) : (
          <>
        <section id="home" className="relative min-h-screen overflow-hidden pt-20">
          <img
            src="/images/optimized/hero-bg-gold.webp"
            alt=""
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-55 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_32%,rgba(201,169,110,0.14),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.18),#0A0A0A_92%)]" />
          <GoldParticleField count={28} />
          <MolecularDriftLayer count={4} />
          <GoldLightSweep />
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <p className="reveal mb-6 text-[13px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.heroEyebrow}
            </p>
            <div className="reveal relative">
              <div className="pdox-logo-breathe" />
              <div className="absolute inset-x-0 top-1/2 mx-auto h-28 w-80 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />
              <img src="/images/logo.png" alt="PDOX" decoding="async" fetchPriority="high" className="relative mx-auto h-auto w-[min(72vw,480px)] invert brightness-200" />
            </div>
            <h1 className="sr-only">PDOX 普特奥斯</h1>
            <Link to="/zh-cn" className="reveal mt-7 font-sans text-sm tracking-[0.15em] text-[#C9A96E]">PDOX 普特奥斯 · 中文品牌介绍</Link>
            <p className="reveal mt-10 max-w-3xl text-lg leading-9 text-white/68">
                {t.heroBody}
            </p>
            <div className="reveal mt-12 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => goTo('products')}
                  className="pdox-btn-shine inline-flex items-center justify-center gap-2 bg-[#C9A96E] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white"
                >
                  {t.heroPrimary}
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => goTo('technology')}
                  className="inline-flex items-center justify-center border border-white/15 px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:border-[#C9A96E] hover:text-[#C9A96E]"
                >
                  {t.heroSecondary}
                </button>
            </div>
          </div>
        </section>

        <section id="overview" className="relative overflow-hidden border-y border-white/10 bg-[#0B0C0E] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/bg-molecular-gold-flow.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/84 via-[#0A0A0A]/68 to-[#0A0A0A]/88" />
          <GoldParticleField subtle count={18} />
          <MolecularDriftLayer count={3} />
          <GoldLightSweep />
          <GrainTexture />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.overviewKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,76px)] leading-tight">{t.overviewTitle}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/58">{t.overviewBody}</p>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2">
              {t.stats.map((stat) => (
                <button
                  key={stat.label}
                  onClick={() => openInsight(stat.slug)}
                  className="pdox-card-premium group cursor-pointer border border-white/10 bg-black/35 p-7 text-left backdrop-blur-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-serif text-5xl text-[#C9A96E]">{stat.value}</div>
                    <ArrowRight size={18} className="text-[#C9A96E] opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="mt-3 text-sm uppercase leading-6 tracking-[0.16em] text-white/48">
                    {stat.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="brand" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/bg-lab-champagne.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/86 via-[#0A0A0A]/72 to-[#0A0A0A]/90" />
          <GoldParticleField subtle count={10} />
          <div className="pdox-champagne-glow" />
          <SoftGlow />
          <GrainTexture />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <button
              onClick={() => navigate('/brand-story')}
              className="pdox-card-premium reveal group relative overflow-hidden border border-white/10 text-left"
            >
              <img
                src="/images/lab-scene.jpg"
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center p-8">
                <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9A96E] opacity-0 transition group-hover:opacity-100">
                  {lang === 'en' ? 'View Brand Story' : 'Ver historia de marca'}
                </span>
              </div>
            </button>
            <div>
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.brandKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,76px)] leading-tight">{t.brandTitle}</h2>
              <div className="mt-8 grid gap-6 text-base leading-9 text-white/58">
                {t.brandBody.map((paragraph) => (
                  <p className="reveal" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="relative overflow-hidden border-y border-white/10 bg-[#0B0C0E] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/bg-molecular-gold-flow.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/84 via-[#0A0A0A]/68 to-[#0A0A0A]/88" />
          <GoldParticleField subtle count={20} />
          <MolecularDriftLayer count={3} />
          <GoldLightSweep />
          <GrainTexture />
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="max-w-3xl">
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.techKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.techTitle}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/55">{t.techBody}</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.techCards.map((card, index) => {
                const Icon = techIcons[index];
                return (
                  <button
                    key={card.title}
                    onClick={() => navigate(`/technology/${card.slug}`)}
                    className="pdox-card-premium reveal group cursor-pointer overflow-hidden border border-white/10 bg-black/25 text-left focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/70"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-end justify-center p-5">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A96E] opacity-0 transition group-hover:opacity-100">
                          {lang === 'en' ? 'View Details' : 'Ver detalles'}
                        </span>
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="mb-4 flex items-center gap-3">
                        <Icon className="h-7 w-7 text-[#C9A96E]" />
                        <h3 className="font-sans text-lg font-medium text-white">{card.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-white/48">{card.body}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/bg-lab-champagne.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/86 via-[#0A0A0A]/72 to-[#0A0A0A]/90" />
          <GoldParticleField subtle count={10} />
          <div className="pdox-champagne-glow" />
          <SoftGlow />
          <GrainTexture />
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.productsKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.productsTitle}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/55">{t.productsBody}</p>
              <p className="reveal mt-4 text-[13px] uppercase tracking-[0.18em] text-[#C9A96E]/70">{t.detailHint}</p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.products.map((product) => (
                <button
                  key={product.name}
                  onClick={() => openProduct(product.slug)}
                  className="pdox-card-premium reveal group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111] text-left focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/70"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-contain transition duration-700 ${
                        product.slug === 'youthful-eye-aqua-essence'
                          ? 'translate-y-[3%] scale-[1.14] group-hover:scale-[1.18]'
                          : 'group-hover:scale-[1.04]'
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-[12px] uppercase tracking-[0.24em] text-[#C9A96E]">{product.subtitle}</p>
                    <h3 className="mt-3 font-sans text-xl font-medium">{product.name}</h3>
                    <p className="mt-5 min-h-[80px] text-sm leading-7 text-white/48">{product.body}</p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
                      {t.detailEyebrow}
                      <ArrowRight size={16} />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="border border-white/10 px-3 py-1.5 text-[11px] text-white/45">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="science" className="relative overflow-hidden bg-[#0B0C0E] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/enzyme-visual.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute right-0 top-0 h-full w-full object-cover opacity-15 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F0E0B] via-[#0F0E0B]/80 to-transparent" />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.scienceKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.scienceTitle}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/55">{t.scienceBody}</p>
            </div>

            <div className="grid gap-5">
              {t.sciencePoints.map((point, index) => {
                const Icon = scienceIcons[index];
                return (
                  <article key={point.title} className="reveal border border-white/10 bg-black/35 p-8 backdrop-blur">
                    <div className="mb-5 flex items-center gap-3">
                      <Icon className="h-7 w-7 text-[#C9A96E]" />
                      <h3 className="font-sans text-lg font-medium">{point.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-white/50">{point.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="partners" className="relative overflow-hidden border-y border-white/10 bg-[#111214] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <GoldParticleField subtle count={8} />
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                  {t.channelsKicker}
                </p>
                <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.channelsTitle}</h2>
              </div>
              <p className="reveal text-base leading-9 text-white/55">{t.channelsBody}</p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {t.channels.map((channel) => (
                <article key={channel.title} className="reveal border border-white/10 bg-black/30 p-8 backdrop-blur-md transition hover:border-[#C9A96E]/45">
                  <h3 className="font-sans text-xl font-medium text-white">{channel.title}</h3>
                  <p className="mt-5 min-h-[112px] text-base leading-8 text-white/52">{channel.body}</p>
                  <div className="mt-8 grid gap-3">
                    {channel.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-[13px] uppercase tracking-[0.16em] text-white/45">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0A] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.protocolKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.protocolTitle}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/55">{t.protocolBody}</p>
            </div>

            <div className="grid gap-5">
              {t.protocolSteps.map((step) => (
                <article key={step.value} className="reveal grid gap-5 border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-[100px_1fr]">
                  <div className="font-serif text-6xl text-[#C9A96E]">{step.value}</div>
                  <div>
                    <h3 className="font-sans text-lg font-medium uppercase tracking-[0.16em] text-white">{step.title}</h3>
                    <p className="mt-4 text-base leading-8 text-white/52">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-white/10 bg-[#0B0C0E] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {t.faqKicker}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">{t.faqTitle}</h2>
            </div>

            <div className="mt-14 grid gap-5">
              {t.faqs.map((item) => (
                <article key={item.question} className="reveal border border-white/10 bg-black/30 p-8">
                  <h3 className="font-sans text-lg font-medium text-white">{item.question}</h3>
                  <p className="mt-4 text-base leading-8 text-white/52">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProductMarquee
          products={t.products}
          copy={t}
          onOpenProduct={(slug) => openProduct(slug)}
        />

        <section id="source-traceability" className="relative overflow-hidden border-y border-white/10 bg-[#111214] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/bg-molecular-gold-flow.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-15 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#111214]/96 via-[#111214]/88 to-[#070708]/94" />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="reveal mx-auto w-full max-w-[520px] overflow-hidden border border-[#D7D4CB]/20 bg-black/35 p-3 shadow-[0_28px_80px_-26px_rgba(0,0,0,0.82)] lg:mx-0">
              <img
                src="/images/optimized/source-traceability-en.webp"
                alt="PDOX European laboratory visit archive"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>

            <div>
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                {traceabilityCopy.kicker}
              </p>
              <h2 className="reveal max-w-3xl text-[clamp(40px,5vw,72px)] leading-tight">{traceabilityCopy.title}</h2>
              <p className="reveal mt-8 text-base leading-9 text-white/55">
                {traceabilityCopy.body}
              </p>
              <div className="mt-10 grid gap-4">
                {traceabilityCopy.cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="reveal grid gap-5 border border-[#D7D4CB]/15 bg-white/[0.035] p-6 sm:grid-cols-[44px_1fr]">
                      <Icon className="h-7 w-7 text-[#D7D4CB]" />
                      <div>
                        <h3 className="font-sans text-base font-medium text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/52">{card.body}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[linear-gradient(115deg,#D6BC83_0%,#C9A96E_48%,#B89455_100%)] px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Clock className="reveal mx-auto mb-8 h-9 w-9" />
            <h2 className="reveal text-[clamp(34px,5vw,64px)] leading-tight">{t.ctaTitle}</h2>
            <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-9 text-black/65">{t.ctaBody}</p>
            <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
              {contactTopics.map((topic) => (
                <span key={topic} className="border border-black/20 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/65">
                  {topic}
                </span>
              ))}
            </div>
            <a
              href="mailto:info@pdoxserum.com?subject=PDOX%20Professional%20Enquiry"
              className="reveal mt-10 inline-flex items-center gap-2 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:bg-white hover:text-black"
            >
              {t.ctaButton}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div><Link to="/" aria-label="PDOX home"><img src="/images/logo.png" alt="PDOX" loading="lazy" className="h-9 w-auto invert brightness-200" /></Link><p className="mt-5 max-w-sm text-sm leading-7 text-white/55">{t.footerBody}</p></div>
            <div><h2 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A96E]">{lang === 'en' ? 'Explore PDOX' : 'Explorar PDOX'}</h2><nav className="mt-5 grid gap-3" aria-label="Footer navigation"><Link to="/zh-cn" className="text-sm text-white/60 hover:text-[#C9A96E]">PDOX 普特奥斯 · 中文介绍</Link>{navItems.map(item => <Link key={item.href} to={item.href} className="text-sm text-white/60 hover:text-[#C9A96E]">{item.label}</Link>)}</nav></div>
            <div><h2 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A96E]">{t.productsKicker}</h2><div className="mt-5 grid gap-3">{t.products.map(product => <Link key={product.slug} to={`/products/${product.slug}`} className="text-sm leading-6 text-white/60 hover:text-[#C9A96E]">{product.name}</Link>)}</div></div>
            <div><h2 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A96E]">{lang === 'en' ? 'Information & support' : 'Informacion y soporte'}</h2><div className="mt-5 grid gap-3 text-sm text-white/60"><Link to="/traceability" className="hover:text-[#C9A96E]">{lang === 'en' ? 'Visit archive' : 'Archivo de visita'}</Link><Link to="/official-channels" className="hover:text-[#C9A96E]">{lang === 'en' ? 'Official channels' : 'Canales oficiales'}</Link><Link to="/faq" className="hover:text-[#C9A96E]">FAQ</Link><Link to="/contact?topic=documentation" className="hover:text-[#C9A96E]">{lang === 'en' ? 'Request product information' : 'Solicitar informacion'}</Link><a href="mailto:info@pdoxserum.com" className="break-all hover:text-[#C9A96E]">info@pdoxserum.com</a></div></div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.14em] text-white/45"><span>PDOX 普特奥斯 · Official Website | www.pdoxserum.com</span><span>(c) 2026 PDOX</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
