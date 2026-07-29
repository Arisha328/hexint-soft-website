export default function HexFrame({ children, size = 'md', tone = 'maroon', className = '' }) {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
  }
  const tones = {
    maroon: 'bg-maroon-gradient text-white',
    ink: 'bg-ink-gradient text-white',
    outline: 'bg-white text-maroon-600 border border-maroon-100',
  }

  return (
    <div
      className={`hex-clip flex items-center justify-center shrink-0 ${sizes[size]} ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  )
}
