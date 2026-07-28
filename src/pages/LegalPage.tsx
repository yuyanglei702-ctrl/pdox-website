import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

type Props = { lang: 'en' | 'es'; page: 'legal' | 'privacy' | 'terms' };

const pages = {
  en: {
    legal: ['Legal notice', 'PDOX is an international brand information website for professional skincare communication. It does not sell products, process orders or provide medical services. Official commercial and operator information is supplied through applicable partner documentation.'],
    privacy: ['Privacy', 'This static website does not request account registration or collect payment information. When you contact PDOX by email, your message is processed by your email provider and the recipient for enquiry handling. Hosting services may retain limited technical logs for security and reliability.'],
    terms: ['Website terms', 'Website content is provided for brand, product and professional-partnership information. Product descriptions concern cosmetic appearance and care support, not medical diagnosis or treatment. Availability, packaging and market documentation may vary.'],
    back: 'Back to website',
  },
  es: {
    legal: ['Aviso legal', 'PDOX es un sitio internacional de informacion de marca para la comunicacion profesional del cuidado de la piel. No vende productos, procesa pedidos ni presta servicios medicos. La informacion comercial y del operador se facilita en la documentacion aplicable para socios.'],
    privacy: ['Privacidad', 'Este sitio estatico no solicita registro de cuenta ni recopila informacion de pago. Al contactar con PDOX por correo electronico, el mensaje es tratado por su proveedor y el destinatario para gestionar la consulta. El alojamiento puede conservar registros tecnicos limitados por seguridad y fiabilidad.'],
    terms: ['Condiciones del sitio', 'El contenido se ofrece para informacion de marca, producto y colaboracion profesional. Las descripciones se refieren a la apariencia cosmetica y al apoyo del cuidado, no al diagnostico o tratamiento medico. La disponibilidad, el envase y la documentacion pueden variar segun el mercado.'],
    back: 'Volver al sitio',
  },
};

export default function LegalPage({ lang, page }: Props) {
  const navigate = useNavigate();
  const t = pages[lang];
  const [title, body] = t[page];

  return (
    <section className="min-h-[78vh] bg-[#070809] px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <button onClick={() => navigate(lang === 'es' ? '/es/' : '/')} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55 hover:text-[#D7B979]">
          <ArrowLeft size={16} /> {t.back}
        </button>
        <p className="mt-20 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">PDOX official website</p>
        <h1 className="mt-5 text-[clamp(42px,7vw,76px)] leading-tight">{title}</h1>
        <p className="mt-10 max-w-3xl border-t border-white/10 pt-10 text-base leading-9 text-white/58">{body}</p>
        <p className="mt-10 text-sm text-white/38">info@pdoxserum.com</p>
      </div>
    </section>
  );
}
