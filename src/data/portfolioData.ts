// Datos y configuración oficial de Creador-Webs · Yanis HP (Diseño Web & Desarrollo)
// Con ganchos de venta persuasivos, proyectos de portafolio y cotizador integral
// Tarifas y condiciones 100% coherentes y transparentes en toda la web

export interface ProjectItem {
  id: string;
  title: string;
  category: 'corporativo' | 'ecommerce' | 'restauracion' | 'landing';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  results: string[];
  features: string[];
  techStack: string[];
  link?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  priceEur: number;
  badge?: string;
  popular?: boolean;
  deliveryDays: number;
  paymentTerms: string;
  revisions: string;
  description: string;
  includes: string[];
  excludes: string[];
  idealFor: string;
}

export interface MaintenancePlan {
  title: string;
  priceEur: number;
  frequency: string;
  isOptional: boolean;
  scope: string[];
  note: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  avatar: string;
  content: string;
  highlight: string;
  projectTag: string;
}

export const PERSONAL_INFO = {
  name: "Yanis HP",
  brandName: "Creador-Webs",
  tagline: "Diseño Web 24/7",
  headline: "Creo agentes de inteligencia artificial dentro de tus páginas web: que venden por ti",
  subheadline: "Diseño y desarrollo web a medida para autónomos, pymes y negocios locales. Interfaces ultrarrápidas, optimizadas para móvil y pensadas para convertir visitas en clientes reales.",
  phone: "608 18 02 31",
  phoneRaw: "608180231",
  whatsappNumber: "34608180231",
  whatsappUrl: "https://wa.me/34608180231?text=Hola%20Yanis,%20quiero%20informaci%C3%B3n%20para%20crear%20mi%20p%C3%A1gina%20web",
  email: "contacto@creador-webs.com",
  emailPendingPlaceholder: "[PENDIENTE: email]",
  location: "Barcelona y servicios para toda España",
  linkedinUrl: "https://www.linkedin.com/in/yanishp-creador-paginas-webs",
  websiteUrl: "https://creador-webs.vercel.app",
  logoImage: "/assets/images/creadorwebs_logo.jpg",
  portraitImage: "/assets/images/yanis_portrait_1791922813892.jpg",
  workspaceImage: "/assets/images/workspace_desk_1791922815468.jpg",
  ctaRepeated: "Escríbeme y te respondo hoy",
  sellingHooks: [
    {
      title: "Tu web, tu activo más rentable",
      description: "No es un gasto estético: una web bien estructurada trabaja 24/7 atrayendo solicitudes de clientes de forma constante.",
      badge: "Retorno de Inversión"
    },
    {
      title: "Diseño que no solo se ve bien, vende",
      description: "Estructuras de navegación y textos orientados a que el visitante tome acción: llamar, cotizar o escribirte por WhatsApp.",
      badge: "Conversión Real"
    },
    {
      title: "Resultados digitales medibles",
      description: "Velocidad de carga en menos de 1 segundo en móvil, analítica integrada y optimización para posicionar en Google.",
      badge: "Rendimiento Top"
    }
  ]
};

export const PACKAGES_DATA: ServicePackage[] = [
  {
    id: "landing-page",
    name: "Landing Page Express",
    subtitle: "Página única de máxima conversión",
    priceEur: 250,
    popular: false,
    deliveryDays: 5,
    paymentTerms: "Pago 50% al empezar (125 €) y 50% al entregar (125 €)",
    revisions: "2 rondas de revisiones incluidas",
    description: "Ideal para promocionar un servicio específico, campaña de captación o lanzamiento rápido con llamada a la acción directa.",
    idealFor: "Autónomos, profesionales, lanzamientos y servicios locales",
    includes: [
      "Diseño responsive 100% adaptado a móvil, tablet y ordenador",
      "Botón directo de WhatsApp con mensaje prellenado",
      "SEO técnico básico (indexación en Google y metadatos)",
      "2 rondas de revisiones incluidas antes de publicar"
    ],
    excludes: [
      "Formulario de contacto y presupuesto (disponible como complemento opcional)",
      "Galería de proyectos / obras (disponible como complemento opcional)",
      "Dominio y alojamiento web (se gestionan a tu nombre sin comisiones)",
      "Fotos y redacción de textos profesionales (disponible como complemento opcional)",
      "Cambios posteriores a la entrega del proyecto"
    ]
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa Pro",
    subtitle: "Sitio web completo de hasta 5 páginas",
    priceEur: 550,
    badge: "Más Solicitado",
    popular: true,
    deliveryDays: 10,
    paymentTerms: "Pago 50% al empezar (275 €) y 50% al entregar (275 €)",
    revisions: "3 rondas de revisiones incluidas",
    description: "Para empresas y pymes que necesitan páginas independientes para cada servicio, sobre nosotros, casos de éxito y contacto.",
    idealFor: "Pymes, empresas de servicios y profesionales consolidados",
    includes: [
      "Hasta 5 secciones completas (Inicio, Servicios, Sobre mí/nosotros, Casos, Contacto)",
      "Diseño visual a medida con identidad de marca",
      "Galería interactiva con filtros o catálogo de servicios",
      "Formulario de presupuesto a medida / cotizador integrado",
      "Integración de Google Maps, WhatsApp y redes sociales",
      "SEO técnico avanzado estructurado (Schema.org JSON-LD)",
      "Banner de cookies conforme a RGPD y políticas legales",
      "Soporte post-entrega de 30 días"
    ],
    excludes: [
      "Dominio y alojamiento web (gestionado a nombre de tu empresa)",
      "Mantenimiento continuo mensual (servicio opcional)",
      "Pasarela de cobro bancario de e-commerce (pertenece al plan Tienda Online)"
    ]
  },
  {
    id: "tienda-online",
    name: "E-Commerce & Catálogo",
    subtitle: "Tienda online completa con pasarela de pagos",
    priceEur: 950,
    popular: false,
    deliveryDays: 18,
    paymentTerms: "Pago 50% al empezar (475 €) y 50% al entregar (475 €)",
    revisions: "Revisiones completas en cada fase",
    description: "Tienda virtual profesional con catálogo de productos, carrito de compras, pasarela de pago segura y gestión ágil de pedidos.",
    idealFor: "Marcas de productos, comercio minorista y venta directa por internet",
    includes: [
      "Catálogo completo de productos con filtros y categorías",
      "Pasarela de pago segura (Stripe, Tarjetas, PayPal, Bizum)",
      "Panel autogestionable sencillo para añadir productos y stock",
      "Diseño optimizado para compra rápida en smartphones",
      "Recuperación de carritos y avisos automáticos de pedidos",
      "Configuración de gastos de envío y cálculo de impuestos",
      "Cumplimiento legal RGPD y política de devoluciones",
      "Formación en vídeo para que gestiones tu tienda con total autonomía"
    ],
    excludes: [
      "Dominio y alojamiento web (se configura en tu cuenta propia)",
      "Subida masiva manual de más de 30 productos iniciales (se presupuesta por volumen)",
      "Comisiones bancarias o de pasarelas de pago (propias de Stripe/banco)"
    ]
  }
];

export const MAINTENANCE_OFFER: MaintenancePlan = {
  title: "Mantenimiento Web Profesional",
  priceEur: 100,
  frequency: "mes",
  isOptional: true,
  scope: [
    "Copias periódicas de seguridad de tu web",
    "Actualizaciones técnicas de seguridad, plugins y dependencias",
    "Revisión mensual de formularios y enlaces para comprobar que todo funciona",
    "Monitorización continua de disponibilidad",
    "Hasta 2 pequeños cambios de contenido al mes (textos, nuevas fotos o tarifas)",
    "Informe mensual con el estado técnico y rendimiento de tu web"
  ],
  note: "Servicio totalmente opcional, sin permanencia ni ataduras. Todo lo que exceda el alcance mensual cerrado se presupuesta aparte con total transparencia."
};

export const COMPARATOR_FEATURES = [
  { name: "Diseño 100% Adaptable a Móvil", basic: true, pro: true, ecommerce: true },
  { name: "Velocidad Ultrarrápida (< 1s)", basic: true, pro: true, ecommerce: true },
  { name: "Botón Directo de WhatsApp", basic: true, pro: true, ecommerce: true },
  { name: "Formulario de Contacto Validado", basic: false, pro: true, ecommerce: true },
  { name: "Número de Páginas", basic: "1 Landing Page", pro: "Hasta 5 páginas", ecommerce: "Ilimitadas" },
  { name: "Galería de Proyectos / Trabajos", basic: false, pro: "Interactiva con filtros", ecommerce: "Catálogo de productos" },
  { name: "Cotizador Interactivo de Presupuestos", basic: false, pro: true, ecommerce: true },
  { name: "Pasarela de Pago (Stripe/PayPal)", basic: false, pro: false, ecommerce: true },
  { name: "Panel Autogestionable de Contenidos", basic: false, pro: "Opcional", ecommerce: true },
  { name: "SEO Técnico y Marcado Estructurado", basic: "Básico", pro: "Avanzado", ecommerce: "E-Commerce Avanzado" },
  { name: "Condiciones de Pago", basic: "50% inicio / 50% entrega", pro: "50% inicio / 50% entrega", ecommerce: "50% inicio / 50% entrega" },
  { name: "Soporte por Chat 24/7 (FAQ y Citas)", basic: "Opcional (+95€)", pro: "Opcional (+95€)", ecommerce: "Opcional (+95€)" },
  { name: "Tiempo de Entrega", basic: "5 días", pro: "10 días", ecommerce: "18 días" },
  { name: "Rondas de Revisiones", basic: "2 rondas", pro: "3 rondas", ecommerce: "Completas" },
  { name: "Soporte Post-Lanzamiento", basic: "15 días", pro: "30 días", ecommerce: "60 días" }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "ecovida",
    title: "EcoVida · Naturaleza & Bienestar",
    category: "ecommerce",
    categoryLabel: "Tienda Online & Bienestar",
    tagline: "E-Commerce de productos sostenibles y cosmética orgánica con alta tasa de repetición",
    description: "Diseño y desarrollo completo de tienda online para marca de vida saludable. Navegación fluida en móvil, selector ágil de variantes y pasarela de pago en 1 clic que multiplicó las ventas directas.",
    image: "/assets/images/project_ecovida_1791922814299.jpg",
    results: [
      "+140% de incremento en conversiones móviles en el primer mes",
      "Velocidad de carga de 0.8s en 4G",
      "Tasa de abandono de carrito reducida al 28%"
    ],
    features: [
      "Catálogo clasificado por categorías de bienestar y hogar",
      "Checkout rápido integrado con Stripe y Apple Pay",
      "Filtros avanzados por sellos ecológicos y tipo de piel",
      "Diseño limpio con paleta botánica cálida"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Stripe Checkout", "SEO Schema"]
  },
  {
    id: "bellezanatural",
    title: "Belleza Natural · Cosmética Premium",
    category: "corporativo",
    categoryLabel: "Web de Marca & E-Commerce",
    tagline: "Plataforma de marca premium con narrativa visual inmersiva y venta de alta gama",
    description: "Creación de una presencia digital sofisticada para firma de cosmética natural. Fotografía editorial destacada, explicaciones dermatológicas claras y canal de asesoría directa por WhatsApp.",
    image: "/assets/images/project_bellezanatural_1791922815000.jpg",
    results: [
      "+85% en tiempo medio de permanencia en la web",
      "Presencia de marca consolidada en redes y Google",
      "Aumento del ticket medio gracias al recomendador interactivo"
    ],
    features: [
      "Sección de ingredientes transparentes y rutina paso a paso",
      "Integración de reseñas con fotos de clientes reales",
      "Botón flotante de consulta personalizada",
      "Diseño editorial minimalista en tonos neutros"
    ],
    techStack: ["React 19", "Motion", "Tailwind CSS", "Performance Optimized"]
  },
  {
    id: "laterraza",
    title: "La Terraza · Restaurante & Experiencia",
    category: "restauracion",
    categoryLabel: "Gastronomía & Reservas",
    tagline: "Sitio web para restaurante gastronómico con menú digital interactivo y reservas directas",
    description: "Sitio web elegante para restaurante mediterráneo de alta cocina. Menú digital dinámico con alérgenos, fotos de platos en alta definición y sistema de reservas directas sin pagar comisiones a plataformas externas.",
    image: "/assets/images/project_laterraza_1791922815799.jpg",
    results: [
      "+65% en reservas online recibidas directamente por WhatsApp y web",
      "Menú digital consultado por más de 1.200 comensales al mes",
      "Cero costes por comisión de reservas a plataformas intermediarias"
    ],
    features: [
      "Menú digital QR interactivo con filtro de alérgenos y precios",
      "Formulario de reserva instantánea con confirmación por WhatsApp",
      "Galería fotográfica inmersiva del local y platos estrella",
      "Geolocalización con mapa interactivo y horario en tiempo real"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "WhatsApp API"]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Carlos Méndez",
    role: "Director",
    business: "Méndez Reformas & Interiorismo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Trabajar con Yanis fue un acierto total. En menos de una semana teníamos la web publicada. Ahora los clientes que nos contactan por WhatsApp ven nuestras obras antes de pedir presupuesto y cerramos proyectos con mucha más confianza.",
    highlight: "Web lista en tiempo récord y clientes con más confianza",
    projectTag: "Web Corporativa"
  },
  {
    id: "2",
    name: "Laura Vidal",
    role: "Fundadora",
    business: "BioCosmetics Barcelona",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    content: "Nuestra tienda online se veía anticuada y lenta. Yanis transformó por completo la imagen de la marca y la velocidad de carga es increíble. Las ventas desde el móvil han subido desde el primer mes.",
    highlight: "Velocidad brutal y aumento notable en ventas móviles",
    projectTag: "Tienda Online"
  },
  {
    id: "3",
    name: "Javier Ortiz",
    role: "Propietario",
    business: "Restaurante Terraza Mar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    content: "Queríamos dejar de pagar comisiones abusivas a portales de reservas. La web que nos preparó con el menú digital y el sistema directo por WhatsApp nos ha ahorrado cientos de euros al mes.",
    highlight: "Ahorro directo de comisiones y reservas directas",
    projectTag: "Gastronomía"
  }
];

export const HOW_I_WORK_PILLARS = [
  {
    number: "01",
    title: "Contacto & Claridad Total",
    desc: "Hablamos por WhatsApp o llamada para entender tu negocio, definir objetivos y darte un presupuesto cerrado sin sorpresas ni costes ocultos."
  },
  {
    number: "02",
    title: "Diseño & Desarrollo Ágil",
    desc: "Diseño a medida con código limpio y ultrarrápido. Ves los avances y afinamos juntos con rondas de revisión incluidas antes de publicar."
  },
  {
    number: "03",
    title: "Lanzamiento & Soporte",
    desc: "Tu web queda 100% operativa en tu dominio, configurada con Google y conectada a tu WhatsApp y formularios para que empieces a recibir clientes."
  }
];
