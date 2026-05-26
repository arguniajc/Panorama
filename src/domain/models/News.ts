export interface News {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: NewsCategory
  image: string
  author: string
  important: boolean
}

export type NewsCategory =
  | 'comunidad'
  | 'salud'
  | 'deportes'
  | 'infraestructura'
  | 'cultura'
  | 'seguridad'
