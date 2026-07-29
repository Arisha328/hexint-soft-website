import { Star, Quote } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { testimonials } from '../../data/testimonials.js'

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What our clients say after launch — not just at kickoff."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-white p-8 shadow-card">
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
  )
}
