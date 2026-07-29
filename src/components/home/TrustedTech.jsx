import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

const names = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Figma',
  'Flutter', 'Python', 'Docker', '.NET',
]

export default function TrustedTech() {
  return (
    <section className="border-y border-line bg-white py-10">
      <Container>
        <Reveal>
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-700/40">
            Engineered with the technologies global teams trust
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {names.map((n) => (
            <span
              key={n}
              className="font-display text-sm font-semibold text-ink-700/35 transition-colors hover:text-maroon-600"
            >
              {n}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
