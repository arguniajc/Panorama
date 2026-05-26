const MONTHS_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return `${day} de ${MONTHS_ES[month - 1]} de ${year}`
}

export function formatDateShort(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return `${day} ${MONTHS_ES[month - 1].slice(0, 3)}. ${year}`
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'p.m.' : 'a.m.'
  const hour = h % 12 || 12
  return `${hour}:${m.toString().padStart(2, '0')} ${period}`
}

export function getDayOfWeek(dateStr: string): string {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const date = new Date(dateStr + 'T00:00:00')
  return days[date.getDay()]
}

export function getProgressColor(progress: number): string {
  if (progress < 25) return 'bg-red-500'
  if (progress < 50) return 'bg-accent-DEFAULT'
  if (progress < 75) return 'bg-blue-500'
  return 'bg-secondary-DEFAULT'
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    planificado: 'Planificado',
    en_progreso: 'En progreso',
    completado: 'Completado',
    pausado: 'Pausado',
  }
  return labels[status] ?? status
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    planificado: 'bg-blue-100 text-blue-700',
    en_progreso: 'bg-accent-50 text-amber-700',
    completado: 'bg-secondary-50 text-secondary-700',
    pausado: 'bg-gray-100 text-gray-600',
  }
  return colors[status] ?? 'bg-gray-100 text-gray-600'
}
