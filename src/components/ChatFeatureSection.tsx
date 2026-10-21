import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  MousePointerClick, 
  Server,
  Lock,
  Globe2,
  BadgeCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ChatFeatureSectionProps {
  onOpenChatWidget?: () => void;
}

export const ChatFeatureSection: React.FC<ChatFeatureSectionProps> = ({ onOpenChatWidget }) => {
  // Estado para la maqueta interactiva en vivo
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [simulatedMessages, setSimulatedMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: '¡Hola! ¿Tienes dudas sobre nuestras tarifas o necesitas agendar una llamada de 15 minutos? Respondo al instante.'
    }
  ]);

  const demoFaqs = [
    {
      id: 0,
      question: "¿Cuánto cuesta la Landing Page y qué incluye?",
      answer: "La Landing Page cuesta 250 € precio cerrado (50% al empezar y 50% al entregar). Incluye diseño 100% responsive, botón directo de WhatsApp, optimización para móvil, SEO técnico básico y 2 rondas de revisiones. Entrega en 5 días."
    },
    {
      id: 1,
      question: "¿Cómo funciona la reserva de citas y consultas?",
      answer: "El chat recoge el nombre, teléfono y horario preferido del cliente en segundos. Te envía la notificación de inmediato y evita que pierdas oportunidades cuando estás trabajando en obra o fuera de horario."
    },
    {
      id: 2,
      question: "¿Cómo se instala en mi página web?",
      answer: "Listo en pocos clics en cualquier web: copiamos un script ultraligero que se integra en Vercel, WordPress, Shopify, Webflow o código a medida sin ralentizar la carga ni afectar a tu SEO."
    },
    {
      id: 3,
      question: "¿Cumple con el RGPD y la legislación española?",
      answer: "100 % conforme al RGPD europeo: los datos se procesan exclusivamente en centros de datos seguros de la Unión Europea, con cifrado TLS y sin cookies invasivas de terceros."
    }
  ];

  const handleSelectFaq = (index: number) => {
    setActiveFaq(index);
    const item = demoFaqs[index];
    setSimulatedMessages([
      { sender: 'user', text: item.question },
      { sender: 'bot', text: item.answer }
    ]);
  };

  const featurePillars = [
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: "Respuestas inmediatas en tu web",
      description: "Tus clientes reciben atención en el momento exacto en que están decidiendo. Sin esperas de horas por email ni perder visitas nocturnas o en fines de semana."
    },
    {
      icon: <Calendar className="w-6 h-6 text-cyan-400" />,
      title: "Automatiza FAQ, citas y consultas",
      description: "Resuelve las dudas recurrentes sobre precios, servicios y plazos. Permite agendar llamadas o citas de valoración con datos filtrados y listos."
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-amber-400" />,
      title: "Listo en pocos clics en cualquier web",
      description: "Instalación inmediata en cualquier plataforma (Vercel, WordPress, React, HTML). Carga ultrarrápida que no penaliza la velocidad en móvil."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100 % conforme al RGPD en centros de datos europeos",
      description: "Alojado y procesado exclusivamente en la Unión Europea. Cifrado extremo, políticas transparentes y máxima tranquilidad legal para tu negocio."
    }
  ];

  return (
    <section id="chat-soporte" className="py-20 sm:py-28 bg-gradient-to-b from-[#031d2c] via-[#042436] to-[#031d2c] text-white relative overflow-hidden">
      
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Cabecera principal de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Bot className="w-4 h-4 text-teal-400" />
            <span>Nueva Funcionalidad para tu Negocio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Soporte por chat 24/7 para tus clientes
          </h2>

          <p className="mt-4 text-base sm:text-xl text-teal-200/90 font-medium">
            Respuestas inmediatas para tus clientes, directo en tu página web
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Convierte a las visitas indecisas en clientes cualificados con un asistente de soporte integrado que resuelve dudas, agenda llamadas y canaliza solicitudes 24 horas al día.
          </p>
        </div>

        {/* Los 4 Pilares Fundamentales Solicitados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featurePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-[#062b40]/80 border border-slate-700/80 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center mb-4 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] font-semibold text-teal-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Garantizado de serie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque interactivo: Demostración en vivo de la experiencia de chat */}
        <div className="bg-gradient-to-br from-[#062b40] to-[#083852] rounded-3xl p-6 sm:p-10 border border-teal-500/40 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Selector de automatizaciones */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Simulador en Tiempo Real</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Mira cómo responde a tus clientes en 0 segundos
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Haz clic en cualquiera de las consultas habituales para ver cómo el chat automatiza las respuestas, explica precios y facilita la reserva de llamadas:
              </p>

              {/* Botones de preguntas de prueba */}
              <div className="space-y-2.5 pt-2">
                {demoFaqs.map((faq, i) => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => handleSelectFaq(i)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      activeFaq === i
                        ? 'bg-teal-500/20 text-white border-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                        : 'bg-[#031d2c]/80 text-slate-300 border-slate-700/80 hover:border-slate-600'
                    }`}
                  >
                    <span>{faq.question}</span>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${activeFaq === i ? 'text-teal-400 translate-x-1' : 'text-slate-500'}`} />
                  </button>
                ))}
              </div>

              {/* Badges de seguridad y RGPD */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-slate-700/60">
                <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>100% RGPD compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-cyan-400" />
                  <span>Servidores en Frankfurt / París (UE)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Cifrado TLS 1.3</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Vista previa en vivo del Chat Widget en pantalla */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-[#031d2c] border border-teal-400/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[460px]">
                
                {/* Cabecera del mockup */}
                <div className="bg-gradient-to-r from-[#031d2c] via-[#062b40] to-[#083852] p-4 border-b border-teal-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-teal-400 shadow bg-[#021622] shrink-0">
                      <img
                        src={PERSONAL_INFO.portraitImage}
                        alt="Yanis HP"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#031d2c]"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-black text-white">Yanis HP</p>
                        <BadgeCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      </div>
                      <p className="text-[10px] text-teal-300 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Asistente Creador-Webs · En línea
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 font-bold">
                    RGPD UE
                  </span>
                </div>

                {/* Historial de conversación interactiva */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#021622]/95 text-xs">
                  {simulatedMessages.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                          msg.sender === 'user'
                            ? 'bg-teal-500 text-[#031d2c] font-semibold rounded-br-none shadow-md'
                            : 'bg-[#083852] text-slate-100 border border-slate-700/80 rounded-bl-none shadow'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-slate-500 mt-0.5 px-1">
                        Hace un instante
                      </span>
                    </div>
                  ))}
                </div>

                {/* Input falso de interacción */}
                <div className="p-3 bg-[#031d2c] border-t border-slate-700/70">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenChatWidget) {
                          onOpenChatWidget();
                        } else {
                          const widgetBtn = document.querySelector('button[aria-label="Abrir chat de soporte 24/7"]') as HTMLButtonElement;
                          if (widgetBtn) widgetBtn.click();
                        }
                      }}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Bot className="w-4 h-4 fill-current" />
                      <span>Abrir y probar chat interactivo completo</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Banner de llamada a la acción final */}
          <div className="mt-10 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">
                ¿Quieres este soporte por chat 24/7 en tu nueva página web o en tu web actual?
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                Lo dejamos configurado con tus preguntas frecuentes, tu calendario y listo para recibir clientes.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/34608180231?text=Hola%20Yanis,%20quiero%20incluir%20el%20Soporte%20por%20chat%2024/7%20en%20mi%20p%C3%A1gina%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-all shadow-[0_0_20px_rgba(20,184,166,0.35)] shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Pedir Presupuesto por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
