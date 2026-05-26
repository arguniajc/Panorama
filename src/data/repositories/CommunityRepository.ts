import type { ICommunityRepository } from '../../domain/interfaces/repositories'
import type { CommunityMember } from '../../domain/models/CommunityMember'
import { communityMock } from '../mock/community.mock'

export class CommunityRepository implements ICommunityRepository {
  private data: CommunityMember[] = communityMock

  getAll(): CommunityMember[] {
    return [...this.data]
  }

  getById(id: string): CommunityMember | undefined {
    return this.data.find((m) => m.id === id)
  }

  getJACMembers(): CommunityMember[] {
    const jacPositions = ['presidente', 'vicepresidente', 'secretaria', 'tesorero', 'fiscal', 'vocal']
    return this.data.filter((m) => jacPositions.includes(m.position))
  }

  getLeaders(): CommunityMember[] {
    return this.data.filter((m) => m.position === 'lider')
  }
}

export const communityRepository = new CommunityRepository()
