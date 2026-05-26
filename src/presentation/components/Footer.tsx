import { MapPin, Phone, Mail, Heart } from 'lucide-react'
import { SITE, NAV_LINKS } from '../../core/constants'

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <span className="text-2xl">🏘️</span>
              </div>
              <div>
                <h3 className="font-heading font-black text-xl">{SITE.name}</h3>
                <p className="text-primary-300 text-sm">{SITE.city}, {SITE.department}</p>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-4 max-w-sm">
              Portal institucional de la Junta de Acción Comunal del Barrio Panorama. Trabajamos
              unidos por el bienestar y el progreso de nuestra comunidad desde {SITE.founded}.
            </p>
            <p className="text-accent-DEFAULT font-semibold italic text-sm">
              "{SITE.slogan}"
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-primary-300 hover:text-accent-DEFAULT transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <MapPin size={16} className="text-accent-DEFAULT mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 text-sm text-primary-300 hover:text-accent-DEFAULT transition-colors"
                >
                  <Phone size={16} className="text-accent-DEFAULT shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-primary-300 hover:text-accent-DEFAULT transition-colors"
                >
                  <Mail size={16} className="text-accent-DEFAULT shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Me comunico desde el portal del Barrio Panorama.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-green-500/30"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-400">
          <p>© {new Date().getFullYear()} JAC Barrio Panorama. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-400" /> para la comunidad de {SITE.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
