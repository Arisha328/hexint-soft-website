import { Gauge, Users, Lock, Globe2 } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import HexFrame from '../ui/HexFrame.jsx'

const reasons = [
  { icon: Gauge, title: 'Delivery You Can Set a Clock To', desc: 'Milestone-based timelines with weekly demos — no disappearing for months at a time.' },
  { icon: Users, title: 'Senior Talent, Not a Rotating Bench', desc: 'The team that scopes your project is the team that builds it, start to finish.' },
  { icon: Lock, title: 'Full Ownership, No Lock-In', desc: 'Source code and IP are yours on final payment. No proprietary platforms.' },
  { icon: Globe2, title: 'Built for Global Collaboration', desc: 'Async-friendly workflows and overlapping hours for clients across five continents.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Hexint Soft"
          title="Chosen by teams who've been burned by agencies before."
          align="center"
          description="We built our process around the exact reasons client relationships usually break down."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-line p-8 text-center transition-all hover:border-maroon-200 hover:shadow-card">
                <HexFrame size="lg" tone="outline">
                  <r.icon className="h-8 w-8" />
                </HexFrame>
                <h3 className="font-display text-base font-bold text-ink">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700/65">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
