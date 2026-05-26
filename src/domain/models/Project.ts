export interface Project {
  id: string
  name: string
  description: string
  status: ProjectStatus
  progress: number
  startDate: string
  endDate: string
  budget: number
  category: ProjectCategory
  image: string
}

export type ProjectStatus = 'planificado' | 'en_progreso' | 'completado' | 'pausado'
export type ProjectCategory = 'infraestructura' | 'social' | 'ambiental' | 'cultural' | 'salud'
