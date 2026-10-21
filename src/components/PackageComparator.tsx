import React, { useState } from 'react';
import { Check, X, SlidersHorizontal, Plus, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { COMPARATOR_FEATURES, PACKAGES_DATA, MAINTENANCE_OFFER, PERSONAL_INFO } from '../data/portfolioData';

interface AddonItem {
  id: string;
  name: string;
  priceEur: number;
  description: string;
}

const AVAILABLE_ADDONS: AddonItem[] = [
  { id: 'contact_form', name: 'Formulario de Contacto y Presupuesto', priceEur: 50, description: 'Formulario estructurado con confirmación de recepción' },
  { id: 'project_gallery', name: 'Galería de Trabajos / Proyectos', priceEur: 60, description: 'Muestrario fotográfico de obras o catálogo visual' },
  { id: 'copywriting', name: 'Redacción de Textos Persuasivos', priceEur: 130, description: 'Copywriting profesional enfocado a captar clientes' },
  { id: 'multilanguage', name: 'Multi-idioma (Català / Inglés)', priceEur: 120, description: 'Traducción y arquitectura SEO multi-idioma' },
  { id: 'chat_support', name: 'Soporte por Chat 24/7 (FAQ y Citas)', priceEur: 95, description: 'Respuestas inmediatas en tu web, automatiza FAQ, citas y consultas. 100% RGPD' },
  { id: 'maintenance_pack', name: 'Mantenimiento Web Mensual (Opcional)', priceEur: 100, description: 'Copias de seguridad, actualizaciones y 2 cambios al mes (100€/mes)' }
];

export const PackageComparator: React.FC = () => {
  const [selectedBasePackage, setSelectedBasePackage] = useState<string>('landing-page');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const basePackage = PACKAGES_DATA.find(p => p.id === selectedBasePackage) || PACKAGES_DATA[0];
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = AVAILABLE_ADDONS.find(a => a.id === addonId);
    return acc + (item ? item.priceEur : 0);
  }, 0);
  const totalCalculated = basePackage.priceEur + addonsTotal;

  return (
    <section id="comparador" className="py-20 sm:py-28 bg-[#021622] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-teal-400" />
            <span>Comparador Detallado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Compara Prestaciones y Añade Extras
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Total coherencia en tarifas. Elige la base que necesitas con pago del 50% al empezar y 50% al entregar.
          </p>
        </div>

        {/* Tabla comparativa interactiva */}
        <div className="overflow-x-auto rounded-3xl border border-slate-700/80 bg-[#062b40]/60 shadow-xl mb-16">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-700 bg-[#083852]">
                <th className="p-5 text-sm font-bold text-slate-200">Característica / Entregable</th>
                <th className="p-5 text-center text-sm font-black text-white">
                  Landing Express
                  <span className="block text-xs font-mono text-teal-300 font-bold mt-0.5">250 €</span>
                  <span className="block text-[10px] text-slate-400 font-normal mt-0.5">50% inicio / 50% entrega</span>
                </th>
                <th className="p-5 text-center text-sm font-black text-teal-300 bg-teal-950/40 border-x border-teal-500/30">
                  Web Corporativa Pro
                  <span className="block text-xs font-mono text-white font-bold mt-0.5">550 €</span>
                  <span className="block text-[10px] text-slate-300 font-normal mt-0.5">50% inicio / 50% entrega</span>
                </th>
                <th className="p-5 text-center text-sm font-black text-white">
                  E-Commerce & Catálogo
                  <span className="block text-xs font-mono text-teal-300 font-bold mt-0.5">950 €</span>
                  <span className="block text-[10px] text-slate-400 font-normal mt-0.5">50% inicio / 50% entrega</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60 text-xs sm:text-sm">
              {COMPARATOR_FEATURES.map((feat, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-medium text-slate-200">{feat.name}</td>
                  
                  {/* Basic */}
                  <td className="p-4 text-center">
                    {typeof feat.basic === 'boolean' ? (
                      feat.basic ? (
                        <Check className="w-5 h-5 text-teal-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-slate-300">{feat.basic}</span>
                    )}
                  </td>

                  {/* Pro */}
                  <td className="p-4 text-center bg-teal-950/20 border-x border-teal-500/20">
                    {typeof feat.pro === 'boolean' ? (
                      feat.pro ? (
                        <Check className="w-5 h-5 text-teal-300 mx-auto font-black" />
                      ) : (
                        <X className="w-5 h-5 text-slate-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-teal-200">{feat.pro}</span>
                    )}
                  </td>

                  {/* Ecommerce */}
                  <td className="p-4 text-center">
                    {typeof feat.ecommerce === 'boolean' ? (
                      feat.ecommerce ? (
                        <Check className="w-5 h-5 text-teal-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-slate-300">{feat.ecommerce}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simulador dinámico con extras opcionales */}
        <div className="bg-gradient-to-b from-[#083852] to-[#042031] rounded-3xl p-6 sm:p-10 border border-teal-500/40 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Configurador Rápido con Extras
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Selector de paquete base */}
            <div className="lg:col-span-4 space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Selecciona Paquete Base:
              </label>
              {PACKAGES_DATA.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedBasePackage(p.id)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    selectedBasePackage === p.id
                      ? 'bg-teal-950 border-teal-400 shadow-md text-white'
                      : 'bg-[#031d2c] border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{p.name}</span>
                    <span className="font-mono font-bold text-teal-300">{p.priceEur} €</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{p.paymentTerms}</p>
                </div>
              ))}
            </div>

            {/* Selector de Extras */}
            <div className="lg:col-span-5 space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                2. Añade Complementos Opcionales:
              </label>
              <div className="space-y-2">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl cursor-pointer border flex items-center justify-between text-xs transition-colors ${
                        isChecked
                          ? 'bg-teal-950/80 border-teal-400 text-teal-100'
                          : 'bg-[#031d2c] border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-teal-500 border-teal-400 text-[#031d2c]' : 'border-slate-500'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{addon.name}</p>
                          <p className="text-[10px] text-slate-400">{addon.description}</p>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-teal-300 ml-2 whitespace-nowrap">
                        +{addon.priceEur}€
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desglose y Presupuesto Calculado */}
            <div className="lg:col-span-3 bg-[#031d2c] rounded-2xl p-6 border border-teal-500/30 text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Presupuesto Estimado
              </span>
              <div className="font-mono text-4xl font-black text-teal-300">
                {totalCalculated} €
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                {basePackage.name} ({basePackage.priceEur}€)
                {selectedAddons.length > 0 && ` + ${selectedAddons.length} extra(s)`}
              </p>
              <p className="text-[10px] text-teal-400 font-semibold">
                Pago 50% al empezar y 50% al entregar
              </p>

              <a
                href={`https://wa.me/34608180231?text=Hola%20Yanis,%20he%20configurado%20el%20paquete%20${encodeURIComponent(basePackage.name)}%20con%20extras%20por%20un%20total%20de%20${totalCalculated}€`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Encargar por WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
