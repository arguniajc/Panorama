import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  onClick?: () => void
  href?: string
  className?: string
  icon?: ReactNode
  fullWidth?: boolean
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-DEFAULT text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-200',
  secondary: 'bg-secondary-DEFAULT text-white hover:bg-secondary-700 shadow-lg hover:shadow-secondary-200',
  accent: 'bg-accent-DEFAULT text-primary-900 hover:bg-accent-600 shadow-lg hover:shadow-accent-200',
  outline: 'border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-white',
  ghost: 'text-primary-DEFAULT hover:bg-primary-50',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} onClick={(e) => { e.preventDefault(); onClick?.() }}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
