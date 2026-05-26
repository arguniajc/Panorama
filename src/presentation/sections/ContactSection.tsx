import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { useScrollAnimation } from '../../core/hooks/useScrollAnimation'
import { SITE } from '../../core/constants'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const SUBJECTS = [
  'Consulta general',
  'Reportar un problema',
  'Propuesta comunitaria',
  'Solicitar información',
  'Participar en la JAC',
  'Otro',
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Nueva solicitud - Portal Barrio Panorama*\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.phone}\n*Asunto:* ${formData.subject}\n\n*Mensaje:*\n${formData.message}`,
    )
    window.open(`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  const isValid = formData.name && formData.message && formData.subject

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            label="Contacto"
            title="Comunícate con Nosotros"
            subtitle="Estamos aquí para escucharte. Tu voz es importante para el desarrollo de nuestro barrio."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-primary-50 rounded-2xl p-7 border border-primary-100">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-5">Información de Contacto</h3>

                <div className="space-y-4">
                  <a href={`tel:${SITE.phone}`} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 bg-primary-DEFAULT rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Teléfono</p>
                      <p className="text-gray-700 font-semibold group-hover:text-primary-DEFAULT transition-colors">{SITE.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 bg-secondary-DEFAULT rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                      <p className="text-gray-700 font-semibold group-hover:text-secondary-DEFAULT transition-colors">{SITE.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent-DEFAULT rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary-900" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Dirección</p>
                      <p className="text-gray-700 font-semibold">{SITE.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-heading font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span>💬</span> WhatsApp Directo
                </h4>
                <p className="text-green-700 text-sm mb-4">Para atención inmediata, contáctanos por WhatsApp.</p>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent('Hola! Me comunico desde el portal del Barrio Panorama.')
                    window.open(`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${msg}`, '_blank')
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-green-300"
                >
                  Abrir WhatsApp
                </button>
              </div>

              <div className="bg-primary-DEFAULT rounded-2xl p-6 text-white">
                <h4 className="font-heading font-bold mb-2">Horarios de atención</h4>
                <div className="space-y-1.5 text-sm text-primary-200">
                  <div className="flex justify-between"><span>Lunes – Viernes</span><span className="text-white font-semibold">8:00 – 18:00</span></div>
                  <div className="flex justify-between"><span>Sábados</span><span className="text-white font-semibold">9:00 – 13:00</span></div>
                  <div className="flex justify-between"><span>Domingos</span><span className="text-primary-400">Cerrado</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle size={56} className="text-secondary-DEFAULT" />
                    <h3 className="font-heading font-bold text-2xl text-primary-900">¡Mensaje enviado!</h3>
                    <p className="text-gray-500">Tu mensaje fue enviado por WhatsApp. Te responderemos pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading font-bold text-xl text-primary-900 mb-6">Envíanos un mensaje</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nombre completo *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Teléfono / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+57 300 000 0000"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Asunto *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all bg-white"
                        >
                          <option value="">Seleccionar...</option>
                          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensaje *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid}
                      className="w-full flex items-center justify-center gap-2 bg-primary-DEFAULT text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} />
                      Enviar por WhatsApp
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      * Al enviar, serás redirigido a WhatsApp con tu mensaje pre-cargado.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
