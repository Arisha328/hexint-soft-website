import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal>
      <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
        {eyebrow && (
          <span className={`font-mono text-xs tracking-[0.2em] uppercase flex items-center gap-2 ${light ? 'text-maroon-200' : 'text-maroon-600'}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-maroon-200' : 'bg-maroon-600'}`} />
            {eyebrow}
          </span>
        )}
        <h2 className={`font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-balance ${light ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-700/70'}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
