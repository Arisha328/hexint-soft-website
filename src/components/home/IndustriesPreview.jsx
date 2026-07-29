import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { industries } from '../../data/industries.js'

export default function IndustriesPreview() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Domain-aware engineering, not generic templates."
          />
          <Reveal delay={0.1}>
            <Button to="/industries" variant="outline">All Industries</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-maroon-200 hover:shadow-card">
                <ind.icon className="h-6 w-6 text-maroon-600" />
                <h3 className="font-display text-sm font-bold text-ink">{ind.title}</h3>
                <p className="text-xs leading-relaxed text-ink-700/60">{ind.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
