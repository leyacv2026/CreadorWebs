import React, { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, Send, MessageSquare, Linkedin, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QuoteCalculatorProps {
  initialConfig?: {
    packageName?: string;
    extraCost?: number;
    selectedAddons?: string[];
  } | null;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialConfig }) => {
  // Calculator state
  const [projectType, setProjectType] = useState<'landing' | 'corporativa' | 'ecommerce' | 'redisenio'>('corporativa');
  const [pagesCount, setPagesCount] = useState<number>(5);
  const [hasCopywriting, setHasCopywriting] = useState<boolean>(false);
  const [hasSeoPro, setHasSeoPro] = useState<boolean>(true);
  const [hasBooking, setHasBooking] = useState<boolean>(false);
  const [hasPaymentGateway, setHasPaymentGateway] = useState<boolean>(false);
  const [hasMultilingual, setHasMultilingual] = useState<boolean>(false);
  const [isExpressDelivery, setIsExpressDelivery] = useState<boolean>(false);
  const [hasMonthlyMaintenance, setHasMonthlyMaintenance] = useState<boolean>(false);

  // Form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [preferredChannel, setPreferredChannel] = useState<'whatsapp' | 'fiverr' | 'linkedin' | 'email'>('whatsapp');
  
  // Submission feedback
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Synchronize when prefilled from another section
  useEffect(() => {
    if (initialConfig?.packageName) {
      if (initialConfig.packageName.toLowerCase().includes('landing')) {
        setProjectType('landing');
        setPagesCount(1);
      } else if (initialConfig.packageName.toLowerCase().includes('commerce')) {
        setProjectType('ecommerce');
        setPagesCount(8);
        setHasPaymentGateway(true);
      } else {
        setProjectType('corporativa');
        setPagesCount(5);
      }

      if (initialConfig.selectedAddons) {
        setHasCopywriting(initialConfig.selectedAddons.some(a => a.toLowerCase().includes('redacción')));
        setHasMultilingual(initialConfig.selectedAddons.some(a => a.toLowerCase().includes('multi')));
      }
    }
  }, [initialConfig]);

  // Price calculation
  const calculateTotal = () => {
    let base = 0;
    let days = 3;

    if (projectType === 'landing') {
      base = 120;
      days = 3;
    } else if (projectType === 'corporativa') {
      base = 1200 + Math.max(0, pagesCount - 5) * 50;
      days = 7;
    } else if (projectType === 'ecommerce') {
      base = 2700 + Math.max(0, pagesCount - 10) * 75;
      days = 12;
    } else {
      base = 650 + Math.max(0, pagesCount - 3) * 35;
      days = 5;
    }

    if (hasCopywriting) base += 80;
    if (hasSeoPro) base += 60;
    if (hasBooking) base += 90;
    if (hasPaymentGateway && projectType !== 'ecommerce') base += 120;
    if (hasMultilingual) base += 100;
    if (isExpressDelivery) {
      base += Math.round(base * 0.15);
      days = Math.max(2, Math.floor(days * 0.65));
    }

    // Modalidad de pago fraccionado (anticipo vs entrega)
    let deposit = 30;
    let finalPay = 90;
    let monthlyRate = 45;

    if (projectType === 'landing') {
      deposit = 30;
      finalPay = base - 30;
      monthlyRate = 45;
    } else if (projectType === 'corporativa') {
      deposit = 400;
      finalPay = base - 400;
      monthlyRate = 250;
    } else if (projectType === 'ecommerce') {
      deposit = 900;
      finalPay = base - 900;
      monthlyRate = 250;
    } else {
      deposit = Math.round(base * 0.35);
      finalPay = base - deposit;
      monthlyRate = 250;
    }

    return { 
      totalEur: base, 
      totalUsd: Math.round(base * 1.08), 
      depositEur: deposit,
      finalPaymentEur: finalPay,
      monthlyFee: monthlyRate,
      estimatedDays: days 
    };
  };

  const { totalEur, totalUsd, depositEur, finalPaymentEur, monthlyFee, estimatedDays } = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim()) {
      setFormError('Por favor introduce tu nombre o empresa.');
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      setFormError('Por favor introduce un correo electrónico válido.');
      return;
    }

    setSubmitted(true);
  };

  const generateWhatsappMessage = () => {
    const text = `Hola CreadorWebs! He configurado un presupuesto en tu web:
- Proyecto: ${projectType.toUpperCase()} (~${pagesCount} páginas)
- Precio estimado: ${totalEur}€ (~$${totalUsd} USD)
- Forma de pago: ${depositEur}€ para pedir (anticipo) + ${finalPaymentEur}€ al finalizar la web
- Exclusividad: Solo 1 web por pedido (dedicación 100% enfocada)
- Mantenimiento mensual: ${hasMonthlyMaintenance ? (projectType === 'landing' ? `Sí (+45€/mes por adelantado: cambios de imágenes o info)` : `Sí (Desde +${monthlyFee}€/mes por adelantado: incluye supervisión de Agentes IA y cambios)`) : 'No contratado'}
- Plazo estimado: ${estimatedDays} días
- Nombre: ${clientName}
- Correo: ${clientEmail}
- Teléfono: ${clientPhone || 'No indicado'}
- Notas: ${clientNotes || 'Sin notas adicionales'}`;
    return `https://wa.me/34608180231?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="py-20 bg-gradient-to-b from-slate-900 to-[#031d2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-teal-400" />
            <span>Presupuesto Inmediato &amp; Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora interactiva de cotización
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Configura las características de tu proyecto web para obtener una estimación transparente en tiempo real y enviarme tu solicitud directa.
          </p>
        </div>

        {/* 2-Column Split: Configurator + Quote Summary Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Options */}
          <div className="lg:col-span-7 space-y-8 bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl">
            
            {/* 1. Tipo de proyecto */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-3">
                1. ¿Qué tipo de sitio web necesitas?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'landing', label: 'Landing Page Express', sub: '1 página de conversión' },
                  { id: 'corporativa', label: 'Web Corporativa', sub: 'Pymes, servicios y marcas' },
                  { id: 'ecommerce', label: 'Tienda Online', sub: 'Venta con pasarela de pago' },
                  { id: 'redisenio', label: 'Rediseño / Ajustes', sub: 'Renovación de web actual' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span className="font-bold text-sm block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Número de páginas */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  2. Alcance estimado de páginas o secciones
                </label>
                <span className="font-mono text-sm font-bold text-teal-300 bg-teal-950 px-2.5 py-0.5 rounded-lg border border-teal-800">
                  {pagesCount} {pagesCount === 1 ? 'página' : 'páginas'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={pagesCount}
                onChange={(e) => setPagesCount(parseInt(e.target.value))}
                className="w-full accent-teal-400 h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 (One-page)</span>
                <span>5 (Corporativo)</span>
                <span>12+ (Extenso)</span>
              </div>
            </div>

            {/* 3. Funcionalidades adicionales */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-3">
                3. Funcionalidades y complementos opcionales
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    checked: hasCopywriting,
                    setter: setHasCopywriting,
                    label: 'Redacción persuasiva de textos y contenidos',
                    price: '+50€',
                  },
                  {
                    checked: hasSeoPro,
                    setter: setHasSeoPro,
                    label: 'Optimización SEO on-page y Schema para Google',
                    price: '+40€',
                  },
                  {
                    checked: hasBooking,
                    setter: setHasBooking,
                    label: 'Sistema de reservas online o citas previas',
                    price: '+65€',
                  },
                  {
                    checked: hasPaymentGateway,
                    setter: setHasPaymentGateway,
                    label: 'Pasarela de cobro en línea (Stripe / PayPal)',
                    price: '+80€',
                  },
                  {
                    checked: hasMultilingual,
                    setter: setHasMultilingual,
                    label: 'Soporte multi-idioma (Español / Inglés)',
                    price: '+75€',
                  },
                  {
                    checked: isExpressDelivery,
                    setter: setIsExpressDelivery,
                    label: 'Entrega prioritaria express (plazo acelerado)',
                    price: '+60€',
                  },
                  {
                    checked: hasMonthlyMaintenance,
                    setter: setHasMonthlyMaintenance,
                    label: projectType === 'landing' 
                      ? 'Mantenimiento mensual (+45€/mes por adelantado: cambios de imágenes o información cuando lo pidas)'
                      : 'Mantenimiento mensual con Agentes IA (desde +250€/mes por adelantado: supervisión de IA, cambios y soporte)',
                    price: projectType === 'landing' ? '+45€/mes' : '+250€/mes',
                  },
                ].map((feat, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer text-xs ${
                      feat.checked
                        ? 'bg-teal-500/10 border-teal-400/60 text-white'
                        : 'bg-slate-900/40 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={feat.checked}
                        onChange={(e) => feat.setter(e.target.checked)}
                        className="w-4 h-4 accent-teal-400 rounded cursor-pointer"
                      />
                      <span>{feat.label}</span>
                    </div>
                    <span className="font-mono text-teal-300 font-bold shrink-0">{feat.price}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Card & Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Calculation Summary Card */}
            <div className="bg-[#0c3952] rounded-3xl p-6 sm:p-7 border-2 border-teal-400/80 shadow-2xl relative overflow-hidden">
              <div className="text-xs uppercase tracking-wider font-extrabold text-teal-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>Presupuesto Estimado</span>
              </div>
              
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tabular-nums tracking-tight">
                  {totalEur}€
                </span>
                <span className="text-base text-teal-200 font-mono tabular-nums">
                  (~${totalUsd} USD)
                </span>
              </div>

              {/* Milestone payment breakdown */}
              <div className="p-3 rounded-xl bg-[#062436] border border-teal-400/30 text-xs space-y-1.5 my-3">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Pago inicial (para pedir):</span>
                  <span className="font-mono font-bold text-teal-300">{depositEur}€</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span>Pago final (al terminar la web):</span>
                  <span className="font-mono font-bold text-teal-300">{finalPaymentEur}€</span>
                </div>
                {hasMonthlyMaintenance && (
                  <div className="flex items-center justify-between text-teal-200 pt-1.5 border-t border-white/10">
                    <span>Mantenimiento mensual (por adelantado):</span>
                    <span className="font-mono font-bold text-white">+{monthlyFee}€/mes</span>
                  </div>
                )}
              </div>

              <div className="text-xs text-slate-300 border-t border-white/10 pt-3 flex items-center justify-between">
                <span>Tiempo de entrega estimado:</span>
                <span className="font-bold text-white font-mono">{estimatedDays} días hábiles</span>
              </div>

              <div className="mt-2 text-[11px] text-slate-400 italic">
                * Tarifa transparente. Solo realizamos 1 web por pedido con dedicación 100% exclusiva. Los mantenimientos mensuales se abonan por adelantado sin permanencia.
              </div>
            </div>

            {/* Submission Form */}
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Solicita tu propuesta formal
              </h3>
              <p className="text-xs text-slate-300 mb-5">
                Recibe respuesta en menos de 1 hora por tu canal de preferencia.
              </p>

              {formError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tu nombre o nombre de empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Laura Martínez"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="laura@empresa.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp / Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Tu número o móvil"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Detalles o enlaces de referencia (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Cuéntame brevemente sobre tu negocio o el estilo web que buscas..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Preferred channel */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    ¿Por qué canal prefieres que te contacte?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp' },
                      { id: 'fiverr', label: 'Fiverr' },
                      { id: 'linkedin', label: 'LinkedIn' },
                      { id: 'email', label: 'Correo' },
                    ].map((ch) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setPreferredChannel(ch.id as any)}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                          preferredChannel === ch.id
                            ? 'bg-teal-400 text-slate-950 border-teal-300 font-bold'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#16d5d0] hover:bg-[#61efdf] text-[#031d2c] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitud de cotización</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 bg-[#031d2c]/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4 font-black text-2xl">
              ✓
            </div>
            
            <h4 className="text-2xl font-black text-[#062b40]">
              ¡Solicitud registrada con éxito!
            </h4>
            
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Gracias, <strong>{clientName}</strong>. He recibido la configuración de tu proyecto estimado en <strong className="text-teal-700">{totalEur}€</strong>. Te responderé en menos de 1 hora.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={generateWhatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar cotización ahora por WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1dbf73] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#18a463] transition-colors"
              >
                <span>Ver y pedir en mi perfil de Fiverr</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 cursor-pointer"
              >
                Volver a la calculadora
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
