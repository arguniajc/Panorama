import type { HeroSlide } from '../../domain/models/Slide'

const hero = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1400&q=75&fm=webp&auto=format`

export const slidesMock: HeroSlide[] = [
  {
    id: '1',
    title: 'Barrio Panorama',
    subtitle: 'Casas de ladera, colores de comunidad, corazón de Yumbo',
    image: hero('1568632234161-4e8f86cf9da4'),
    cta: { label: 'Conocer el barrio', href: '#about' },
    overlay: 'from-primary-900/80 via-primary-800/60 to-transparent',
  },
  {
    id: '2',
    title: 'Junta de Acción Comunal',
    subtitle: 'Trabajando juntos por el bienestar de nuestras familias en la ladera',
    image: hero('1551282643-392c82ebb909'),
    cta: { label: 'Nuestra comunidad', href: '#community' },
    overlay: 'from-secondary-900/80 via-secondary-800/60 to-transparent',
  },
  {
    id: '3',
    title: 'Nuestro Barrio de Ladera',
    subtitle: 'Un barrio con identidad, color y orgullo popular en Yumbo',
    image: hero('1520501247332-6fb052b72414'),
    cta: { label: 'Ver galería', href: '#gallery' },
    overlay: 'from-primary-900/85 via-primary-700/50 to-transparent',
  },
  {
    id: '4',
    title: 'Cultura y Arte Comunitario',
    subtitle: 'Murales, festivales y vida en cada calle de Panorama',
    image: hero('1536308037887-165852797016'),
    cta: { label: 'Ver eventos', href: '#events' },
    overlay: 'from-secondary-900/80 via-primary-800/50 to-transparent',
  },
  {
    id: '5',
    title: 'Proyectos que nos Transforman',
    subtitle: 'Infraestructura, deporte y educación para todos los panorameños',
    image: hero('1762379972556-92fe6dbb4c10'),
    cta: { label: 'Ver proyectos', href: '#projects' },
    overlay: 'from-primary-900/80 via-primary-800/55 to-transparent',
  },
]
