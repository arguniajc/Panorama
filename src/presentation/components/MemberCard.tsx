import { Phone, Mail } from 'lucide-react'
import type { CommunityMember } from '../../domain/models/CommunityMember'

interface MemberCardProps {
  member: CommunityMember
}

const positionColors: Record<string, string> = {
  presidente: 'bg-primary-DEFAULT text-white',
  vicepresidente: 'bg-primary-600 text-white',
  secretaria: 'bg-secondary-DEFAULT text-white',
  tesorero: 'bg-accent-DEFAULT text-primary-900',
  fiscal: 'bg-purple-600 text-white',
  vocal: 'bg-blue-500 text-white',
  lider: 'bg-gray-600 text-white',
}

export function MemberCard({ member }: MemberCardProps) {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hola ${member.name}, me comunico desde el portal del Barrio Panorama.`)
    const number = member.phone.replace(/\D/g, '')
    window.open(`https://wa.me/${number}?text=${msg}`, '_blank')
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-primary-600 to-primary-800" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="pt-16 pb-6 px-5">
        <span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${
            positionColors[member.position] ?? 'bg-gray-100 text-gray-700'
          }`}
        >
          {member.role}
        </span>

        <h3 className="font-heading font-bold text-lg text-primary-900 leading-tight mb-2">
          {member.name}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-3 mb-4 min-h-[60px]">{member.bio}</p>

        <div className="flex items-center justify-center gap-3">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
            title="Enviar email"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
            title="WhatsApp"
          >
            <Phone size={16} />
          </button>
        </div>

        <p className="mt-3 text-xs text-gray-400">{member.yearsInRole} año{member.yearsInRole !== 1 ? 's' : ''} en el cargo</p>
      </div>
    </article>
  )
}
