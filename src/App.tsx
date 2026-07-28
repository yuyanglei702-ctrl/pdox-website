import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import OfficialBackdrop from './components/OfficialBackdrop';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import OfficialChannelsPage from './pages/OfficialChannelsPage';
import QualityTraceabilityPage from './pages/QualityTraceabilityPage';
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
    nav: ['Brand', 'Products', 'Technology', 'Quality', 'Partners', 'FAQ', 'Contact'],
    heroEyebrow: 'Spanish premium bio-enzyme skincare',
    heroTitle: 'PDOX',
    heroBody:
      'A Spanish premium skincare brand presenting bio-enzyme care concepts for professional clinics, distributors and refined skin programs.',
    heroPrimary: 'Explore Products',
    heroSecondary: 'View Technology',
    stats: [
      {
        value: 'ES',
        label: 'Spanish brand identity',
        slug: 'spanish-brand-identity',
        title: 'Spanish brand identity',
        summary:
          'PDOX presents a Spanish premium skincare identity with a restrained European visual language and a professional product portfolio.',
        sections: [
          {
            title: 'Spanish brand language',
            body: 'Spanish identity is expressed through disciplined design, professional education and a refined dermocosmetic presentation.',
          },
          {
            title: 'Professional portfolio direction',
            body: 'The portfolio is organised around clear cosmetic care priorities for clinics and distribution partners.',
          },
          {
            title: 'Professional presentation for clinics and distribution partners',
            body: 'Materials, packaging and site language are prepared for clinic consultation and distributor education from day one.',
          },
        ],
        image: '/images/optimized/insight-madrid-origin.webp',
        partnerValue:
          'Helps partners present PDOX consistently as a Spanish premium professional skincare brand.',
      },
      {
        value: '4',
        label: 'bio-enzyme care directions',
        slug: 'enzyme-platform',
        title: 'Four bio-enzyme care directions',
        summary:
          'PDOX organises its technology narrative around four complementary cosmetic care priorities: contour, firmness, hydration and surface refinement.',
        sections: [
          {
            title: 'Lipase Complex',
            body: 'Contour and localized lipid appearance.',
          },
          {
            title: 'Collagenase Complex',
            body: 'Firmness, elasticity and remodeling language.',
          },
          {
            title: 'Hyaluronidase Complex',
            body: 'Hydration delivery and replenishment.',
          },
          {
            title: 'Keratinase Complex',
            body: 'Surface renewal, smoother texture and radiance.',
          },
        ],
        image: '/images/optimized/insight-enzyme-platform.webp',
        partnerValue:
          'Makes the product system easier to explain in consultations, training materials and distributor presentations.',
      },
      {
        value: '6',
        label: 'focused skincare products',
        slug: 'product-portfolio',
        title: 'A focused six-product portfolio',
        summary:
          'A concise six-product architecture helps professional partners understand, present and develop the range.',
        sections: [
          {
            title: 'Portfolio clarity',
            body: 'Each product is positioned around a distinct cosmetic appearance or care direction.',
          },
          {
            title: 'Professional presentation',
            body: 'Consistent naming, imagery and product pages support clinic consultation and distributor training.',
          },
          {
            title: 'Expandable education',
            body: 'Evidence and market documentation can be attached product by product when publicly cleared.',
          },
        ],
        image: '/images/optimized/insight-stability-target.webp',
        partnerValue:
          'Gives clinics and distributors a clear range architecture without unsupported performance claims.',
      },
      {
        value: 'EN/ES',
        label: 'international brand languages',
        slug: 'international-communication',
        title: 'English and Spanish brand communication',
        summary:
          'English and Spanish provide a focused international presentation for professional partners and brand enquiries.',
        sections: [
          {
            title: 'International presentation',
            body: 'English supports professional communication across markets while Spanish preserves the brand identity.',
          },
          {
            title: 'Controlled public wording',
            body: 'Public pages use cosmetic appearance language and distinguish brand archives from product evidence.',
          },
          {
            title: 'Evidence-aware communication',
            body: 'Product, quality and origin statements are published only within their reviewed scope.',
          },
        ],
        image: '/images/optimized/insight-eu-quality.webp',
        partnerValue:
          'Supports clear partner communication without overstating origin, certification or medical outcomes.',
      },
    ],
    overviewKicker: 'PDOX Overview',
    overviewTitle: 'Spanish premium skincare for professional channels.',
    overviewBody:
      'A focused view of the PDOX platform: Spanish brand identity, six skincare products, bilingual communication and evidence-aware professional presentation.',
    brandKicker: 'The Brand',
    brandTitle: 'European restraint, professional clarity and premium presentation.',
    brandBody: [
      'PDOX is presented as a Spanish premium bio-enzyme skincare brand for clinics, distributors and professional partners.',
      'Its visual and verbal language is deliberately restrained: platinum laboratory materials, refined dermocosmetic packaging and clear product pathways.',
    ],
    techKicker: 'Core Technology',
    techTitle: 'A disciplined bio-enzyme care platform for visible skin quality.',
    techBody:
      'The PDOX technology narrative connects complementary cosmetic care directions for contour, firmness, hydration and smoother-looking skin.',
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
        body: 'Supports firmness, elasticity and dermal remodeling programs without invasive positioning.',
        image: '/images/optimized/tech-collagenase-complex.webp',
        slug: 'collagenase-complex',
        detailTitle: 'Collagenase Complex',
        detailSummary: 'A firmness and elasticity-focused complex positioned for visible skin quality and premium professional care planning.',
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
    productsTitle: 'Professional precision series',
    productsBody:
      'A compact product architecture makes the range easy to understand, demonstrate and expand across markets.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Emergency Serum',
        body: 'A recovery-focused cosmetic serum that helps support a comfortable, smoother-looking skin barrier.',
        image: '/images/products/optimized/product-01-bandage-needle-dark.webp',
        tags: ['Recovery Care', 'Barrier Comfort', 'Hero'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Facial Bioremodeling',
        body: 'Helps improve the appearance of facial contour, firmness and visual harmony within professional skincare programs.',
        image: '/images/products/optimized/product-02-remodeling-needle-dark.webp',
        tags: ['Contour', 'Firmness'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Anti-Wrinkle',
        body: 'Helps improve the appearance of fine lines, uneven texture and visible skin refinement.',
        image: '/images/products/optimized/product-03-wrinkle-eraser-dark.webp',
        tags: ['Lines', 'Texture'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Active Biological Bandage',
        body: 'A recovery-focused care concept designed to support comfort, elasticity and smoother-looking skin.',
        image: '/images/products/optimized/product-liquid-bandage.webp',
        tags: ['Recovery', 'Elasticity'],
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
        body: 'A precision eye-area essence designed to improve the appearance of fine lines, loss of firmness, hollow-looking shadows and signs of fatigue while supporting hydrated, smoother-looking skin.',
        image: '/images/products/optimized/product-youthful-eye-aqua-essence.webp',
        tags: ['Firmness', 'Fine-Line Care', 'Hydration'],
        detailHighlights: [
          'Helps the eye area look firmer and more supported as part of a professional care program.',
          'Targets the appearance of fine lines, tired-looking shadows and uneven eye-area texture.',
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
    scienceKicker: 'Science',
    scienceTitle: 'Professional trust begins with controlled communication.',
    scienceBody:
      'PDOX separates brand narrative, cosmetic benefits and evidence scope so professional partners can present the range with clarity.',
    sciencePoints: [
      {
        title: 'Traceable quality',
        body: 'Product information is connected to its reviewed public scope and updated as evidence becomes available.',
      },
      {
        title: 'Premium education',
        body: 'Clinics and distributors receive clear cosmetic care directions rather than vague or medicalised promises.',
      },
      {
        title: 'Global expansion',
        body: 'English and Spanish keep international communication focused while preserving Spanish brand identity.',
      },
    ],
    channelsKicker: 'Professional Channels',
    channelsTitle: 'Built for clinics, distributors and premium brand partners.',
    channelsBody:
      'PDOX gives each professional audience relevant information while maintaining one restrained European brand language.',
    channels: [
      {
        title: 'Clinics & Skin Studios',
        body: 'A clear product system for professional facial and body care protocols, consultation storytelling and premium service menus.',
        points: ['Protocol education', 'Premium care positioning', 'Product range clarity'],
      },
      {
        title: 'Distributors',
        body: 'A concise brand platform that helps channel partners explain origin, technology, products and commercial potential.',
        points: ['Market-ready narrative', 'Expandable product architecture', 'Bilingual launch foundation'],
      },
      {
        title: 'End Consumers',
        body: 'A refined official brand presentation that builds trust before purchase conversations through visual quality and clear explanations.',
        points: ['Brand confidence', 'Benefit-led language', 'Professional credibility'],
      },
    ],
    protocolKicker: 'Protocol Logic',
    protocolTitle: 'From product images to professional care pathways.',
    protocolBody:
      'PDOX is presented as a connected portfolio: recovery care, contour, renewal and hydration can support complementary professional pathways.',
    protocolSteps: [
      {
        value: '01',
        title: 'Assess',
        body: 'Position each product around a visible skin priority such as recovery, contour, texture, hydration or elasticity.',
      },
      {
        value: '02',
        title: 'Match',
        body: 'Connect enzyme logic to a professional protocol so clinics and partners can explain why the product exists.',
      },
      {
        value: '03',
        title: 'Support',
        body: 'Guide partners toward product education, commercial consultation and long-term range development.',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Questions partners usually ask first.',
    faqs: [
      {
        question: 'Is PDOX designed for professional channels?',
        answer:
          'Yes. PDOX presents its range for clinics, distributors and premium skin programs, with product language focused on professional care.',
      },
      {
        question: 'Can product pages be expanded later?',
        answer:
          'Yes. Each product has a dedicated page, allowing reviewed claims, usage guidance and market documentation to be added within their verified scope.',
      },
      {
        question: 'Why English and Spanish only?',
        answer:
          'English supports international communication, while Spanish preserves the brand identity and professional European presentation.',
      },
      {
        question: 'How should partners contact PDOX?',
        answer:
          'The site currently routes inquiries to info@pdoxserum.com. A fuller inquiry form can be added later when sales routing is defined.',
      },
    ],
    productMarqueeKicker: 'Product Line',
    productMarqueeTitle: 'PDOX products in continuous professional motion.',
    productMarqueeBody: 'Explore the complete PDOX range through repair, contour, renewal and hydration-focused skin programs.',
    productMarqueeCta: 'View Product',
    ctaTitle: 'Start a precision skin protocol.',
    ctaBody:
      'For clinics, distributors and brand partners, PDOX provides a focused international dermocosmetic brand platform.',
    ctaButton: 'Contact PDOX',
    footerBody:
      'PDOX is a Spanish premium bio-enzyme skincare brand presented for professional clinics, distributors and international brand partners.',
    brandStoryTitle: 'Spanish identity, professional discipline and premium presentation.',
    brandStorySummary: 'PDOX combines a Spanish premium skincare identity, restrained European laboratory aesthetics and clear cosmetic care language for professional partners.',
    brandStorySections: [
      { title: 'Spanish brand identity', body: 'A refined Spanish brand language designed for international professional communication.' },
      { title: 'Focused portfolio direction', body: 'Clear cosmetic care priorities support a premium position without unsupported scientific claims.' },
      { title: 'Premium professional presentation', body: 'Materials, packaging and site language prepared for clinic consultation and distributor education.' },
      { title: 'Prepared for clinics, distributors and professional partners', body: 'A brand platform designed to be explained with confidence in professional channels from day one.' },
    ],
    brandStoryPartnerValue: 'This brand story helps partners explain PDOX as a serious professional skincare science platform, not only a product catalog.',
    insightBack: 'Back to Overview',
    insightEyebrow: 'Insight',
    insightSections: 'Key areas',
    insightPartnerValue: 'Partner value',
  },
  es: {
    nav: ['Marca', 'Productos', 'Tecnologia', 'Calidad', 'Socios', 'FAQ', 'Contacto'],
    heroEyebrow: 'Cuidado bio-enzimatico premium espanol',
    heroTitle: 'PDOX',
    heroBody:
      'Marca espanola premium de cuidado bio-enzimatico para clinicas, distribuidores y programas profesionales de alta gama.',
    heroPrimary: 'Explorar Productos',
    heroSecondary: 'Ver Tecnologia',
    stats: [
      {
        value: 'ES',
        label: 'identidad de marca espanola',
        slug: 'spanish-brand-identity',
        title: 'Identidad de marca espanola',
        summary:
          'PDOX presenta una identidad espanola de cuidado premium con lenguaje visual europeo y una cartera profesional clara.',
        sections: [
          {
            title: 'Lenguaje de marca espanol',
            body: 'La identidad espanola se expresa mediante diseno disciplinado, educacion profesional y presentacion dermocosmetica refinada.',
          },
          {
            title: 'Direccion de formulacion independiente',
            body: 'La marca mantiene sus propias prioridades de desarrollo en lugar de seguir tendencias de mercado masivo, lo que refuerza su posicionamiento premium.',
          },
          {
            title: 'Presentacion profesional para clinicas y socios de distribucion',
            body: 'Los materiales, envases y lenguaje del sitio estan preparados para consulta clinica y educacion de distribuidores desde el primer dia.',
          },
        ],
        image: '/images/optimized/insight-madrid-origin.webp',
        partnerValue:
          'Ayuda a los socios a explicar de donde viene la marca y por que PDOX se posiciona como una plataforma premium de ciencia cutanea profesional.',
      },
      {
        value: '4',
        label: 'direcciones de cuidado bio-enzimatico',
        slug: 'enzyme-platform',
        title: 'Cuatro direcciones de cuidado bio-enzimatico',
        summary:
          'PDOX organiza su narrativa tecnologica alrededor de cuatro prioridades cosmeticas: contorno, firmeza, hidratacion y refinamiento superficial.',
        sections: [
          {
            title: 'Complejo Lipasa',
            body: 'Contorno y apariencia lipidica localizada.',
          },
          {
            title: 'Complejo Colagenasa',
            body: 'Firmeza, elasticidad y lenguaje de remodelacion.',
          },
          {
            title: 'Complejo Hialuronidasa',
            body: 'Entrega de hidratacion y reposicion.',
          },
          {
            title: 'Complejo Queratinasa',
            body: 'Renovacion superficial, textura mas suave y luminosidad.',
          },
        ],
        image: '/images/optimized/insight-enzyme-platform.webp',
        partnerValue:
          'Facilita explicar el sistema de productos en consultas, materiales de formacion y presentaciones ante distribuidores.',
      },
      {
        value: '6',
        label: 'productos de cuidado enfocado',
        slug: 'product-portfolio',
        title: 'Una cartera enfocada de seis productos',
        summary:
          'Una arquitectura concisa de seis productos ayuda a los socios profesionales a comprender, presentar y desarrollar la gama.',
        sections: [
          {
            title: 'Claridad de cartera',
            body: 'Cada producto se presenta alrededor de una direccion distinta de apariencia o cuidado cosmetico.',
          },
          {
            title: 'Presentacion profesional',
            body: 'Nombres, imagenes y paginas coherentes apoyan la consulta en clinica y la formacion de distribuidores.',
          },
          {
            title: 'Educacion ampliable',
            body: 'La evidencia y la documentacion pueden incorporarse producto por producto cuando se autoricen para uso publico.',
          },
        ],
        image: '/images/optimized/insight-stability-target.webp',
        partnerValue:
          'Refuerza la confianza de clinicas y distribuidores al presentar PDOX como una plataforma dermocosmetica profesional seria.',
      },
      {
        value: 'EN/ES',
        label: 'idiomas internacionales de marca',
        slug: 'international-communication',
        title: 'Comunicacion de marca en ingles y espanol',
        summary:
          'El ingles y el espanol ofrecen una presentacion internacional enfocada para socios profesionales y consultas de marca.',
        sections: [
          {
            title: 'Presentacion internacional',
            body: 'El ingles facilita la comunicacion profesional entre mercados y el espanol preserva la identidad de marca.',
          },
          {
            title: 'Lenguaje publico controlado',
            body: 'Las paginas publicas utilizan lenguaje cosmetico y distinguen los archivos de marca de la evidencia de producto.',
          },
          {
            title: 'Comunicacion consciente de la evidencia',
            body: 'Las afirmaciones de producto, calidad y origen se publican solo dentro de su alcance revisado.',
          },
        ],
        image: '/images/optimized/insight-eu-quality.webp',
        partnerValue:
          'Ayuda a los socios a prepararse para formacion, conversaciones de venta y documentacion futura de mercado sin sobredimensionar claims medicos.',
      },
    ],
    overviewKicker: 'Vision PDOX',
    overviewTitle: 'Cuidado premium espanol para canales profesionales.',
    overviewBody:
      'Una lectura clara de PDOX: identidad espanola, seis productos, comunicacion bilingue y presentacion profesional consciente de la evidencia.',
    brandKicker: 'La Marca',
    brandTitle: 'Sobriedad europea, claridad profesional y presentacion premium.',
    brandBody: [
      'PDOX se presenta como una marca espanola premium de cuidado bio-enzimatico para clinicas, distribuidores y socios profesionales.',
      'Su lenguaje visual y verbal es deliberadamente sobrio: materiales de laboratorio en platino, envases dermocosmeticos refinados y rutas de producto claras.',
    ],
    techKicker: 'Tecnologia Central',
    techTitle: 'Una plataforma disciplinada de cuidado bio-enzimatico para la calidad visible de la piel.',
    techBody:
      'La narrativa tecnologica de PDOX conecta direcciones cosmeticas complementarias para contorno, firmeza, hidratacion y una piel de aspecto mas suave.',
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
        detailSummary: 'Complejo enfocado en firmeza y elasticidad, posicionado para la calidad visible de la piel y la planificacion de cuidados profesionales premium.',
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
    productsTitle: 'Serie de precision profesional',
    productsBody:
      'Una arquitectura compacta permite entender, demostrar y expandir la linea con claridad en distintos mercados.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Serum de emergencia',
        body: 'Serum cosmetico enfocado en la recuperacion que ayuda a una barrera cutanea de aspecto mas suave y confortable.',
        image: '/images/products/optimized/product-01-bandage-needle-dark.webp',
        tags: ['Cuidado Recuperador', 'Confort de Barrera', 'Hero'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Bioremodelado facial',
        body: 'Ayuda a mejorar la apariencia del contorno, la firmeza y la armonia visual dentro de programas profesionales.',
        image: '/images/products/optimized/product-02-remodeling-needle-dark.webp',
        tags: ['Contorno', 'Firmeza'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Antiarrugas',
        body: 'Ayuda a mejorar la apariencia de lineas finas, textura irregular y refinamiento visible de la piel.',
        image: '/images/products/optimized/product-03-wrinkle-eraser-dark.webp',
        tags: ['Lineas', 'Textura'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Vendaje biologico activo',
        body: 'Concepto de cuidado recuperador disenado para apoyar el confort, la elasticidad y una piel de aspecto mas suave.',
        image: '/images/products/optimized/product-liquid-bandage.webp',
        tags: ['Recuperacion', 'Elasticidad'],
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
        body: 'Una esencia de precisión diseñada para mejorar la apariencia de líneas finas, pérdida de firmeza, sombras hundidas y signos de fatiga, mientras favorece una piel hidratada y de aspecto más liso.',
        image: '/images/products/optimized/product-youthful-eye-aqua-essence.webp',
        tags: ['Firmeza', 'Líneas Finas', 'Hidratación'],
        detailHighlights: [
          'Ayuda a que el contorno de ojos se vea más firme y con mayor sensación de soporte dentro de un programa profesional.',
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
    scienceKicker: 'Ciencia',
    scienceTitle: 'La confianza profesional empieza con una comunicacion controlada.',
    scienceBody:
      'PDOX separa la narrativa de marca, los beneficios cosmeticos y el alcance de la evidencia para que los socios presenten la gama con claridad.',
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
        body: 'El ingles y el espanol mantienen una comunicacion internacional enfocada y preservan la identidad de marca espanola.',
      },
    ],
    channelsKicker: 'Canales Profesionales',
    channelsTitle: 'Pensado para clinicas, distribuidores y socios premium de marca.',
    channelsBody:
      'PDOX debe hablar a cada audiencia con un mensaje distinto, manteniendo un lenguaje cientifico premium y coherente.',
    channels: [
      {
        title: 'Clinicas y estudios de piel',
        body: 'Un sistema claro de productos para protocolos de cuidado facial y corporal, consulta profesional y servicios premium.',
        points: ['Educacion de protocolo', 'Posicionamiento premium', 'Claridad de linea'],
      },
      {
        title: 'Distribuidores',
        body: 'Una plataforma de marca concisa para explicar origen, tecnologia, productos y potencial comercial.',
        points: ['Narrativa lista para mercado', 'Arquitectura expandible', 'Base bilingue de lanzamiento'],
      },
      {
        title: 'Consumidores finales',
        body: 'Una experiencia refinada que genera confianza antes de la conversacion de compra con calidad visual y explicaciones simples.',
        points: ['Confianza de marca', 'Lenguaje de beneficio', 'Credibilidad profesional'],
      },
    ],
    protocolKicker: 'Logica de Protocolo',
    protocolTitle: 'De imagenes de producto a rutas profesionales de cuidado.',
    protocolBody:
      'La web presenta PDOX como un sistema, no como un catalogo suelto: reparacion, contorno, renovacion e hidratacion funcionan como rutas profesionales complementarias.',
    protocolSteps: [
      {
        value: '01',
        title: 'Evaluar',
        body: 'Posicionar cada producto alrededor de una prioridad visible: recuperacion, contorno, textura, hidratacion o elasticidad.',
      },
      {
        value: '02',
        title: 'Conectar',
        body: 'Relacionar la logica enzimatica con un protocolo profesional para explicar por que existe cada producto.',
      },
      {
        value: '03',
        title: 'Acompanamiento',
        body: 'Orientar a los socios hacia educacion de producto, consulta comercial y desarrollo de linea a largo plazo.',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Preguntas que los socios suelen hacer primero.',
    faqs: [
      {
        question: 'PDOX esta pensado para canales profesionales?',
        answer:
          'Si. La web posiciona PDOX para clinicas, distribuidores y programas premium, con lenguaje de producto orientado a presentacion profesional.',
      },
      {
        question: 'Se pueden ampliar las paginas de producto despues?',
        answer:
          'Si. Cada producto tiene una pagina dedicada para incorporar declaraciones revisadas, orientacion de uso y documentacion dentro de su alcance verificado.',
      },
      {
        question: 'Por que solo ingles y espanol?',
        answer:
          'El ingles facilita la comunicacion internacional, mientras que el espanol preserva la identidad de marca y la presentacion profesional europea.',
      },
      {
        question: 'Como deben contactar los socios con PDOX?',
        answer:
          'Actualmente las consultas van a info@pdoxserum.com. Mas adelante se puede anadir un formulario cuando la ruta comercial este definida.',
      },
    ],
    productMarqueeKicker: 'Linea de Producto',
    productMarqueeTitle: 'Productos PDOX en movimiento profesional continuo.',
    productMarqueeBody: 'Explora la gama PDOX a traves de programas de reparacion, contorno, renovacion e hidratacion.',
    productMarqueeCta: 'Ver Producto',
    ctaTitle: 'Inicia un protocolo cutaneo de precision.',
    ctaBody:
      'Para clinicas, distribuidores y socios de marca, PDOX ofrece una plataforma dermocosmetica internacional enfocada.',
    ctaButton: 'Contactar PDOX',
    footerBody:
      'PDOX es una marca espanola premium de cuidado bio-enzimatico presentada para clinicas, distribuidores y socios internacionales.',
    brandStoryTitle: 'Identidad espanola, disciplina profesional y presentacion premium.',
    brandStorySummary: 'PDOX combina una identidad espanola de cuidado premium, una estetica europea de laboratorio sobria y un lenguaje cosmetico claro para socios profesionales.',
    brandStorySections: [
      { title: 'Identidad de marca espanola', body: 'Un lenguaje de marca refinado para la comunicacion profesional internacional.' },
      { title: 'Direccion de cartera enfocada', body: 'Prioridades cosmeticas claras apoyan el posicionamiento premium sin afirmaciones cientificas no verificadas.' },
      { title: 'Presentacion profesional premium', body: 'Materiales, envases y lenguaje del sitio preparados para consulta en clinica y educacion de distribuidores.' },
      { title: 'Preparado para clinicas, distribuidores y socios profesionales', body: 'Una plataforma de marca disenada para explicarse con confianza en canales profesionales desde el primer dia.' },
    ],
    brandStoryPartnerValue: 'Esta historia de marca ayuda a los socios a explicar PDOX como una plataforma seria de ciencia cutanea profesional, no solo un catalogo de productos.',
    insightBack: 'Volver a Vision general',
    insightEyebrow: 'Insight',
    insightSections: 'Areas clave',
    insightPartnerValue: 'Valor para socios',
  },
};

const sectionIds = ['brand', 'products', 'technology', 'quality', 'partners', 'faq', 'contact'];
const techIcons = [FlaskConical, Microscope, Beaker, Sparkles];
const scienceIcons = [ShieldCheck, Award, Globe2];
/* Legacy atmospheric primitives retained for controlled desktop experiments. */
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
void MolecularDriftLayer;

function ProductMarquee({
  products,
  copy,
  onOpenProduct,
}: {
  products: Product[];
  copy: Copy;
  onOpenProduct: (slug: string) => void;
}) {
  const marqueeProducts = [...products, ...products];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-24 lg:py-32">
      <OfficialBackdrop kind="material" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/94 via-[#090A0B]/82 to-[#050505]/95" />
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

      <div className="relative z-10 mt-14 overflow-hidden">
        <div className="pdox-marquee-track flex w-max gap-6 px-4 sm:px-6 lg:px-8">
          {marqueeProducts.map((product, i) => (
            <button
              key={`${product.slug}-${i}`}
              onClick={() => onOpenProduct(product.slug)}
              aria-hidden={i >= products.length}
              tabIndex={i >= products.length ? -1 : 0}
              className="pdox-card-premium group w-[min(78vw,320px)] shrink-0 overflow-hidden border border-white/10 bg-[#111] text-left sm:w-[340px] lg:w-[380px]"
            >
              <div className="aspect-[4/3] bg-black p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="text-[12px] uppercase tracking-[0.24em] text-[#C9A96E]">{product.subtitle}</p>
                <h3 className="mt-2 font-sans text-lg font-medium">{product.name}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/48">{product.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 px-2.5 py-1 text-[10px] text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
                  {copy.productMarqueeCta}
                  <ArrowRight size={14} />
                </div>
              </div>
            </button>
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
          `${product.subtitle} positioning for professional clinic and distributor presentation.`,
          'Part of the PDOX bio-enzyme care range for recovery, renewal and visible skin quality.',
          'Prepared for premium product education, protocol storytelling and partner conversations.',
        ]
      : [
          `${product.subtitle} para presentacion profesional en clinicas y distribucion.`,
          'Parte de la linea de cuidado bio-enzimatico PDOX para recuperacion, renovacion y calidad visible de la piel.',
          'Preparado para educacion premium, narrativa de protocolo y conversaciones con socios.',
        ]);
  const protocol =
    product.detailProtocol ?? (lang === 'en'
      ? 'Use this page as the professional product snapshot: product role, visual identity, benefit language and a clear contact path for commercial follow-up.'
      : 'Usa esta pagina como ficha profesional del producto: rol, identidad visual, lenguaje de beneficio y contacto claro para seguimiento comercial.');

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <OfficialBackdrop kind="material" />
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
      <OfficialBackdrop kind="archive" />
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
      <OfficialBackdrop kind="material" />
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
  const location = useLocation();
  const navigate = useNavigate();
  const pathIsSpanish = location.pathname === '/es' || location.pathname.startsWith('/es/');
  const lang: Lang = pathIsSpanish ? 'es' : 'en';
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  const routePath = pathIsSpanish ? currentPath.slice(3) || '/' : currentPath;
  const routePrefix = lang === 'es' ? '/es' : '';
  const activeProduct = routePath.startsWith('/products/')
    ? t.products.find((product) => `/products/${product.slug}` === routePath)
    : undefined;
  const activeInsight = routePath.startsWith('/insights/')
    ? t.stats.find((stat) => `/insights/${stat.slug}` === routePath)
    : undefined;
  const activeBrandStory = routePath === '/brand-story';
  const activeTechCard = routePath.startsWith('/technology/')
    ? t.techCards.find((card) => `/technology/${card.slug}` === routePath)
    : undefined;
  const activeOfficialChannels = routePath === '/official-channels' || routePath === '/verify';
  const activeQuality = routePath === '/quality-traceability';
  const activeLegalPage = (['/legal', '/privacy', '/terms'] as const).find((path) => path === routePath)?.slice(1) as
    | 'legal'
    | 'privacy'
    | 'terms'
    | undefined;
  const activeHome = routePath === '/';

  useEffect(() => {
    document.documentElement.lang = lang;
    const title = activeProduct
      ? `${activeProduct.name} | PDOX`
      : activeQuality
        ? `${lang === 'es' ? 'Calidad y trazabilidad' : 'Quality & Traceability'} | PDOX`
        : activeOfficialChannels
          ? `${lang === 'es' ? 'Canales oficiales' : 'Official Channels'} | PDOX`
          : activeLegalPage
            ? `${activeLegalPage[0].toUpperCase()}${activeLegalPage.slice(1)} | PDOX`
            : lang === 'es'
              ? 'PDOX | Cuidado Bio-Enzimatico Premium Espanol'
              : 'PDOX | Spanish Premium Bio-Enzyme Skincare';
    document.title = title;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute('href', `https://www.pdoxserum.com${currentPath === '/' ? '' : currentPath}`);
  }, [activeLegalPage, activeOfficialChannels, activeProduct, activeQuality, currentPath, lang]);

  useEffect(() => {
    if (routePath === '/verify') {
      navigate(`${routePrefix}/official-channels`, { replace: true });
    }
  }, [navigate, routePath, routePrefix]);

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
  }, [lang, routePath]);

  const changeLanguage = (nextLang: Lang) => {
    const nextPath = nextLang === 'es' ? `/es${routePath === '/' ? '/' : routePath}` : routePath;
    navigate(nextPath);
    setMenuOpen(false);
  };

  const goTo = (id: string) => {
    const scrollToSection = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (routePath !== '/') {
      navigate(`${routePrefix}/`);
      window.setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
    setMenuOpen(false);
  };

  const openProduct = (slug: string) => {
    navigate(`${routePrefix}/products/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openInsight = (slug: string) => {
    navigate(`${routePrefix}/insights/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => goTo('home')} className="flex items-center gap-3" aria-label="PDOX home">
            <img src="/images/official/pdox-logo-nav.webp" alt="PDOX" decoding="async" fetchPriority="high" width="320" height="147" className="h-10 w-auto invert brightness-200" />
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
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
                  onClick={() => changeLanguage(item)}
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
        ) : activeOfficialChannels ? (
          <OfficialChannelsPage lang={lang} />
        ) : activeQuality ? (
          <QualityTraceabilityPage lang={lang} />
        ) : activeLegalPage ? (
          <LegalPage lang={lang} page={activeLegalPage} />
        ) : activeHome ? (
          <>
        <section id="home" className="relative min-h-screen overflow-hidden pt-20">
          <OfficialBackdrop kind="atelier" priority />
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(3,4,5,0.28),rgba(3,4,5,0.62)_62%,#050505_100%)]" />
          <GoldParticleField subtle count={8} />
          <GoldLightSweep />
          <div className="hero-product-stage" aria-hidden="true">
            <img src="/images/products/optimized/product-liquid-bandage.webp" alt="" loading="eager" decoding="async" fetchPriority="low" className="hero-product hero-product-left" />
            <img src="/images/products/optimized/product-v-face-tightening-glow.webp" alt="" loading="lazy" decoding="async" fetchPriority="low" className="hero-product hero-product-center" />
            <img src="/images/products/optimized/product-youthful-eye-aqua-essence.webp" alt="" loading="eager" decoding="async" fetchPriority="low" className="hero-product hero-product-right" />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 pb-52 pt-20 text-center sm:px-6 lg:px-8 lg:pb-44">
            <p className="mb-6 text-[13px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.heroEyebrow}
            </p>
            <div className="relative">
              <div className="pdox-logo-breathe" />
              <img src="/images/official/pdox-logo-hero.webp" alt="PDOX" decoding="async" fetchPriority="high" width="960" height="440" className="relative mx-auto h-auto w-[min(72vw,480px)] invert brightness-200" />
            </div>
            <h1 className="sr-only">{t.heroTitle}</h1>
            <p className="mt-10 max-w-3xl text-lg leading-9 text-white/68">
                {t.heroBody}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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

        <section id="overview" className="relative overflow-hidden border-y border-white/10 bg-[#090A0B] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="archive" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/90 via-[#08090A]/82 to-[#050505]/94" />
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

        <section id="brand" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="archive" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/88 via-[#08090A]/78 to-[#050505]/94" />
          <SoftGlow />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <button
              onClick={() => navigate(`${routePrefix}/brand-story`)}
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

        <section id="technology" className="relative overflow-hidden border-y border-white/10 bg-[#111214] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="material" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/88 via-[#090A0B]/78 to-[#050505]/92" />
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
                    onClick={() => navigate(`${routePrefix}/technology/${card.slug}`)}
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

        <section id="products" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="material" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/90 via-[#090A0B]/82 to-[#050505]/94" />
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
                  className="pdox-card-premium reveal group overflow-hidden border border-white/10 bg-[#111] text-left focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/70"
                >
                  <div className="aspect-[4/3] bg-black p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[12px] uppercase tracking-[0.24em] text-[#C9A96E]">{product.subtitle}</p>
                    <h3 className="mt-3 font-sans text-xl font-medium">{product.name}</h3>
                    <p className="mt-5 min-h-[80px] text-sm leading-7 text-white/48">{product.body}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
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

        <section id="science" className="relative overflow-hidden bg-[#0F0E0B] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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

        <section id="quality" className="relative overflow-hidden border-y border-white/10 bg-[#090A0B] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="archive" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050505]/96 via-[#050505]/83 to-[#050505]/68" />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="reveal mb-4 text-[13px] uppercase tracking-[0.34em] text-[#C9A96E]">
                {lang === 'en' ? 'Quality & Traceability' : 'Calidad y trazabilidad'}
              </p>
              <h2 className="reveal text-[clamp(40px,5vw,72px)] leading-tight">
                {lang === 'en' ? 'Evidence is presented with its scope.' : 'Cada evidencia se presenta con su alcance.'}
              </h2>
              <p className="reveal mt-8 text-base leading-9 text-white/56">
                {lang === 'en'
                  ? 'Brand archives, product identity and cosmetic claims are kept separate. Public materials do not extend beyond their reviewed purpose.'
                  : 'Los archivos de marca, la identidad del producto y las declaraciones cosmeticas se mantienen separados. Los materiales publicos no superan su finalidad revisada.'}
              </p>
              <button onClick={() => navigate(`${routePrefix}/quality-traceability`)} className="reveal mt-10 inline-flex items-center gap-2 border border-[#C9A96E]/50 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#D7B979] transition hover:bg-[#C9A96E] hover:text-black">
                {lang === 'en' ? 'Open evidence register' : 'Abrir registro de evidencias'} <ArrowRight size={16} />
              </button>
            </div>
            <div className="reveal overflow-hidden border border-white/10 bg-[#070809]/80 p-3">
              <img src="/images/optimized/source-traceability-en.webp" alt="PDOX brand visit archive" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover object-top opacity-88" />
              <p className="p-5 text-xs leading-6 text-white/42">
                {lang === 'en'
                  ? 'Brand visit archive. Not product certification, manufacturing-origin proof or efficacy evidence.'
                  : 'Archivo de visita de marca. No constituye certificacion de producto, prueba de fabricacion ni evidencia de eficacia.'}
              </p>
            </div>
          </div>
        </section>

        <section id="partners" className="relative overflow-hidden border-y border-white/10 bg-[#111214] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <OfficialBackdrop kind="archive" />
          <div className="absolute inset-0 z-[1] bg-[#050505]/88" />
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

        <section className="bg-[#0A0A0A] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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

        <section id="faq" className="border-y border-white/10 bg-[#0F0E0B] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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

        <section id="contact" className="bg-[#C9A96E] px-4 py-24 text-black sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Clock className="reveal mx-auto mb-8 h-9 w-9" />
            <h2 className="reveal text-[clamp(34px,5vw,64px)] leading-tight">{t.ctaTitle}</h2>
            <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-9 text-black/65">{t.ctaBody}</p>
            <a
              href="mailto:info@pdoxserum.com"
              className="reveal mt-10 inline-flex items-center gap-2 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:bg-white hover:text-black"
            >
              {t.ctaButton}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
          </>
        ) : (
          <NotFoundPage lang={lang} />
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <img src="/images/official/pdox-logo-nav.webp" alt="PDOX" loading="lazy" decoding="async" width="320" height="147" className="mx-auto h-9 w-auto invert brightness-200 sm:mx-0" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/42">{t.footerBody}</p>
          </div>
          <div className="grid gap-3 text-[11px] uppercase tracking-[0.18em] text-white/32 sm:text-right">
            <span>Official Website | www.pdoxserum.com</span>
            <a href="mailto:info@pdoxserum.com" className="hover:text-[#C9A96E]">info@pdoxserum.com</a>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              <button onClick={() => navigate(`${routePrefix}/official-channels`)} className="hover:text-[#C9A96E]">{lang === 'en' ? 'Official Channels' : 'Canales oficiales'}</button>
              <button onClick={() => navigate(`${routePrefix}/legal`)} className="hover:text-[#C9A96E]">Legal</button>
              <button onClick={() => navigate(`${routePrefix}/privacy`)} className="hover:text-[#C9A96E]">{lang === 'en' ? 'Privacy' : 'Privacidad'}</button>
              <button onClick={() => navigate(`${routePrefix}/terms`)} className="hover:text-[#C9A96E]">{lang === 'en' ? 'Terms' : 'Condiciones'}</button>
            </div>
            <span>(c) 2026 PDOX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
