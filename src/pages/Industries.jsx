import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'
import CTA from '../components/home/CTA.jsx'
import { industries } from '../data/industries.js'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Hexint Soft builds domain-aware software for healthcare, finance, retail, education, travel, real estate, logistics, and hospitality."
      />
      <PageHero
        eyebrow="Industries We Serve"
        title="Software that understands the industry it's built for."
        description="Generic templates break under real operational complexity. We build with the compliance, workflows, and edge cases of your industry in mind from day one."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-line p-7 transition-all hover:-translate-y-1 hover:border-maroon-200 hover:shadow-card">
                  <HexFrame size="md" tone="outline">
                    <ind.icon className="h-6 w-6" />
                  </HexFrame>
                  <h3 className="font-display text-base font-bold text-ink">{ind.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700/65">{ind.description}</p>
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
