import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full bg-maroon-600/20 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-maroon-300">
                <span className="h-1.5 w-1.5 rounded-full bg-maroon-300" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-white/60">{description}</p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
