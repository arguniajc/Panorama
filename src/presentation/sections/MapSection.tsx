import { MapPin, Navigation } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { SITE } from '../../core/constants'

export function MapSection() {
  const { ref, isVisible } = useScrollAnimation()

  const openMaps = () => {
    window.open(
      'https://www.google.com/maps/search/Barrio+Panorama,+Yumbo,+Valle+del+Cauca,+Colombia',
      '_blank',
    )
  }

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Ubicación"
            title="¿Dónde estamos?"
            subtitle="Barrio Panorama, en el corazón de Yumbo, Valle del Cauca, Colombia."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-primary-DEFAULT" size={20} />
                  Dirección
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{SITE.address}</p>
                <button
                  onClick={openMaps}
                  className="mt-4 flex items-center gap-2 text-primary-DEFAULT font-semibold text-sm hover:underline"
                >
                  <Navigation size={14} />
                  Ver en Google Maps
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="font-heading font-bold text-base text-primary-900 mb-4">Límites del barrio</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-xs font-bold text-primary-600">N</span>
                    <span>Carrera 3 Norte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-xs font-bold text-primary-600">S</span>
                    <span>Avenida Colombia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-xs font-bold text-primary-600">E</span>
                    <span>Barrio El Triunfo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-xs font-bold text-primary-600">O</span>
                    <span>Zona Industrial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-DEFAULT rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-base mb-3">¿Cómo llegar?</h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  Desde Cali: Tomar la vía Cali-Yumbo por la Autopista Sur. Al llegar a Yumbo centro,
                  dirigirse hacia el barrio Panorama. Rutas de bus desde el Terminal de Cali disponibles.
                </p>
              </div>
            </div>

            {/* Map embed */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3842043399!2d-76.4916!3d3.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a0ad5a5d1805%3A0x78bfc5f5b47c0c7a!2sYumbo%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1685000000000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Barrio Panorama, Yumbo"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
