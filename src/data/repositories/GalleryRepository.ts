import type { IGalleryRepository } from '../../domain/interfaces/repositories'
import type { GalleryItem, GalleryCategory } from '../../domain/models/GalleryItem'
import { galleryMock } from '../mock/gallery.mock'

export class GalleryRepository implements IGalleryRepository {
  private data: GalleryItem[] = galleryMock

  getAll(): GalleryItem[] {
    return [...this.data]
  }

  getByCategory(category: GalleryCategory): GalleryItem[] {
    return this.data.filter((g) => g.category === category)
  }
}

export const galleryRepository = new GalleryRepository()
