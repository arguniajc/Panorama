import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { useCounter } from '../../core/hooks/useCounter'
import { SectionTitle } from '../components/SectionTitle'
import { STATS, SITE } from '../../core/constants'

function StatCounter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, 2000, active)
  return (
    <div className="text-center">
      <p className="font-heading text-4xl md:text-5xl font-black text-accent-DEFAULT">
        {count.toLocaleString('es-CO')}{suffix}
      </p>
      <p className="text-primary-200 text-sm mt-1 font-medium">{label}</p>
    </div>
  )
}

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Quiénes somos"
            title="Historia y Cultura de Barrio Panorama"
            subtitle={`Un barrio con más de ${parseInt(SITE.founded) > 0 ? new Date().getFullYear() - parseInt(SITE.founded) : 40} años de historia, orgullo de Yumbo y el Valle del Cauca.`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images mosaic */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
                alt="Vista del barrio"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=600&q=80"
                alt="Calles del barrio"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80"
                alt="Naturaleza"
                className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Parque"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-accent-DEFAULT/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary-100 -z-10" />
          </div>

          {/* Text content */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary-900">Barrio Panorama</strong> nació en {SITE.founded} como
                un proyecto habitacional que rápidamente se convirtió en el hogar de cientos de familias
                yumbeñas con sueños compartidos de progreso y bienestar.
              </p>
              <p>
                Ubicado en el municipio de <strong className="text-primary-700">Yumbo</strong>, corazón
                industrial del Valle del Cauca, nuestro barrio ha sabido mantener su esencia comunitaria
                y su tejido social a pesar de los retos del tiempo.
              </p>
              <p>
                La <strong className="text-primary-700">Junta de Acción Comunal (JAC)</strong> es el motor
                de desarrollo del barrio. A través de ella, los vecinos se organizan para gestionar
                proyectos, acceder a recursos públicos y resolver las necesidades colectivas con voz y voto.
              </p>
              <p>
                Nuestra cultura mezcla la calidez vallecaucana con la pujanza de una comunidad que trabaja
                unida. Festivales, deportes, emprendimiento y cuidado ambiental son pilares de la identidad
                panorameña.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-primary-50 rounded-2xl p-5 border border-primary-100">
                <p className="text-4xl font-black text-primary-DEFAULT font-heading">🏛️</p>
                <h4 className="font-heading font-bold text-primary-900 mt-2">Junta de Acción Comunal</h4>
                <p className="text-sm text-gray-500 mt-1">Organismo democrático que representa y lidera la comunidad</p>
              </div>
              <div className="flex-1 bg-secondary-50 rounded-2xl p-5 border border-secondary-100">
                <p className="text-4xl font-black text-secondary-DEFAULT font-heading">🌿</p>
                <h4 className="font-heading font-bold text-secondary-700 mt-2">Compromiso Ambiental</h4>
                <p className="text-sm text-gray-500 mt-1">Trabajamos por un barrio verde, limpio y sostenible</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {['Historia de más de 40 años', 'Comunidad organizada y activa', 'Proyectos de infraestructura', 'Programas culturales y deportivos'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-accent-DEFAULT shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-20 bg-primary-DEFAULT">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} active={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
