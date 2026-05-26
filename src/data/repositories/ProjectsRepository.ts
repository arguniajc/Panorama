import type { IProjectsRepository } from '../../domain/interfaces/repositories'
import type { Project } from '../../domain/models/Project'
import { projectsMock } from '../mock/projects.mock'

export class ProjectsRepository implements IProjectsRepository {
  private data: Project[] = projectsMock

  getAll(): Project[] {
    return [...this.data]
  }

  getById(id: string): Project | undefined {
    return this.data.find((p) => p.id === id)
  }

  getActive(): Project[] {
    return this.data.filter((p) => p.status === 'en_progreso' || p.status === 'planificado')
  }
}

export const projectsRepository = new ProjectsRepository()
