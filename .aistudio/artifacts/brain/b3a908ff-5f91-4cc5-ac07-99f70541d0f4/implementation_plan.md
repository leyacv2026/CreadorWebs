# Portafolio Profesional & Plataforma de Servicios Web · Yanis HP

Plataforma web integral de alta conversión para **Yanis HP (Diseño Web & Desarrollo)**, diseñada para conectar con clientes de **Fiverr** y **LinkedIn**, exhibir trabajos y paquetes de servicios estructurados, e incorporar un comparador interactivo de paquetes con cotizador de presupuestos en tiempo real.

---

## Decisiones Confirmadas y Respuestas del Usuario

> [!IMPORTANT]
> En base a las respuestas recopiladas en la fase de clarificación interactiva, se han fijado las siguientes especificaciones principales:

- **Vía de captación principal**: Formulario interactivo de cotización y presupuesto estimado paso a paso con cálculo inmediato y envío a correo/WhatsApp/LinkedIn.
- **Estructura del portafolio**: Paquetes de servicios estilo Fiverr (Básico, Estándar, Premium) con alcance detallado, plazos de entrega, garantías e integración con proyectos de muestra (EcoVida, Belleza Natural, La Terraza).
- **Herramienta interactiva clave**: Comparador interactivo de paquetes y beneficios con desglose de características + simulador de presupuesto personalizado para cotizaciones a medida.
- **Canales de conversión integrados**: Accesos directos a perfil verificado de Fiverr, perfil profesional de LinkedIn y contacto directo por correo y teléfono.

---

## 1. Visión General y Concepto Central

- **Propósito**: Transformar las visitas procedentes de LinkedIn, Fiverr y tráfico directo en clientes potenciales calificados, proyectando máxima credibilidad, calidez humana y rigor técnico.
- **Audiencia objetivo**: Emprendedores, pymes, consultores y negocios locales que buscan crear o renovar su sitio web con un profesional confiable, transparente en tarifas y con comunicación cercana.
- **Propuesta de valor**: "Creo páginas web modernas para dar vida a tus ideas" — Diseño a medida, optimización responsive y SEO, rendimiento optimizado, soporte continuo y total claridad en precios y entregables.

---

## 2. Experiencia de Usuario y Diseño Visual

### Flujo de Navegación del Usuario
1. **Header Unificado (Top Bar Contract)**:
   - Logotipo y marca personal: **Yanis HP** con subtítulo sutil en hero.
   - Navegación clara: *Inicio*, *Sobre mí*, *Servicios & Paquetes*, *Portafolio*, *Comparador*.
   - Acción principal destacada: **Solicitar Presupuesto**.
2. **Hero Section de Alto Impacto**:
   - Titular envolvente: *"Creo páginas web modernas para dar vida a tus ideas"*.
   - Fotografía profesional y cercana de Yanis, combinada con mockups interactivos de dispositivos (Laptop + Móvil) exhibiendo interfaces reales.
   - Insignias de confianza: Entrega puntual, diseño 100% adaptable, optimización SEO y comunicación transparente.
   - Doble CTA: Acción rápida hacia el comparador de paquetes o cotización inmediata.
3. **Sección "Sobre mí" & Filosofía de Trabajo**:
   - Retrato profesional de Yanis HP, historia personal y enfoque de trabajo ("Tu idea, mi código, tu web").
   - Pilares de valor: Creatividad, Compromiso y Enfoque en Resultados comprobables.
4. **Catálogo de Servicios y Paquetes Estilo Fiverr**:
   - Tarjetas de paquetes (*Landing Page Express*, *Web Corporativa Pro*, *E-Commerce & Catálogo Completo*).
   - Tarifas orientativas claras, tiempo de entrega, revisiones incluidas y lista detallada de entregables.
   - Enlace directo a encargar en Fiverr o solicitar contratación directa.
5. **Comparador Interactivo de Paquetes y Beneficios**:
   - Tabla interactiva comparativa de características (responsive, optimización SEO, panel autogestionable, pasarela de pago, soporte post-lanzamiento).
   - Selector dinámico de extras y complementos (páginas adicionales, redacción de contenidos, multi-idioma).
6. **Muestrario de Proyectos (Casos de Éxito)**:
   - Filtros de proyectos: *Todos*, *Web Corporativa*, *Tienda Online*, *Restaurantes & Servicios*.
   - Muestra de proyectos emblemáticos: **EcoVida** (bienestar y naturaleza), **Belleza Natural** (cosmética e-commerce) y **La Terraza** (restaurante y reservas).
   - Modal interactivo con detalles técnicos, tecnologías aplicadas y vistas previas en vivo.
7. **Cotizador Interactivo de Presupuestos**:
   - Asistente guiado en 3 pasos: Tipo de proyecto -> Funcionalidades requeridas -> Plazo deseado.
   - Estimación instantánea de presupuesto y desglose con opción de enviar solicitud directa vía formulario o redirigir a pedido personalizado en Fiverr.
8. **Prueba Social y Testimonios**:
   - Citas verificadas de clientes con roles y proyectos concretos.
   - Valoración promedio 5.0 estrellas y métricas de satisfacción.
9. **Footer Institucional**:
   - Canales oficiales: Fiverr, LinkedIn, Correo, Teléfono, horario de atención y derechos de autor.

### Identidad Visual & Paleta
- **Canvas dominante (60%)**: Azul marino profundo (`#062b40` / `#031d2c`) en secciones destacadas y blanco pulcro / gris suave (`#f8fafc`) para legibilidad óptima.
- **Superficies estructurales (30%)**: Tarjetas en blanco limpio con bordes sutiles de precisión (`border-slate-200`) y fondos de contraste controlado (`#083852` en modo oscuro).
- **Acentos de alta intención (10%)**: Turquesa luminoso (`#16d5d0` / `#00bfa5`) para botones primarios, estados activos y confirmaciones.
- **Tipografía**:
   - Títulos y destacados: `Plus Jakarta Sans` en pesos 700/800.
   - Textos de lectura: `Plus Jakarta Sans` y `DM Sans` (15px-16px, espaciado cómodo).
   - Cifras y presupuestos: Numerales tabulares (`font-mono tabular-nums`).

---

## 3. Decisiones de Producto y Arquitectura

1. **Gestión de Leads y Cotizaciones**:
   - Se procesará la cotización de forma fluida en el cliente con cálculo instantáneo, validación estricta de formulario (nombre, email, teléfono, detalles) y guardado en estado local con confirmación visual interactiva y generación de enlace para contacto rápido (WhatsApp/Fiverr).
2. **Sincronización con Canales Externos**:
   - Integración nativa de botones con enlaces directos al perfil de **LinkedIn** y tienda de **Fiverr** de Yanis HP, acompañados de botones para iniciar consulta directa.
3. **Rendimiento y Cero Ruptura**:
   - Optimización de imágenes de alta resolución, contenedores de carga protegidos contra fallos de red y diseño 100% responsivo para móviles, tablets y monitores panorámicos de 1440px.

---

## 4. Diagrama de Arquitectura y Componentes

```
┌────────────────────────────────────────────────────────────────────────┐
│                          APLICACIÓN YANIS HP                           │
├────────────────────────────────────────────────────────────────────────┤
│  [TopBar]                                                              │
│  ├── Marca: Yanis HP (Diseño Web)                                      │
│  ├── Navegación: Inicio · Sobre mí · Servicios · Portafolio · Precios  │
│  └── CTA: Solicitar Cotización                                         │
├────────────────────────────────────────────────────────────────────────┤
│  [HeroSection]                                                         │
│  ├── Propuesta de valor + badges de calidad y rapidez                  │
│  ├── Retrato profesional & Mockups interactivos (Laptop & Móvil)       │
│  └── Acciones: Explorar Paquetes / Cotizador Rápido                    │
├────────────────────────────────────────────────────────────────────────┤
│  [AboutSection]                                                        │
│  ├── Historia y método de trabajo ("Creatividad + Código + Resultados")│
│  └── Insignias de confianza (SEO, Responsive, Velocidad, Soporte)      │
├────────────────────────────────────────────────────────────────────────┤
│  [ServicesAndPackages] (Estilo Fiverr)                                 │
│  ├── Básico / Landing Page Express                                     │
│  ├── Estándar / Web Corporativa Pro                                    │
│  └── Premium / E-Commerce & Full Solución                              │
├────────────────────────────────────────────────────────────────────────┤
│  [InteractivePackageComparator]                                        │
│  ├── Tabla comparativa de beneficios y entregables                     │
│  └── Selector de complementos adicionales                              │
├────────────────────────────────────────────────────────────────────────┤
│  [PortfolioGallery]                                                    │
│  ├── Filtros por categoría (Corporativo, E-commerce, Gastronomía)      │
│  ├── Fichas de proyectos (EcoVida, Belleza Natural, La Terraza)        │
│  └── Modal de detalle de proyecto con capturas y stack técnico         │
├────────────────────────────────────────────────────────────────────────┤
│  [InteractiveQuoteCalculator]                                          │
│  ├── Selección de tipo de web y número de páginas                      │
│  ├── Módulos (tienda, blog, reservas, optimización SEO avanzada)       │
│  ├── Cálculo en tiempo real de presupuesto estimado                    │
│  └── Formulario de contacto directo para confirmar fecha y detalles    │
├────────────────────────────────────────────────────────────────────────┤
│  [TestimonialsSection] & [ContactFooter]                               │
│  ├── Reseñas de clientes 5 estrellas                                   │
│  └── Enlaces directos: Fiverr, LinkedIn, WhatsApp y Correo             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Fases de Ejecución Tras la Aprobación

1. **Estructura base & Metadatos**: Configurar `metadata.json` y `index.html` con títulos, descripciones y SEO profesional para Yanis HP.
2. **Generación e Integración de Recursos Visuales**: Incorporar las imágenes de marca, capturas de proyectos en alta fidelidad y retratos profesionales.
3. **Desarrollo de Componentes y Estado**:
   - Implementar el catálogo de servicios estilo Fiverr.
   - Construir el comparador dinámico de planes y beneficios.
   - Crear el calculador de presupuesto interactivo en tiempo real con formulario validado.
   - Galería de portafolio con filtros interactivos y modal de inspección.
4. **Validación y Verificación**: Comprobación integral con `compile_applet` y verificación responsive en todos los dispositivos.
