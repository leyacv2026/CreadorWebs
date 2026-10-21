// Base de conocimiento oficial y exclusiva de Creador-Webs
// Únicamente responde con información real de la web sin inventar nada ni salirse de la marca.

export interface ChatAnswer {
  text: string;
  quickReplies?: { label: string; action: string }[];
  triggerAppointment?: boolean;
}

export const BRAND_KNOWLEDGE = {
  brandName: "Creador-Webs",
  creatorName: "Yanis HP",
  tagline: "Diseño Web 24/7",
  location: "Barcelona y servicios para toda España",
  phone: "608 18 02 31",
  whatsappUrl: "https://wa.me/34608180231",
  email: "contacto@creador-webs.com",
  
  prices: {
    landing: {
      name: "Landing Page Express",
      price: 250,
      deliveryDays: 5,
      payment: "50% al empezar (125 €) y 50% al entregar (125 €)",
      revisions: "2 rondas de revisiones incluidas",
      includes: [
        "Diseño responsive 100% adaptado a móvil, tablet y ordenador",
        "Botón directo de WhatsApp con mensaje prellenado",
        "Optimización de carga ultrarrápida (< 1s)",
        "SEO técnico básico (indexación en Google y metadatos)",
        "2 rondas de revisiones antes de publicar"
      ],
      excludes: [
        "Formulario de contacto validado (extra +50 €)",
        "Galería de proyectos propios (extra +60 €)",
        "Dominio y alojamiento (se configuran a tu nombre sin comisiones)",
        "Cambios posteriores a la entrega"
      ]
    },
    corporativa: {
      name: "Web Corporativa Pro",
      price: 550,
      deliveryDays: 10,
      payment: "50% al empezar (275 €) y 50% al entregar (275 €)",
      revisions: "3 rondas de revisiones incluidas",
      scope: "Hasta 5 páginas completas (Inicio, Servicios, Sobre mí/nosotros, Casos, Contacto)",
      includes: [
        "Hasta 5 páginas independientes completas",
        "Galería interactiva con filtros o catálogo",
        "Formulario de presupuesto y contacto validado",
        "Integración con Google Maps, WhatsApp y redes sociales",
        "SEO técnico estructurado Schema.org JSON-LD",
        "Banner de cookies conforme a RGPD",
        "30 días de soporte post-entrega"
      ]
    },
    ecommerce: {
      name: "E-Commerce & Catálogo (Tienda Online)",
      price: 950,
      deliveryDays: 18,
      payment: "50% al empezar (475 €) y 50% al entregar (475 €)",
      revisions: "Revisiones completas en cada fase",
      includes: [
        "Catálogo completo de productos con filtros y categorías",
        "Pasarela de pago segura (Stripe, Tarjetas, PayPal, Bizum)",
        "Panel autogestionable sencillo para productos y stock",
        "Diseño optimizado para compras rápidas desde el móvil",
        "Recuperación de carritos y cálculo de envíos/impuestos",
        "Formación en vídeo para gestionar tu tienda",
        "60 días de soporte post-entrega"
      ]
    },
    aMedida: {
      name: "Desarrollo a Medida",
      price: 1200,
      description: "Para proyectos con requerimientos específicos, integraciones complejas o desarrollos a medida."
    }
  },

  maintenance: {
    title: "Mantenimiento Web Profesional",
    price: "desde + 100€/mes",
    isOptional: true,
    commitment: "Sin permanencia ni ataduras. Puedes darlo de baja cuando quieras.",
    scope: [
      "Copias de seguridad periódicas de tu web",
      "Actualizaciones técnicas de seguridad, plugins y dependencias",
      "Revisión mensual de formularios y enlaces para asegurar que todo funciona",
      "Monitorización continua de disponibilidad",
      "Hasta 2 pequeños cambios de contenido al mes (textos, nuevas fotos o tarifas)",
      "Informe mensual con el estado y rendimiento de la web"
    ]
  },

  addons: [
    { name: "Formulario de Contacto y Presupuesto", price: "50 €" },
    { name: "Galería de Trabajos / Proyectos", price: "60 €" },
    { name: "Soporte por Chat 24/7 (FAQ y Citas)", price: "95 €" },
    { name: "Redacción de Textos Persuasivos (Copywriting)", price: "130 €" },
    { name: "Multi-idioma (Català / Inglés)", price: "120 €" },
    { name: "Página adicional en Web Corporativa", price: "50 € / página (a partir de 5)" }
  ],

  methodology: [
    "1. Llamada de 15 minutos: analizamos tu negocio y el objetivo de tu web.",
    "2. Propuesta con precio cerrado: alcance definido sin sorpresas, con 50% al inicio.",
    "3. Entrega en plazo garantizado: 5 días (Landing), 10 días (Corporativa) o 18 días (Tienda), y pago del 50% restante solo al entregar."
  ],

  niches: [
    {
      id: "reformas",
      name: "Reformas y Oficios (Reformistas, Pintores, Electricistas, Fontaneros)",
      detail: "Webs pensadas para enseñar fotos de obras terminadas (antes y después) y botón directo de WhatsApp para pedir presupuesto inmediato."
    },
    {
      id: "hosteleria",
      name: "Restaurantes y Hostelería",
      detail: "Carta digital interactiva QR con fotos y alérgenos, y sistema de reservas directas por WhatsApp sin pagar comisiones a plataformas externas."
    },
    {
      id: "bienestar",
      name: "Salud, Belleza y Estética",
      detail: "Diseño limpio y profesional para clínicas, fisioterapeutas y centros de estética con desglose de tratamientos y solicitud de cita previa."
    },
    {
      id: "ecommerce",
      name: "Comercio Local y Tiendas Online",
      detail: "Tiendas ágiles con pasarela de pago en 1 clic (Bizum, Tarjetas, Stripe) para vender productos 24/7."
    },
    {
      id: "profesionales",
      name: "Servicios Profesionales y Pymes",
      detail: "Despachos, asesorías y consultores que necesitan transmitir autoridad y filtrar clientes de alto valor."
    }
  ],

  portfolio: [
    { name: "EcoVida", type: "Tienda Online & Bienestar", result: "+140% de conversiones móviles en el primer mes y carga en 0.8s." },
    { name: "Belleza Natural", type: "Web de Marca Premium", result: "+85% de permanencia de usuarios con recomendador y WhatsApp directo." },
    { name: "La Terraza", type: "Restaurante & Reservas Directas", result: "Reservas directas sin comisiones a terceros y menú digital con alérgenos." }
  ],

  privacyGdpr: [
    "100 % conforme al RGPD en centros de datos ubicados en la Unión Europea (Frankfurt / París).",
    "Cifrado TLS 1.3 de extremo a extremo.",
    "Sin transferencias ilegales de datos ni cookies invasivas de terceros.",
    "Avisos legales, política de privacidad y cookies adaptados a la normativa española y europea."
  ]
};

// Función de procesamiento que responde con fidelidad absoluta a la información del sitio web
export function getChatBotResponse(rawQuery: string): ChatAnswer {
  const q = rawQuery.toLowerCase().trim();

  // 1. Detección de consultas ajenas a la marca o al servicio web (Filtro estricto)
  const unrelatedKeywords = [
    'receta', 'cocinar', 'paella', 'tiempo en', 'clima', 'chiste', 'cuentame un chiste',
    'politica', 'presidente', 'futbol', 'barcelona vs', 'real madrid', 'partido',
    'cripto', 'bitcoin', 'ethereum', 'trading', 'acciones', 'bolsa', 'inversion en bolsa',
    'medicina', 'dolor de cabeza', 'sintomas', 'enfermedad', 'pelicula', 'serie',
    'python', 'django', 'c++', 'java backend', 'quien descubrio', 'capital de'
  ];

  const isUnrelated = unrelatedKeywords.some(keyword => q.includes(keyword));
  if (isUnrelated) {
    return {
      text: "Como asistente oficial de **Creador-Webs**, estoy especializado únicamente en información sobre nuestros servicios de diseño web, tarifas, plazos, mantenimiento y contratación. No dispongo de información sobre temas ajenos a la marca.\n\n¿Deseas consultar nuestras tarifas (Landing 250€, Corporativa 550€, Tienda 950€), plazos de entrega o agendar una llamada de 15 minutos?",
      quickReplies: [
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "⏱️ Ver plazos", action: "faq_plazos" },
        { label: "📅 Agendar llamada", action: "agendar_cita" }
      ]
    };
  }

  // 2. Saludos de cortesía
  if (/^(hola|buenos dias|buenas tardes|buenas noches|buenas|hey|hola buenas|que tal)/i.test(q) && q.length < 25) {
    return {
      text: "¡Hola! Bienvenido a **Creador-Webs**. Te ayudo al instante con cualquier información de nuestra web: tarifas oficiales, plazos de entrega, qué incluye cada paquete o cómo trabajamos.\n\n¿Qué te gustaría saber hoy?",
      quickReplies: [
        { label: "💰 Tarifas y precios", action: "faq_precios" },
        { label: "⏱️ Plazos de entrega", action: "faq_plazos" },
        { label: "📅 Agendar llamada 15 min", action: "agendar_cita" },
        { label: "🔨 Nicho de reformas y oficios", action: "faq_reformas" },
        { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 3. PLAZOS Y TIEMPO DE ENTREGA (MÁXIMA PRIORIDAD PARA CONSULTAS DE TIEMPO / CUÁNTO TARDAS)
  const isDeliveryQuery = 
    q.includes('tarda') || 
    q.includes('tardas') || 
    q.includes('tardáis') || 
    q.includes('tardais') || 
    q.includes('plazo') || 
    q.includes('plazos') || 
    q.includes('tiempo de entrega') || 
    q.includes('cuanto tardas') || 
    q.includes('cuánto tardas') || 
    q.includes('cuanto tiempo') || 
    q.includes('cuánto tiempo') || 
    q.includes('cuanto se tarda') || 
    q.includes('cuánto se tarda') || 
    q.includes('cuando está lista') || 
    q.includes('cuándo está lista') || 
    q.includes('cuando la entregas') || 
    q.includes('cuándo la entregas') || 
    q.includes('cuantos dias') || 
    q.includes('cuántos días') || 
    q.includes('cuantas semanas') || 
    q.includes('cuántas semanas') || 
    q.includes('demora') || 
    q.includes('demoras') || 
    q.includes('fecha de entrega') || 
    /cu[aá]nto (se tarda|tardas|tiempo|demora|d[ií]as)/i.test(q);

  if (isDeliveryQuery) {
    // Si pregunta específicamente por el plazo de la landing
    if (q.includes('landing') || q.includes('express') || q.includes('250')) {
      return {
        text: `⏱️ **Plazo de entrega de la Landing Page Express:**\n\n• Está lista en **exactamente 5 días laborables** garantizados.\n• El plazo empieza a contar tras recibir el contenido básico y abonar el 50% inicial.\n• Incluye **2 rondas de revisiones** para dejarla a tu gusto antes de publicar.\n\nPrecio cerrado: **250 €** (125 € al empezar y 125 € a la entrega).`,
        quickReplies: [
          { label: "📄 Qué incluye la Landing", action: "faq_landing" },
          { label: "📅 Agendar llamada 15 min", action: "agendar_cita" },
          { label: "💬 Hablar con Yanis por WhatsApp", action: "ir_whatsapp" }
        ]
      };
    }

    // Si pregunta por la corporativa
    if (q.includes('corporativa') || q.includes('550') || q.includes('5 paginas') || q.includes('5 páginas')) {
      return {
        text: `⏱️ **Plazo de entrega de la Web Corporativa Pro:**\n\n• Está lista en **10 días laborables** garantizados.\n• Incluye hasta 5 páginas completas, formulario de presupuesto y galería interactiva con filtros.\n• Incluye rondas de revisiones y 30 días de soporte post-entrega.\n\nPrecio cerrado: **550 €** (275 € al empezar y 275 € a la entrega).`,
        quickReplies: [
          { label: "🏢 Qué incluye la Corporativa", action: "faq_corporativa" },
          { label: "📅 Agendar llamada 15 min", action: "agendar_cita" },
          { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
        ]
      };
    }

    // Si pregunta por la tienda online
    if (q.includes('tienda') || q.includes('ecommerce') || q.includes('e-commerce') || q.includes('950')) {
      return {
        text: `⏱️ **Plazo de entrega de la Tienda Online E-Commerce:**\n\n• Está lista en **18 días laborables** garantizados.\n• Incluye catálogo autogestionable de productos, pasarela Bizum/Tarjetas/Stripe, cálculo de envíos y formación en vídeo.\n\nPrecio cerrado: **950 €** (475 € al empezar y 475 € a la entrega).`,
        quickReplies: [
          { label: "💰 Ver tarifas completas", action: "faq_precios" },
          { label: "📅 Agendar llamada 15 min", action: "agendar_cita" }
        ]
      };
    }

    // Respuesta general de plazos precisa y directa
    return {
      text: `⏱️ **Plazos de entrega garantizados en Creador-Webs:**\n\n• **Landing Page Express:** lista en **5 días laborables**\n• **Web Corporativa Pro (hasta 5 páginas):** lista en **10 días laborables**\n• **Tienda Online (E-Commerce):** lista en **18 días laborables**\n• **Desarrollo a Medida:** según proyecto (generalmente de 2 a 4 semanas)\n\n📌 **¿Cómo se garantiza el plazo?**\nEl tiempo comienza a correr una vez acordado el contenido y abonado el 50% inicial. Todos los paquetes incluyen rondas de revisiones para que apruebes la web antes de publicarla.`,
      quickReplies: [
        { label: "📄 Plazos de la Landing (250 €)", action: "faq_landing" },
        { label: "🏢 Plazos de la Corporativa (550 €)", action: "faq_corporativa" },
        { label: "💰 Ver todas las tarifas", action: "faq_precios" },
        { label: "📅 Agendar llamada 15 min", action: "agendar_cita" }
      ]
    };
  }

  // 4. FORMA DE PAGO Y CONDICIONES (50% AL EMPEZAR Y 50% A LA ENTREGA)
  const isPaymentQuery = 
    q.includes('pago') || 
    q.includes('pagar') || 
    q.includes('50%') || 
    q.includes('50 %') || 
    q.includes('adelanto') || 
    q.includes('anticipo') || 
    q.includes('como se cobra') || 
    q.includes('cómo se cobra') || 
    q.includes('cuando se paga') || 
    q.includes('cuándo se paga') || 
    q.includes('condiciones de pago') ||
    q.includes('formas de pago');

  if (isPaymentQuery) {
    return {
      text: `En Creador-Webs el modelo de pago es **100% transparente y sin riesgos**:\n\n• **50% al empezar el proyecto** tras acordar el alcance cerrado por escrito.\n• **50% al entregar la web terminada**, revisada y aprobada por ti antes de publicarla.\n\nSin letra pequeña, sin cuotas sorpresa ni comisiones ocultas.`,
      quickReplies: [
        { label: "💰 Ver tarifas oficiales", action: "faq_precios" },
        { label: "📅 Agendar llamada 15 min", action: "agendar_cita" },
        { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 5. MANTENIMIENTO WEB (+100€/mes OPCIONAL)
  const isMaintenanceQuery = 
    q.includes('mantenimiento') || 
    q.includes('100€') || 
    q.includes('100 €') || 
    q.includes('mensual') || 
    q.includes('actualizacion') || 
    q.includes('actualizaciones') || 
    q.includes('copia de seguridad') ||
    q.includes('copias');

  if (isMaintenanceQuery) {
    return {
      text: `El **Mantenimiento Web Profesional** es **desde + 100€/mes** y es un servicio **totalmente opcional, sin permanencia** ni ataduras:\n\nIncluye alcance cerrado:\n• Copias de seguridad periódicas de tu web.\n• Actualizaciones técnicas de seguridad, plugins y dependencias.\n• Revisión mensual de formularios y enlaces para comprobar que todo funciona.\n• Monitorización continua de disponibilidad.\n• Hasta 2 pequeños cambios de contenido al mes (textos, nuevas fotos o tarifas).\n• Informe mensual técnico y de rendimiento.`,
      quickReplies: [
        { label: "💰 Ver tarifas de webs", action: "faq_precios" },
        { label: "💬 Consultar mantenimiento por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 6. FORMULARIO Y GALERÍA (INCLUSIONES / EXCLUSIONES)
  if (q.includes('formulario') || q.includes('galeria') || q.includes('galería') || q.includes('fotos propias') || q.includes('obras propias')) {
    return {
      text: `Sobre el formulario y la galería de proyectos:\n\n• **En la Landing Page Express (250 €):** No vienen incluidos de serie para mantener un coste mínimo y cerrado. El contacto se realiza mediante botón directo de WhatsApp. Si los necesitas, se pueden añadir como extras (+50 € el formulario validado y +60 € la galería fotográfica).\n• **En la Web Corporativa Pro (550 €):** Tanto el formulario de presupuesto como la galería interactiva con filtros vienen **100% incluidos de serie**.`,
      quickReplies: [
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "📄 Ver Landing de 250 €", action: "faq_landing" },
        { label: "🏢 Ver Corporativa de 550 €", action: "faq_corporativa" }
      ]
    };
  }

  // 7. METODOLOGÍA Y CÓMO TRABAJAMOS (3 PASOS)
  if (q.includes('como trabajas') || q.includes('cómo trabajas') || q.includes('metodologia') || q.includes('metodología') || q.includes('proceso') || q.includes('pasos') || q.includes('fases')) {
    return {
      text: `Nuestro proceso de trabajo consta de **3 pasos claros y transparentes**:\n\n1. **Llamada de 15 minutos:** analizamos tu negocio, tu cliente objetivo y definimos la estructura.\n2. **Propuesta con precio cerrado:** alcance definido por escrito y pago del 50% al inicio.\n3. **Entrega en plazo garantizado:** lista en 5 días (Landing) o 10 días (Corporativa), con revisiones incluidas y pago del 50% restante solo al entregar.`,
      quickReplies: [
        { label: "📅 Agendar llamada de 15 min", action: "agendar_cita" },
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 8. NICHOS DE REFORMAS Y OFICIOS (REFORMISTAS, PINTORES, ELECTRICISTAS, FONTANEROS)
  if (
    q.includes('reforma') || q.includes('reformista') || q.includes('pintor') || 
    q.includes('electricista') || q.includes('fontanero') || q.includes('oficio') || q.includes('obra')
  ) {
    return {
      text: `Diseñamos webs especializadas para **reformistas, electricistas, pintores y fontaneros** en Barcelona y área metropolitana:\n\n• **Objetivo único:** que el cliente vea tus obras en el móvil y te pida presupuesto por WhatsApp.\n• **Landing de 250 €:** lista en 5 días con galería de obras (antes y después), botón directo de llamada y WhatsApp.\n• **Sin inventar nada:** sin promesas falsas, directo a mostrar tu trabajo y facilitar el contacto.`,
      quickReplies: [
        { label: "🔨 Ver demo para reformistas", action: "demo_reformistas" },
        { label: "⚡ Ver demo para electricistas", action: "demo_electricistas" },
        { label: "🎨 Ver demo para pintores", action: "demo_pintores" },
        { label: "🔧 Ver demo para fontaneros", action: "demo_fontaneros" }
      ]
    };
  }

  // 9. AGENDAR CITA / LLAMADA DE 15 MINUTOS
  if (q.includes('cita') || q.includes('llamada') || q.includes('reunion') || q.includes('reunión') || q.includes('hablar por') || q.includes('agendar') || q.includes('reservar')) {
    return {
      text: `Puedes agendar una **llamada de 15 minutos sin compromiso** con Yanis HP. Analizaremos tu negocio y te daremos una propuesta clara con precio cerrado. Rellena el formulario que aparece a continuación o escríbenos directamente por WhatsApp:`,
      triggerAppointment: true,
      quickReplies: [
        { label: "💬 Escribir directamente por WhatsApp", action: "ir_whatsapp" },
        { label: "💰 Ver tarifas antes de llamar", action: "faq_precios" }
      ]
    };
  }

  // 10. PRECIOS, TARIFAS Y PRESUPUESTOS ESPECÍFICOS Y GENERALES
  const isPricingWord = 
    q.includes('precio') || 
    q.includes('tarifa') || 
    q.includes('cuesta') || 
    q.includes('cobras') || 
    q.includes('coste') || 
    q.includes('presupuesto') || 
    q.includes('cuanto cuesta') || 
    q.includes('cuánto cuesta') || 
    q.includes('cuanto vale') || 
    q.includes('cuánto vale') || 
    q.includes('cuanto sale') || 
    q.includes('cuánto sale') || 
    q.includes('cotizar') ||
    q.includes('cotizacion') ||
    q.includes('cotización');

  if (isPricingWord || q.includes('landing') || q.includes('corporativa') || q.includes('tienda') || q.includes('medida')) {
    // Si pregunta específicamente por Landing Page
    if (q.includes('landing') || q.includes('basica') || q.includes('básica') || q.includes('express') || q.includes('250')) {
      return {
        text: `La **Landing Page Express** cuesta **250 €** precio cerrado:\n\n• **Forma de pago:** 50% al empezar (125 €) y 50% al entregar (125 €).\n• **Plazo:** lista en 5 días laborables.\n• **Incluye:** Diseño 100% responsive en móvil, botón directo de WhatsApp, velocidad < 1s, SEO técnico básico y 2 rondas de revisiones.\n• **No incluye:** Formulario de contacto ni galería propia (disponibles como extras por +50€ y +60€), ni dominio/alojamiento.`,
        quickReplies: [
          { label: "📋 Comparar con Web Corporativa", action: "faq_corporativa" },
          { label: "📅 Agendar llamada de 15 min", action: "agendar_cita" },
          { label: "💬 Contratar por WhatsApp", action: "ir_whatsapp" }
        ]
      };
    }

    // Si pregunta por Web Corporativa
    if (q.includes('corporativa') || q.includes('550') || q.includes('5 paginas') || q.includes('5 páginas') || q.includes('pyme')) {
      return {
        text: `La **Web Corporativa Pro** cuesta **550 €** precio cerrado:\n\n• **Forma de pago:** 50% al empezar (275 €) y 50% al entregar (275 €).\n• **Plazo:** lista en 10 días laborables.\n• **Incluye:** Hasta 5 páginas completas (Inicio, Servicios, Sobre nosotros, Casos, Contacto), formulario de presupuesto validado, galería interactiva con filtros, Google Maps, redes sociales, SEO Schema JSON-LD y 30 días de soporte post-entrega.`,
        quickReplies: [
          { label: "💰 Ver todas las tarifas", action: "faq_precios" },
          { label: "📅 Agendar llamada", action: "agendar_cita" },
          { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
        ]
      };
    }

    // Si pregunta por Tienda Online o E-commerce
    if (q.includes('tienda') || q.includes('ecommerce') || q.includes('e-commerce') || q.includes('950') || q.includes('vender')) {
      return {
        text: `La **Tienda Online (E-Commerce)** cuesta **950 €** precio cerrado:\n\n• **Forma de pago:** 50% al empezar (475 €) y 50% al entregar (475 €).\n• **Plazo:** lista en 18 días laborables.\n• **Incluye:** Catálogo completo de productos con filtros, pasarela de pagos segura (Stripe, Bizum, Tarjetas, PayPal), panel autogestionable sencillo, recuperación de carritos, cálculo de envíos, formación en vídeo y 60 días de soporte.`,
        quickReplies: [
          { label: "💰 Ver todas las tarifas", action: "faq_precios" },
          { label: "📅 Agendar llamada", action: "agendar_cita" }
        ]
      };
    }

    // Si pregunta por la tarifa a medida
    if (q.includes('medida') || q.includes('1200') || q.includes('1.200') || q.includes('personalizad')) {
      return {
        text: `La tarifa de **Desarrollo a Medida** cuesta **1.200 €**:\n\nEstá pensada para proyectos con necesidades avanzadas, flujos específicos o integraciones personalizadas que exceden los paquetes estándar. Siempre con alcance cerrado y pago 50% al inicio y 50% a la entrega.`,
        quickReplies: [
          { label: "📅 Agendar llamada para mi proyecto", action: "agendar_cita" },
          { label: "💬 Consultar por WhatsApp", action: "ir_whatsapp" }
        ]
      };
    }

    // Resumen general de tarifas cuando pregunta por precios/presupuesto en general
    return {
      text: `Nuestras tarifas oficiales tienen alcance cerrado y cero contradicciones:\n\n1. **Landing Page Express:** 250 € (entrega en 5 días)\n2. **Web Corporativa Pro (hasta 5 páginas):** 550 € (entrega en 10 días)\n3. **Tienda Online (E-Commerce):** 950 € (entrega en 18 días)\n4. **Desarrollo a Medida:** 1.200 €\n5. **Mantenimiento opcional:** desde + 100€/mes sin permanencia.\n\nForma de pago garantizada: **50% al inicio y 50% restante únicamente a la entrega** del proyecto terminado.`,
      quickReplies: [
        { label: "📄 Qué incluye la Landing de 250€", action: "faq_landing" },
        { label: "🏢 Qué incluye la Corporativa de 550€", action: "faq_corporativa" },
        { label: "📅 Agendar llamada de 15 min", action: "agendar_cita" }
      ]
    };
  }

  // 11. POR QUÉ ELEGIR CREADOR-WEBS / PILARES
  if (q.includes('por que') || q.includes('por qué') || q.includes('ventaja') || q.includes('ventajas') || q.includes('motivo') || q.includes('elegirte') || q.includes('diferencia')) {
    return {
      text: `En Creador-Webs nos diferenciamos por tres pilares enfocados a rentabilidad:\n\n1. **Tu web, tu activo más rentable:** No es un gasto estético; está pensada para atraer clientes de forma constante 24/7.\n2. **Diseño que vende:** Textos directos, llamadas a la acción claras y botón de WhatsApp accesible en un toque.\n3. **Rendimiento medible:** Carga ultrarrápida en menos de 1 segundo en móvil y SEO estructurado para Google.\n\nY además: trato 1 a 1 directo con Yanis HP, sin intermediarios.`,
      quickReplies: [
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "📅 Agendar llamada", action: "agendar_cita" },
        { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 12. OTROS NICHOS (HOSTELERÍA / SALUD / ESTÉTICA)
  if (q.includes('restaurante') || q.includes('bar') || q.includes('carta') || q.includes('hosteleria') || q.includes('hostelería')) {
    return {
      text: `Para **Restaurantes y Hostelería** creamos webs con carta digital interactiva QR con fotos y alérgenos, y sistema de reservas directas a tu WhatsApp **sin pagar comisiones** a intermediarios ni plataformas externas.`,
      quickReplies: [
        { label: "💰 Ver precios", action: "faq_precios" },
        { label: "📅 Agendar llamada", action: "agendar_cita" }
      ]
    };
  }

  if (q.includes('clinica') || q.includes('clínica') || q.includes('estetica') || q.includes('estética') || q.includes('salud') || q.includes('psicolog') || q.includes('fisio')) {
    return {
      text: `Para **Salud, Belleza y Bienestar** diseñamos webs que transmiten tranquilidad y confianza médica, con desglose de tratamientos y solicitud de cita previa sin fricciones.`,
      quickReplies: [
        { label: "💰 Ver precios", action: "faq_precios" },
        { label: "📅 Agendar llamada", action: "agendar_cita" }
      ]
    };
  }

  // 13. QUIÉN SOY / YANIS HP / BARCELONA / TRATO 1 A 1
  if (q.includes('quien eres') || q.includes('quién eres') || q.includes('yanis') || q.includes('empresa') || q.includes('barcelona') || q.includes('donde estas') || q.includes('dónde estás') || q.includes('equipo')) {
    return {
      text: `Detrás de **Creador-Webs** está **Yanis HP**, freelance de diseño y desarrollo web con base en Barcelona.\n\n• **Trato 1 a 1:** hablas directamente con quien programa y diseña tu web, sin comerciales ni intermediarios.\n• **Servicios:** presencial para Barcelona y área metropolitana, y 100% online para toda España.\n• **Enfoque:** webs rápidas que cargan en menos de 1 segundo y pensadas para vender.`,
      quickReplies: [
        { label: "💰 Ver paquetes y tarifas", action: "faq_precios" },
        { label: "📅 Agendar llamada de 15 min", action: "agendar_cita" },
        { label: "💬 WhatsApp: 608 18 02 31", action: "ir_whatsapp" }
      ]
    };
  }

  // 14. CUMPLIMIENTO RGPD, PRIVACIDAD Y DATOS
  if (q.includes('rgpd') || q.includes('gdpr') || q.includes('privacidad') || q.includes('datos') || q.includes('seguridad') || q.includes('cookies') || q.includes('europa') || q.includes('legal')) {
    return {
      text: `Nuestras webs y este chat cumplen **100 % con el RGPD y la normativa europea**:\n\n• **Centros de datos en la Unión Europea** (Frankfurt y París).\n• **Cifrado TLS 1.3** de extremo a extremo.\n• **Sin transferencias indebidas** a terceros ni venta de datos.\n• **Banner de cookies y textos legales** (Aviso Legal, Privacidad y Cookies) incluidos y conformes a la legislación española.`,
      quickReplies: [
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "💬 Hablar por WhatsApp", action: "ir_whatsapp" }
      ]
    };
  }

  // 15. PORTAFOLIO Y CASOS REALES
  if (q.includes('portafolio') || q.includes('ejemplos') || q.includes('casos') || q.includes('trabajos') || q.includes('obras') || q.includes('ecovida') || q.includes('terraza')) {
    return {
      text: `Nuestros casos de éxito destacados en la web son:\n\n• **EcoVida (Tienda Online):** Cosmética y bienestar con +140% de conversiones móviles en el primer mes y carga de 0.8s.\n• **Belleza Natural (Web Corporativa):** Plataforma cosmética con +85% tiempo de permanencia.\n• **La Terraza (Restaurante):** Web gastronómica con reservas directas por WhatsApp sin comisiones.\n\nAdemás contamos con maquetas para reformistas, pintores, electricistas y fontaneros.`,
      quickReplies: [
        { label: "🔨 Ver nichos de reformas", action: "faq_reformas" },
        { label: "💰 Ver tarifas", action: "faq_precios" },
        { label: "📅 Agendar llamada", action: "agendar_cita" }
      ]
    };
  }

  // 16. DOMINIO Y HOSTING / ALOJAMIENTO
  if (q.includes('dominio') || q.includes('hosting') || q.includes('alojamiento') || q.includes('servidor')) {
    return {
      text: `El dominio (.es o .com) y el alojamiento web **se gestionan siempre a tu nombre**, para que tengas el 100% de la propiedad de tu web sin depender de nadie ni pagar comisiones infladas. Te asesoramos y lo dejamos configurado sin coste extra.`,
      quickReplies: [
        { label: "💰 Ver precios", action: "faq_precios" },
        { label: "📅 Agendar llamada", action: "agendar_cita" }
      ]
    };
  }

  // 17. Respuesta por defecto estricta y delimitada a la información de la web
  return {
    text: `Como asistente de **Creador-Webs**, respondo con la información oficial de nuestra web. Sobre "${rawQuery}":\n\nSi buscas crear o renovar tu web, nuestras tarifas oficiales son:\n• **Landing Page Express:** 250 € (5 días)\n• **Web Corporativa:** 550 € (10 días)\n• **Tienda Online:** 950 € (18 días)\n• **A Medida:** 1.200 €\n• **Mantenimiento opcional:** desde + 100€/mes\n\n¿Deseas que te explique alguno de estos servicios o prefieres hablar directamente con Yanis por WhatsApp?`,
    quickReplies: [
      { label: "💰 Ver tarifas completas", action: "faq_precios" },
      { label: "⏱️ Ver plazos de entrega", action: "faq_plazos" },
      { label: "📅 Agendar llamada de 15 min", action: "agendar_cita" },
      { label: "💬 Hablar por WhatsApp (608 18 02 31)", action: "ir_whatsapp" }
    ]
  };
}
