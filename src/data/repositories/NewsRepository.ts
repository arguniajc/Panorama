import type { INewsRepository } from '../../domain/interfaces/repositories'
import type { News, NewsCategory } from '../../domain/models/News'
import { newsMock } from '../mock/news.mock'

export class NewsRepository implements INewsRepository {
  private data: News[] = newsMock

  getAll(): News[] {
    return [...this.data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  getById(id: string): News | undefined {
    return this.data.find((n) => n.id === id)
  }

  getByCategory(category: NewsCategory): News[] {
    return this.data.filter((n) => n.category === category)
  }

  getImportant(): News[] {
    return this.data.filter((n) => n.important)
  }

  getLatest(limit: number): News[] {
    return this.getAll().slice(0, limit)
  }
}

export const newsRepository = new NewsRepository()
