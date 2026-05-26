interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export function SectionTitle({ label, title, subtitle, light = false, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-widest uppercase mb-3 bg-secondary-100 text-secondary-700">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex ${centered ? 'justify-center' : ''} gap-2`}>
        <span className="h-1 w-12 rounded-full bg-accent-DEFAULT" />
        <span className="h-1 w-4 rounded-full bg-primary-300" />
        <span className="h-1 w-2 rounded-full bg-primary-200" />
      </div>
    </div>
  )
}
