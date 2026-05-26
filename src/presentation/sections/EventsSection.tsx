import { eventsRepository } from '../../data/repositories/EventsRepository'
import { EventCard } from '../components/EventCard'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { CalendarDays } from 'lucide-react'

const EVENTS = eventsRepository.getAll()

export function EventsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Agenda"
            title="Próximos Eventos"
            subtitle="Participa en las actividades de tu comunidad. ¡Tu presencia hace la diferencia!"
          />

          {/* Upcoming highlight */}
          {EVENTS[0] && (
            <div className="mb-10 bg-primary-50 border border-primary-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-DEFAULT flex flex-col items-center justify-center text-white shrink-0">
                <CalendarDays size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-1">Próximo evento</p>
                <h3 className="font-heading font-bold text-xl text-primary-900">{EVENTS[0].title}</h3>
                <p className="text-gray-500 text-sm mt-1">{EVENTS[0].location}</p>
              </div>
              <button
                onClick={() => {
                  const msg = encodeURIComponent(`Quiero información sobre el evento: ${EVENTS[0].title}`)
                  window.open(`https://wa.me/573105550101?text=${msg}`, '_blank')
                }}
                className="shrink-0 bg-primary-DEFAULT text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-primary-200 active:scale-95"
              >
                Más información
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
