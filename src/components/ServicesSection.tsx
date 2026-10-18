import React, { useState } from 'react';
import { Check, Clock, RotateCcw, ArrowRight, ExternalLink, Sparkles, Layers, ShieldCheck, MessageSquare } from 'lucide-react';
import { SERVICES_LIST, FIVERR_PACKAGES, FiverrPackage } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectPackageForQuote: (pkg: FiverrPackage) => void;
  onViewServicePage?: (serviceSlug: 'landing-pages' | 'webs-corporativas' | 'tiendas-online') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPackageForQuote, onViewServicePage }) => {
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');

  return (
    <section id="servicios" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Servicios y Tarifas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ¿Qué puedo hacer por ti?
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Soluciones web integrales pensadas para presentar tu negocio con claridad y facilitar que tus clientes ideales te elijan.
            </p>
          </div>

          {/* Currency Switcher (Functional tab control) */}
          <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700 self-start md:self-auto">
            <span className="text-xs text-slate-400 px-2 font-medium">Moneda:</span>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                currency === 'EUR'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                currency === 'USD'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 4 Core Services Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-xs font-mono text-teal-400 font-bold mb-3">
                0{idx + 1}. Servicio
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {srv.description}
              </p>
              <div className="space-y-1.5 pt-3 border-t border-slate-700/60">
                {srv.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Subhead: Service Packages */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 text-xs font-bold mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Compromiso de exclusividad: Solo realizamos 1 web por pedido</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tarifas y Paquetes de Trabajo
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Desarrollo dedicado con atención 100% individualizada. Sin plantillas genéricas ni saturación de proyectos: cuidamos cada detalle de tu web de principio a fin.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FIVERR_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const price = currency === 'EUR' 
              ? `${pkg.priceEur.toLocaleString('es-ES')}€` 
              : `$${pkg.priceUsd.toLocaleString('es-ES')}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#0c3952] to-[#062436] border-2 border-teal-400 shadow-2xl shadow-teal-500/20 lg:-translate-y-2'
                    : 'bg-slate-800/90 border border-slate-700'
                } p-7`}
              >
                {/* Popular Ribbon */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-extrabold text-teal-400 block">
                        {pkg.name}
                      </span>
                      <h4 className="text-xl font-black text-white mt-0.5">
                        {pkg.subtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Pricing line */}
                  <div className="py-4 border-y border-white/10 my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white font-mono tabular-nums tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400">
                        precio del proyecto
                      </span>
                    </div>

                    {/* Milestone payment badge */}
                    <div className="mt-2.5 inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                      <span>Forma de pago:</span>
                      <strong className="text-white font-mono">{pkg.depositEur}€ al pedir</strong>
                      <span>+</span>
                      <strong className="text-white font-mono">{pkg.finalPaymentEur}€ al finalizar</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Monthly maintenance option banner */}
                  <div className="p-3.5 rounded-2xl bg-teal-950/50 border border-teal-400/40 mb-5">
                    <div className="flex items-center justify-between text-xs font-bold text-teal-300 mb-1">
                      <span>{pkg.id === 'basico' ? '¿Quieres que te llevemos la landing?' : 'Mantenimiento mensual opcional'}</span>
                      <span className="font-mono text-teal-200 bg-teal-900/80 px-2 py-0.5 rounded border border-teal-600/50 text-xs font-bold">
                        {`+${pkg.monthlyMaintenanceEur}€ / mes`}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug mt-1">
                      {pkg.monthlyMaintenanceDesc}
                    </p>
                    <span className="inline-block mt-1 text-[10px] text-teal-400 font-medium">
                      * Pago por adelantado cada mes. Opción 100% voluntaria y sin permanencia.
                    </span>
                  </div>

                  {/* Delivery & revisions meta */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5 mb-6 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-teal-400" />
                      <span>{pkg.deliveryDays} días de entrega</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <RotateCcw className="w-4 h-4 text-teal-400" />
                      <span>{pkg.revisions}</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Entregables incluidos:
                    </div>
                    {pkg.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions bottom */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPackageForQuote(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-lg shadow-teal-500/25'
                        : 'bg-white hover:bg-slate-100 text-slate-950'
                    }`}
                  >
                    <span>Ver presupuesto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {onViewServicePage && (
                    <button
                      type="button"
                      onClick={() => {
                        const slug = pkg.id === 'basico' ? 'landing-pages' : pkg.id === 'estandar' ? 'webs-corporativas' : 'tiendas-online';
                        onViewServicePage(slug);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-teal-300 hover:text-white hover:bg-teal-500/10 border border-teal-500/30 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver página completa y detalles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <a
                    href={`https://wa.me/34608180231?text=${encodeURIComponent(`Hola CreadorWebs, me interesa el paquete ${pkg.name}. ¿Podrías darme más información?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-emerald-300 hover:text-white hover:bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
