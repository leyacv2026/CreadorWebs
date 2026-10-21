import React from 'react';
import { 
  Hammer, 
  UtensilsCrossed, 
  Sparkles, 
  ShoppingBag, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Target
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NichesSectionProps {
  onSelectNiche?: (nicheName: string) => void;
  onOpenReformas?: () => void;
  onOpenNicheDemo?: (nicheId: string) => void;
}

interface NicheItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
  keyFeatures: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const NichesSection: React.FC<NichesSectionProps> = ({ onSelectNiche, onOpenReformas, onOpenNicheDemo }) => {
  const niches: NicheItem[] = [
    {
      id: 'reformas',
      title: 'Reformas y Oficios del Hogar',
      subtitle: 'Reformistas · Pintores · Fontaneros · Electricistas',
      icon: <Hammer className="w-6 h-6 text-amber-400" />,
      tag: 'Alta Demanda',
      description: 'Webs ultra directas diseñadas para que los clientes vean fotos de tus trabajos terminados y te pidan presupuesto por WhatsApp al instante.',
      keyFeatures: [
        'Galería visual de obras (formato antes y después)',
        'Botón directo de WhatsApp para presupuestos en 1 clic',
        'Carga rápida en móvil para clientes que buscan urgente'
      ],
      ctaText: 'Web para Reformas',
      whatsappMessage: 'Hola Yanis, tengo una empresa de reformas y oficios y quiero una web para mostrar mis obras y recibir presupuestos'
    },
    {
      id: 'hosteleria',
      title: 'Restaurantes y Hostelería',
      subtitle: 'Restaurantes · Terrazas · Bares · Cafeterías · Catering',
      icon: <UtensilsCrossed className="w-6 h-6 text-rose-400" />,
      tag: 'Ahorro de Comisiones',
      description: 'Páginas que atraen comensales con fotos irresistibles de tus platos, menú digital QR y sistema de reservas directas sin intermediarios.',
      keyFeatures: [
        'Carta y menú interactivo con fotos, precios y alérgenos',
        'Reservas directas a tu WhatsApp sin pagar comisiones',
        'Integración con Google Maps y horarios en tiempo real'
      ],
      ctaText: 'Web para Restaurantes',
      whatsappMessage: 'Hola Yanis, tengo un restaurante/negocio de hostelería y quiero una web con carta digital y reservas directas'
    },
    {
      id: 'bienestar',
      title: 'Salud, Belleza y Bienestar',
      subtitle: 'Clínicas · Fisioterapia · Centros de Estética · Psicología',
      icon: <Sparkles className="w-6 h-6 text-teal-400" />,
      tag: 'Confianza y Citas',
      description: 'Diseño limpio y profesional que transmite máxima tranquilidad y prestigio, permitiendo al paciente solicitar cita o consulta fácilmente.',
      keyFeatures: [
        'Desglose claro de tratamientos, especialistas y tarifas',
        'Solicitud de cita previa guiada y formulario rápido',
        'Reseñas de pacientes para generar máxima credibilidad'
      ],
      ctaText: 'Web para Salud & Belleza',
      whatsappMessage: 'Hola Yanis, tengo una clínica/centro de estética y quiero una web profesional para captar pacientes'
    },
    {
      id: 'ecommerce',
      title: 'Comercio Local y Tiendas Online',
      subtitle: 'Marcas de Productos · Moda · Cosmética · Comercio de Barrio',
      icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
      tag: 'Ventas 24/7',
      description: 'Tiendas online ágiles con pasarela de pago segura en un clic para que vendas tus productos en Barcelona y toda España sin fricciones.',
      keyFeatures: [
        'Catálogo de productos organizado por categorías',
        'Cobro seguro con Bizum, Tarjetas, Stripe y PayPal',
        'Panel sencillo para cambiar precios y stock desde el móvil'
      ],
      ctaText: 'Tienda Online',
      whatsappMessage: 'Hola Yanis, quiero montar una tienda online para vender mis productos por internet'
    },
    {
      id: 'profesionales',
      title: 'Servicios Profesionales y Pymes',
      subtitle: 'Asesorías · Abogados · Gestorías · Arquitectos · Consultores',
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      tag: 'Captación B2B',
      description: 'Presencia corporativa sólida que destaca tu experiencia y metodología para cerrar acuerdos y presupuestos con clientes de alto valor.',
      keyFeatures: [
        'Estructura que demuestra autoridad, casos y metodología',
        'Formularios cualificados para filtrar clientes ideales',
        'Optimizada para posicionamiento SEO en Google'
      ],
      ctaText: 'Web Corporativa',
      whatsappMessage: 'Hola Yanis, soy profesional/pyme y quiero renovar mi web corporativa para conseguir más clientes'
    }
  ];

  return (
    <section id="nichos" className="py-20 sm:py-28 bg-[#031d2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span>Sectores Especializados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Nichos Principales
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Cada sector tiene una forma diferente de conseguir clientes. Creo webs pensadas exactamente para el comportamiento de compra de tu público objetivo.
          </p>
        </div>

        {/* Grid de Nichos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {niches.map((niche) => (
            <div
              key={niche.id}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-[#062b40] to-[#042031] rounded-3xl p-7 sm:p-8 border border-slate-700/80 hover:border-teal-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    {niche.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-500/40">
                    {niche.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {niche.title}
                </h3>
                <p className="text-xs text-teal-400/90 font-semibold mt-1 mb-3">
                  {niche.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {niche.description}
                </p>

                {/* Características clave */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-700/60">
                  <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                    Lo que tu web necesita:
                  </p>
                  {niche.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón para abrir la demo interactiva de este nicho */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenNicheDemo) {
                      onOpenNicheDemo(niche.id);
                    } else if (onOpenReformas && niche.id === 'reformas') {
                      onOpenReformas();
                    } else {
                      window.location.hash = `#demo-${niche.id}`;
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-all shadow-[0_0_15px_rgba(22,213,208,0.35)] cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Ver Demo: {niche.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-80" />
                </button>

                {niche.id === 'reformas' && (
                  <div className="pt-1 flex flex-wrap gap-1.5 justify-center">
                    {[
                      { id: 'reformistas', label: 'Reformistas' },
                      { id: 'electricistas', label: 'Electricistas' },
                      { id: 'pintores', label: 'Pintores' },
                      { id: 'fontaneros', label: 'Fontaneros' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          if (onOpenNicheDemo) {
                            onOpenNicheDemo(sub.id);
                          } else {
                            window.location.hash = `#demo-${sub.id}`;
                          }
                        }}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900/80 text-teal-300 hover:text-white hover:bg-teal-600/40 border border-slate-700 transition-colors cursor-pointer"
                      >
                        {sub.label} &rarr;
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}

          {/* Tarjeta 6: Cualquier otro sector */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-[#083852] to-[#031d2c] rounded-3xl p-7 sm:p-8 border-2 border-dashed border-teal-400/50 shadow-xl text-center">
            <div className="space-y-4 my-auto">
              <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 mx-auto">
                <Target className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-black text-white">
                ¿Tu actividad no está aquí?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Trabajo con todo tipo de autónomos, comercios y empresas de Barcelona y España. 
                Si necesitas clientes, adaptamos la web a tu modelo de negocio exacto.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/34608180231?text=Hola%20Yanis,%20tengo%20un%20negocio%20y%20quiero%20saber%20c%C3%B3mo%20podr%C3%ADamos%20hacer%20mi%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-all shadow-[0_0_20px_rgba(22,213,208,0.35)]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Cuéntame sobre tu sector</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
