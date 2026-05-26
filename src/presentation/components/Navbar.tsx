import { Menu, X, Home } from 'lucide-react'
import { useNavbar } from '../../core/hooks/useNavbar'
import { NAV_LINKS, SITE } from '../../core/constants'

export function Navbar() {
  const { scrolled, menuOpen, setMenuOpen, scrollTo } = useNavbar()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-DEFAULT flex items-center justify-center shadow-md group-hover:bg-primary-700 transition-colors">
            <Home size={20} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <p className={`font-heading font-black text-lg leading-none transition-colors ${scrolled ? 'text-primary-900' : 'text-white'}`}>
              {SITE.name}
            </p>
            <p className={`text-xs font-medium transition-colors ${scrolled ? 'text-primary-400' : 'text-white/70'}`}>
              {SITE.city}, Colombia
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/20 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-DEFAULT hover:bg-primary-50'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center gap-2 bg-accent-DEFAULT text-primary-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-accent-600 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Contáctanos
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-primary-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-DEFAULT transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-2 bg-accent-DEFAULT text-primary-900 px-4 py-3 rounded-xl font-semibold hover:bg-accent-600 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  )
}
