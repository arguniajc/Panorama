export interface CommunityEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: EventCategory
  capacity: number
  registered: number
}

export type EventCategory =
  | 'asamblea'
  | 'cultural'
  | 'deportivo'
  | 'ambiental'
  | 'social'
  | 'formacion'
