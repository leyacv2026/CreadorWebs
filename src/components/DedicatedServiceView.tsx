import React, { useEffect } from 'react';
import { ArrowLeft, Check, Clock, RotateCcw, ShieldCheck, Sparkles, ArrowRight, ExternalLink, HelpCircle, Layers, Zap, MessageSquare } from 'lucide-react';
import { FIVERR_PACKAGES, FiverrPackage, PERSONAL_INFO } from '../data/portfolioData';

interface DedicatedServiceViewProps {
  serviceSlug: 'landing-pages' | 'webs-corporativas' | 'tiendas-online';
  onNavigate: (path: string) => void;
  onOpenQuote: (pkg: FiverrPackage) => void;
}

export const DedicatedServiceView: React.FC<DedicatedServiceViewProps> = ({
  serviceSlug,
  onNavigate,
  onOpenQuote,
}) => {
  const pkgMap = {
    'landing-pages': FIVERR_PACKAGES[0],
    'webs-corporativas': FIVERR_PACKAGES[1],
    'tiendas-online': FIVERR_PACKAGES[2],
  };

  const pkg = pkgMap[serviceSlug] || FIVERR_PACKAGES[0];

  const metaContent = {
    'landing-pages': {
      title: 'Diseño de Landing Pages Profesionales (250€) | CreadorWebs',
      h1: 'Diseño de Landing Pages de Alta Conversión',
      tagline: 'Páginas de aterrizaje diseñadas artesanalmente para captar clientes, validar productos y acelerar tus ventas.',
      heroBadge: '250€ Proyecto Completo · Entrega en 5 días',
      whoIsItFor: 'Emprendedores, consultores, profesionales independientes y campañas de publicidad que necesitan presentar una propuesta irresistible sin complicaciones.',
      benefits: [
        'Enfoque 100% en conversión: estructura orientada a que el visitante tome acción',
        'Carga instantánea y diseño responsive adaptado a smartphones y tablets',
        'Formulario de contacto y captación conectado directamente a tu correo o WhatsApp',
        'Opción voluntaria de mantenimiento por 45€/mes para que nunca te preocupes por cambios de fotos o textos',
        'Exclusividad absoluta: solo realizamos 1 web por pedido para cuidar cada detalle'
      ],
      faqs: [
        {
          q: '¿Cómo es la forma de pago de 250€?',
          a: 'Se abona en 2 plazos cómodos y protegidos: 125€ al iniciar el diseño y 125€ a la entrega final tras revisar que todo esté a tu entera satisfacción.'
        },
        {
          q: '¿En qué consiste el mantenimiento de 45€/mes?',
          a: 'Es 100% voluntario. Si prefieres no tocar código ni preocuparte por actualizar fotos o textos en tu landing, nosotros nos encargamos de llevarla al día bajo petición y sin permanencia.'
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Tu idea de negocio, los textos o fotos que quieras incluir (si los tienes) y tu logotipo. Si no los tienes, te asesoramos en cada paso.'
        }
      ]
    },
    'webs-corporativas': {
      title: 'Páginas Web Corporativas para Empresas (700€) | CreadorWebs',
      h1: 'Diseño Web Corporativo para Empresas y Negocios',
      tagline: 'Sitios web multipágina elegantes, modernos y con pasarela de pagos para proyectar máxima autoridad en tu sector.',
      heroBadge: '700€ Proyecto Completo · Entrega en 10 días',
      whoIsItFor: 'Empresas, pymes, estudios profesionales y negocios consolidados que buscan una presencia digital sólida, profesional y preparada para captar clientes corporativos.',
      benefits: [
        'Hasta 5 páginas completas: Inicio, Servicios, Sobre Nosotros, Casos de Éxito y Contacto',
        'Configuración completa de hosting y dominio en las mejores plataformas del mercado',
        'Integración de pasarela de pago segura (Stripe / PayPal) y catálogo comercial',
        'Carga de contenidos profesional redactada y optimizada para buscadores (SEO)',
        'Mantenimiento continuo opcional por 120€/mes con soporte y cambios incluidos'
      ],
      faqs: [
        {
          q: '¿Cómo es la forma de pago de 700€?',
          a: 'Pago fraccionado y seguro: 350€ de anticipo para iniciar el desarrollo y 350€ a la entrega final.'
        },
        {
          q: '¿Qué cubre el mantenimiento de 120€/mes?',
          a: 'Cubre cambios de textos, actualización de fotos, copias de seguridad, resolución de incidencias y soporte técnico directo.'
        }
      ]
    },
    'tiendas-online': {
      title: 'Tiendas Online y Comercio Electrónico Pro (1.200€) | CreadorWebs',
      h1: 'Desarrollo de Tiendas Online & Solución con Agentes IA',
      tagline: 'Plataformas de venta online de alta gama, con pasarela de pagos integrada, catálogo interactivo y optimización de velocidad extrema.',
      heroBadge: '1.200€ Tienda Pro · Revisiones Ilimitadas',
      whoIsItFor: 'Marcas de productos físicos o digitales que buscan una tienda rápida, segura, con puntuación de rendimiento 90+ y sin intermediarios.',
      benefits: [
        'Hasta 10 páginas completas y catálogo de productos organizado por categorías',
        'Pasarelas de cobro directo (tarjetas, Bizum, PayPal) con comisiones directas a tu cuenta',
        'Optimización extrema de velocidad de carga para maximizar la tasa de conversión en móviles',
        'Integración de respuesta automática con Agentes de Inteligencia Artificial dedicados',
        'Revisiones ilimitadas hasta que la tienda quede exactamente como soñabas'
      ],
      faqs: [
        {
          q: '¿Cómo se abona el desarrollo de la tienda de 1.200€?',
          a: 'Pago en 2 plazos protegidos: 600€ al formalizar el pedido y 600€ al finalizar el lanzamiento oficial de tu tienda.'
        },
        {
          q: '¿Qué incluye el mantenimiento mensual de 300€/mes?',
          a: 'Incluye supervisión de catálogo, promociones, actualizaciones de plugins de pago, soporte prioritario y entrenamiento de Agentes IA.'
        }
      ]
    }
  };

  const current = metaContent[serviceSlug] || metaContent['landing-pages'];

  useEffect(() => {
    document.title = current.title;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [current.title]);

  return (
    <article className="py-16 md:py-24 bg-slate-900 text-white min-h-[85vh] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Miga de pan" className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Inicio</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Servicios</span>
            <span>/</span>
            <span className="text-teal-300">{pkg.name} ({pkg.subtitle})</span>
          </div>
        </nav>

        {/* Hero Service Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>{current.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {current.h1}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {current.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote(pkg)}
              className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-teal-500/25 transition-all cursor-pointer"
            >
              <span>Solicitar presupuesto para este servicio</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/34608180231?text=${encodeURIComponent(`Hola CreadorWebs, estoy viendo el servicio de ${pkg.name} y me gustaría recibir más información.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </header>

        {/* 2-Column Details: What's included + Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Column Left: Benefits & Scope */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-3">
                ¿Para quién está pensado este servicio?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {current.whoIsItFor}
              </p>

              <h3 className="text-sm font-extrabold text-teal-300 uppercase tracking-wider mb-4">
                Lo que incluye este paquete:
              </h3>
              <ul className="space-y-3">
                {current.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusive Guarantee Note */}
            <div className="p-5 rounded-2xl bg-teal-950/40 border border-teal-500/30 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-teal-200 block mb-1">
                  Garantía de Exclusividad: Solo 1 web por pedido
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No trabajamos como agencia masiva. Nos enfocamos exclusivamente en tu proyecto hasta su publicación final para garantizar la más alta calidad y atención personal.
                </p>
              </div>
            </div>
          </div>

          {/* Column Right: Clear Price & Payment Details Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c3952] to-[#062436] border-2 border-teal-400 shadow-2xl relative">
              <span className="text-xs uppercase tracking-wider font-extrabold text-teal-400 block mb-1">
                Tarifa Oficial
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tabular-nums">
                  {pkg.priceEur}€
                </span>
                <span className="text-xs text-slate-400">
                  {serviceSlug === 'landing-pages' ? 'pago único' : 'precio del proyecto'}
                </span>
              </div>

              {/* Payment Mode */}
              <div className="p-3.5 rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-5">
                <span className="block text-[11px] text-teal-200 mb-1">Forma de pago fraccionada (50% / 50%):</span>
                <div>
                  <strong className="text-white font-mono">{pkg.depositEur}€ al pedir</strong>
                  <span className="mx-1.5 text-slate-300">+</span>
                  <strong className="text-white font-mono">{pkg.finalPaymentEur}€ al finalizar</strong>
                </div>
              </div>

              {/* Monthly Maintenance option */}
              <div className="p-3.5 rounded-2xl bg-teal-950/60 border border-teal-400/40 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-teal-300 mb-1">
                  <span>{serviceSlug === 'landing-pages' ? '¿Quieres que te llevemos la landing?' : 'Mantenimiento mensual'}</span>
                  <span className="font-mono text-teal-200 bg-teal-900/80 px-2 py-0.5 rounded text-xs">
                    {serviceSlug === 'landing-pages' ? '+45€/mes' : `${pkg.monthlyMaintenanceEur}€/mes`}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug mt-1">
                  {pkg.monthlyMaintenanceDesc}
                </p>
                <span className="block mt-1 text-[10px] text-teal-400">
                  * Pago por adelantado mensual. Opción voluntaria sin permanencia.
                </span>
              </div>

              {/* Meta metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-4 border-t border-white/10 mb-6">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>{pkg.deliveryDays} días de entrega</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <RotateCcw className="w-4 h-4 text-teal-400" />
                  <span>{pkg.revisions}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(pkg)}
                className="w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-teal-400 hover:bg-teal-300 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-teal-500/25 transition-all cursor-pointer"
              >
                <span>Ver presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* FAQs for this Service */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700 mb-14">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-extrabold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes sobre este servicio</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Dudas resueltas
          </h2>
          <div className="space-y-4">
            {current.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {faq.q}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal linking: Other Services */}
        <section className="pt-8 border-t border-white/10">
          <h2 className="text-base font-bold text-white mb-4">
            Ver otros servicios de desarrollo web:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceSlug !== 'landing-pages' && (
              <button
                onClick={() => onNavigate('/servicios/landing-pages')}
                className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-teal-400 text-left transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-teal-400 font-bold block mb-1">Desde 250€</span>
                <strong className="text-sm text-white group-hover:text-teal-300 block">Landing Pages de Alta Conversión</strong>
                <span className="text-xs text-slate-400">Entrega en 5 días con diseño responsive</span>
              </button>
            )}
            {serviceSlug !== 'webs-corporativas' && (
              <button
                onClick={() => onNavigate('/servicios/webs-corporativas')}
                className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-teal-400 text-left transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-teal-400 font-bold block mb-1">Desde 700€</span>
                <strong className="text-sm text-white group-hover:text-teal-300 block">Páginas Web Corporativas</strong>
                <span className="text-xs text-slate-400">Hasta 5 páginas completas con pasarela y hosting</span>
              </button>
            )}
            {serviceSlug !== 'tiendas-online' && (
              <button
                onClick={() => onNavigate('/servicios/tiendas-online')}
                className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-teal-400 text-left transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-teal-400 font-bold block mb-1">Desde 1.200€</span>
                <strong className="text-sm text-white group-hover:text-teal-300 block">Tiendas Online E-Commerce</strong>
                <span className="text-xs text-slate-400">Venta con catálogo, pagos y Agentes IA</span>
              </button>
            )}
            <button
              onClick={() => onNavigate('/portafolio')}
              className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-teal-400 text-left transition-colors cursor-pointer group"
            >
              <span className="text-xs font-mono text-teal-400 font-bold block mb-1">Casos Reales</span>
              <strong className="text-sm text-white group-hover:text-teal-300 block">Ver Portafolio de Trabajos</strong>
              <span className="text-xs text-slate-400">EcoVida, Belleza Natural y La Terraza</span>
            </button>
          </div>
        </section>

      </div>
    </article>
  );
};
