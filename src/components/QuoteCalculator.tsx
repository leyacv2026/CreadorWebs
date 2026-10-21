import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageSquare, Send, Sparkles, AlertCircle, RefreshCw, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ModuleOption {
  id: string;
  label: string;
  priceEur: number;
  description: string;
}

const AVAILABLE_MODULES: ModuleOption[] = [
  { id: 'whatsapp', label: 'Botón WhatsApp Directo', priceEur: 0, description: 'Integración básica ya incluida gratis en todas las tarifas' },
  { id: 'contact_form', label: 'Formulario de Contacto y Presupuesto', priceEur: 50, description: 'Formulario estructurado con confirmación de envío (+50€)' },
  { id: 'project_gallery', label: 'Galería de Trabajos / Proyectos', priceEur: 60, description: 'Muestrario fotográfico de tus proyectos o servicios (+60€)' },
  { id: 'catalog', label: 'Catálogo de Productos / Servicios', priceEur: 140, description: 'Fichas detalladas con fotos y descripción' },
  { id: 'ecommerce', label: 'Pasarela de Pago (Stripe/PayPal/Bizum)', priceEur: 220, description: 'Venta online directa con cobro automatizado' },
  { id: 'booking', label: 'Sistema de Citas o Reservas Online', priceEur: 110, description: 'Calendario y reservas directas para clientes' },
  { id: 'multilang', label: 'Multi-idioma (Català / Inglés)', priceEur: 120, description: 'Estructura traducida y arquitectura SEO regional' },
  { id: 'chat_support', label: 'Soporte por Chat 24/7 (FAQ y Citas)', priceEur: 95, description: 'Respuestas inmediatas en tu web, automatiza FAQ, citas y consultas (+95€)' },
  { id: 'copy', label: 'Redacción de Textos Persuasivos', priceEur: 130, description: 'Copywriting profesional enfocado a ventas' },
  { id: 'maintenance', label: 'Mantenimiento Mensual Opcional', priceEur: 100, description: 'Copias de seguridad, actualizaciones y 2 cambios/mes (100€/mes)' },
];

export const QuoteCalculator: React.FC = () => {
  // Configuración de cálculo
  const [projectType, setProjectType] = useState<'landing' | 'corporativa' | 'ecommerce' | 'custom'>('landing');
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [selectedModules, setSelectedModules] = useState<string[]>(['whatsapp']);
  const [deliverySpeed, setDeliverySpeed] = useState<'normal' | 'express'>('normal');

  // Formulario de contacto
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lógica de cálculo de precios unificada y exacta
  const basePrices = {
    landing: 250,
    corporativa: 550,
    ecommerce: 950,
    custom: 1200
  };

  const calculateTotal = () => {
    let total = basePrices[projectType];
    
    // Páginas adicionales en Web Corporativa si supera 5 páginas
    if (projectType === 'corporativa' && pagesCount > 5) {
      total += (pagesCount - 5) * 50;
    }

    // Módulos extras seleccionados
    selectedModules.forEach(modId => {
      const mod = AVAILABLE_MODULES.find(m => m.id === modId);
      if (mod) total += mod.priceEur;
    });

    // Velocidad exprés (+20%)
    if (deliverySpeed === 'express') {
      total = Math.round(total * 1.20);
    }

    return total;
  };

  const totalEstimate = calculateTotal();

  const toggleModule = (id: string) => {
    if (id === 'whatsapp') return; // Siempre incluido gratis
    setSelectedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleTypeChange = (type: 'landing' | 'corporativa' | 'ecommerce' | 'custom') => {
    setProjectType(type);
    if (type === 'landing') {
      setPagesCount(1);
    } else if (type === 'corporativa') {
      setPagesCount(5);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) return;
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hola Yanis! He calculado un presupuesto en tu web:
- Tipo: ${projectType.toUpperCase()}
- Páginas estimadas: ${projectType === 'landing' ? 1 : pagesCount}
- Módulos extras: ${selectedModules.join(', ')}
- Plazo: ${deliverySpeed === 'express' ? 'Urgente (+20%)' : 'Estándar'}
- Estimación total: ${totalEstimate} € (Pago 50% al inicio y 50% al entregar)
- Mi nombre: ${name || 'Interesado'}
- Teléfono/Email: ${contact || 'No especificado'}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="cotizador" className="py-20 sm:py-28 bg-[#021622] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-teal-400" />
            <span>Simulador de Presupuesto Coherente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calcula el Presupuesto Exacto de tu Web
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Mismas tarifas y condiciones que en toda la web. Pago 50% al empezar y 50% al entregar.
          </p>
        </div>

        {/* Panel principal del cotizador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bloque Izquierdo: Opciones del cotizador */}
          <div className="lg:col-span-7 bg-[#062b40]/70 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-8">
            
            {/* Paso 1: Tipo de Proyecto */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block">
                  1. Selecciona la Tarifa Base
                </label>
                <span className="text-xs text-slate-400">
                  Base fija garantizada
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'landing', label: 'Landing Express', price: '250 €', sub: 'Página única' },
                  { id: 'corporativa', label: 'Web Corporativa', price: '550 €', sub: 'Hasta 5 páginas' },
                  { id: 'ecommerce', label: 'Tienda Online', price: '950 €', sub: 'Con pasarela de pago' },
                  { id: 'custom', label: 'A Medida', price: '1.200 €', sub: 'Desarrollo integral' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTypeChange(type.id as any)}
                    className={`p-3.5 rounded-2xl text-center border transition-all cursor-pointer ${
                      projectType === type.id
                        ? 'bg-teal-500 text-[#031d2c] border-teal-400 font-black shadow-md'
                        : 'bg-[#031d2c] text-slate-300 border-slate-700 hover:border-slate-600 font-semibold'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{type.label}</p>
                    <p className={`font-mono text-xs font-black mt-1 ${projectType === type.id ? 'text-[#031d2c]' : 'text-teal-300'}`}>
                      {type.price}
                    </p>
                    <p className={`text-[10px] mt-0.5 ${projectType === type.id ? 'text-[#031d2c]/80' : 'text-slate-400'}`}>
                      {type.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Número de páginas (si aplica) */}
            {projectType === 'corporativa' && (
              <div className="p-4 rounded-2xl bg-[#031d2c] border border-slate-700/80">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    2. Número de Páginas (Hasta 5 incluidas en 550 €):
                  </label>
                  <span className="font-mono font-bold text-teal-300 text-sm">
                    {pagesCount} páginas {pagesCount > 5 && `(+${(pagesCount - 5) * 50}€)`}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={pagesCount}
                  onChange={(e) => setPagesCount(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 pág.</span>
                  <span>5 pág. (incluidas)</span>
                  <span>10 pág. (+250€)</span>
                </div>
              </div>
            )}

            {/* Paso 3: Módulos y Funcionalidades */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-3">
                {projectType === 'corporativa' ? '3' : '2'}. Módulos Extras y Servicios Opcionales
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_MODULES.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  const isFree = mod.priceEur === 0;
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3 rounded-2xl border text-xs cursor-pointer transition-colors flex items-start gap-3 ${
                        isChecked
                          ? 'bg-teal-950/70 border-teal-400 text-white'
                          : 'bg-[#031d2c] border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-teal-500 border-teal-400 text-[#031d2c]' : 'border-slate-500'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{mod.label}</span>
                          <span className="font-mono text-teal-300 font-bold ml-1 whitespace-nowrap">
                            {isFree ? 'Gratis' : `+${mod.priceEur}€`}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">{mod.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Paso 4: Plazo */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-3">
                Plazo de Entrega
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('normal')}
                  className={`p-3 rounded-xl border text-xs text-center cursor-pointer ${
                    deliverySpeed === 'normal'
                      ? 'bg-teal-950 border-teal-400 text-teal-300 font-bold'
                      : 'bg-[#031d2c] border-slate-700 text-slate-300'
                  }`}
                >
                  <p className="font-bold">Plazo Estándar (Sin recargo)</p>
                  <p className="text-[10px] text-slate-400">
                    {projectType === 'landing' ? '5 días' : projectType === 'corporativa' ? '10 días' : projectType === 'ecommerce' ? '18 días' : '25 días'}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('express')}
                  className={`p-3 rounded-xl border text-xs text-center cursor-pointer ${
                    deliverySpeed === 'express'
                      ? 'bg-teal-950 border-teal-400 text-teal-300 font-bold'
                      : 'bg-[#031d2c] border-slate-700 text-slate-300'
                  }`}
                >
                  <p className="font-bold">Entrega Exprés (+20%)</p>
                  <p className="text-[10px] text-slate-400">Prioridad máxima en agenda</p>
                </button>
              </div>
            </div>

          </div>

          {/* Bloque Derecho: Resumen, Presupuesto Calculado y Formulario */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#083852] to-[#042031] rounded-3xl p-6 sm:p-8 border border-teal-500/40 shadow-2xl space-y-6 sticky top-28">
            
            <div className="text-center pb-6 border-b border-slate-700">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-bold block mb-1">
                Presupuesto Estimado
              </span>
              <div className="text-5xl font-black font-mono text-teal-300 tracking-tight">
                {totalEstimate} €
              </div>
              
              <div className="mt-3 p-2.5 rounded-xl bg-[#031d2c] border border-slate-700 text-xs text-slate-200">
                <span className="text-teal-400 font-bold">Condiciones de Pago:</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  50% al empezar ({Math.round(totalEstimate / 2)} €) y 50% al entregar ({Math.round(totalEstimate / 2)} €)
                </p>
              </div>
            </div>

            {/* Estado de Envío Realizado */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-teal-950/90 border border-teal-400 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 text-[#031d2c] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-white">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Gracias {name || ''}. He recibido tu configuración de <strong>{totalEstimate} €</strong>. 
                  Te contactaré hoy mismo para confirmar detalles y agendar una breve llamada.
                </p>
                <a
                  href={`https://wa.me/34608180231?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enviar también por WhatsApp</span>
                </a>
              </div>
            ) : (
              /* Formulario para recibir la propuesta */
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs font-bold text-slate-200">
                  ¿Quieres recibir esta propuesta formal o hablarlo directamente?
                </p>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre o negocio *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Teléfono o WhatsApp *"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Detalles sobre tu proyecto (opcional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400"
                  />
                </div>

                {/* Casilla RGPD */}
                <label className="flex items-start gap-2 text-[11px] text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 rounded accent-teal-400"
                  />
                  <span>
                    Acepto la política de privacidad para recibir mi propuesta personalizada.
                  </span>
                </label>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-[0_0_20px_rgba(22,213,208,0.3)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Propuesta ({totalEstimate}€)</span>
                  </button>

                  <a
                    href={`https://wa.me/34608180231?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-600 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-teal-400" />
                    <span>Enviar directo por WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
