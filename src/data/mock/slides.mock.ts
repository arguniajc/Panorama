import type { HeroSlide } from '../../domain/models/Slide'

export const slidesMock: HeroSlide[] = [
  {
    id: '1',
    title: 'Barrio Panorama',
    subtitle: 'Comunidad que crece unida en el corazón de Yumbo',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80',
    cta: { label: 'Conocer el barrio', href: '#about' },
    overlay: 'from-primary-900/80 via-primary-800/60 to-transparent',
  },
  {
    id: '2',
    title: 'Junta de Acción Comunal',
    subtitle: 'Trabajando juntos por el bienestar y desarrollo de nuestras familias',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
    cta: { label: 'Nuestra comunidad', href: '#community' },
    overlay: 'from-secondary-900/80 via-secondary-800/60 to-transparent',
  },
  {
    id: '3',
    title: 'Noticias y Eventos',
    subtitle: 'Mantente informado sobre todo lo que pasa en Panorama',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
    cta: { label: 'Ver noticias', href: '#news' },
    overlay: 'from-primary-900/85 via-primary-700/50 to-transparent',
  },
  {
    id: '4',
    title: 'Proyectos Comunitarios',
    subtitle: 'Construyendo infraestructura y espacios para todos',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    cta: { label: 'Ver proyectos', href: '#projects' },
    overlay: 'from-secondary-900/80 via-primary-800/50 to-transparent',
  },
  {
    id: '5',
    title: 'Participa con Nosotros',
    subtitle: 'Tu voz importa. Únete a la transformación de Barrio Panorama',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
    cta: { label: 'Participar', href: '#contact' },
    overlay: 'from-primary-900/80 via-primary-800/55 to-transparent',
  },
]
