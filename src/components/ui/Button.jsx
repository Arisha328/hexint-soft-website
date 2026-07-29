import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-maroon-600 text-white hover:bg-maroon-700 shadow-premium',
  dark: 'bg-ink text-white hover:bg-ink-700',
  light: 'bg-white text-ink hover:bg-white/90',
  outline: 'border border-ink/15 text-ink hover:border-maroon-600 hover:text-maroon-600',
  'outline-light': 'border border-white/25 text-white hover:border-white hover:bg-white/10',
  ghost: 'text-ink hover:text-maroon-600',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon = true,
  type = 'button',
}) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-all duration-300 ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={base}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={base}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {content}
    </button>
  )
}
