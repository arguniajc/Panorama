import { projectsRepository } from '../../data/repositories/ProjectsRepository'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { formatCurrency, getStatusLabel, getStatusColor, getProgressColor } from '../../core/utils/formatDate'
import { TrendingUp } from 'lucide-react'

const PROJECTS = projectsRepository.getAll()

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Proyectos"
            title="Proyectos Comunitarios"
            subtitle="Transparencia y progreso. Conoce en qué estamos trabajando para mejorar nuestro barrio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <article
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-primary-900 mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span className="flex items-center gap-1 font-medium">
                        <TrendingUp size={12} /> Avance
                      </span>
                      <span className="font-bold text-primary-700">{project.progress}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(project.progress)}`}
                        style={{ width: isVisible ? `${project.progress}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
                    <span className="text-gray-400">Presupuesto</span>
                    <span className="font-bold text-primary-700">{formatCurrency(project.budget)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Summary cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Completados', count: PROJECTS.filter(p => p.status === 'completado').length, color: 'bg-secondary-50 text-secondary-700 border-secondary-200', icon: '✅' },
              { label: 'En Progreso', count: PROJECTS.filter(p => p.status === 'en_progreso').length, color: 'bg-amber-50 text-amber-700 border-amber-200', icon: '🔨' },
              { label: 'Planificados', count: PROJECTS.filter(p => p.status === 'planificado').length, color: 'bg-blue-50 text-blue-700 border-blue-200', icon: '📋' },
            ].map((item) => (
              <div key={item.label} className={`flex items-center gap-4 p-5 rounded-2xl border ${item.color}`}>
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-heading font-black text-3xl">{item.count}</p>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
