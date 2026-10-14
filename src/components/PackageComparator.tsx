import React, { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, Plus, SlidersHorizontal } from 'lucide-react';
import { COMPARISON_FEATURES, FIVERR_PACKAGES, FiverrPackage } from '../data/portfolioData';

interface PackageComparatorProps {
  onSelectConfigForQuote: (packageName: string, extraCost: number, selectedAddons: string[]) => void;
}

export const PackageComparator: React.FC<PackageComparatorProps> = ({ onSelectConfigForQuote }) => {
  const [selectedBasePkg, setSelectedBasePkg] = useState<'basico' | 'estandar' | 'premium'>('estandar');
  
  // Interactive Add-ons state
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    extraPages: false,
    copywriting: false,
    multilingual: false,
    monthlyCare: false,
  });

  const addonOptions = [
    { id: 'extraPages', name: '2 Páginas adicionales de contenido', priceEur: 60, desc: 'Ideal para agregar blog, portfolio ampliado o página de preguntas frecuentes.' },
    { id: 'copywriting', name: 'Redacción persuasiva de textos y titulares', priceEur: 50, desc: 'Textos profesionales adaptados a tu cliente ideal si no los tienes redactados.' },
    { id: 'multilingual', name: 'Configuración Multi-idioma (Ej: Español / Inglés)', priceEur: 85, desc: 'Selector de banderas y estructura preparada para captar público internacional.' },
    { id: 'monthlyCare', name: 'Mantenimiento mensual (45€/mes por adelantado)', priceEur: 45, desc: 'Para si quieres hacer algún cambio de imágenes o de información dentro de la landing, solo tienes que pedirlo y nosotros nos encargamos.' }
  ];

  const toggleAddon = (id: string) => {
    setAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPkg = FIVERR_PACKAGES.find(p => p.id === selectedBasePkg) || FIVERR_PACKAGES[1];
  
  const totalAddonsPrice = addonOptions.reduce((acc, opt) => {
    return addons[opt.id] ? acc + opt.priceEur : acc;
  }, 0);

  const selectedAddonNames = addonOptions.filter(opt => addons[opt.id]).map(opt => opt.name);

  const handleStartQuoteWithCustomConfig = () => {
    onSelectConfigForQuote(currentPkg.subtitle, totalAddonsPrice, selectedAddonNames);
  };

  return (
    <section id="comparador" className="py-20 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-teal-600 text-xs font-extrabold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-teal-600" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062b40] tracking-tight">
            Comparador de paquetes y beneficios
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Compara punto por punto qué incluye cada opción y añade los complementos que necesites para tu presupuesto a medida.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          
          {/* Table Header: Desktop & Tablet view */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-6 px-6 text-sm font-extrabold text-slate-900 w-2/5">
                    Características &amp; Entregables
                  </th>
                  {FIVERR_PACKAGES.map((pkg) => (
                    <th key={pkg.id} className={`py-6 px-4 text-center w-1/5 ${pkg.popular ? 'bg-teal-50/50' : ''}`}>
                      <span className="text-xs font-bold text-teal-700 block uppercase tracking-wider">
                        {pkg.name}
                      </span>
                      <span className="text-base font-extrabold text-[#062b40] block mt-0.5">
                        {pkg.subtitle}
                      </span>
                      <span className="text-xl font-black text-slate-900 font-mono tabular-nums block mt-1">
                        {pkg.id === 'premium' ? 'Desde ' : ''}{pkg.priceEur.toLocaleString('es-ES')}€
                      </span>
                      <span className="text-[10px] text-teal-800 font-semibold block leading-tight mt-0.5">
                        {pkg.depositEur}€ reserva + {pkg.finalPaymentEur}€ entrega
                      </span>
                      <button
                        onClick={() => setSelectedBasePkg(pkg.id as any)}
                        className={`mt-2 px-3 py-1 text-xs rounded-full font-bold cursor-pointer transition-colors ${
                          selectedBasePkg === pkg.id
                            ? 'bg-[#062b40] text-teal-300 shadow-sm'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {selectedBasePkg === pkg.id ? 'Seleccionado ✓' : 'Elegir'}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-800">
                      {row.name}
                    </td>
                    
                    {/* Básico column */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.basico === 'boolean' ? (
                        row.basico ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-700 text-xs">{row.basico}</span>
                      )}
                    </td>

                    {/* Estándar column */}
                    <td className="py-4 px-4 text-center bg-teal-50/30">
                      {typeof row.estandar === 'boolean' ? (
                        row.estandar ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-[#062b40] text-xs">{row.estandar}</span>
                      )}
                    </td>

                    {/* Premium column */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-slate-900 text-xs">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Add-on Configurator Box */}
        <div className="bg-[#062b40] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-teal-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-teal-300 font-extrabold mb-1">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>Personaliza tu plan seleccionado</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Base actual: {currentPkg.name} ({currentPkg.subtitle})
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Selecciona complementos adicionales opcionales para incluirlos directamente en tu cotización.
              </p>
            </div>

            <div className="bg-[#031d2c] p-4 rounded-2xl border border-white/10 flex items-center gap-5">
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Presupuesto estimado total:</span>
                <span className="text-2xl sm:text-3xl font-black text-teal-300 font-mono tabular-nums">
                  {currentPkg.priceEur + totalAddonsPrice}€
                </span>
                <span className="text-[10px] text-slate-400 block">
                  ({currentPkg.priceEur}€ base + {totalAddonsPrice}€ extras)
                </span>
              </div>

              <button
                onClick={handleStartQuoteWithCustomConfig}
                className="px-5 py-3 rounded-full bg-[#16d5d0] hover:bg-[#61efdf] text-[#031d2c] font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-teal-500/20 cursor-pointer shrink-0 transition-transform active:scale-95"
              >
                <span>Solicitar esta propuesta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Checkbox Addons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {addonOptions.map((opt) => {
              const active = addons[opt.id];
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleAddon(opt.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    active
                      ? 'bg-teal-950/60 border-teal-400 text-white'
                      : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 font-bold transition-colors ${
                      active ? 'bg-teal-400 text-[#031d2c]' : 'border border-slate-500 bg-white/5'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-sm text-white">{opt.name}</span>
                      <span className="text-xs font-mono font-bold text-teal-300 shrink-0">
                        +{opt.priceEur}€
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
