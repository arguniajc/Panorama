import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSlider } from '../../core/hooks/useSlider'
import { sliderRepository } from '../../data/repositories/SliderRepository'

const slides = sliderRepository.getSlides()

export function HeroSection() {
  const { current, next, prev, goTo, setIsPaused } = useSlider(slides.length, 5500)

  const handleCTA = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'low'}
            decoding={idx === 0 ? 'sync' : 'async'}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-primary-900/30" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl">
            <div
              className={`transition-all duration-700 delay-200 ${
                idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block mb-4 px-4 py-1.5 bg-accent-DEFAULT/90 text-primary-900 text-sm font-bold rounded-full uppercase tracking-widest">
                Barrio Panorama · Yumbo, Colombia
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5 drop-shadow-xl">
                {slide.title}
              </h1>
              <p className="text-white/85 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleCTA(slide.cta.href)}
                  className="bg-accent-DEFAULT text-primary-900 font-bold px-7 py-3.5 rounded-xl hover:bg-accent-600 transition-all shadow-xl hover:shadow-accent-500/40 active:scale-95 text-base"
                >
                  {slide.cta.label}
                </button>
                <button
                  onClick={() => handleCTA('#contact')}
                  className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-primary-900 transition-all text-base"
                >
                  Participar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Siguiente"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Ir a slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'bg-accent-DEFAULT w-8 h-3'
                : 'bg-white/50 hover:bg-white/80 w-3 h-3'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div
          key={current}
          className="h-full bg-accent-DEFAULT"
          style={{ animation: 'progress 5.5s linear forwards' }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 right-6 md:right-10 z-20 flex flex-col items-center gap-2 opacity-70">
        <span className="text-white text-xs font-medium tracking-widest uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-0.5 h-14 bg-white/40 relative overflow-hidden rounded-full">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white animate-bounce-slow" />
        </div>
      </div>
    </section>
  )
}
