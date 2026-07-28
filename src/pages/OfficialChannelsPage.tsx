import { ArrowLeft, Globe2, Mail, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router';
import OfficialBackdrop from '../components/OfficialBackdrop';

type Props = { lang: 'en' | 'es' };

const content = {
  en: {
    eyebrow: 'Official PDOX channels',
    title: 'Confirm the source before you purchase.',
    body: 'This page confirms PDOX public contact channels. It does not verify individual serial numbers or guarantee products obtained from an unlisted seller.',
    domain: 'Official domain',
    email: 'Official enquiries',
    notice: 'Serial-code verification is not currently available on this website.',
    back: 'Back to website',
  },
  es: {
    eyebrow: 'Canales oficiales de PDOX',
    title: 'Confirme el origen antes de comprar.',
    body: 'Esta pagina confirma los canales publicos de contacto de PDOX. No verifica numeros de serie individuales ni garantiza productos obtenidos de vendedores no identificados.',
    domain: 'Dominio oficial',
    email: 'Consultas oficiales',
    notice: 'La verificacion de codigos individuales no esta disponible actualmente en este sitio web.',
    back: 'Volver al sitio',
  },
};

export default function OfficialChannelsPage({ lang }: Props) {
  const navigate = useNavigate();
  const t = content[lang];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <OfficialBackdrop kind="archive" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/88 to-[#050505]" />
      <div className="relative mx-auto max-w-5xl">
        <button onClick={() => navigate(lang === 'es' ? '/es/' : '/')} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55 hover:text-[#D7B979]">
          <ArrowLeft size={16} /> {t.back}
        </button>
        <div className="mt-16 max-w-3xl">
          <ShieldCheck className="mb-8 h-9 w-9 text-[#D7B979]" />
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#D7B979]">{t.eyebrow}</p>
          <h1 className="mt-5 text-[clamp(42px,7vw,82px)] leading-[1.04]">{t.title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/62">{t.body}</p>
        </div>
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          <a href="https://www.pdoxserum.com" className="bg-[rgba(9,10,11,0.96)] p-8 transition hover:bg-[#111214]">
            <Globe2 className="h-7 w-7 text-[#C9A96E]" />
            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-white/38">{t.domain}</p>
            <p className="mt-3 text-xl text-white">www.pdoxserum.com</p>
          </a>
          <a href="mailto:info@pdoxserum.com" className="bg-[rgba(9,10,11,0.96)] p-8 transition hover:bg-[#111214]">
            <Mail className="h-7 w-7 text-[#C9A96E]" />
            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-white/38">{t.email}</p>
            <p className="mt-3 text-xl text-white">info@pdoxserum.com</p>
          </a>
        </div>
        <p className="mt-8 border-l border-[#C9A96E]/60 pl-5 text-sm leading-7 text-white/45">{t.notice}</p>
      </div>
    </section>
  );
}
