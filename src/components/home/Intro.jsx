import { CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

const points = [
  'Cross-functional teams of engineers, designers, and strategists',
  'Transparent, milestone-based delivery on every engagement',
  'Code and IP ownership transfers fully to you at completion',
]

export default function Intro() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Who We Are"
            title="A software house built for teams who refuse to settle for average."
            description="Hexint Soft partners with founders and enterprise teams to design, engineer, and ship software that performs — from the first sketch to the production deploy. We operate as an extension of your team, not a detached vendor."
          />
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-card lg:p-10">
              <ul className="flex flex-col gap-5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-maroon-600" />
                    <span className="text-sm leading-relaxed text-ink-700/80">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line pt-6">
                <Button to="/about" variant="ghost" className="!px-0">
                  Read our full story
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
