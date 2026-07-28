import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFoundPage({ lang }: { lang: 'en' | 'es' }) {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-[78vh] items-center bg-[#070809] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <p className="font-serif text-8xl text-[#C9A96E]">404</p>
        <h1 className="mt-6 text-[clamp(36px,6vw,64px)]">{lang === 'es' ? 'Pagina no encontrada.' : 'Page not found.'}</h1>
        <button onClick={() => navigate(lang === 'es' ? '/es/' : '/')} className="mt-10 inline-flex items-center gap-2 border border-white/15 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/70 hover:border-[#C9A96E] hover:text-[#C9A96E]">
          <ArrowLeft size={16} /> {lang === 'es' ? 'Volver al sitio' : 'Back to website'}
        </button>
      </div>
    </section>
  );
}
