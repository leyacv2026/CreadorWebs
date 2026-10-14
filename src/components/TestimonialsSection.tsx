import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradient curve */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031d2c] via-[#062b40] to-[#04334c] opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opiniones Verificadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lo que dicen mis clientes
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Opiniones de proyectos completados en Fiverr y clientes directos satisfechos.
          </p>
        </div>

        {/* Featured Testimonial Quote Spotlight */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 relative shadow-2xl">
          <Quote className="w-12 h-12 text-teal-400/30 absolute top-6 left-6" />

          <div className="relative z-10 space-y-6">
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-slate-300 font-bold ml-2">
                5.0 Excelente
              </span>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic">
              "{current.comment}"
            </p>

            {/* Author details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div>
                <h4 className="font-bold text-base text-white">
                  {current.clientName}
                </h4>
                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-teal-300 mt-0.5">
                  <span>{current.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.companyOrProject}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">{current.projectType}</span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-2">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
