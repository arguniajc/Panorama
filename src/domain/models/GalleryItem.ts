export interface GalleryItem {
  id: string
  title: string
  image: string
  category: GalleryCategory
  date: string
  description?: string
  beforeImage?: string
}

export type GalleryCategory = 'barrio' | 'eventos' | 'obras' | 'comunidad' | 'naturaleza'
