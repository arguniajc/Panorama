import { communityRepository } from '../../data/repositories/CommunityRepository'
import { MemberCard } from '../components/MemberCard'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { Shield } from 'lucide-react'

const JAC_MEMBERS = communityRepository.getJACMembers()
const LEADERS = communityRepository.getLeaders()

export function CommunitySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="community" className="py-20 bg-primary-900" style={{background: 'linear-gradient(135deg, #540D02 0%, #A0300E 60%, #7A1E07 100%)'}}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Comunidad"
            title="Junta de Acción Comunal"
            subtitle="Conoce a las personas que trabajan cada día por el bienestar de Barrio Panorama."
            light
          />

          {/* JAC Info banner */}
          <div className="mb-12 bg-primary-800/60 border border-primary-700 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-accent-DEFAULT/20 border border-accent-DEFAULT/30 flex items-center justify-center shrink-0">
              <Shield size={32} className="text-accent-DEFAULT" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-xl text-white mb-1">
                ¿Qué es la Junta de Acción Comunal?
              </h3>
              <p className="text-primary-300 text-sm max-w-2xl leading-relaxed">
                La JAC es un organismo de participación ciudadana conformado por los vecinos del barrio, reconocido por el Estado colombiano.
                Su objetivo es representar a la comunidad, gestionar recursos, ejecutar proyectos y mejorar la calidad de vida de todos los habitantes.
              </p>
            </div>
          </div>

          {/* JAC Members */}
          <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-accent-DEFAULT" />
            Dignatarios JAC
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
            {JAC_MEMBERS.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Leaders */}
          {LEADERS.length > 0 && (
            <>
              <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-secondary-400" />
                Líderes Comunitarios
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {LEADERS.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </>
          )}

          {/* Call to action */}
          <div className="mt-14 text-center bg-gradient-to-r from-secondary-DEFAULT/20 to-primary-700/20 border border-secondary-500/20 rounded-2xl p-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-3">
              ¿Quieres hacer parte de la JAC?
            </h3>
            <p className="text-primary-300 mb-6 max-w-xl mx-auto">
              Cualquier vecino mayor de 14 años puede participar. Tu compromiso y liderazgo son bienvenidos en nuestra comunidad.
            </p>
            <button
              onClick={() => {
                const msg = encodeURIComponent('Hola! Quisiera información para vincularme a la Junta de Acción Comunal del Barrio Panorama.')
                window.open(`https://wa.me/573105550101?text=${msg}`, '_blank')
              }}
              className="inline-flex items-center gap-2 bg-accent-DEFAULT text-primary-900 font-bold px-8 py-3.5 rounded-xl hover:bg-accent-600 transition-all shadow-lg hover:shadow-accent-500/30 active:scale-95"
            >
              ¡Quiero participar!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
