import type { News, NewsCategory } from '../models/News'
import type { CommunityEvent, EventCategory } from '../models/Event'
import type { CommunityMember } from '../models/CommunityMember'
import type { Project } from '../models/Project'
import type { GalleryItem, GalleryCategory } from '../models/GalleryItem'
import type { HeroSlide } from '../models/Slide'

export interface INewsRepository {
  getAll(): News[]
  getById(id: string): News | undefined
  getByCategory(category: NewsCategory): News[]
  getImportant(): News[]
  getLatest(limit: number): News[]
}

export interface IEventsRepository {
  getAll(): CommunityEvent[]
  getById(id: string): CommunityEvent | undefined
  getByCategory(category: EventCategory): CommunityEvent[]
  getUpcoming(): CommunityEvent[]
}

export interface ICommunityRepository {
  getAll(): CommunityMember[]
  getById(id: string): CommunityMember | undefined
  getJACMembers(): CommunityMember[]
  getLeaders(): CommunityMember[]
}

export interface IProjectsRepository {
  getAll(): Project[]
  getById(id: string): Project | undefined
  getActive(): Project[]
}

export interface IGalleryRepository {
  getAll(): GalleryItem[]
  getByCategory(category: GalleryCategory): GalleryItem[]
}

export interface ISliderRepository {
  getSlides(): HeroSlide[]
}
