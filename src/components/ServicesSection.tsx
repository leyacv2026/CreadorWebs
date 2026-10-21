import React from 'react';
import { Check, Clock, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Zap, RefreshCw, HelpCircle } from 'lucide-react';
import { PACKAGES_DATA, MAINTENANCE_OFFER, PERSONAL_INFO } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectPackage?: (packageId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#031d2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span>Tarifas y Entregables Claros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tarifas con Alcance Cerrado y Cero Contradicciones
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Sabes exactamente qué incluye cada tarifa, con entrega garantizada y pago del 50% al inicio y 50% a la entrega del proyecto.
          </p>
        </div>

        {/* Tarjetas de Paquetes Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#083852] to-[#042031] border-2 border-teal-400 shadow-[0_0_30px_rgba(22,213,208,0.25)] md:-translate-y-2'
                    : 'bg-[#062b40]/70 border border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {/* Badge Popular */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-500 text-[#031d2c] font-black text-xs uppercase tracking-wider shadow-md">
                    {pkg.badge || "Más Solicitado"}
                  </div>
                )}

                {/* Info básica */}
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                  <p className="text-xs text-teal-300 font-semibold mt-1">{pkg.subtitle}</p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed min-h-[2.5rem]">
                    {pkg.description}
                  </p>
                </div>

                {/* Precio y forma de pago */}
                <div className="mb-6 pb-6 border-b border-slate-700/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      {pkg.priceEur}€
                    </span>
                    <span className="text-xs text-teal-400 font-semibold">precio cerrado</span>
                  </div>
                  
                  {/* Términos de pago explícitos */}
                  <div className="mt-2 text-[11px] font-semibold text-slate-300 bg-[#031d2c]/80 px-2.5 py-1.5 rounded-lg border border-slate-700">
                    {pkg.paymentTerms}
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-3 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      Entrega en {pkg.deliveryDays} días
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      {pkg.revisions}
                    </span>
                  </div>
                </div>

                {/* Lista de Inclusiones */}
                <div className="flex-1 space-y-2.5 mb-8">
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    ✓ Qué incluye:
                  </p>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Botón de acción */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/34608180231?text=Hola%20Yanis,%20quiero%20informaci%C3%B3n%20para%20contratar%20el%20paquete%20${encodeURIComponent(pkg.name)}%20(${pkg.priceEur}€)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-sm transition-all ${
                      isPopular
                        ? 'bg-teal-500 hover:bg-teal-400 text-[#031d2c] shadow-[0_0_20px_rgba(22,213,208,0.4)]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Contratar por WhatsApp</span>
                  </a>

                  {onSelectPackage && (
                    <button
                      onClick={() => onSelectPackage(pkg.id)}
                      className="w-full text-center text-xs text-slate-400 hover:text-teal-300 py-1 transition-colors cursor-pointer"
                    >
                      Personalizar en cotizador &rarr;
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bloque Destacado de Mantenimiento Opcional (100 €/mes) */}
        <div className="bg-gradient-to-r from-[#062b40] to-[#083852] rounded-3xl p-8 sm:p-10 border border-teal-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-400/40 text-xs font-bold uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5 text-teal-400" />
                <span>Servicio Opcional · Sin Permanencia</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Mantenimiento Web Profesional <span className="text-teal-300 font-mono">desde + 100€/mes</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Para despreocuparte por completo de copias de seguridad, actualizaciones técnicas y pequeños cambios mensuales. 
                Alcance cerrado sin costes imprevistos:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {MAINTENANCE_OFFER.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 pt-2 italic">
                * {MAINTENANCE_OFFER.note}
              </p>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-4">
              <div className="p-6 rounded-2xl bg-[#031d2c] border border-slate-700 text-center space-y-2">
                <p className="text-xs text-slate-400">Cuota mensual</p>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  desde + 100€<span className="text-xs text-slate-400 font-normal">/mes</span>
                </div>
                <p className="text-[11px] text-teal-300">Puedes activarlo o darlo de baja cuando quieras</p>
              </div>

              <a
                href={`https://wa.me/34608180231?text=Hola%20Yanis,%20quiero%20informaci%C3%B3n%20sobre%20el%20mantenimiento%20web%20mensual%20de%20100%E2%82%AC`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Consultar Mantenimiento</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
