export interface CommunityMember {
  id: string
  name: string
  role: string
  position: JACPosition
  phone: string
  email: string
  photo: string
  bio: string
  yearsInRole: number
}

export type JACPosition =
  | 'presidente'
  | 'vicepresidente'
  | 'secretaria'
  | 'tesorero'
  | 'fiscal'
  | 'vocal'
  | 'lider'
