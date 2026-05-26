import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import type { CommunityEvent } from '../../domain/models/Event'
import { formatDate, formatTime, getDayOfWeek } from '../../core/utils/formatDate'
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../../core/constants'

interface EventCardProps {
  event: CommunityEvent
}

export function EventCard({ event }: EventCardProps) {
  const occupancy = Math.round((event.registered / event.capacity) * 100)
  const isFull = event.registered >= event.capacity

  const handleAttend = () => {
    const msg = encodeURIComponent(
      `Hola! Quiero inscribirme al evento: *${event.title}* del ${formatDate(event.date)} a las ${formatTime(event.time)}`,
    )
    window.open(`https://wa.me/573105550101?text=${msg}`, '_blank')
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
            CATEGORY_COLORS[event.category] ?? 'bg-white/90 text-gray-700'
          }`}
        >
          {CATEGORY_LABELS[event.category] ?? event.category}
        </span>
        <div className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-2 text-center min-w-[56px]">
          <p className="text-2xl font-black text-primary-900 leading-none">
            {event.date.split('-')[2]}
          </p>
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wide">
            {getDayOfWeek(event.date).slice(0, 3)}
          </p>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-primary-900 group-hover:text-primary-600 transition-colors leading-tight mb-3">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{event.description}</p>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary-400 shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary-400 shrink-0" />
            <span>{formatTime(event.time)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-primary-400 shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="flex items-center gap-1">
              <Users size={12} />
              {event.registered} / {event.capacity} cupos
            </span>
            <span>{occupancy}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${isFull ? 'bg-red-400' : 'bg-secondary-DEFAULT'}`}
              style={{ width: `${Math.min(occupancy, 100)}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleAttend}
          disabled={isFull}
          className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
            isFull
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-secondary-DEFAULT text-white hover:bg-secondary-700 hover:shadow-md active:scale-95'
          }`}
        >
          {isFull ? 'Cupos agotados' : 'Quiero asistir'}
        </button>
      </div>
    </article>
  )
}
