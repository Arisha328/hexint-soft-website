import { Search, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

const steps = [
  { icon: Search, title: 'Discovery', desc: 'We map your goals, users, and technical constraints before proposing a single solution.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes and prototypes are validated with real users before development begins.' },
  { icon: Code2, title: 'Development', desc: 'Agile sprints with weekly demos, so you see progress instead of waiting for a reveal.' },
  { icon: ShieldCheck, title: 'Testing', desc: 'Manual and automated QA across devices, browsers, and edge cases before launch.' },
  { icon: Rocket, title: 'Launch & Support', desc: 'A monitored launch followed by a warranty period and optional ongoing support.' },
]

export default function Process() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A process built on visibility, not guesswork."
          description="Every engagement follows the same five stages — so you always know what's happening and why."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative flex flex-col items-start gap-4">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-maroon-100 bg-white text-maroon-600 shadow-card">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-maroon-600/70">0{i + 1}</span>
                  <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
