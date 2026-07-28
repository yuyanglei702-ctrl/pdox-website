import { ArrowLeft, FileCheck2, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router';
import OfficialBackdrop from '../components/OfficialBackdrop';

type Props = { lang: 'en' | 'es' };

const content = {
  en: {
    eyebrow: 'Quality and traceability',
    title: 'Evidence is presented with its scope.',
    body: 'PDOX separates brand archives, product identity, cosmetic claims and commercial records. Materials shown here are public summaries and do not extend beyond the scope stated.',
    archive: 'Brand visit archive',
    archiveBody: 'Selected European laboratory visit imagery is retained as a brand archive. It is not presented as product certification, manufacturing-origin proof or efficacy evidence.',
    identity: 'Product identity register',
    identityBody: 'Current website product images, names and pack sizes are controlled as the public product reference. Packaging may be updated by market and batch.',
    claims: 'Cosmetic claims standard',
    claimsBody: 'Public benefit language is limited to cosmetic appearance and care support. Medical, injectable, filling and guaranteed-outcome language is excluded.',
    status: 'Public scope reviewed',
    back: 'Back to website',
  },
  es: {
    eyebrow: 'Calidad y trazabilidad',
    title: 'Cada evidencia se presenta con su alcance.',
    body: 'PDOX separa los archivos de marca, la identidad del producto, las declaraciones cosmeticas y los registros comerciales. Los materiales aqui mostrados son resumenes publicos y no superan el alcance indicado.',
    archive: 'Archivo de visita de marca',
    archiveBody: 'Las imagenes seleccionadas de visitas a laboratorios europeos se conservan como archivo de marca. No constituyen certificacion de producto, prueba del lugar de fabricacion ni evidencia de eficacia.',
    identity: 'Registro de identidad del producto',
    identityBody: 'Las imagenes, nombres y formatos actuales del sitio web son la referencia publica controlada. El envase puede variar segun el mercado y el lote.',
    claims: 'Estandar de declaraciones cosmeticas',
    claimsBody: 'El lenguaje publico se limita a la apariencia cosmetica y al apoyo del cuidado. Se excluyen afirmaciones medicas, inyectables, de relleno o de resultados garantizados.',
    status: 'Alcance publico revisado',
    back: 'Volver al sitio',
  },
};

export default function QualityTraceabilityPage({ lang }: Props) {
  const navigate = useNavigate();
  const t = content[lang];
  const records = [
    { title: t.archive, body: t.archiveBody },
    { title: t.identity, body: t.identityBody },
    { title: t.claims, body: t.claimsBody },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <OfficialBackdrop kind="archive" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/82 via-[#050505]/94 to-[#050505]" />
      <div className="relative mx-auto max-w-[1280px]">
        <button onClick={() => navigate(lang === 'es' ? '/es/' : '/')} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55 hover:text-[#D7B979]">
          <ArrowLeft size={16} /> {t.back}
        </button>
        <div className="mt-16 max-w-4xl">
          <FileCheck2 className="mb-8 h-9 w-9 text-[#D7B979]" />
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#D7B979]">{t.eyebrow}</p>
          <h1 className="mt-5 text-[clamp(42px,7vw,82px)] leading-[1.04]">{t.title}</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/62">{t.body}</p>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {records.map((record, index) => (
            <article key={record.title} className="border border-white/10 bg-[rgba(9,10,11,0.94)] p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-[#C9A96E]">0{index + 1}</span>
                <ShieldCheck className="h-5 w-5 text-[#BFC3C8]" />
              </div>
              <h2 className="mt-10 text-xl text-white">{record.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/52">{record.body}</p>
              <p className="mt-8 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.18em] text-[#D7B979]">{t.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
