import type { IEventsRepository } from '../../domain/interfaces/repositories'
import type { CommunityEvent, EventCategory } from '../../domain/models/Event'
import { eventsMock } from '../mock/events.mock'

export class EventsRepository implements IEventsRepository {
  private data: CommunityEvent[] = eventsMock

  getAll(): CommunityEvent[] {
    return [...this.data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  getById(id: string): CommunityEvent | undefined {
    return this.data.find((e) => e.id === id)
  }

  getByCategory(category: EventCategory): CommunityEvent[] {
    return this.data.filter((e) => e.category === category)
  }

  getUpcoming(): CommunityEvent[] {
    const today = new Date()
    return this.getAll().filter((e) => new Date(e.date) >= today)
  }
}

export const eventsRepository = new EventsRepository()
