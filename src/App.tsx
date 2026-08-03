import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import VerifyPage from './pages/VerifyPage';
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

type Lang = 'en' | 'es';

type Product = {
  slug: string;
  name: string;
  subtitle: string;
  body: string;
  image: string;
  tags: string[];
  detailHighlights?: string[];
  detailProtocol?: string;
};

type Stat = {
  value: string;
  label: string;
  slug: string;
  title: string;
  summary: string;
  sections: { title: string; body: string }[];
  partnerValue: string;
  image: string;
};

type Copy = {
  nav: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  stats: Stat[];
  overviewKicker: string;
  overviewTitle: string;
  overviewBody: string;
  brandKicker: string;
  brandTitle: string;
  brandBody: string[];
  techKicker: string;
  techTitle: string;
  techBody: string;
  techCards: { title: string; body: string; image: string; slug: string; detailTitle: string; detailSummary: string; detailSections: { title: string; body: string }[]; detailPartnerValue: string }[];
  productsKicker: string;
  productsTitle: string;
  productsBody: string;
  products: Product[];
  detailBack: string;
  detailEyebrow: string;
  detailOverview: string;
  detailHighlights: string;
  detailProtocol: string;
  detailContact: string;
  detailHint: string;
  scienceKicker: string;
  scienceTitle: string;
  scienceBody: string;
  sciencePoints: { title: string; body: string }[];
  channelsKicker: string;
  channelsTitle: string;
  channelsBody: string;
  channels: { title: string; body: string; points: string[] }[];
  protocolKicker: string;
  protocolTitle: string;
  protocolBody: string;
  protocolSteps: { value: string; title: string; body: string }[];
  faqKicker: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  productMarqueeKicker: string;
  productMarqueeTitle: string;
  productMarqueeBody: string;
  productMarqueeCta: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  footerBody: string;
  insightBack: string;
  insightEyebrow: string;
  insightSections: string;
  insightPartnerValue: string;
  brandStoryTitle: string;
  brandStorySummary: string;
  brandStorySections: { title: string; body: string }[];
  brandStoryPartnerValue: string;
};

const copy: Record<Lang, Copy> = {
  en: {
    nav: ['Brand', 'Technology', 'Products', 'Partners', 'FAQ', 'Contact'],
    heroEyebrow: 'Spanish bio-enzyme skin science',
    heroTitle: 'PDOX',
    heroBody:
      'Spanish premium bio-enzyme skincare presented for clinics, distributors and professional partners through a focused product portfolio, refined visual identity and responsible cosmetic language.',
    heroPrimary: 'Explore Products',
    heroSecondary: 'View Technology',
    stats: [
      {
        value: 'ES',
        label: 'Spanish brand perspective',
        slug: 'madrid-origin',
        title: 'A Spanish premium skincare perspective',
        summary:
          'PDOX presents a Spanish brand identity through restrained dermocosmetic design, professional product education and an international-facing visual language.',
        sections: [
          { title: 'European visual discipline', body: 'A precise, minimal presentation keeps products and information ahead of decoration.' },
          { title: 'Professional audience', body: 'The website is structured for clinics, distributors and partners who need a clear introduction to the range.' },
          { title: 'Responsible public language', body: 'Public copy stays within cosmetic positioning and separates brand narrative from product-specific evidence.' },
        ],
        image: '/images/optimized/insight-madrid-origin.webp',
        partnerValue: 'Gives partners a concise and responsible way to introduce PDOX in professional conversations.',
      },
      {
        value: '06',
        label: 'focused product portfolio',
        slug: 'enzyme-platform',
        title: 'A focused six-product portfolio',
        summary:
          'The current PDOX range is organized around visible skincare priorities including comfort, contour care, hydration and the appearance of smoother skin.',
        sections: [
          { title: 'Clear product roles', body: 'Each product has a distinct visual identity and a concise cosmetic care direction.' },
          { title: 'Consistent presentation', body: 'Shared card structure, photography and terminology make the portfolio easier to review.' },
          { title: 'Dedicated detail pages', body: 'Every product links to a focused page for positioning, highlights and contact.' },
        ],
        image: '/images/optimized/insight-enzyme-platform.webp',
        partnerValue: 'Helps partners understand the current range before requesting product-specific materials.',
      },
      {
        value: 'EN',
        label: 'international primary language',
        slug: 'stability-target',
        title: 'International-first brand presentation',
        summary:
          'English is the primary public language, supported by Spanish for a consistent international brand and partner experience.',
        sections: [
          { title: 'English first', body: 'Core brand, product and contact information is presented in English for international review.' },
          { title: 'Spanish support', body: 'Spanish content supports the brand identity and Spanish-speaking professional conversations.' },
          { title: 'Consistent terminology', body: 'Product names and public descriptors are kept aligned across the website.' },
        ],
        image: '/images/optimized/insight-stability-target.webp',
        partnerValue: 'Supports a consistent introduction across international partner discussions.',
      },
      {
        value: 'PRO',
        label: 'professional partner focus',
        slug: 'eu-quality',
        title: 'Built for professional partner review',
        summary:
          'PDOX brings brand identity, product presentation, traceability context and official contact paths together in one focused destination.',
        sections: [
          { title: 'Portfolio review', body: 'Partners can scan the complete range and open dedicated product pages.' },
          { title: 'Traceability context', body: 'Visit imagery and supporting information are presented with their actual scope.' },
          { title: 'Official contact path', body: 'Product, distribution and documentation questions route to the official PDOX email.' },
        ],
        image: '/images/optimized/insight-eu-quality.webp',
        partnerValue: 'Creates a clearer starting point for clinic and distributor enquiries.',
      },
    ],
    overviewKicker: 'PDOX Overview',
    overviewTitle: 'A clearer view of the PDOX professional platform.',
    overviewBody:
      'Spanish brand identity, a focused six-product portfolio, bilingual presentation and an official contact path for professional partners.',
    brandKicker: 'The Brand',
    brandTitle: 'Spanish brand direction, refined presentation and professional focus.',
    brandBody: [
      'PDOX presents a Spanish premium bio-enzyme skincare identity for clinics, distributors and professional partners.',
      'The brand language is intentionally restrained: refined packaging, clear cosmetic positioning and direct pathways to product and partner information.',
    ],
    techKicker: 'Core Technology',
    techTitle: 'A structured bio-enzyme concept across complementary skincare priorities.',
    techBody:
      'The PDOX technology story is organized around contour care, the appearance of firmness, hydration and surface refinement, with product-specific evidence reviewed separately.',
    techCards: [
      {
        title: 'Lipase Complex',
        body: 'Targets localized lipid appearance and supports contour-focused professional protocols.',
        image: '/images/optimized/tech-lipase-complex.webp',
        slug: 'lipase-complex',
        detailTitle: 'Lipase Complex',
        detailSummary: 'A contour-focused enzyme complex positioned around localized lipid appearance and professional body or facial protocol support.',
        detailSections: [
          { title: 'Supports contour-focused protocol language', body: 'Helps explain how enzyme action relates to visible contour and localized appearance.' },
          { title: 'Helps explain lipid balance in professional consultations', body: 'Gives clinics a scientific anchor when discussing lipid-related skin priorities.' },
          { title: 'Works as part of a broader PDOX bio-enzyme platform', body: 'Designed to complement repair, hydration and surface-renewal programs.' },
        ],
        detailPartnerValue: 'Makes it easier for clinics and distributors to present contour-related skin science with confidence.',
      },
      {
        title: 'Collagenase Complex',
        body: 'Supports professional conversations around firmness, elasticity and smoother-looking skin.',
        image: '/images/optimized/tech-collagenase-complex.webp',
        slug: 'collagenase-complex',
        detailTitle: 'Collagenase Complex',
        detailSummary: 'A firmness and elasticity-focused concept for visible skin quality and professional skincare education.',
        detailSections: [
          { title: 'Supports firmness and elasticity storytelling', body: 'Connects enzyme logic to visible skin structure and resilience.' },
          { title: 'Connects collagen renewal language with professional skincare programs', body: 'Helps clinics position the product within broader renewal protocols.' },
          { title: 'Helps clinics explain texture and structure-focused protocols', body: 'Supports consultation narratives around visible skin quality and tone.' },
        ],
        detailPartnerValue: 'Gives partners clear language for texture, firmness and visible quality conversations.',
      },
      {
        title: 'Hyaluronidase Complex',
        body: 'Helps improve hydration delivery and the feel of deep skin replenishment.',
        image: '/images/optimized/tech-hyaluronidase-complex.webp',
        slug: 'hyaluronidase-complex',
        detailTitle: 'Hyaluronidase Complex',
        detailSummary: 'A hydration-delivery complex designed to support replenishment, comfort and a smoother professional skincare experience.',
        detailSections: [
          { title: 'Supports hydration delivery language', body: 'Positions the complex around moisture pathways and skin comfort.' },
          { title: 'Helps explain deep replenishment and skin comfort', body: 'Gives clinics a credible way to discuss hydration as a visible benefit.' },
          { title: 'Fits recovery, glow and hydration-focused protocols', body: 'Complements repair and renewal programs with a hydration angle.' },
        ],
        detailPartnerValue: 'Supports clinics and distributors when presenting hydration as a premium professional outcome.',
      },
      {
        title: 'Keratinase Complex',
        body: 'Encourages surface renewal, smoother texture and brighter-looking skin.',
        image: '/images/optimized/tech-keratinase-complex.webp',
        slug: 'keratinase-complex',
        detailTitle: 'Keratinase Complex',
        detailSummary: 'A surface-renewal complex positioned around smoother texture, refined appearance and brighter-looking skin.',
        detailSections: [
          { title: 'Supports surface renewal storytelling', body: 'Helps explain visible texture improvement and radiance in professional language.' },
          { title: 'Helps explain texture refinement and radiance', body: 'Gives clinics a clear path when discussing surface quality and glow.' },
          { title: 'Complements repair, hydration and firmness programs', body: 'Designed to complete the PDOX platform with a surface-focused angle.' },
        ],
        detailPartnerValue: 'Makes it easier to present radiance and surface quality as part of a professional skin science program.',
      },
    ],
    productsKicker: 'Products',
    productsTitle: 'Professional skincare portfolio',
    productsBody:
      'Six distinct product identities presented through a consistent visual system and responsible cosmetic care language.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Barrier Support Serum',
        body: 'A concentrated skincare concept focused on comfort and the appearance of a cared-for skin barrier.',
        image: '/images/products/optimized/product-01-bandage-needle-dark.webp',
        tags: ['Comfort', 'Barrier Care'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Facial Contour Care',
        body: 'A professional skincare concept for a smoother, more refined-looking facial contour.',
        image: '/images/products/optimized/product-02-remodeling-needle-dark.webp',
        tags: ['Contour', 'Firmness'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Line-Refining Care',
        body: 'Cosmetic care focused on the appearance of lines, texture and smoother-looking skin.',
        image: '/images/products/optimized/product-03-wrinkle-eraser-dark.webp',
        tags: ['Lines', 'Texture'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Dual-Vial Fresh-Mix Care',
        body: 'A dual-vial fresh-mix skincare concept focused on comfort, hydration and a smoother-looking finish.',
        image: '/images/products/optimized/product-liquid-bandage.webp',
        tags: ['Fresh Mix', 'Comfort'],
      },
      {
        slug: 'v-face-tightening-glow-ampoule',
        name: 'PDOX V-Face Tightening Glow Ampoule',
        subtitle: 'Facial Contour Care',
        body: 'A dual-vial skincare ampoule designed to support a firmer-looking facial contour, hydration and a more refined-looking complexion.',
        image: '/images/products/optimized/product-v-face-tightening-glow.webp',
        tags: ['Firming Feel', 'Contour Care', 'Hydrated Glow'],
        detailHighlights: [
          'Helps improve the appearance of puffiness and less-defined facial contours.',
          'Supports a firmer, smoother-looking complexion within a professional skincare routine.',
          'Helps replenish moisture for a hydrated, refreshed-looking finish.',
        ],
        detailProtocol: 'A dual-vial fresh-mix concept for professional consultation and at-home facial contour care. For external cosmetic use only; individual results may vary.',
      },
      {
        slug: 'youthful-eye-aqua-essence',
        name: 'Youthful Eye Area Aqua Essence',
        subtitle: 'Precision Eye-Area Care',
        body: 'A precision eye-area essence for the visible appearance of fine lines, tired-looking shadows and dryness while supporting smoother, hydrated-looking skin.',
        image: '/images/products/optimized/product-youthful-eye-aqua-essence.webp',
        tags: ['Eye Area', 'Fine-Line Appearance', 'Hydration'],
        detailHighlights: [
          'Supports a smoother, more cared-for appearance around the eye area within a professional care program.',
          'Targets the visible appearance of fine lines, tired-looking shadows and uneven eye-area texture.',
          'Supports hydration and a smoother, more refreshed-looking eye contour.',
        ],
        detailProtocol: 'Positioned for professional eye-area care after individual assessment, with results expected to vary by skin condition and protocol.',
      },
    ],
    detailBack: 'Back to Products',
    detailEyebrow: 'Product Detail',
    detailOverview: 'Overview',
    detailHighlights: 'Professional highlights',
    detailProtocol: 'Protocol fit',
    detailContact: 'Contact PDOX',
    detailHint: 'Click any product image to open its detailed product page.',
    scienceKicker: 'Professional Credibility',
    scienceTitle: 'A clearer standard for product information and partner review.',
    scienceBody:
      'PDOX separates brand presentation, product-specific information and supporting evidence so professional partners can understand what each item actually represents.',
    sciencePoints: [
      {
        title: 'Product information',
        body: 'Each product is presented through its packaging identity, cosmetic care direction and a dedicated detail page.',
      },
      {
        title: 'Evidence scope',
        body: 'Visit imagery and supporting materials are described by their actual scope rather than used as blanket certification.',
      },
      {
        title: 'Partner readiness',
        body: 'English and Spanish information supports consistent brand presentation in professional conversations.',
      },
    ],
    channelsKicker: 'Professional Channels',
    channelsTitle: 'Focused information for clinics, distributors and brand partners.',
    channelsBody:
      'One restrained brand language, with clearer information paths for the different audiences reviewing the PDOX portfolio.',
    channels: [
      {
        title: 'Clinics & Skin Studios',
        body: 'A concise portfolio view for professional consultation, product education and skincare program planning.',
        points: ['Product role clarity', 'Cosmetic care language', 'Official contact'],
      },
      {
        title: 'Distributors',
        body: 'A single destination for brand introduction, range review and requests for product-specific documentation.',
        points: ['Portfolio overview', 'Bilingual presentation', 'Documentation requests'],
      },
      {
        title: 'End Consumers',
        body: 'A refined introduction to product appearance, cosmetic care direction and the official PDOX contact path.',
        points: ['Clear product identity', 'Responsible language', 'Official website'],
      },
    ],
    protocolKicker: 'Partner Review Path',
    protocolTitle: 'From first impression to an informed product conversation.',
    protocolBody:
      'A simple three-step path helps professional visitors move from the portfolio to product-specific information and an official enquiry.',
    protocolSteps: [
      {
        value: '01',
        title: 'Identify',
        body: 'Start with the product role and visible skincare priority most relevant to the professional conversation.',
      },
      {
        value: '02',
        title: 'Review',
        body: 'Open the dedicated product page and review packaging, cosmetic positioning and available supporting information.',
      },
      {
        value: '03',
        title: 'Connect',
        body: 'Contact PDOX for distribution, clinic partnership or product-documentation questions.',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Questions partners usually ask first.',
    faqs: [
      {
        question: 'What is PDOX?',
        answer:
          'PDOX is presented as a Spanish premium bio-enzyme skincare brand with a focused portfolio for clinics, distributors and professional partners.',
      },
      {
        question: 'What information is available for each product?',
        answer:
          'Each product has a dedicated page covering its visual identity, cosmetic care direction, professional highlights and official contact path.',
      },
      {
        question: 'How is traceability material presented?',
        answer:
          'Laboratory-visit imagery is presented as a brand archive. It does not by itself certify a specific product, manufacturing site or performance claim.',
      },
      {
        question: 'How can clinics and distributors contact PDOX?',
        answer:
          'Send product, distribution or documentation enquiries to info@pdoxserum.com through the official website contact path.',
      },
    ],
    productMarqueeKicker: 'Product Line',
    productMarqueeTitle: 'The PDOX portfolio, continuously in view.',
    productMarqueeBody: 'A concise visual index of the current range. Select any product to open its dedicated page.',
    productMarqueeCta: 'View Product',
    ctaTitle: 'Begin a professional PDOX conversation.',
    ctaBody:
      'Contact PDOX for distribution, clinic partnership or product-documentation enquiries.',
    ctaButton: 'Contact PDOX',
    footerBody:
      'PDOX is presented as a Spanish premium bio-enzyme skincare brand for professional partners and international brand communication.',
    brandStoryTitle: 'Spanish brand direction, refined product presentation and professional focus.',
    brandStorySummary: 'PDOX brings together a restrained Spanish visual identity, a focused skincare portfolio and responsible public-facing cosmetic language.',
    brandStorySections: [
      { title: 'Spanish brand perspective', body: 'A restrained visual direction created for international-facing professional communication.' },
      { title: 'Focused portfolio', body: 'Six current products presented through consistent photography, terminology and dedicated detail pages.' },
      { title: 'Responsible cosmetic language', body: 'Public descriptions focus on appearance and care without turning brand narrative into unsupported product proof.' },
      { title: 'Professional contact path', body: 'Clinics and distributors can request product-specific information through the official website email.' },
    ],
    brandStoryPartnerValue: 'This brand story gives partners a concise introduction while keeping product-specific evidence and public claims clearly separated.',
    insightBack: 'Back to Overview',
    insightEyebrow: 'Insight',
    insightSections: 'Key areas',
    insightPartnerValue: 'Partner value',
  },
  es: {
    nav: ['Marca', 'Tecnologia', 'Productos', 'Socios', 'FAQ', 'Contacto'],
    heroEyebrow: 'Ciencia cutanea bio-enzimatica espanola',
    heroTitle: 'PDOX',
    heroBody:
      'Cuidado premium bio-enzimatico de identidad espanola para clinicas, distribuidores y socios profesionales, presentado con un portafolio enfocado y lenguaje cosmetico responsable.',
    heroPrimary: 'Explorar Productos',
    heroSecondary: 'Ver Tecnologia',
    stats: [
      {
        value: 'ES',
        label: 'perspectiva de marca espanola',
        slug: 'madrid-origin',
        title: 'Una perspectiva espanola de cuidado premium',
        summary: 'PDOX presenta una identidad espanola mediante diseno dermocosmetico sobrio, educacion de producto y lenguaje visual internacional.',
        sections: [
          { title: 'Disciplina visual europea', body: 'Una presentacion precisa mantiene el producto y la informacion por delante de la decoracion.' },
          { title: 'Audiencia profesional', body: 'La web esta estructurada para clinicas, distribuidores y socios que necesitan una introduccion clara.' },
          { title: 'Lenguaje publico responsable', body: 'La comunicacion publica separa la narrativa de marca de la evidencia especifica de producto.' },
        ],
        image: '/images/optimized/insight-madrid-origin.webp',
        partnerValue: 'Ofrece a los socios una forma concisa y responsable de presentar PDOX.',
      },
      {
        value: '06',
        label: 'portafolio de producto enfocado',
        slug: 'enzyme-platform',
        title: 'Un portafolio enfocado de seis productos',
        summary: 'La gama actual PDOX se organiza en torno a confort, cuidado del contorno, hidratacion y apariencia de piel mas lisa.',
        sections: [
          { title: 'Roles claros', body: 'Cada producto tiene identidad visual y una direccion cosmetica concisa.' },
          { title: 'Presentacion coherente', body: 'Fotografia, estructura y terminologia compartidas facilitan la revision del portafolio.' },
          { title: 'Paginas dedicadas', body: 'Cada producto enlaza a una pagina enfocada en posicionamiento, puntos clave y contacto.' },
        ],
        image: '/images/optimized/insight-enzyme-platform.webp',
        partnerValue: 'Ayuda a comprender la gama antes de solicitar materiales especificos.',
      },
      {
        value: 'EN',
        label: 'idioma internacional principal',
        slug: 'stability-target',
        title: 'Presentacion de marca internacional',
        summary: 'El ingles es el idioma publico principal, apoyado por el espanol para una experiencia internacional coherente.',
        sections: [
          { title: 'Ingles primero', body: 'La informacion central de marca, producto y contacto se presenta en ingles.' },
          { title: 'Apoyo en espanol', body: 'El espanol apoya la identidad de marca y las conversaciones profesionales hispanohablantes.' },
          { title: 'Terminologia coherente', body: 'Los nombres y descriptores publicos se mantienen alineados en toda la web.' },
        ],
        image: '/images/optimized/insight-stability-target.webp',
        partnerValue: 'Apoya una introduccion coherente en conversaciones internacionales.',
      },
      {
        value: 'PRO',
        label: 'enfoque en socios profesionales',
        slug: 'eu-quality',
        title: 'Preparado para revision profesional',
        summary: 'PDOX reune identidad de marca, portafolio, contexto de trazabilidad y contacto oficial en un destino enfocado.',
        sections: [
          { title: 'Revision del portafolio', body: 'Los socios pueden revisar la gama y abrir paginas dedicadas de producto.' },
          { title: 'Contexto de trazabilidad', body: 'Las imagenes de visita y materiales se presentan segun su alcance real.' },
          { title: 'Contacto oficial', body: 'Las preguntas de producto, distribucion y documentacion se dirigen al correo oficial.' },
        ],
        image: '/images/optimized/insight-eu-quality.webp',
        partnerValue: 'Crea un punto de partida mas claro para consultas de clinicas y distribuidores.',
      },
    ],
    overviewKicker: 'Vision PDOX',
    overviewTitle: 'Una vision mas clara de la plataforma profesional PDOX.',
    overviewBody:
      'Identidad espanola, seis productos, presentacion bilingue y contacto oficial para socios profesionales.',
    brandKicker: 'La Marca',
    brandTitle: 'Direccion espanola, presentacion refinada y enfoque profesional.',
    brandBody: [
      'PDOX presenta una identidad espanola de cuidado premium bio-enzimatico para clinicas, distribuidores y socios profesionales.',
      'El lenguaje de marca es sobrio: envases refinados, posicionamiento cosmetico claro y acceso directo a informacion de producto y contacto.',
    ],
    techKicker: 'Tecnologia Central',
    techTitle: 'Un concepto bio-enzimatico estructurado para prioridades cosmeticas complementarias.',
    techBody:
      'La historia tecnologica PDOX se organiza en torno al cuidado del contorno, la apariencia de firmeza, hidratacion y refinamiento superficial; la evidencia se revisa por producto.',
    techCards: [
      {
        title: 'Complejo Lipasa',
        body: 'Orientado a la apariencia de lipidos localizados y protocolos profesionales de contorno.',
        image: '/images/optimized/tech-lipase-complex.webp',
        slug: 'lipase-complex',
        detailTitle: 'Complejo Lipasa',
        detailSummary: 'Complejo enzimatico enfocado en contorno, posicionado alrededor de la apariencia lipidica localizada y el soporte de protocolos corporales o faciales profesionales.',
        detailSections: [
          { title: 'Apoya el lenguaje de protocolo de contorno', body: 'Ayuda a explicar como la accion enzimatica se relaciona con el contorno visible y la apariencia localizada.' },
          { title: 'Facilita explicar el equilibrio lipidico en consultas profesionales', body: 'Ofrece a las clinicas un anclaje cientifico al discutir prioridades cutaneas relacionadas con lipidos.' },
          { title: 'Funciona como parte de la plataforma bio-enzimatica PDOX', body: 'Disenado para complementar programas de reparacion, hidratacion y renovacion superficial.' },
        ],
        detailPartnerValue: 'Facilita que clinicas y distribuidores presenten la ciencia cutanea de contorno con confianza.',
      },
      {
        title: 'Complejo Colagenasa',
        body: 'Apoya programas de firmeza, elasticidad y remodelacion dermica con lenguaje no invasivo.',
        image: '/images/optimized/tech-collagenase-complex.webp',
        slug: 'collagenase-complex',
        detailTitle: 'Complejo Colagenasa',
        detailSummary: 'Complejo enfocado en firmeza y elasticidad, posicionado para calidad visible de la piel, lenguaje de remodelacion y planificacion de tratamientos profesionales premium.',
        detailSections: [
          { title: 'Apoya la narrativa de firmeza y elasticidad', body: 'Conecta la logica enzimatica con la estructura visible y la resiliencia de la piel.' },
          { title: 'Conecta el lenguaje de renovacion de colageno con programas profesionales', body: 'Ayuda a las clinicas a posicionar el producto dentro de protocolos de renovacion mas amplios.' },
          { title: 'Facilita explicar protocolos enfocados en textura y estructura', body: 'Soporta narrativas de consulta sobre calidad visible y tono de la piel.' },
        ],
        detailPartnerValue: 'Ofrece a los socios lenguaje claro para conversaciones sobre textura, firmeza y calidad visible.',
      },
      {
        title: 'Complejo Hialuronidasa',
        body: 'Ayuda a mejorar la entrega de hidratacion y la sensacion de reposicion profunda.',
        image: '/images/optimized/tech-hyaluronidase-complex.webp',
        slug: 'hyaluronidase-complex',
        detailTitle: 'Complejo Hialuronidasa',
        detailSummary: 'Complejo de entrega de hidratacion disenado para apoyar reposicion, confort y una experiencia cutanea profesional mas suave.',
        detailSections: [
          { title: 'Apoya el lenguaje de entrega de hidratacion', body: 'Posiciona el complejo alrededor de las vias de humedad y el confort de la piel.' },
          { title: 'Ayuda a explicar reposicion profunda y confort cutaneo', body: 'Ofrece a las clinicas una forma creible de discutir la hidratacion como beneficio visible.' },
          { title: 'Encaja en protocolos de recuperacion, luminosidad e hidratacion', body: 'Complementa programas de reparacion y renovacion con un enfoque en hidratacion.' },
        ],
        detailPartnerValue: 'Apoya a clinicas y distribuidores al presentar la hidratacion como un resultado profesional premium.',
      },
      {
        title: 'Complejo Queratinasa',
        body: 'Favorece renovacion superficial, textura mas lisa y piel con aspecto mas luminoso.',
        image: '/images/optimized/tech-keratinase-complex.webp',
        slug: 'keratinase-complex',
        detailTitle: 'Complejo Queratinasa',
        detailSummary: 'Complejo de renovacion superficial posicionado alrededor de textura mas suave, apariencia refinada y piel con aspecto mas luminoso.',
        detailSections: [
          { title: 'Apoya la narrativa de renovacion superficial', body: 'Ayuda a explicar la mejora visible de textura y luminosidad en lenguaje profesional.' },
          { title: 'Facilita explicar refinamiento de textura y radiancia', body: 'Ofrece a las clinicas un camino claro al discutir calidad superficial y brillo.' },
          { title: 'Complementa programas de reparacion, hidratacion y firmeza', body: 'Disenado para completar la plataforma PDOX con un angulo de renovacion superficial.' },
        ],
        detailPartnerValue: 'Facilita presentar radiancia y calidad superficial como parte de un programa profesional de ciencia cutanea.',
      },
    ],
    productsKicker: 'Productos',
    productsTitle: 'Portafolio profesional de cuidado de la piel',
    productsBody:
      'Seis identidades de producto presentadas con un sistema visual coherente y lenguaje cosmetico responsable.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Serum de apoyo a la barrera',
        body: 'Concepto cosmetico concentrado enfocado en confort y apariencia de una barrera cutanea cuidada.',
        image: '/images/products/optimized/product-01-bandage-needle-dark.webp',
        tags: ['Confort', 'Cuidado de barrera'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Cuidado del contorno facial',
        body: 'Concepto profesional para una apariencia facial mas lisa y refinada.',
        image: '/images/products/optimized/product-02-remodeling-needle-dark.webp',
        tags: ['Contorno', 'Firmeza'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Cuidado de lineas visibles',
        body: 'Cuidado cosmetico enfocado en la apariencia de lineas, textura y piel mas lisa.',
        image: '/images/products/optimized/product-03-wrinkle-eraser-dark.webp',
        tags: ['Lineas', 'Textura'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Cuidado de mezcla fresca de doble vial',
        body: 'Concepto cosmetico de mezcla fresca enfocado en confort, hidratacion y acabado de aspecto mas liso.',
        image: '/images/products/optimized/product-liquid-bandage.webp',
        tags: ['Mezcla fresca', 'Confort'],
      },
      {
        slug: 'v-face-tightening-glow-ampoule',
        name: 'PDOX Ampolla V-Face Reafirmante e Iluminadora',
        subtitle: 'Cuidado del Contorno Facial',
        body: 'Una ampolla cosmetica de doble vial disenada para favorecer un contorno facial de aspecto mas firme, hidratado y refinado.',
        image: '/images/products/optimized/product-v-face-tightening-glow.webp',
        tags: ['Sensacion de Firmeza', 'Cuidado del Contorno', 'Luminosidad Hidratada'],
        detailHighlights: [
          'Ayuda a mejorar la apariencia de hinchazon y contornos faciales poco definidos.',
          'Favorece una piel de aspecto mas firme y liso dentro de una rutina profesional.',
          'Ayuda a aportar hidratacion para un acabado de aspecto fresco y luminoso.',
        ],
        detailProtocol: 'Concepto de mezcla fresca de doble vial para consulta profesional y cuidado cosmetico del contorno facial en casa. Solo para uso externo; los resultados pueden variar.',
      },
      {
        slug: 'youthful-eye-aqua-essence',
        name: 'Esencia Aqua Juvenil para el Contorno de Ojos',
        subtitle: 'Cuidado de Precisión del Contorno de Ojos',
        body: 'Una esencia de precisión para la apariencia visible de líneas finas, sombras de aspecto cansado y sequedad, favoreciendo una piel más lisa e hidratada.',
        image: '/images/products/optimized/product-youthful-eye-aqua-essence.webp',
        tags: ['Contorno de ojos', 'Apariencia de líneas', 'Hidratación'],
        detailHighlights: [
          'Favorece una apariencia más lisa y cuidada alrededor de los ojos dentro de un programa profesional.',
          'Se enfoca en la apariencia de líneas finas, sombras de aspecto cansado y textura irregular del contorno de ojos.',
          'Favorece la hidratación y un contorno de ojos de aspecto más liso y descansado.',
        ],
        detailProtocol: 'Posicionado para el cuidado profesional del contorno de ojos tras una valoración individual; los resultados pueden variar según el estado de la piel y el protocolo.',
      },
    ],
    detailBack: 'Volver a Productos',
    detailEyebrow: 'Detalle de Producto',
    detailOverview: 'Vision general',
    detailHighlights: 'Puntos profesionales',
    detailProtocol: 'Encaje de protocolo',
    detailContact: 'Contactar PDOX',
    detailHint: 'Haz clic en cualquier imagen de producto para abrir su pagina de detalle.',
    scienceKicker: 'Credibilidad Profesional',
    scienceTitle: 'Un estandar mas claro para informacion de producto y revision profesional.',
    scienceBody:
      'PDOX separa presentacion de marca, informacion especifica de producto y materiales de apoyo para que los socios entiendan el alcance real de cada elemento.',
    sciencePoints: [
      {
        title: 'Informacion de producto',
        body: 'Cada producto se presenta mediante su envase, direccion cosmetica y pagina de detalle dedicada.',
      },
      {
        title: 'Alcance de evidencia',
        body: 'Las visitas y materiales se describen por su alcance real, no como certificacion general.',
      },
      {
        title: 'Preparacion para socios',
        body: 'La informacion en ingles y espanol apoya una presentacion coherente en conversaciones profesionales.',
      },
    ],
    channelsKicker: 'Canales Profesionales',
    channelsTitle: 'Informacion enfocada para clinicas, distribuidores y socios de marca.',
    channelsBody:
      'Un lenguaje de marca sobrio con rutas de informacion mas claras para cada audiencia profesional.',
    channels: [
      {
        title: 'Clinicas y estudios de piel',
        body: 'Una vista concisa del portafolio para consulta, educacion de producto y planificacion cosmetica profesional.',
        points: ['Rol de producto', 'Lenguaje cosmetico', 'Contacto oficial'],
      },
      {
        title: 'Distribuidores',
        body: 'Un destino unico para presentacion de marca, revision del portafolio y solicitud de documentacion especifica.',
        points: ['Vista de portafolio', 'Presentacion bilingue', 'Solicitud documental'],
      },
      {
        title: 'Consumidores finales',
        body: 'Una introduccion refinada a la identidad visual, direccion cosmetica y contacto oficial PDOX.',
        points: ['Identidad clara', 'Lenguaje responsable', 'Web oficial'],
      },
    ],
    protocolKicker: 'Ruta de Revision Profesional',
    protocolTitle: 'De la primera impresion a una conversacion informada.',
    protocolBody:
      'Una ruta sencilla ayuda a pasar del portafolio a informacion especifica de producto y una consulta oficial.',
    protocolSteps: [
      {
        value: '01',
        title: 'Identificar',
        body: 'Comenzar por el rol del producto y la prioridad cosmetica relevante para la conversacion profesional.',
      },
      {
        value: '02',
        title: 'Revisar',
        body: 'Abrir la pagina dedicada y revisar envase, posicionamiento cosmetico e informacion disponible.',
      },
      {
        value: '03',
        title: 'Contactar',
        body: 'Contactar PDOX para distribucion, colaboracion con clinicas o preguntas de documentacion.',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Preguntas que los socios suelen hacer primero.',
    faqs: [
      {
        question: 'Que es PDOX?',
        answer:
          'PDOX se presenta como una marca espanola premium de cuidado bio-enzimatico con un portafolio enfocado para clinicas, distribuidores y socios profesionales.',
      },
      {
        question: 'Que informacion esta disponible para cada producto?',
        answer:
          'Cada producto tiene una pagina dedicada con identidad visual, direccion cosmetica, puntos profesionales y contacto oficial.',
      },
      {
        question: 'Como se presentan los materiales de trazabilidad?',
        answer:
          'Las imagenes de visitas a laboratorios se presentan como archivo de marca. No certifican por si mismas un producto, lugar de fabricacion o resultado.',
      },
      {
        question: 'Como pueden contactar las clinicas y distribuidores?',
        answer:
          'Las consultas de producto, distribucion o documentacion pueden enviarse a info@pdoxserum.com desde la web oficial.',
      },
    ],
    productMarqueeKicker: 'Linea de Producto',
    productMarqueeTitle: 'El portafolio PDOX, siempre a la vista.',
    productMarqueeBody: 'Un indice visual conciso de la gama actual. Selecciona un producto para abrir su pagina dedicada.',
    productMarqueeCta: 'Ver Producto',
    ctaTitle: 'Inicia una conversacion profesional con PDOX.',
    ctaBody:
      'Contacta PDOX para consultas de distribucion, colaboracion con clinicas o documentacion de producto.',
    ctaButton: 'Contactar PDOX',
    footerBody:
      'PDOX se presenta como una marca espanola premium de cuidado bio-enzimatico para socios profesionales y comunicacion internacional.',
    brandStoryTitle: 'Direccion espanola, presentacion refinada y enfoque profesional.',
    brandStorySummary: 'PDOX combina una identidad visual espanola sobria, un portafolio enfocado y lenguaje cosmetico publico responsable.',
    brandStorySections: [
      { title: 'Perspectiva de marca espanola', body: 'Una direccion visual sobria creada para comunicacion profesional internacional.' },
      { title: 'Portafolio enfocado', body: 'Seis productos presentados con fotografia, terminologia y paginas dedicadas coherentes.' },
      { title: 'Lenguaje cosmetico responsable', body: 'Las descripciones publicas separan la narrativa de marca de la evidencia especifica de producto.' },
      { title: 'Contacto profesional', body: 'Clinicas y distribuidores pueden solicitar informacion especifica mediante el correo oficial.' },
    ],
    brandStoryPartnerValue: 'Esta historia ofrece una introduccion concisa y mantiene separadas la evidencia especifica y las afirmaciones publicas.',
    insightBack: 'Volver a Vision general',
    insightEyebrow: 'Insight',
    insightSections: 'Areas clave',
    insightPartnerValue: 'Valor para socios',
  },
};

const sectionIds = ['brand', 'technology', 'products', 'partners', 'faq', 'contact'];
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
              href="mailto:info@pdoxserum.com"
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
              href="mailto:info@pdoxserum.com"
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
              href="mailto:info@pdoxserum.com"
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
  const [lang, setLang] = useState<Lang>('en');
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

          <nav className="hidden items-center gap-10 lg:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => goTo(sectionIds[index])}
                className="text-[13px] uppercase tracking-wide text-white/55 transition-colors hover:text-[#C9A96E]"
              >
                {item}
              </button>
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
            <div className="mx-auto grid max-w-[1500px] gap-2">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => goTo(sectionIds[index])}
                  className="rounded-md px-3 py-3 text-left text-sm uppercase text-white/70 hover:bg-white/5 hover:text-[#C9A96E]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {activeProduct ? (
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
            <h1 className="sr-only">{t.heroTitle}</h1>
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

      {!activeVerify && <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <img src="/images/logo.png" alt="PDOX" loading="lazy" decoding="async" className="mx-auto h-9 w-auto invert brightness-200 sm:mx-0" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/42">{t.footerBody}</p>
          </div>
          <div className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-white/30 sm:text-right">
            <span>Official Website | www.pdoxserum.com</span>
            <a href="mailto:info@pdoxserum.com" className="transition hover:text-[#C9A96E]">info@pdoxserum.com</a>
            <span>(c) 2026 PDOX</span>
          </div>
        </div>
      </footer>}
    </div>
  );
}

export default App;
