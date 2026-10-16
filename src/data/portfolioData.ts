export interface FiverrPackage {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  priceEur: number;
  priceUsd: number;
  depositEur: number;
  finalPaymentEur: number;
  monthlyMaintenanceEur: number;
  monthlyMaintenanceDesc: string;
  deliveryDays: number;
  revisions: string;
  pages: number;
  description: string;
  highlights: string[];
  features: {
    responsive: boolean;
    seoOptimization: boolean;
    contactForm: boolean;
    socialIntegration: boolean;
    adminPanel: boolean;
    ecommerce: boolean;
    paymentGateway: boolean;
    speedOptimization: boolean;
    revisionsCount: string;
    supportDays: number;
  };
  fiverrGigUrl: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'corporativa' | 'ecommerce' | 'restaurante' | 'servicios';
  categoryLabel: string;
  client: string;
  year: string;
  heroImage: string;
  description: string;
  problem: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  liveUrlMock: string;
  testimonialSnippet?: string;
  metrics?: { label: string; value: string };
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyOrProject: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  name: "CreadorWebs",
  role: "Diseño Web & Desarrollo",
  specialization: "Diseño Web & Desarrollo Front-End",
  location: "España / Remoto internacional",
  email: "",
  whatsappNumber: "34608180231",
  whatsappUrl: "https://wa.me/34608180231?text=Hola%20CreadorWebs,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20web",
  linkedinUrl: "https://www.linkedin.com/in/yanishp-creador-paginas-webs",
  websiteUrl: "https://creador-webs.vercel.app",
  fiverrUrl: "https://es.fiverr.com/creador_webs/creador-de-paginas-webs",
  fiverrUsername: "@creador_webs",
  logoImage: "/assets/images/creadorwebs_logo.jpg",
  portraitImage: "/assets/images/yanis_portrait_1791922813892.jpg",
  workspaceImage: "/assets/images/workspace_desk_1791922815468.jpg",
  motto: "Tu idea, mi código, tu web ♡",
  philosophy: "Las grandes ideas también necesitan un buen diseño web ♡",
  headline: "Creo páginas web modernas para dar vida a tus ideas",
  subheadline: "Diseño y desarrollo sitios web atractivos, funcionales y adaptados a tus necesidades. Ayudo a emprendedores, pequeñas empresas y profesionales a tener una presencia online profesional y de alto impacto.",
  aboutBio: [
    "En CreadorWebs, nos apasiona transformar proyectos en experiencias digitales limpias, rápidas y efectivas.",
    "Combinamos creatividad visual, arquitectura de información y tecnología moderna para diseñar sitios que no solo se vean bien, sino que conviertan visitas en clientes reales y ayuden a crecer a tu negocio.",
    "Trabajamos cada proyecto prestando máxima atención a tu objetivo comercial, la jerarquía visual y la adaptabilidad fluida en ordenadores, tabletas y teléfonos móviles."
  ],
  stats: [
    { 
      label: "Pago fraccionado 50/50", 
      value: "0% Riesgo", 
      desc: "50% al pedir y 50% al finalizar. No pagas la totalidad sin ver tu web terminada.",
      highlight: "Seguridad total"
    },
    { 
      label: "Entrega súper ágil", 
      value: "Desde 3 días", 
      desc: "Desarrollo dinámico y sin demoras para lanzar tu negocio cuanto antes.",
      highlight: "Rapidez garantizada"
    },
    { 
      label: "Diseño 100% a medida", 
      value: "Alta conversión", 
      desc: "Sin plantillas genéricas. Una web moderna pensada para convertir visitas en ventas.",
      highlight: "Diseño exclusivo"
    },
    { 
      label: "Google SEO & Móvil", 
      value: "Posicionamiento", 
      desc: "Velocidad de carga ultra rápida y estructura optimizada para motores de búsqueda.",
      highlight: "Visibilidad real"
    }
  ],
  guarantees: [
    { title: "Diseño atractivo", desc: "Coherente con tu identidad de marca y pensado para retener visitas." },
    { title: "Optimización SEO", desc: "Estructura semántica preparada para motores de búsqueda como Google." },
    { title: "Velocidad y rendimiento", desc: "Carga ultrarrápida en móviles y ordenadores sin retrasos." },
    { title: "Comunicación cercana", desc: "Trato directo, claro y con actualizaciones constantes en cada fase." },
    { title: "Entrega a tiempo", desc: "Compromiso estricto de plazos y seguimiento continuo en cada entrega." }
  ]
};

export const SERVICES_LIST = [
  {
    id: "web-personalizado",
    title: "Diseño web personalizado",
    description: "Sitios web únicos creados a la medida de tu marca y audiencia, transmitiendo autoridad y profesionalismo sin plantillas genéricas.",
    deliverables: ["Prototipado UI a medida", "Diseño visual exclusivo", "Arquitectura de contenidos"]
  },
  {
    id: "responsive",
    title: "Diseño 100% adaptable",
    description: "Cada sección y elemento se calibra minuciosamente para verse y funcionar a la perfección en smartphones, tablets y pantallas de escritorio.",
    deliverables: ["Navegación táctil optimizada", "Carga adaptativa de imágenes", "Tipografía escalable"]
  },
  {
    id: "tiendas-online",
    title: "Tiendas online (E-commerce)",
    description: "Lanza tu catálogo de productos y servicios con pasarelas de pago seguras, gestión de pedidos y una experiencia de compra sin fricciones.",
    deliverables: ["Catálogo de productos", "Integración Stripe/PayPal", "Carrito y checkout optimizado"]
  },
  {
    id: "mantenimiento-seo",
    title: "Mantenimiento y soporte",
    description: "Actualizaciones de seguridad, copias de respaldo, ajustes de contenido y optimizaciones de velocidad para que tu web nunca se detenga.",
    deliverables: ["Monitoreo de estado", "Optimización Core Web Vitals", "Soporte técnico directo"]
  }
];

export const FIVERR_PACKAGES: FiverrPackage[] = [
  {
    id: "basico",
    name: "Básico",
    subtitle: "Landing page Basic",
    priceEur: 250,
    priceUsd: 270,
    depositEur: 125,
    finalPaymentEur: 125,
    monthlyMaintenanceEur: 45,
    monthlyMaintenanceDesc: "45€ al mes (pago por adelantado): si quieres que te llevemos la landing page con cambios de imágenes, textos o información cuando lo necesites, nosotros nos encargamos.",
    deliveryDays: 5,
    revisions: "2 Revisiones",
    pages: 1,
    description: "Web por pedido para máxima atención a tu proyecto. Landing page de alto impacto para captar clientes o presentar tu negocio.",
    highlights: [
      "Precio total: 250€ (pago fraccionado: 125€ al pedir + 125€ al finalizar)",
      "Opción de gestión & mantenimiento: 45€/mes por adelantado para llevarte la landing",
      "Compromiso de exclusividad: Solo 1 web por pedido",
      "1 Página moderna (One-Page / Landing Page)",
      "Sitio web funcional y 100% responsive",
      "Formulario de suscripción y contacto hacia tu correo",
      "Instalación de 1 plugin/extensión esencial",
      "Iconos y enlaces directos a redes sociales",
      "Entrega garantizada en 5 días"
    ],
    features: {
      responsive: true,
      seoOptimization: true,
      contactForm: true,
      socialIntegration: true,
      adminPanel: false,
      ecommerce: false,
      paymentGateway: false,
      speedOptimization: false,
      revisionsCount: "2",
      supportDays: 7
    },
    fiverrGigUrl: "https://es.fiverr.com/creador_webs/creador-de-paginas-webs"
  },
  {
    id: "estandar",
    name: "Estándar",
    subtitle: "Web Corporativa",
    badge: "Más elegido para empresas",
    popular: true,
    priceEur: 700,
    priceUsd: 760,
    depositEur: 350,
    finalPaymentEur: 350,
    monthlyMaintenanceEur: 120,
    monthlyMaintenanceDesc: "120€ al mes (pago por adelantado): incluye gestión integral de contenidos, cambios de textos/imágenes, optimizaciones continuas y soporte técnico.",
    deliveryDays: 10,
    revisions: "5 Revisiones",
    pages: 5,
    description: "Dedicación 100% enfocada. Solución corporativa completa para empresas con pasarela de pago, catálogo y configuración de alojamiento.",
    highlights: [
      "Precio total: 700€ (pago fraccionado: 350€ al pedir + 350€ al finalizar)",
      "Exclusividad garantizada: Solo 1 web por pedido (atención 100% enfocada)",
      "Mantenimiento opcional: 120€/mes con soporte continuo y cambios",
      "Hasta 5 Páginas completas (Inicio, Servicios, Nosotros, Portafolio, Contacto)",
      "Carga de contenido incluida por nuestro equipo",
      "Funcionalidad de comercio electrónico (1 producto / servicio)",
      "Integración de pasarela de pagos segura (Stripe / PayPal)",
      "Configuración completa del alojamiento (Hosting y dominio)",
      "Instalación de 1 plugin/extensión avanzada",
      "Formulario de suscripción y cotización",
      "5 Revisiones incluidas y entrega en 10 días"
    ],
    features: {
      responsive: true,
      seoOptimization: true,
      contactForm: true,
      socialIntegration: false,
      adminPanel: true,
      ecommerce: true,
      paymentGateway: true,
      speedOptimization: false,
      revisionsCount: "5",
      supportDays: 15
    },
    fiverrGigUrl: "https://es.fiverr.com/creador_webs/creador-de-paginas-webs"
  },
  {
    id: "premium",
    name: "De Primera Calidad",
    subtitle: "Web Pro E-Commerce & Solución con Agentes IA",
    badge: "Máxima potencia & IA",
    priceEur: 1200,
    priceUsd: 1300,
    depositEur: 600,
    finalPaymentEur: 600,
    monthlyMaintenanceEur: 300,
    monthlyMaintenanceDesc: "300€ al mes (pago por adelantado): soporte prioritario, actualización de productos, automatizaciones avanzadas y Agentes de Inteligencia Artificial (IA) dedicados.",
    deliveryDays: 21,
    revisions: "Ilimitadas",
    pages: 10,
    description: "Desarrollo artesanal exclusivo. Plataforma de alta gama con pasarela de pago, optimización extrema de velocidad, respuesta automática e integración de Agentes IA.",
    highlights: [
      "Precio total: 1.200€ (pago fraccionado: 600€ al pedir + 600€ al finalizar)",
      "Exclusividad garantizada: Solo 1 web por pedido (desarrollo artesanal exclusivo)",
      "Mantenimiento opcional: 300€/mes con Agentes de IA dedicados y catálogo",
      "Hasta 10 Páginas completas y catálogo de productos",
      "Integración de respuesta automática / Agentes IA interactivos",
      "Optimización de velocidad de carga extrema (Score 90+)",
      "Funcionalidad de comercio electrónico e integración de pagos",
      "Configuración del alojamiento (Hosting y dominio)",
      "Instalación de 2 plugins/extensiones premium",
      "Carga de contenido completa por nuestro equipo",
      "Iconos y enlaces a redes sociales",
      "Revisiones ilimitadas y entrega en 21 días"
    ],
    features: {
      responsive: true,
      seoOptimization: true,
      contactForm: true,
      socialIntegration: true,
      adminPanel: true,
      ecommerce: true,
      paymentGateway: true,
      speedOptimization: true,
      revisionsCount: "Ilimitadas",
      supportDays: 30
    },
    fiverrGigUrl: "https://es.fiverr.com/creador_webs/creador-de-paginas-webs"
  }
];

export const COMPARISON_FEATURES = [
  { name: "Sitio web funcional (100% interactivo)", basico: true, estandar: true, premium: true },
  { name: "Número de páginas incluidas", basico: "1 Página", estandar: "5 Páginas", premium: "10 Páginas" },
  { name: "Precio total del proyecto", basico: "250€", estandar: "700€", premium: "1.200€" },
  { name: "Modalidad de pago", basico: "125€ reserva + 125€ entrega", estandar: "350€ reserva + 350€ entrega", premium: "600€ reserva + 600€ entrega" },
  { name: "Exclusividad de desarrollo", basico: "Solo 1 web por pedido", estandar: "Solo 1 web por pedido", premium: "Solo 1 web por pedido" },
  { name: "Mantenimiento mensual opcional", basico: "45€/mes (llevamos tu landing)", estandar: "120€/mes (soporte continuo)", premium: "300€/mes (+ Agentes IA Pro)" },
  { name: "Tiempo de entrega oficial", basico: "5 días", estandar: "10 días", premium: "21 días" },
  { name: "Revisiones incluidas", basico: "2 revisiones", estandar: "5 revisiones", premium: "Ilimitadas" },
  { name: "Carga de contenido del cliente", basico: false, estandar: true, premium: true },
  { name: "Instalación de plugins/extensiones", basico: "1 plugin", estandar: "1 plugin", premium: "2 plugins" },
  { name: "Funcionalidad de comercio electrónico", basico: false, estandar: true, premium: true },
  { name: "Integración de pasarela de pagos (Stripe/PayPal)", basico: false, estandar: true, premium: true },
  { name: "Formulario de suscripción y contacto", basico: true, estandar: true, premium: true },
  { name: "Integración de respuesta automática (Agentes IA)", basico: false, estandar: false, premium: true },
  { name: "Optimización de velocidad avanzada", basico: false, estandar: false, premium: true },
  { name: "Configuración del alojamiento (Hosting y dominio)", basico: false, estandar: true, premium: true },
  { name: "Iconos y enlaces a redes sociales", basico: true, estandar: false, premium: true },
  { name: "Diseño 100% adaptable (Móvil / Tablet)", basico: true, estandar: true, premium: true }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "ecovida",
    title: "EcoVida",
    subtitle: "Web corporativa · Naturaleza y bienestar",
    category: "corporativa",
    categoryLabel: "Web Corporativa",
    client: "EcoVida Soluciones Verdes",
    year: "2026",
    heroImage: "/assets/images/project_ecovida_1791922814299.jpg",
    description: "Sitio corporativo enfocado en transmitir frescura, sostenibilidad y credibilidad para una consultora ambiental y programas de bienestar en empresas.",
    problem: "Tenían una web obsoleta, difícil de navegar en teléfonos móviles y que no lograba que los directivos solicitaran reuniones de asesoría.",
    solution: "Diseñamos una arquitectura moderna de 5 secciones con fotografía paisajística inmersiva, tipografía limpia y llamadas a la acción claras para solicitar auditorías ambientales.",
    deliverables: [
      "Estructura corporativa multi-sección",
      "Optimización visual y jerarquía tipográfica",
      "Formulario interactivo de solicitud de programas",
      "Puntuación 98 en Google Lighthouse Móvil"
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "Responsive Design", "SEO Semántico"],
    liveUrlMock: "https://ecovida-demo.example.com",
    testimonialSnippet: "CreadorWebs entendió exactamente la esencia de EcoVida. La web ha triplicado nuestras solicitudes de reunión.",
    metrics: { label: "Incremento en consultas", value: "+140%" }
  },
  {
    id: "belleza-natural",
    title: "Belleza Natural",
    subtitle: "Tienda online · Cosmética natural & orgánica",
    category: "ecommerce",
    categoryLabel: "Tienda Online",
    client: "Belleza Natural Cosméticos",
    year: "2026",
    heroImage: "/assets/images/project_bellezanatural_1791922815000.jpg",
    description: "E-commerce de estética limpia y elegante para una marca boutique de cosmética orgánica artesanal, con catálogo visual y checkout rápido.",
    problem: "Vendían únicamente por Instagram mediante mensajes manuales, lo que provocaba pérdidas de ventas durante fines de semana y falta de control de inventario.",
    solution: "Implementamos una tienda digital con catálogo de productos por tipo de piel, pasarela de pago instantánea y cálculo transparente de envíos.",
    deliverables: [
      "Catálogo de productos con filtros por tipo de cuidado",
      "Integración de pasarela de pago segura",
      "Diseño minimalista con paleta cálida neutra",
      "Notificaciones automáticas de pedidos al comprador"
    ],
    techStack: ["E-Commerce", "Stripe API", "Responsive UI", "Optimización de Imágenes", "Gestión de Carrito"],
    liveUrlMock: "https://bellezanatural-shop.example.com",
    testimonialSnippet: "Ahora las ventas entran solas a cualquier hora. El diseño transmite la delicadeza y pureza de nuestros productos.",
    metrics: { label: "Ventas automatizadas", value: "+210%" }
  },
  {
    id: "la-terraza",
    title: "La Terraza",
    subtitle: "Restaurante · Menú digital y reservas",
    category: "restaurante",
    categoryLabel: "Restaurante",
    client: "Restaurante & Bodega La Terraza",
    year: "2026",
    heroImage: "/assets/images/project_laterraza_1791922815799.jpg",
    description: "Página web para restaurante gastronómico con carta digital interactiva mediante código QR, sistema de reservas de mesas y localización con Google Maps.",
    problem: "Los clientes llamaban constantemente en pleno servicio para consultar la carta y preguntar por mesas libres, saturando al personal de sala.",
    solution: "Creamos un sitio web evocador con fotografía gastronómica en primer plano, menú actualizado por alérgenos y módulo de reserva directa por WhatsApp y formulario.",
    deliverables: [
      "Carta gastronómica digital categorizada",
      "Módulo de reserva de mesa con confirmación rápida",
      "Acceso instantáneo por código QR para mesas",
      "Integración de localización y reseñas de Google"
    ],
    techStack: ["Web Gastronómica", "QR Dinámico", "Reservas Online", "Integración Maps", "Mobile First"],
    liveUrlMock: "https://laterraza-gourmet.example.com",
    testimonialSnippet: "Nuestros clientes elogian la comodidad de reservar desde el móvil y ver los platos antes de llegar.",
    metrics: { label: "Reservas digitales", value: "75% del total" }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Laura Martínez",
    role: "Directora de Operaciones",
    companyOrProject: "EcoVida Soluciones",
    projectType: "Web Corporativa",
    rating: 5,
    comment: "CreadorWebs entendió perfectamente lo que necesitaba desde la primera conversación. La web quedó increíble, es moderna, fácil de usar y ha mejorado muchísimo nuestra presencia online ante empresas clientes. ¡Totalmente recomendable!",
    date: "Enero 2026"
  },
  {
    id: "t2",
    clientName: "David Serrano",
    role: "Fundador",
    companyOrProject: "Belleza Natural",
    projectType: "Tienda Online E-Commerce",
    rating: 5,
    comment: "Le encargué mi tienda online a CreadorWebs y el resultado superó mis expectativas. La velocidad de entrega, la atención a cada detalle y lo fácil que dejó todo preparado para vender fueron espectaculares.",
    date: "Febrero 2026"
  },
  {
    id: "t3",
    clientName: "Carlos Rivas",
    role: "Chef Ejecutivo & Propietario",
    companyOrProject: "Restaurante La Terraza",
    projectType: "Web Gastronómica & Menú",
    rating: 5,
    comment: "Profesional, rápida y con un gusto impecable. La carta digital y el sistema de reservas han ahorrado horas de llamadas a nuestro equipo. Trabajar con CreadorWebs fue un acierto absoluto.",
    date: "Marzo 2026"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cómo es el proceso de contratación y pagos?",
    answer: "Trabajamos con total transparencia y seguridad: el pago se divide en 50% al comenzar el proyecto y el 50% restante únicamente cuando la web esté 100% finalizada, probada y validada por ti. Formalizamos el encargo con factura legal."
  },
  {
    question: "¿Puedo contactar directamente por WhatsApp o LinkedIn?",
    answer: "¡Por supuesto! Puedes pulsar en el botón de WhatsApp o escribirme a LinkedIn. Te responderé personalmente para resolver cualquier duda, asesorarte sobre la mejor opción para tu negocio y entregarte tu presupuesto sin compromiso."
  },
  {
    question: "¿Qué necesito tener preparado antes de empezar?",
    answer: "Solo necesitas una idea clara de lo que ofrece tu negocio, tu logotipo (si ya tienes) y los textos o fotos que quieras incluir. Si aún no tienes textos o imágenes, te asesoro y puedo ayudarte a redactarlos o buscar fotografías profesionales de alta calidad."
  },
  {
    question: "¿La web será fácil de gestionar para mí una vez entregada?",
    answer: "Sí. Entrego un panel intuitivo y un videotutorial grabado especialmente para ti donde te explico paso a paso cómo cambiar textos, fotos o agregar productos sin necesidad de tocar código."
  },
  {
    question: "¿Incluye el dominio y el alojamiento web (hosting)?",
    answer: "Te asesoro sin costo adicional sobre la mejor plataforma de hosting y dominio según tu proyecto (Hostinger, Raiola, Vercel, Shopify, etc.) y te ayudo a configurarlo para que tu web quede 100% publicada y funcionando."
  }
];
