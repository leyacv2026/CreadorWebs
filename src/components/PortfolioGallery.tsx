import React, { useState } from 'react';
import { Eye, ExternalLink, X, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem, PERSONAL_INFO } from '../data/portfolioData';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'ecommerce', label: 'E-Commerce & Tiendas' },
    { id: 'corporativo', label: 'Webs Corporativas' },
    { id: 'restauracion', label: 'Restauración & Servicios' },
  ];

  const filteredProjects = activeFilter === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 sm:py-28 bg-[#031d2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span>Casos de Estudio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Proyectos que Generan Negocio Real
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Explora una selección de sitios web diseñados desde cero: alta velocidad, diseño cuidado y enfoque total en conversión.
          </p>
        </div>

        {/* Pestañas de filtrado */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-teal-500 text-[#031d2c] shadow-[0_0_15px_rgba(22,213,208,0.4)]'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#062b40]/80 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-teal-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
            >
              {/* Imagen con overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-[#031d2c]/40 group-hover:bg-[#031d2c]/20 transition-colors" />
                
                <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#031d2c]/90 text-teal-300 border border-teal-500/40 backdrop-blur-sm">
                  {project.categoryLabel}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-teal-500 text-[#031d2c] font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg flex items-center gap-1.5 text-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Detalle</span>
                </button>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Métricas destacadas */}
                <div className="mt-4 pt-4 border-t border-slate-700/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-teal-300 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="truncate">{project.results[0]}</span>
                  </div>
                </div>

                {/* Stack técnico */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal de Detalle de Proyecto */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#031d2c] rounded-3xl border border-teal-500/50 shadow-2xl p-6 sm:p-8 my-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar modal */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del modal */}
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
              {selectedProject.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white pr-8">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 font-medium">
              {selectedProject.tagline}
            </p>

            {/* Imagen ampliada */}
            <div className="my-6 rounded-2xl overflow-hidden aspect-[16/9] border border-slate-700 bg-slate-900 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descripción detallada */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedProject.description}</p>
            </div>

            {/* Resultados y funcionalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 pt-6 border-t border-slate-700/80">
              <div>
                <h4 className="text-xs font-black uppercase text-teal-300 tracking-wider mb-3">
                  Resultados Clave Obtenidos
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedProject.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase text-teal-300 tracking-wider mb-3">
                  Características Técnicas
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack y CTA final */}
            <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((t, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#083852] text-teal-300 border border-teal-500/30">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/34608180231?text=Hola%20Yanis,%20me%20ha%20gustado%20el%20proyecto%20${encodeURIComponent(selectedProject.title)}%20y%20quiero%20algo%20similar`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors"
              >
                <span>Quiero una web similar</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
