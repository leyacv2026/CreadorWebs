// Datos y configuraciones completas para las demos de cada nicho
// Con copywriting específico para reformistas, electricistas, pintores y fontaneros
// Siguiendo los mismos criterios: 250 € precio cerrado, 5 días, 50%/50%,
// sin promesas genéricas, 1ª persona, maqueta ficticia con etiqueta obligatoria.

export interface NicheDemoConfig {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  whatsappMessage: string;
  problemTitle: string;
  problemPoints: [string, string, string];
  mockup: {
    badge: string;
    businessName: string;
    tagline: string;
    servicesTitle: string;
    servicesSubtitle: string;
    items: {
      tag: string;
      title: string;
      detail1Label: string;
      detail1: string;
      detail2Label: string;
      detail2: string;
      badgeFoot: string;
    }[];
    ctaText: string;
  };
  tradeOptions: { value: string; label: string }[];
  nicheShortName: string;
  sectorGroup?: 'oficios' | 'general';
}

export const NICHES_DEMO_DATA: Record<string, NicheDemoConfig> = {
  // 1. REFORMISTAS / REFORMAS
  reformistas: {
    id: 'reformistas',
    badge: 'Diseño Web para Reformistas · Barcelona',
    title: 'Tu web de reformas, lista en 5 días y pensada para que el cliente te escriba',
    subtitle: 'Diseño web para empresas de reformas de Barcelona: se ve bien en el móvil, enseña tus obras terminadas y tiene un botón para pedir presupuesto por WhatsApp.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de reformas',
    problemTitle: '¿Por qué la mayoría de webs de reformas no consiguen clientes?',
    problemPoints: [
      'Los dueños de pisos buscan desde el móvil cuando quieren reformar su cocina, baño o vivienda completa.',
      'Si entran a una web lenta, confusa o que no enseña fotos claras de antes y después, no se complican la vida: cierran y llaman al siguiente reformista.',
      'Para conseguir presupuestos no necesitas webs caras ni semanas de espera: necesitas una página limpia, rápida y pensada para que te escriban al momento.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Reformas BCN · Soluciones del Hogar',
      tagline: 'Especialistas en reformas integrales, baños y cocinas · Barcelona',
      servicesTitle: 'Obras Recientes Terminadas en Barcelona',
      servicesSubtitle: 'Trabajos reales entregados con plazos y precios cerrados',
      items: [
        {
          tag: 'Reforma de Baño en Eixample',
          title: 'Cambio de bañera por plato de ducha de resina',
          detail1Label: 'Antes:',
          detail1: 'Bañera antigua y azulejos desgastados.',
          detail2Label: 'Después:',
          detail2: 'Plato de ducha plano, grifería empotrada y mampara antical.',
          badgeFoot: 'Entregado en 4 días'
        },
        {
          tag: 'Reforma de Cocina en Gràcia',
          title: 'Cocina abierta con isla e iluminación LED',
          detail1Label: 'Antes:',
          detail1: 'Instalaciones obsoletas y poca luz natural.',
          detail2Label: 'Después:',
          detail2: 'Concepto abierto con isla, encimera de cuarzo y suelo porcelánico.',
          badgeFoot: 'Entregado en 7 días'
        }
      ],
      ctaText: 'Pedir Presupuesto por WhatsApp'
    },
    tradeOptions: [
      { value: 'reformas-integrales', label: 'Reformas Integrales' },
      { value: 'banos-cocinas', label: 'Baños y Cocinas' },
      { value: 'rehabilitacion', label: 'Rehabilitación de Viviendas' },
      { value: 'locales-comerciales', label: 'Reformas de Locales' },
      { value: 'otro', label: 'Otro tipo de reforma' }
    ],
    nicheShortName: 'reformistas',
    sectorGroup: 'oficios'
  },
  reformas: {
    id: 'reformas',
    badge: 'Diseño Web para Reformas · Barcelona',
    title: 'Tu web de reformas, lista en 5 días y pensada para que el cliente te escriba',
    subtitle: 'Diseño web para reformistas y oficios de Barcelona: se ve bien en el móvil, enseña tus obras y tiene un botón para pedir presupuesto por WhatsApp.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de reformas',
    problemTitle: '¿Por qué la mayoría de webs de reformas no consiguen clientes?',
    problemPoints: [
      'Los clientes buscan desde el móvil cuando necesitan reformar un baño, pintar un piso o cambiar una instalación.',
      'Si entran a una web lenta, confusa o que no enseña fotos claras de obras anteriores, no se complican la vida: cierran y llaman al siguiente.',
      'Para conseguir presupuestos no necesitas webs caras ni semanas de espera: necesitas una página limpia, rápida y pensada para que te escriban al momento.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Reformas BCN · Soluciones del Hogar',
      tagline: 'Especialistas en reformas integrales · Barcelona',
      servicesTitle: 'Obras Recientes Terminadas en Barcelona',
      servicesSubtitle: 'Trabajos reales entregados con plazos y precios cerrados',
      items: [
        {
          tag: 'Reforma de Baño en Eixample',
          title: 'Cambio de bañera por ducha de resina',
          detail1Label: 'Antes:',
          detail1: 'Bañera antigua y azulejos desgastados.',
          detail2Label: 'Después:',
          detail2: 'Plato de ducha plano, grifería empotrada y mampara antical.',
          badgeFoot: 'Entregado en 4 días'
        },
        {
          tag: 'Reforma de Cocina en Gràcia',
          title: 'Cocina abierta con isla e iluminación LED',
          detail1Label: 'Antes:',
          detail1: 'Instalaciones obsoletas y poca luz natural.',
          detail2Label: 'Después:',
          detail2: 'Concepto abierto con isla, encimera de cuarzo y suelo porcelánico.',
          badgeFoot: 'Entregado en 7 días'
        }
      ],
      ctaText: 'Pedir Presupuesto por WhatsApp'
    },
    tradeOptions: [
      { value: 'reformas-generales', label: 'Reformas Generales' },
      { value: 'banos-cocinas', label: 'Baños y Cocinas' },
      { value: 'pintura', label: 'Pintura y Alisado' },
      { value: 'fontaneria', label: 'Fontanería' },
      { value: 'electricidad', label: 'Electricidad' },
      { value: 'otro', label: 'Otro oficio' }
    ],
    nicheShortName: 'reformas y oficios',
    sectorGroup: 'oficios'
  },

  // 2. ELECTRICISTAS
  electricistas: {
    id: 'electricistas',
    badge: 'Diseño Web para Electricistas · Barcelona',
    title: 'Tu web de electricista, lista en 5 días y pensada para que te llamen al instante',
    subtitle: 'Diseño web para electricistas e instaladores autorizados de Barcelona: muestra tus boletines, cuadros e instalaciones con llamada y WhatsApp en 1 clic.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi negocio de electricidad e instalaciones',
    problemTitle: '¿Por qué los clientes llaman a otro electricista si tu web no es directa?',
    problemPoints: [
      'Cuando un cliente sufre un corte de luz, un salto de diferencial o necesita un boletín para dar de alta el suministro, busca urgente desde el teléfono.',
      'Si tu web no indica claramente que eres instalador autorizado o el número no se puede pulsar en 1 solo toque, busca a otro profesional.',
      'Para conseguir avisos continuos necesitas una web ultrarrápida que demuestre confianza técnica (boletines, cuadros, cableado) y con botón directo de llamada y WhatsApp.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'ElectroBCN · Instalaciones & Averías Eléctricas',
      tagline: 'Electricistas instaladores autorizados · Barcelona y alrededores',
      servicesTitle: 'Instalaciones Eléctricas y Boletines Oficiales',
      servicesSubtitle: 'Servicio de averías urgentes, legalizaciones y reformas eléctricas',
      items: [
        {
          tag: 'Cuadros Eléctricos & Seguridad',
          title: 'Sustitución y Adecuación de Cuadro General (REBT)',
          detail1Label: 'Problema:',
          detail1: 'Cuadro antiguo sin protección contra sobretensiones ni diferencial calibrado.',
          detail2Label: 'Solución:',
          detail2: 'Instalación de magnetotérmicos nuevos, IGA y protector transitorio homologado.',
          badgeFoot: 'Instalado y probado en 3 horas'
        },
        {
          tag: 'Boletines Eléctricos (CIE / BRIE)',
          title: 'Certificado de Instalación Eléctrica para Altas y Ampliaciones',
          detail1Label: 'Trámite:',
          detail1: 'Revisión técnica de la vivienda y medición de aislamiento.',
          detail2Label: 'Plazo:',
          detail2: 'Registro oficial telemático en Industria para dar de alta la luz sin esperas.',
          badgeFoot: 'Gestión en 24h laborables'
        }
      ],
      ctaText: 'Llamar o Escribir por WhatsApp'
    },
    tradeOptions: [
      { value: 'averias-urgentes', label: 'Averías y Cortes de Luz' },
      { value: 'boletines-cie', label: 'Boletines Eléctricos (CIE/BRIE)' },
      { value: 'cuadros-electricos', label: 'Cambio de Cuadros Eléctricos' },
      { value: 'instalaciones-pisos', label: 'Instalación Eléctrica Completa' },
      { value: 'iluminacion-led', label: 'Iluminación LED y Ahorro' },
      { value: 'otro', label: 'Otro trabajo eléctrico' }
    ],
    nicheShortName: 'electricistas',
    sectorGroup: 'oficios'
  },
  electricidad: {
    id: 'electricidad',
    badge: 'Diseño Web para Electricistas · Barcelona',
    title: 'Tu web de electricista, lista en 5 días y pensada para que te llamen al instante',
    subtitle: 'Diseño web para electricistas e instaladores autorizados de Barcelona: muestra tus boletines, cuadros e instalaciones con llamada y WhatsApp en 1 clic.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi negocio de electricidad e instalaciones',
    problemTitle: '¿Por qué los clientes llaman a otro electricista si tu web no es directa?',
    problemPoints: [
      'Cuando un cliente sufre un corte de luz, un salto de diferencial o necesita un boletín para dar de alta el suministro, busca urgente desde el teléfono.',
      'Si tu web no indica claramente que eres instalador autorizado o el número no se puede pulsar en 1 solo toque, busca a otro profesional.',
      'Para conseguir avisos continuos necesitas una web ultrarrápida que demuestre confianza técnica (boletines, cuadros, cableado) y con botón directo de llamada y WhatsApp.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'ElectroBCN · Instalaciones & Averías Eléctricas',
      tagline: 'Electricistas instaladores autorizados · Barcelona y alrededores',
      servicesTitle: 'Instalaciones Eléctricas y Boletines Oficiales',
      servicesSubtitle: 'Servicio de averías urgentes, legalizaciones y reformas eléctricas',
      items: [
        {
          tag: 'Cuadros Eléctricos & Seguridad',
          title: 'Sustitución y Adecuación de Cuadro General (REBT)',
          detail1Label: 'Problema:',
          detail1: 'Cuadro antiguo sin protección contra sobretensiones ni diferencial calibrado.',
          detail2Label: 'Solución:',
          detail2: 'Instalación de magnetotérmicos nuevos, IGA y protector transitorio homologado.',
          badgeFoot: 'Instalado y probado en 3 horas'
        },
        {
          tag: 'Boletines Eléctricos (CIE / BRIE)',
          title: 'Certificado de Instalación Eléctrica para Altas y Ampliaciones',
          detail1Label: 'Trámite:',
          detail1: 'Revisión técnica de la vivienda y medición de aislamiento.',
          detail2Label: 'Plazo:',
          detail2: 'Registro oficial telemático en Industria para dar de alta la luz sin esperas.',
          badgeFoot: 'Gestión en 24h laborables'
        }
      ],
      ctaText: 'Llamar o Escribir por WhatsApp'
    },
    tradeOptions: [
      { value: 'averias-urgentes', label: 'Averías y Cortes de Luz' },
      { value: 'boletines-cie', label: 'Boletines Eléctricos (CIE/BRIE)' },
      { value: 'cuadros-electricos', label: 'Cambio de Cuadros Eléctricos' },
      { value: 'instalaciones-pisos', label: 'Instalación Eléctrica Completa' },
      { value: 'iluminacion-led', label: 'Iluminación LED y Ahorro' },
      { value: 'otro', label: 'Otro trabajo eléctrico' }
    ],
    nicheShortName: 'electricistas',
    sectorGroup: 'oficios'
  },

  // 3. PINTORES
  pintores: {
    id: 'pintores',
    badge: 'Diseño Web para Pintores · Barcelona',
    title: 'Tu web de pintor profesional, lista en 5 días y pensada para que te pidan presupuesto',
    subtitle: 'Diseño web para pintores de Barcelona: enseña el acabado de tus paredes, alisados de gotelé y pisos pintados con botón directo para pedir presupuesto por WhatsApp.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de pintura y alisado',
    problemTitle: '¿Por qué los clientes dudan al contratar a un pintor sin una buena web?',
    problemPoints: [
      'Pintar una vivienda o alisar paredes es un trabajo puramente visual: el cliente necesita ver la finura del acabado y la limpieza de tus obras antes de abrirte la puerta de su casa.',
      'Si no tienes una web donde se vea la protección de rodapiés, suelos y muebles, desconfían y prefieren pedir presupuesto a pintores con referencias visibles.',
      'Para cerrar presupuestos de pisos completos y comunidades necesitas una página visual, limpia y rápida que enseñe tus fotos y permita pedir presupuesto en 1 minuto.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Pinturas & Alisados Barcelona',
      tagline: 'Pintores profesionales de interiores, alisado de gotelé y fachadas · Barcelona',
      servicesTitle: 'Viviendas y Fachadas Recién Pintadas en Barcelona',
      servicesSubtitle: 'Máxima protección de muebles y suelos, pintura lavable de 1ª calidad y limpieza total',
      items: [
        {
          tag: 'Alisado de Gotelé & Pintura Blanca',
          title: 'Alisado de Paredes y Techos en Sarrià',
          detail1Label: 'Proceso:',
          detail1: 'Masillado fino con lijado mecánico con aspiración sin polvo.',
          detail2Label: 'Acabado:',
          detail2: 'Dos manos de pintura plástica mate lavable de alta blancura.',
          badgeFoot: 'Piso de 85 m² terminado en 3 días'
        },
        {
          tag: 'Pintura Decorativa & Esmaltado',
          title: 'Pintura Interior y Lacado de Puertas en Poblenou',
          detail1Label: 'Preparación:',
          detail1: 'Sellado de grietas, saneado de humedades y empapelado exhaustivo.',
          detail2Label: 'Resultado:',
          detail2: 'Paredes en tono gris perla suave y puertas esmaltadas en blanco satinado.',
          badgeFoot: 'Piso entregado limpio y recogido'
        }
      ],
      ctaText: 'Pedir Presupuesto por WhatsApp'
    },
    tradeOptions: [
      { value: 'pintura-pisos', label: 'Pintura de Pisos y Casas' },
      { value: 'alisado-gotele', label: 'Alisado de Gotelé' },
      { value: 'pintura-comunidades', label: 'Comunidades y Escaleras' },
      { value: 'lacado-puertas', label: 'Lacado de Puertas y Muebles' },
      { value: 'humedades-impermeabilizacion', label: 'Tratamiento de Humedades' },
      { value: 'otro', label: 'Otro tipo de pintura' }
    ],
    nicheShortName: 'pintores',
    sectorGroup: 'oficios'
  },
  pintura: {
    id: 'pintura',
    badge: 'Diseño Web para Pintores · Barcelona',
    title: 'Tu web de pintor profesional, lista en 5 días y pensada para que te pidan presupuesto',
    subtitle: 'Diseño web para pintores de Barcelona: enseña el acabado de tus paredes, alisados de gotelé y pisos pintados con botón directo para pedir presupuesto por WhatsApp.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de pintura y alisado',
    problemTitle: '¿Por qué los clientes dudan al contratar a un pintor sin una buena web?',
    problemPoints: [
      'Pintar una vivienda o alisar paredes es un trabajo puramente visual: el cliente necesita ver la finura del acabado y la limpieza de tus obras antes de abrirte la puerta de su casa.',
      'Si no tienes una web donde se vea la protección de rodapiés, suelos y muebles, desconfían y prefieren pedir presupuesto a pintores con referencias visibles.',
      'Para cerrar presupuestos de pisos completos y comunidades necesitas una página visual, limpia y rápida que enseñe tus fotos y permita pedir presupuesto en 1 minuto.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Pinturas & Alisados Barcelona',
      tagline: 'Pintores profesionales de interiores, alisado de gotelé y fachadas · Barcelona',
      servicesTitle: 'Viviendas y Fachadas Recién Pintadas en Barcelona',
      servicesSubtitle: 'Máxima protección de muebles y suelos, pintura lavable de 1ª calidad y limpieza total',
      items: [
        {
          tag: 'Alisado de Gotelé & Pintura Blanca',
          title: 'Alisado de Paredes y Techos en Sarrià',
          detail1Label: 'Proceso:',
          detail1: 'Masillado fino con lijado mecánico con aspiración sin polvo.',
          detail2Label: 'Acabado:',
          detail2: 'Dos manos de pintura plástica mate lavable de alta blancura.',
          badgeFoot: 'Piso de 85 m² terminado en 3 días'
        },
        {
          tag: 'Pintura Decorativa & Esmaltado',
          title: 'Pintura Interior y Lacado de Puertas en Poblenou',
          detail1Label: 'Preparación:',
          detail1: 'Sellado de grietas, saneado de humedades y empapelado exhaustivo.',
          detail2Label: 'Resultado:',
          detail2: 'Paredes en tono gris perla suave y puertas esmaltadas en blanco satinado.',
          badgeFoot: 'Piso entregado limpio y recogido'
        }
      ],
      ctaText: 'Pedir Presupuesto por WhatsApp'
    },
    tradeOptions: [
      { value: 'pintura-pisos', label: 'Pintura de Pisos y Casas' },
      { value: 'alisado-gotele', label: 'Alisado de Gotelé' },
      { value: 'pintura-comunidades', label: 'Comunidades y Escaleras' },
      { value: 'lacado-puertas', label: 'Lacado de Puertas y Muebles' },
      { value: 'humedades-impermeabilizacion', label: 'Tratamiento de Humedades' },
      { value: 'otro', label: 'Otro tipo de pintura' }
    ],
    nicheShortName: 'pintores',
    sectorGroup: 'oficios'
  },

  // 4. FONTANEROS
  fontaneros: {
    id: 'fontaneros',
    badge: 'Diseño Web para Fontaneros · Barcelona',
    title: 'Tu web de fontanero, lista en 5 días y pensada para recibir avisos urgentes',
    subtitle: 'Diseño web para fontaneros de Barcelona: destaca tus desatascos, cambio de bajantes, fugas y calderas con botón de llamada y WhatsApp en 1 toque.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de fontanería y desatascos',
    problemTitle: '¿Cómo busca un cliente a un fontanero cuando tiene una fuga de agua?',
    problemPoints: [
      'Nadie busca a un fontanero por ocio: lo buscan de golpe cuando gotea una tubería, se atasca un desagüe o se rompe el calentador de agua caliente.',
      'En esos minutos de urgencia, si tu web no carga al instante en el móvil o no tiene el botón de WhatsApp y llamada bien grande, el cliente pasa inmediatamente al siguiente.',
      'Para multiplicar tus avisos directos necesitas una web ultra veloz, clara en tiempos de respuesta y con un botón visible para contactarte en 1 segundo.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Fontanería Urgente Barcelona · 24 Horas',
      tagline: 'Detección de fugas, desatascos, termos y reformas de fontanería · Barcelona',
      servicesTitle: 'Servicios de Fontanería con Respuesta Rápida',
      servicesSubtitle: 'Sin cobrar desplazamientos abusivos y con presupuesto previo por WhatsApp',
      items: [
        {
          tag: 'Detección & Reparación de Fugas',
          title: 'Reparación de Fuga y Cambio de Tubería en Gràcia',
          detail1Label: 'Avería:',
          detail1: 'Goteo oculto en falso techo por deterioro de tubería antigua.',
          detail2Label: 'Solución:',
          detail2: 'Sustitución de tramo afectado por multicapa con sellado térmico homologado.',
          badgeFoot: 'Reparado en 2 horas sin obra innecesaria'
        },
        {
          tag: 'Termos & Calentadores',
          title: 'Instalación de Termo Eléctrico Eficiente en Sants',
          detail1Label: 'Servicio:',
          detail1: 'Retirada de calentador defectuoso e instalación de termo de bajo consumo.',
          detail2Label: 'Garantía:',
          detail2: 'Prueba de presión y purgado de circuito de agua caliente.',
          badgeFoot: 'Instalado en la misma mañana'
        }
      ],
      ctaText: 'Llamar o Escribir por WhatsApp'
    },
    tradeOptions: [
      { value: 'fugas-reparaciones', label: 'Reparación de Fugas de Agua' },
      { value: 'desatascos-urgentes', label: 'Desatascos Urgentes' },
      { value: 'calentadores-termos', label: 'Instalación de Termos y Calderas' },
      { value: 'griferia-sanitarios', label: 'Cambio de Grifería y Sanitarios' },
      { value: 'bajantes-tuberias', label: 'Cambio de Bajantes y Tuberías' },
      { value: 'otro', label: 'Otro trabajo de fontanería' }
    ],
    nicheShortName: 'fontaneros',
    sectorGroup: 'oficios'
  },
  fontaneria: {
    id: 'fontaneria',
    badge: 'Diseño Web para Fontaneros · Barcelona',
    title: 'Tu web de fontanero, lista en 5 días y pensada para recibir avisos urgentes',
    subtitle: 'Diseño web para fontaneros de Barcelona: destaca tus desatascos, cambio de bajantes, fugas y calderas con botón de llamada y WhatsApp en 1 toque.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi empresa de fontanería y desatascos',
    problemTitle: '¿Cómo busca un cliente a un fontanero cuando tiene una fuga de agua?',
    problemPoints: [
      'Nadie busca a un fontanero por ocio: lo buscan de golpe cuando gotea una tubería, se atasca un desagüe o se rompe el calentador de agua caliente.',
      'En esos minutos de urgencia, si tu web no carga al instante en el móvil o no tiene el botón de WhatsApp y llamada bien grande, el cliente pasa inmediatamente al siguiente.',
      'Para multiplicar tus avisos directos necesitas una web ultra veloz, clara en tiempos de respuesta y con un botón visible para contactarte en 1 segundo.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Fontanería Urgente Barcelona · 24 Horas',
      tagline: 'Detección de fugas, desatascos, termos y reformas de fontanería · Barcelona',
      servicesTitle: 'Servicios de Fontanería con Respuesta Rápida',
      servicesSubtitle: 'Sin cobrar desplazamientos abusivos y con presupuesto previo por WhatsApp',
      items: [
        {
          tag: 'Detección & Reparación de Fugas',
          title: 'Reparación de Fuga y Cambio de Tubería en Gràcia',
          detail1Label: 'Avería:',
          detail1: 'Goteo oculto en falso techo por deterioro de tubería antigua.',
          detail2Label: 'Solución:',
          detail2: 'Sustitución de tramo afectado por multicapa con sellado térmico homologado.',
          badgeFoot: 'Reparado en 2 horas sin obra innecesaria'
        },
        {
          tag: 'Termos & Calentadores',
          title: 'Instalación de Termo Eléctrico Eficiente en Sants',
          detail1Label: 'Servicio:',
          detail1: 'Retirada de calentador defectuoso e instalación de termo de bajo consumo.',
          detail2Label: 'Garantía:',
          detail2: 'Prueba de presión y purgado de circuito de agua caliente.',
          badgeFoot: 'Instalado en la misma mañana'
        }
      ],
      ctaText: 'Llamar o Escribir por WhatsApp'
    },
    tradeOptions: [
      { value: 'fugas-reparaciones', label: 'Reparación de Fugas de Agua' },
      { value: 'desatascos-urgentes', label: 'Desatascos Urgentes' },
      { value: 'calentadores-termos', label: 'Instalación de Termos y Calderas' },
      { value: 'griferia-sanitarios', label: 'Cambio de Grifería y Sanitarios' },
      { value: 'bajantes-tuberias', label: 'Cambio de Bajantes y Tuberías' },
      { value: 'otro', label: 'Otro trabajo de fontanería' }
    ],
    nicheShortName: 'fontaneros',
    sectorGroup: 'oficios'
  },

  // RESTO DE NICHOS GENERALES (MANTENIDOS)
  hosteleria: {
    id: 'hosteleria',
    badge: 'Diseño Web para Hostelería · Barcelona',
    title: 'La web de tu restaurante, lista en 5 días y pensada para que llenes tus mesas sin comisiones',
    subtitle: 'Diseño web para restaurantes, terrazas y bares de Barcelona: carta digital con fotos que abren el apetito y reservas directas a tu WhatsApp.',
    whatsappMessage: 'Hola, quiero información sobre la web con carta digital y reservas para mi restaurante',
    problemTitle: '¿Por qué muchos restaurantes pierden clientes y dinero en internet?',
    problemPoints: [
      'Los clientes buscan dónde comer o cenar desde el móvil mientras pasean o planifican el fin de semana.',
      'Si no encuentran una carta legible con fotos reales o la web tarda en cargar, se van a plataformas intermediarias que te cobran comisiones por cada comensal.',
      'Para llenar tus mesas no necesitas pagar comisiones mensuales: necesitas una web rápida que enseñe tus platos estrella y permita reservar en 1 toque por WhatsApp.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Restaurante El Rincón Mediterráneo',
      tagline: 'Cocina mediterránea de mercado y tapas de autor · Barcelona',
      servicesTitle: 'Nuestra Carta Destacada & Platos de Temporada',
      servicesSubtitle: 'Menú interactivo con alérgenos y precios transparentes',
      items: [
        {
          tag: 'Plato Estrella',
          title: 'Arroz Caldoso con Bogavante del Cantábrico',
          detail1Label: 'Ingredientes:',
          detail1: 'Fondo de roca, sofrito tradicional y bogavante fresco.',
          detail2Label: 'Experiencia:',
          detail2: 'Servido en cazuela de hierro para 2 personas.',
          badgeFoot: 'Opción sin gluten'
        },
        {
          tag: 'Tapa de Autor',
          title: 'Pulpo a la Brasa con Parmentier Trufada',
          detail1Label: 'Elaboración:',
          detail1: 'Cocinado a baja temperatura y terminado al carbón.',
          detail2Label: 'Acompañamiento:',
          detail2: 'Crema fina de patata, aceite de trufa y pimentón de la Vera.',
          badgeFoot: 'Recomendación del Chef'
        }
      ],
      ctaText: 'Reservar Mesa por WhatsApp'
    },
    tradeOptions: [
      { value: 'restaurante', label: 'Restaurante' },
      { value: 'bar-tapas', label: 'Bar de Tapas / Terraza' },
      { value: 'cafeteria', label: 'Cafetería / Brunch' },
      { value: 'pizzeria', label: 'Pizzería / Italiano' },
      { value: 'catering', label: 'Catering para Eventos' },
      { value: 'otro', label: 'Otro tipo de local' }
    ],
    nicheShortName: 'restaurantes y hostelería',
    sectorGroup: 'general'
  },

  bienestar: {
    id: 'bienestar',
    badge: 'Diseño Web para Salud & Belleza · Barcelona',
    title: 'La web de tu clínica o centro, lista en 5 días y pensada para que te pidan cita sin dudar',
    subtitle: 'Diseño web para clínicas, fisioterapeutas y centros de estética de Barcelona: transmite confianza profesional, muestra tus tratamientos y facilita la cita previa.',
    whatsappMessage: 'Hola, quiero información sobre la web para mi clínica / centro de estética',
    problemTitle: '¿Por qué la presencia online es crítica en salud y bienestar?',
    problemPoints: [
      'Cuando un paciente busca un fisioterapeuta, psicólogo o centro de estética, la primera impresión en el móvil define si confía en ti o busca otro lugar.',
      'Si tu web parece descuidada o no explica de forma clara los tratamientos y tarifas, el paciente duda y prefiere no arriesgarse.',
      'Para conseguir citas continuas necesitas una página limpia, que transmita tranquilidad e higiene, y con un botón directo para pedir cita previa por WhatsApp.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Clínica & Estética Vital Barcelona',
      tagline: 'Fisioterapia avanzada y estética facial personalizada · Barcelona',
      servicesTitle: 'Tratamientos Especializados & Citas Guiadas',
      servicesSubtitle: 'Atención personalizada en cabina individual con cita previa',
      items: [
        {
          tag: 'Fisioterapia & Readaptación',
          title: 'Sesión de Terapia Manual & Punción Seca',
          detail1Label: 'Indicado para:',
          detail1: 'Dolor cervical, lumbalgias crónicas y sobrecargas musculares.',
          detail2Label: 'Protocolo:',
          detail2: 'Valoración diagnóstica inicial + 50 min de tratamiento activo.',
          badgeFoot: 'Primera cita con valoración'
        },
        {
          tag: 'Estética Facial',
          title: 'Higiene Facial Profunda con Hidrodermoabrasión',
          detail1Label: 'Beneficios:',
          detail1: 'Limpieza de poros sin agresión, hidratación intensa y luminosidad.',
          detail2Label: 'Productos:',
          detail2: 'Cosmética orgánica certificada hipoalergénica.',
          badgeFoot: 'Duración: 60 minutos'
        }
      ],
      ctaText: 'Pedir Cita Previa por WhatsApp'
    },
    tradeOptions: [
      { value: 'clinica-dental', label: 'Clínica Dental' },
      { value: 'fisioterapia', label: 'Fisioterapia / Osteopatía' },
      { value: 'estetica-belleza', label: 'Centro de Estética / Belleza' },
      { value: 'psicologia', label: 'Psicología / Nutrición' },
      { value: 'peluqueria-barberia', label: 'Peluquería / Barbería' },
      { value: 'otro', label: 'Otro centro de salud' }
    ],
    nicheShortName: 'salud y belleza',
    sectorGroup: 'general'
  },

  ecommerce: {
    id: 'ecommerce',
    badge: 'Diseño Web para Comercio Local & Marcas · Barcelona',
    title: 'Tu tienda online, lista en 5 días y pensada para que vendas tus productos desde el móvil',
    subtitle: 'Diseño web para comercios y marcas de Barcelona: catálogo visual atractivo, cobro seguro con Bizum y tarjeta, y gestión sencilla desde tu teléfono.',
    whatsappMessage: 'Hola, quiero información sobre la tienda online para vender mis productos',
    problemTitle: '¿Por qué muchas tiendas pequeñas no logran vender por internet?',
    problemPoints: [
      'Tus clientes locales y de toda España compran cada vez más desde el smartphone en momentos libres del día.',
      'Si entrar a tu tienda es lento, el catálogo es confuso o el pago tiene demasiados pasos, el comprador cierra la pestaña y compra en gigantes del comercio.',
      'Para vender por internet necesitas una página directa, con fotos grandes de tus productos estrella y pago en 1 clic sin fricciones.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Aromas & Botánica BCN · Tienda de Barrio',
      tagline: 'Cosmética artesanal, velas de soja y productos sostenibles · Barcelona',
      servicesTitle: 'Colección de Productos Más Vendidos',
      servicesSubtitle: 'Envíos rápidos a toda la península y recogida gratis en tienda',
      items: [
        {
          tag: 'Artesanía Local',
          title: 'Vela Aromática de Soja 100% Natural',
          detail1Label: 'Aroma:',
          detail1: 'Higo silvestre y madera de cedro con mecha de algodón.',
          detail2Label: 'Duración:',
          detail2: 'Más de 45 horas de combustión limpia sin tóxicos.',
          badgeFoot: 'Hecho a mano en Barcelona'
        },
        {
          tag: 'Cuidado Facial',
          title: 'Serum Regenerador de Aceite de Rosa Mosqueta',
          detail1Label: 'Fórmula:',
          detail1: 'Prensado en frío con vitamina E antioxidante.',
          detail2Label: 'Propiedades:',
          detail2: 'Nutrición intensa para pieles secas o castigadas.',
          badgeFoot: 'Envase de vidrio reciclable'
        }
      ],
      ctaText: 'Consultar Stock por WhatsApp'
    },
    tradeOptions: [
      { value: 'moda-accesorios', label: 'Moda y Accesorios' },
      { value: 'cosmetica-artesania', label: 'Cosmética y Artesanía' },
      { value: 'alimentacion-gourmet', label: 'Alimentación Gourmet' },
      { value: 'decoracion-hogar', label: 'Decoración y Hogar' },
      { value: 'tienda-barrio', label: 'Comercio de Proximidad' },
      { value: 'otro', label: 'Otro tipo de producto' }
    ],
    nicheShortName: 'comercio y tiendas',
    sectorGroup: 'general'
  },

  profesionales: {
    id: 'profesionales',
    badge: 'Diseño Web para Servicios Profesionales · Barcelona',
    title: 'La web corporativa de tu despacho o asesoría, lista en 5 días y pensada para captar clientes de valor',
    subtitle: 'Diseño web para asesorías, gestorías, abogados y consultores de Barcelona: proyecta solidez, explica tus servicios y consigue consultas de clientes serios.',
    whatsappMessage: 'Hola, quiero información sobre la web corporativa para mi despacho / empresa',
    problemTitle: '¿Por qué una web profesional es clave para captar clientes solventes?',
    problemPoints: [
      'Las empresas y particulares que necesitan un asesor o abogado buscan profesionalidad antes de confiar sus gestiones o dinero.',
      'Si llegan a una web anticuada o con textos genéricos que no explican cómo resuelves sus problemas, desconfían y siguen buscando.',
      'Para cerrar clientes solventes necesitas una web que demuestre tu especialidad con claridad y ofrezca una vía inmediata para agendar una consulta.'
    ],
    mockup: {
      badge: 'Ejemplo de diseño, no es un cliente real',
      businessName: 'Gómez & Asociados · Consultoría Legal y Fiscal',
      tagline: 'Asesoramiento fiscal, laboral y contable para pymes y autónomos · Barcelona',
      servicesTitle: 'Áreas de Práctica & Servicios a Empresas',
      servicesSubtitle: 'Soluciones claras con cuotas cerradas mensuales sin sorpresas',
      items: [
        {
          tag: 'Fiscal & Contable',
          title: 'Planificación Fiscal Integral para Pymes y Autónomos',
          detail1Label: 'Alcance:',
          detail1: 'Presentación trimestral de impuestos, renta y libros oficiales.',
          detail2Label: 'Ventaja:',
          detail2: 'Optimización de deducciones conforme a normativa vigente.',
          badgeFoot: 'Gestor asignado exclusivo'
        },
        {
          tag: 'Laboral & Contratación',
          title: 'Gestión Laboral, Nóminas y Altas de Personal',
          detail1Label: 'Servicio:',
          detail1: 'Confección de nóminas, finiquitos, seguros sociales y contratos.',
          detail2Label: 'Respuesta:',
          detail2: 'Resolución de dudas laborales en menos de 24 horas laborables.',
          badgeFoot: 'Portal digital para empleados'
        }
      ],
      ctaText: 'Solicitar Primera Consulta por WhatsApp'
    },
    tradeOptions: [
      { value: 'asesoria-fiscal', label: 'Asesoría Fiscal / Contable' },
      { value: 'abogados-despacho', label: 'Despacho de Abogados' },
      { value: 'gestoria-tramites', label: 'Gestoría Administrativa' },
      { value: 'arquitectura-diseno', label: 'Arquitectura / Ingeniería' },
      { value: 'consultoria-b2b', label: 'Consultoría de Negocio' },
      { value: 'otro', label: 'Otro servicio profesional' }
    ],
    nicheShortName: 'servicios profesionales',
    sectorGroup: 'general'
  }
};
