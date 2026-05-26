import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { newsRepository } from '../../data/repositories/NewsRepository'
import { NewsCard } from '../components/NewsCard'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { CATEGORY_LABELS } from '../../core/constants'
import type { NewsCategory } from '../../domain/models/News'

const ALL_NEWS = newsRepository.getAll()
const CATEGORIES: { key: NewsCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'comunidad', label: CATEGORY_LABELS.comunidad },
  { key: 'salud', label: CATEGORY_LABELS.salud },
  { key: 'infraestructura', label: CATEGORY_LABELS.infraestructura },
  { key: 'deportes', label: CATEGORY_LABELS.deportes },
  { key: 'cultura', label: CATEGORY_LABELS.cultura },
  { key: 'seguridad', label: CATEGORY_LABELS.seguridad },
]

export function NewsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [active, setActive] = useState<NewsCategory | 'all'>('all')

  const filtered = active === 'all' ? ALL_NEWS : ALL_NEWS.filter((n) => n.category === active)
  const [featured, ...rest] = filtered

  return (
    <section id="news" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Noticias"
            title="Últimas Noticias del Barrio"
            subtitle="Mantente informado sobre todo lo que ocurre en Barrio Panorama."
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat.key
                    ? 'bg-primary-DEFAULT text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* News grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No hay noticias en esta categoría.</p>
          ) : (
            <div className="space-y-6">
              {/* Featured (first item) */}
              {featured && <NewsCard news={featured} featured />}

              {/* Rest */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Alert banner */}
          {newsRepository.getImportant().length > 0 && (
            <div className="mt-10 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-heading font-bold text-red-700 mb-1">Avisos Importantes</h4>
                <ul className="space-y-1">
                  {newsRepository.getImportant().slice(0, 3).map((n) => (
                    <li key={n.id} className="text-sm text-red-600 flex items-center gap-2">
                      <ArrowRight size={14} />
                      {n.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
