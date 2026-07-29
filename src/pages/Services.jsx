import { CheckCircle2 } from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'
import Button from '../components/ui/Button.jsx'
import CTA from '../components/home/CTA.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Hexint Soft's full range of services — web development, UI/UX design, mobile apps, AI solutions, cloud, and more."
      />
      <PageHero
        eyebrow="What We Do"
        title="Fourteen disciplines. One accountable team."
        description="Every service below is delivered by the same senior team from discovery through launch — no handoffs between departments, no diluted accountability."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <div
                  id={s.slug}
                  className="grid grid-cols-1 gap-8 rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-premium lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10 lg:p-10"
                >
                  <HexFrame size="lg">
                    <s.icon className="h-8 w-8" />
                  </HexFrame>

                  <div>
                    <h2 className="font-display text-xl font-bold text-ink lg:text-2xl">{s.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700/70">{s.short}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span key={t} className="rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-ink-700/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700/75">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-maroon-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start lg:pt-1">
                    <Button to="/contact" variant="outline" className="w-full lg:w-auto">
                      {s.cta}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
