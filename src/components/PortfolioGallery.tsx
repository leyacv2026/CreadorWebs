import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, X, Check, Laptop, Layers, TrendingUp } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';

interface PortfolioGalleryProps {
  onRequestSimilarProject: (project: PortfolioProject) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onRequestSimilarProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'corporativa', label: 'Web Corporativa' },
    { id: 'ecommerce', label: 'Tienda Online' },
    { id: 'restaurante', label: 'Restaurante & Gastronomía' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-20 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-teal-600 text-xs font-extrabold uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Casos de Estudio &amp; Muestras</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062b40] tracking-tight">
              Algunos de mis trabajos
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Proyectos conceptuales y sitios diseñados para maximizar la presencia digital y resolver necesidades reales de negocio.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#062b40] text-teal-300 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Mockup Browser bar */}
                <div className="bg-slate-200/60 p-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-1 mb-2 px-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                  </div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 relative">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs font-bold text-teal-300">
                        Haz clic para ver detalles completos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-teal-700">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    {project.metrics && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-slate-700">{project.metrics.value}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#062b40] group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-1">
                    {project.deliverables.slice(0, 2).map((del, dIdx) => (
                      <div key={dIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-[#062b40] hover:text-white bg-slate-200/70 hover:bg-[#062b40] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explorar caso de estudio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#031d2c]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Hero */}
            <div className="aspect-video w-full bg-slate-900 relative">
              <img
                src={selectedProject.heroImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-wider font-extrabold text-teal-300 mb-1">
                  {selectedProject.categoryLabel} · {selectedProject.year}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-200 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                    El Desafío
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-800 mb-2">
                    La Solución Implementada
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                  Entregables del Proyecto
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                  Stack Técnico
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-100 px-3 py-1 rounded-lg font-mono text-[11px] text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  ¿Te gustaría un resultado similar para tu negocio?
                </div>
                <button
                  onClick={() => {
                    const proj = selectedProject;
                    setSelectedProject(null);
                    onRequestSimilarProject(proj);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#16d5d0] hover:bg-[#61efdf] text-[#031d2c] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Solicitar un diseño similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
