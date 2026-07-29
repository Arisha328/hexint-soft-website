import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import HexFrame from '../ui/HexFrame.jsx'
import Button from '../ui/Button.jsx'
import { services } from '../../data/services.js'

export default function ServicesGrid() {
  const featured = services.slice(0, 8)

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end services for every stage of your product."
            description="From first sketch to production infrastructure — one team, one accountable process."
          />
          <Reveal delay={0.1}>
            <Button to="/services" variant="outline">All Services</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                to="/services"
                className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-maroon-200 hover:shadow-premium"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-maroon-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <HexFrame size="md">
                    <s.icon className="h-6 w-6" />
                  </HexFrame>
                </div>
                <div className="relative flex-1">
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/65">{s.short}</p>
                </div>
                <span className="relative flex items-center gap-1.5 font-display text-sm font-semibold text-maroon-600">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
