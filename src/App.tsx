import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
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
      'Spanish bio-enzyme skin science for clinics, distributors and premium skin programs that need measurable repair, contour and renewal performance.',
    heroPrimary: 'Explore Products',
    heroSecondary: 'View Technology',
    stats: [
      {
        value: '2010',
        label: 'Madrid laboratory origin',
        slug: 'madrid-origin',
        title: 'Madrid laboratory origin',
        summary:
          'PDOX is positioned around a Spanish laboratory identity, combining premium dermocosmetic language with professional skin protocol logic.',
        sections: [
          {
            title: 'Spanish scientific identity',
            body: "PDOX draws from Madrid's research and formulation culture, presenting a credible European origin story for international partners.",
          },
          {
            title: 'Independent formulation direction',
            body: 'The brand maintains its own development priorities rather than following mass-market trends, which supports premium positioning.',
          },
          {
            title: 'Professional presentation for clinics and distribution partners',
            body: 'Materials, packaging and site language are prepared for clinic consultation and distributor education from day one.',
          },
        ],
        image: '/images/insight-madrid-origin.png',
        partnerValue:
          'Helps partners explain where the brand comes from and why PDOX is positioned as a premium professional skin science platform.',
      },
      {
        value: '4',
        label: 'precision enzyme complexes',
        slug: 'enzyme-platform',
        title: 'Four precision enzyme complexes',
        summary:
          'PDOX presents a multi-enzyme platform designed around complementary skin priorities: lipid balance, firmness, hydration delivery and surface refinement.',
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
        image: '/images/insight-enzyme-platform.png',
        partnerValue:
          'Makes the product system easier to explain in consultations, training materials and distributor presentations.',
      },
      {
        value: '15Y',
        label: 'room-temperature stability target',
        slug: 'stability-target',
        title: 'Room-temperature stability target',
        summary:
          'PDOX communicates a stability-led formulation direction for professional partners who need confidence in product handling, storage and presentation.',
        sections: [
          {
            title: 'Stability discipline',
            body: 'Formulation choices prioritize shelf stability and handling confidence under professional channel conditions.',
          },
          {
            title: 'Practical channel handling',
            body: 'Reduced cold-chain dependency simplifies logistics for clinics and distributors in varied markets.',
          },
          {
            title: 'Premium product consistency',
            body: 'Every batch is expected to deliver the same visual, sensory and performance profile.',
          },
        ],
        image: '/images/insight-stability-target.png',
        partnerValue:
          'Supports clinic and distributor confidence when presenting PDOX as a serious professional dermocosmetic platform.',
      },
      {
        value: 'EU',
        label: 'quality and compliance focus',
        slug: 'eu-quality',
        title: 'EU quality and compliance focus',
        summary:
          'PDOX should communicate with quality, traceability and documentation language suitable for international professional channels.',
        sections: [
          {
            title: 'EU-facing quality language',
            body: 'Claims, labeling and site copy are prepared with European market expectations in mind.',
          },
          {
            title: 'Batch and documentation readiness',
            body: 'Product records and traceability processes support professional channel requirements.',
          },
          {
            title: 'Responsible professional claims',
            body: 'Positioning stays within cosmetic and professional skin science boundaries without overstating medical outcomes.',
          },
        ],
        image: '/images/insight-eu-quality.png',
        partnerValue:
          'Helps partners prepare for training, sales conversations and future market documentation without overstating medical claims.',
      },
    ],
    overviewKicker: 'PDOX Overview',
    overviewTitle: 'Professional bio-enzyme skin programs from Madrid.',
    overviewBody:
      'A clear snapshot of the PDOX platform: Spanish origin, four enzyme complexes, stability discipline and EU-facing quality language for professional channels.',
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
        image: '/images/tech-lipase-complex.png',
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
        image: '/images/tech-collagenase-complex.png',
        slug: 'collagenase-complex',
        detailTitle: 'Collagenase Complex',
        detailSummary: 'A firmness and elasticity-focused complex positioned for visible skin quality, remodeling language and premium professional treatment planning.',
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
        image: '/images/tech-hyaluronidase-complex.png',
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
        image: '/images/tech-keratinase-complex.png',
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
    productsTitle: 'Clinical precision series',
    productsBody:
      'A compact product architecture makes the range easy to understand, demonstrate and expand across markets.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Emergency Serum',
        body: 'High-penetration bio-enzyme repair for barrier support and intensive recovery protocols.',
        image: '/images/product-bandage.jpg',
        tags: ['Repair', 'Barrier', 'Hero'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Facial Bioremodeling',
        body: 'Designed for professional programs focused on facial contour and harmony.',
        image: '/images/product-remodeling.jpg',
        tags: ['Contour', 'Firmness'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Anti-Wrinkle',
        body: 'Collagen-support positioning for lines, texture and visible refinement.',
        image: '/images/product-eraser.jpg',
        tags: ['Lines', 'Texture'],
      },
      {
        slug: 'collagen-activator',
        name: 'Collagen Activator',
        subtitle: 'Total Revitalization',
        body: 'A daily professional-strength routine for elasticity, firmness and even tone.',
        image: '/images/product-collagen.jpg',
        tags: ['Collagen', 'Glow'],
      },
      {
        slug: 'hydration-complex',
        name: 'Hydration Complex',
        subtitle: 'Mesodermal Hydration',
        body: 'Hydration-focused protocol support with a premium clinical presentation.',
        image: '/images/product-activator.jpg',
        tags: ['Hydration', 'Comfort'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Active Biological Bandage',
        body: 'A repair-led concept for micro-lesion care, elasticity and fast visible comfort.',
        image: '/images/product-liquid-bandage.png',
        tags: ['Recovery', 'Elasticity'],
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
    channelsKicker: 'Professional Channels',
    channelsTitle: 'Built for clinics, distributors and premium brand partners.',
    channelsBody:
      'PDOX should communicate differently to each audience while keeping one premium scientific brand language.',
    channels: [
      {
        title: 'Clinics & Skin Studios',
        body: 'A clear product system for professional facial and body protocols, consultation storytelling and premium treatment menus.',
        points: ['Protocol education', 'Premium treatment positioning', 'Product range clarity'],
      },
      {
        title: 'Distributors',
        body: 'A concise brand platform that helps channel partners explain origin, technology, products and commercial potential.',
        points: ['Market-ready narrative', 'Expandable product architecture', 'Bilingual launch foundation'],
      },
      {
        title: 'End Consumers',
        body: 'A refined website experience that builds trust before purchase conversations begin through visual quality and simple explanations.',
        points: ['Brand confidence', 'Benefit-led language', 'Professional credibility'],
      },
    ],
    protocolKicker: 'Protocol Logic',
    protocolTitle: 'From product images to professional treatment pathways.',
    protocolBody:
      'The website now frames PDOX as a system, not a loose catalog: repair, contour, renewal and hydration can be presented as complementary professional pathways.',
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
          'Yes. The website positions PDOX for clinics, distributors and premium skin programs, with product language focused on professional presentation.',
      },
      {
        question: 'Can product pages be expanded later?',
        answer:
          'Yes. Each product already has its own detail page, so claims, protocols, training assets, certificates or market materials can be added progressively.',
      },
      {
        question: 'Why English and Spanish only?',
        answer:
          'English supports international communication, while Spanish reinforces the Madrid brand origin and launch identity.',
      },
      {
        question: 'How should partners contact PDOX?',
        answer:
          'The site currently routes inquiries to info@pdoxserum.com. A fuller inquiry form can be added later when sales routing is defined.',
      },
    ],
    ctaTitle: 'Start a precision skin protocol.',
    ctaBody:
      'For clinics, distributors and brand partners, PDOX is prepared to become a focused global dermocosmetic platform.',
    ctaButton: 'Contact PDOX',
    footerBody:
      'PDOX is an independent precision bio-enzyme skin science brand based in Madrid. Research, formulation and production story prepared for global distribution.',
    brandStoryTitle: 'Independent research, proprietary formulation and clinical-grade presentation.',
    brandStorySummary: 'PDOX is built around a Spanish precision bio-enzyme skincare identity, combining laboratory credibility, premium dermocosmetic aesthetics and professional protocol language.',
    brandStorySections: [
      { title: 'Spanish laboratory identity', body: 'Rooted in Madrid research culture with a credible European origin story for international partners.' },
      { title: 'Proprietary formulation direction', body: 'Independent development priorities that support premium positioning rather than mass-market trends.' },
      { title: 'Premium clinical presentation', body: 'Materials, packaging and site language prepared for clinic consultation and distributor education.' },
      { title: 'Prepared for clinics, distributors and professional partners', body: 'A brand platform designed to be explained with confidence in professional channels from day one.' },
    ],
    brandStoryPartnerValue: 'This brand story helps partners explain PDOX as a serious professional skincare science platform, not only a product catalog.',
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
      'Ciencia cutanea bio-enzimatica espanola para clinicas, distribuidores y programas premium que buscan reparacion, contorno y renovacion medibles.',
    heroPrimary: 'Explorar Productos',
    heroSecondary: 'Ver Tecnologia',
    stats: [
      {
        value: '2010',
        label: 'origen de laboratorio en Madrid',
        slug: 'madrid-origin',
        title: 'Origen de laboratorio en Madrid',
        summary:
          'PDOX se posiciona desde una identidad de laboratorio espanola, combinando lenguaje dermocosmetico premium con logica de protocolo profesional para la piel.',
        sections: [
          {
            title: 'Identidad cientifica espanola',
            body: 'PDOX bebe de la cultura de investigacion y formulacion de Madrid, presentando una historia de origen europeo creible para socios internacionales.',
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
        image: '/images/insight-madrid-origin.png',
        partnerValue:
          'Ayuda a los socios a explicar de donde viene la marca y por que PDOX se posiciona como una plataforma premium de ciencia cutanea profesional.',
      },
      {
        value: '4',
        label: 'complejos enzimaticos de precision',
        slug: 'enzyme-platform',
        title: 'Cuatro complejos enzimaticos de precision',
        summary:
          'PDOX presenta una plataforma multi-enzimatica disenada alrededor de prioridades complementarias de la piel: equilibrio lipidico, firmeza, entrega de hidratacion y refinamiento superficial.',
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
        image: '/images/insight-enzyme-platform.png',
        partnerValue:
          'Facilita explicar el sistema de productos en consultas, materiales de formacion y presentaciones ante distribuidores.',
      },
      {
        value: '15A',
        label: 'objetivo de estabilidad ambiente',
        slug: 'stability-target',
        title: 'Objetivo de estabilidad a temperatura ambiente',
        summary:
          'PDOX comunica una direccion de formulacion liderada por la estabilidad para socios profesionales que necesitan confianza en el manejo, almacenamiento y presentacion del producto.',
        sections: [
          {
            title: 'Disciplina de estabilidad',
            body: 'Las decisiones de formulacion priorizan la estabilidad en estante y la confianza de manejo bajo condiciones de canal profesional.',
          },
          {
            title: 'Manejo practico de canal',
            body: 'Menor dependencia de cadena de frio simplifica la logistica para clinicas y distribuidores en mercados variados.',
          },
          {
            title: 'Consistencia premium del producto',
            body: 'Cada lote debe ofrecer el mismo perfil visual, sensorial y de rendimiento.',
          },
        ],
        image: '/images/insight-stability-target.png',
        partnerValue:
          'Refuerza la confianza de clinicas y distribuidores al presentar PDOX como una plataforma dermocosmetica profesional seria.',
      },
      {
        value: 'UE',
        label: 'enfoque en calidad y cumplimiento',
        slug: 'eu-quality',
        title: 'Enfoque en calidad y cumplimiento UE',
        summary:
          'PDOX debe comunicar con lenguaje de calidad, trazabilidad y documentacion adecuado para canales profesionales internacionales.',
        sections: [
          {
            title: 'Lenguaje de calidad orientado a UE',
            body: 'Los claims, etiquetado y copy del sitio se preparan teniendo en cuenta las expectativas del mercado europeo.',
          },
          {
            title: 'Preparacion de lotes y documentacion',
            body: 'Los registros de producto y procesos de trazabilidad apoyan los requisitos de canal profesional.',
          },
          {
            title: 'Claims profesionales responsables',
            body: 'El posicionamiento se mantiene dentro de limites cosmeticos y de ciencia cutanea profesional sin sobredimensionar resultados medicos.',
          },
        ],
        image: '/images/insight-eu-quality.png',
        partnerValue:
          'Ayuda a los socios a prepararse para formacion, conversaciones de venta y documentacion futura de mercado sin sobredimensionar claims medicos.',
      },
    ],
    overviewKicker: 'Vision PDOX',
    overviewTitle: 'Programas profesionales bio-enzimaticos de piel desde Madrid.',
    overviewBody:
      'Una lectura clara de la plataforma PDOX: origen espanol, cuatro complejos enzimaticos, disciplina de estabilidad y lenguaje de calidad orientado a canales profesionales.',
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
        image: '/images/tech-lipase-complex.png',
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
        image: '/images/tech-collagenase-complex.png',
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
        image: '/images/tech-hyaluronidase-complex.png',
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
        image: '/images/tech-keratinase-complex.png',
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
    productsTitle: 'Serie de precision clinica',
    productsBody:
      'Una arquitectura compacta permite entender, demostrar y expandir la linea con claridad en distintos mercados.',
    products: [
      {
        slug: 'bandage-needle',
        name: 'Bandage Needle',
        subtitle: 'Serum de emergencia',
        body: 'Reparacion bio-enzimatica de alta penetracion para soporte de barrera y recuperacion intensiva.',
        image: '/images/product-bandage.jpg',
        tags: ['Reparacion', 'Barrera', 'Hero'],
      },
      {
        slug: 'remodeling-needle',
        name: 'Remodeling Needle',
        subtitle: 'Bioremodelado facial',
        body: 'Disenado para programas profesionales centrados en contorno facial y armonia.',
        image: '/images/product-remodeling.jpg',
        tags: ['Contorno', 'Firmeza'],
      },
      {
        slug: 'wrinkle-eraser',
        name: 'Wrinkle Eraser',
        subtitle: 'Antiarrugas',
        body: 'Posicionamiento de soporte de colageno para lineas, textura y refinamiento visible.',
        image: '/images/product-eraser.jpg',
        tags: ['Lineas', 'Textura'],
      },
      {
        slug: 'collagen-activator',
        name: 'Collagen Activator',
        subtitle: 'Revitalizacion total',
        body: 'Rutina diaria de fuerza profesional para elasticidad, firmeza y tono uniforme.',
        image: '/images/product-collagen.jpg',
        tags: ['Colageno', 'Luminosidad'],
      },
      {
        slug: 'hydration-complex',
        name: 'Hydration Complex',
        subtitle: 'Hidratacion mesodermica',
        body: 'Soporte para protocolos de hidratacion con presentacion clinica premium.',
        image: '/images/product-activator.jpg',
        tags: ['Hidratacion', 'Confort'],
      },
      {
        slug: 'liquid-bandage',
        name: 'Liquid Bandage',
        subtitle: 'Vendaje biologico activo',
        body: 'Concepto de reparacion para microlesiones, elasticidad y confort visible rapido.',
        image: '/images/product-liquid-bandage.png',
        tags: ['Recuperacion', 'Elasticidad'],
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
    channelsKicker: 'Canales Profesionales',
    channelsTitle: 'Pensado para clinicas, distribuidores y socios premium de marca.',
    channelsBody:
      'PDOX debe hablar a cada audiencia con un mensaje distinto, manteniendo un lenguaje cientifico premium y coherente.',
    channels: [
      {
        title: 'Clinicas y estudios de piel',
        body: 'Un sistema claro de productos para protocolos faciales y corporales, consulta profesional y menus de tratamiento premium.',
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
    protocolTitle: 'De imagenes de producto a rutas profesionales de tratamiento.',
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
          'Si. Cada producto ya tiene su propia pagina de detalle, por lo que se pueden agregar claims, protocolos, formacion, certificados o materiales de mercado.',
      },
      {
        question: 'Por que solo ingles y espanol?',
        answer:
          'El ingles ayuda a la comunicacion internacional, mientras que el espanol refuerza el origen de marca en Madrid y la identidad de lanzamiento.',
      },
      {
        question: 'Como deben contactar los socios con PDOX?',
        answer:
          'Actualmente las consultas van a info@pdoxserum.com. Mas adelante se puede anadir un formulario cuando la ruta comercial este definida.',
      },
    ],
    ctaTitle: 'Inicia un protocolo cutaneo de precision.',
    ctaBody:
      'Para clinicas, distribuidores y socios de marca, PDOX esta preparado para convertirse en una plataforma dermocosmetica global enfocada.',
    ctaButton: 'Contactar PDOX',
    footerBody:
      'PDOX es una marca independiente de ciencia cutanea bio-enzimatica de precision con base en Madrid. Historia de investigacion, formulacion y produccion preparada para distribucion global.',
    brandStoryTitle: 'Investigacion independiente, formulacion propia y presentacion clinica premium.',
    brandStorySummary: 'PDOX se construye desde una identidad espanola de bio-enzimas de precision para el cuidado de la piel, combinando credibilidad de laboratorio, estetica dermocosmetica premium y lenguaje de protocolo profesional.',
    brandStorySections: [
      { title: 'Identidad de laboratorio espanol', body: 'Arraigada en la cultura de investigacion de Madrid con una historia de origen europeo creible para socios internacionales.' },
      { title: 'Direccion de formulacion propia', body: 'Prioridades de desarrollo independientes que apoyan el posicionamiento premium en lugar de seguir tendencias de mercado masivo.' },
      { title: 'Presentacion clinica premium', body: 'Materiales, envases y lenguaje del sitio preparados para consulta clinica y educacion de distribuidores.' },
      { title: 'Preparado para clinicas, distribuidores y socios profesionales', body: 'Una plataforma de marca disenada para explicarse con confianza en canales profesionales desde el primer dia.' },
    ],
    brandStoryPartnerValue: 'Esta historia de marca ayuda a los socios a explicar PDOX como una plataforma seria de ciencia cutanea profesional, no solo un catalogo de productos.',
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
    lang === 'en'
      ? [
          `${product.subtitle} positioning for professional clinic and distributor presentation.`,
          'Part of the PDOX bio-enzyme range for focused repair, renewal and visible skin performance.',
          'Prepared for premium product education, protocol storytelling and partner conversations.',
        ]
      : [
          `${product.subtitle} para presentacion profesional en clinicas y distribucion.`,
          'Parte de la linea bio-enzimatica PDOX para reparacion, renovacion y rendimiento visible.',
          'Preparado para educacion premium, narrativa de protocolo y conversaciones con socios.',
        ];
  const protocol =
    lang === 'en'
      ? 'Use this page as the professional product snapshot: product role, visual identity, benefit language and a clear contact path for commercial follow-up.'
      : 'Usa esta pagina como ficha profesional del producto: rol, identidad visual, lenguaje de beneficio y contacto claro para seguimiento comercial.';

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <img src="/images/hero-bg-gold.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
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
              <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
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
      <img src="/images/hero-bg-gold.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
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
      <img src="/images/hero-bg-gold.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 z-0" />
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
            <img src="/images/logo.png" alt="PDOX" className="h-10 w-auto invert brightness-200" />
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
        ) : (
          <>
        <section id="home" className="relative min-h-screen overflow-hidden pt-20">
          <img
            src="/images/hero-bg-gold.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-55 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_32%,rgba(201,169,110,0.14),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.18),#0A0A0A_92%)]" />
          <GoldParticleField count={48} />
          <MolecularDriftLayer count={6} />
          <GoldLightSweep />
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <p className="reveal mb-6 text-[13px] uppercase tracking-[0.42em] text-[#C9A96E]">
                {t.heroEyebrow}
            </p>
            <div className="reveal relative">
              <div className="pdox-logo-breathe" />
              <div className="absolute inset-x-0 top-1/2 mx-auto h-28 w-80 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />
              <img src="/images/logo.png" alt="PDOX" className="relative mx-auto h-auto w-[min(72vw,480px)] invert brightness-200" />
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

        <section id="overview" className="relative overflow-hidden border-y border-white/10 bg-[#0D0C0A] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <img
            src="/images/bg-molecular-gold-flow.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/84 via-[#0A0A0A]/68 to-[#0A0A0A]/88" />
          <GoldParticleField subtle count={36} />
          <MolecularDriftLayer count={5} />
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

        <section id="brand" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <img
            src="/images/bg-lab-champagne.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/86 via-[#0A0A0A]/72 to-[#0A0A0A]/90" />
          <GoldParticleField subtle count={18} />
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

        <section id="technology" className="relative overflow-hidden border-y border-white/10 bg-[#111] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <img
            src="/images/bg-molecular-gold-flow.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/84 via-[#0A0A0A]/68 to-[#0A0A0A]/88" />
          <GoldParticleField subtle count={36} />
          <MolecularDriftLayer count={5} />
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
          <img
            src="/images/bg-lab-champagne.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/86 via-[#0A0A0A]/72 to-[#0A0A0A]/90" />
          <GoldParticleField subtle count={18} />
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
                  className="pdox-card-premium reveal group overflow-hidden border border-white/10 bg-[#111] text-left focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/70"
                >
                  <div className="aspect-[4/3] bg-black p-8">
                    <img
                      src={product.image}
                      alt={product.name}
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

        <section id="partners" className="relative overflow-hidden border-y border-white/10 bg-[#111] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <GoldParticleField subtle count={16} />
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
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <img src="/images/logo.png" alt="PDOX" className="mx-auto h-9 w-auto invert brightness-200 sm:mx-0" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/42">{t.footerBody}</p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/25">
            (c) 2026 PDOX - Madrid - Global Distribution
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
