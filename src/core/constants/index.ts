export const SITE = {
  name: 'Barrio Panorama',
  slogan: 'Comunidad que crece unida',
  city: 'Yumbo',
  department: 'Valle del Cauca',
  country: 'Colombia',
  founded: '1985',
  population: '~6.500 habitantes',
  address: 'Barrio Panorama, Yumbo, Valle del Cauca',
  whatsapp: '+573105550101',
  email: 'contacto@jac-panorama.com',
  phone: '+57 310 555 0101',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3!2d-76.49!3d3.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnMDYuMCJOIDc2wrAyOScyNC4wIlc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Noticias', href: '#news' },
  { label: 'Eventos', href: '#events' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Comunidad', href: '#community' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
]

export const STATS = [
  { label: 'Familias', value: 1200, suffix: '+' },
  { label: 'Años de historia', value: 41, suffix: '' },
  { label: 'Proyectos completados', value: 38, suffix: '' },
  { label: 'Líderes comunitarios', value: 24, suffix: '' },
]

export const CATEGORY_LABELS: Record<string, string> = {
  comunidad: 'Comunidad',
  salud: 'Salud',
  deportes: 'Deportes',
  infraestructura: 'Infraestructura',
  cultura: 'Cultura',
  seguridad: 'Seguridad',
  asamblea: 'Asamblea',
  cultural: 'Cultural',
  deportivo: 'Deportivo',
  ambiental: 'Ambiental',
  social: 'Social',
  formacion: 'Formación',
  barrio: 'Barrio',
  eventos: 'Eventos',
  obras: 'Obras',
  naturaleza: 'Naturaleza',
}

export const CATEGORY_COLORS: Record<string, string> = {
  comunidad: 'bg-blue-100 text-blue-700',
  salud: 'bg-green-100 text-green-700',
  deportes: 'bg-orange-100 text-orange-700',
  infraestructura: 'bg-gray-100 text-gray-700',
  cultura: 'bg-purple-100 text-purple-700',
  seguridad: 'bg-red-100 text-red-700',
  asamblea: 'bg-primary-100 text-primary-700',
  cultural: 'bg-purple-100 text-purple-700',
  deportivo: 'bg-orange-100 text-orange-700',
  ambiental: 'bg-secondary-100 text-secondary-700',
  social: 'bg-yellow-100 text-yellow-700',
  formacion: 'bg-indigo-100 text-indigo-700',
}
