import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenLegal?: (tab: 'aviso' | 'privacidad' | 'cookies') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [serviceType, setServiceType] = useState('web-corporativa');
  const [message, setMessage] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) return;
    setSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `¡Hola, Yanis! Te contacto desde la web de Creador-Webs.
- Nombre: ${name || 'Cliente'}
- Contacto: ${emailOrPhone || 'No indicado'}
- Servicio de interés: ${serviceType}
- Mensaje: ${message || 'Quiero información para crear mi página web'}`;
    return `https://wa.me/34608180231?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#021622] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
            <span>Hablemos de tu Proyecto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Escríbeme y te Respondo Hoy Mismo
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Sin compromiso ni comerciales de por medio. Analizamos lo que necesitas y te doy una solución clara y eficaz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bloque Izquierdo: Canales Directos */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta WhatsApp Directo */}
            <div className="bg-gradient-to-br from-[#083852] to-[#042031] rounded-3xl p-8 border border-teal-500/40 shadow-xl space-y-4">
              <div className="inline-flex p-3 rounded-2xl bg-teal-500 text-[#031d2c]">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Vía Rápida: WhatsApp
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Es el canal más rápido y ágil. Envíame un audio o mensaje y comentamos tu proyecto sobre la marcha.
              </p>
              
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-[0_0_20px_rgba(22,213,208,0.4)]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chatear por WhatsApp ({PERSONAL_INFO.phone})</span>
                </a>
              </div>
            </div>

            {/* Datos de contacto y ubicación */}
            <div className="bg-[#062b40]/60 rounded-3xl p-6 border border-slate-700/80 space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Teléfono directo: <strong>+34 {PERSONAL_INFO.phone}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Base: <strong>Barcelona</strong> (atención en toda España)</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-[#0077b5] shrink-0" />
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 underline underline-offset-2 flex items-center gap-1"
                >
                  <span>Perfil oficial en LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Bloque Derecho: Formulario de Contacto */}
          <div className="lg:col-span-7 bg-[#062b40]/80 rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-[#031d2c] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(22,213,208,0.5)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  ¡Mensaje Enviado Correctamente!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Gracias por escribir, <strong>{name}</strong>. He recibido tu consulta sobre <strong>{serviceType}</strong> y te responderé en breve hoy mismo.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-[#031d2c] font-black text-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Abrir en WhatsApp ahora</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  Formulario de Consulta Rápida
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Tu Nombre o Negocio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. María Gómez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Teléfono o WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. 600 000 000"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Servicio que Necesitas
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#031d2c] border border-slate-600 text-white text-sm focus:outline-none focus:border-teal-400"
                  >
                    <option value="landing-page">Landing Page Express (250 €)</option>
                    <option value="web-corporativa">Web Corporativa Pro (550 €)</option>
                    <option value="tienda-online">E-Commerce & Tienda Online (950 €)</option>
                    <option value="a-medida">Proyecto Web a Medida (1.200 €)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    ¿En qué consiste tu proyecto?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntame brevemente qué tipo de negocio tienes y qué objetivos buscas conseguir..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#031d2c] border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
                  />
                </div>

                {/* Casilla RGPD */}
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 rounded accent-teal-400"
                  />
                  <span>
                    He leído y acepto la{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal && onOpenLegal('privacidad')}
                      className="text-teal-300 underline underline-offset-2 hover:text-teal-200"
                    >
                      política de privacidad
                    </button>{' '}
                    para el tratamiento de mis datos de contacto.
                  </span>
                </label>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-[0_0_20px_rgba(22,213,208,0.35)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta Ahora</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
