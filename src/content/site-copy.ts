export type Lang = 'en' | 'es';

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  body: string;
  image: string;
  tags: string[];
  detailHighlights?: string[];
  detailProtocol?: string;
};

export type Stat = {
  value: string;
  label: string;
  slug: string;
  title: string;
  summary: string;
  sections: { title: string; body: string }[];
  partnerValue: string;
  image: string;
};

export type Copy = {
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

export const copy: Record<Lang, Copy> = {
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

