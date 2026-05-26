import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { galleryRepository } from '../../data/repositories/GalleryRepository'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { CATEGORY_LABELS } from '../../core/constants'
import type { GalleryCategory } from '../../domain/models/GalleryItem'
import type { GalleryItem } from '../../domain/models/GalleryItem'

const ALL_ITEMS = galleryRepository.getAll()
const CATEGORIES: { key: GalleryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'barrio', label: CATEGORY_LABELS.barrio },
  { key: 'eventos', label: CATEGORY_LABELS.eventos },
  { key: 'obras', label: CATEGORY_LABELS.obras },
  { key: 'comunidad', label: CATEGORY_LABELS.comunidad },
  { key: 'naturaleza', label: CATEGORY_LABELS.naturaleza },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filtered = activeCategory === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((g) => g.category === activeCategory)

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item)
    setShowBefore(false)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxItem(null)
    document.body.style.overflow = ''
  }

  const navigateLightbox = (dir: 'prev' | 'next') => {
    if (!lightboxItem) return
    const idx = ALL_ITEMS.findIndex((i) => i.id === lightboxItem.id)
    const newIdx = dir === 'next' ? (idx + 1) % ALL_ITEMS.length : (idx - 1 + ALL_ITEMS.length) % ALL_ITEMS.length
    setLightboxItem(ALL_ITEMS[newIdx])
    setShowBefore(false)
  }

  return (
    <section id="gallery" className="py-20 bg-warm-100">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Galería"
            title="Galería Fotográfica"
            subtitle="Imágenes que cuentan nuestra historia, nuestros logros y nuestra gente."
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.key
                    ? 'bg-primary-DEFAULT text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  idx % 7 === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ aspectRatio: idx % 7 === 0 ? '16/9' : '4/3' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-semibold line-clamp-2">{item.title}</p>
                  <span className="text-white/70 text-xs">{CATEGORY_LABELS[item.category]}</span>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} className="text-white" />
                </div>
                {item.beforeImage && (
                  <div className="absolute top-2 left-2 bg-accent-DEFAULT text-primary-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    Antes/Después
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
            className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
            className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {lightboxItem.beforeImage && (
              <div className="flex justify-center gap-3 mb-4">
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${!showBefore ? 'bg-accent-DEFAULT text-primary-900' : 'bg-white/20 text-white'}`}
                >
                  Después
                </button>
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${showBefore ? 'bg-accent-DEFAULT text-primary-900' : 'bg-white/20 text-white'}`}
                >
                  Antes
                </button>
              </div>
            )}
            <img
              src={showBefore && lightboxItem.beforeImage ? lightboxItem.beforeImage : lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-lg">{lightboxItem.title}</h3>
              {lightboxItem.description && (
                <p className="text-white/60 text-sm mt-1">{lightboxItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
