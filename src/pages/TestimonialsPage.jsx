import { Star, Quote } from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTA from '../components/home/CTA.jsx'
import { testimonials } from '../data/testimonials.js'

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what Hexint Soft clients across the USA, UK, Canada, Australia, and UAE say about working with us."
      />
      <PageHero
        eyebrow="Client Testimonials"
        title="What our clients say after launch — not just at kickoff."
        description="Every quote below is from a client whose product is still in production today."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-paper p-8 shadow-card">
                  <Quote className="h-7 w-7 text-maroon-200" />
                  <p className="flex-1 text-sm leading-relaxed text-ink-700/80">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-maroon-500 text-maroon-500" />
                    ))}
                  </div>
                  <div className="border-t border-line pt-4">
                    <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-700/55">{t.role} — {t.location}</p>
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
