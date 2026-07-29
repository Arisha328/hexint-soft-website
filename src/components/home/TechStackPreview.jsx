import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { techStack } from '../../data/technologies.js'

export default function TechStackPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Technology Stack"
            title="A stack chosen for the problem, not the trend."
          />
          <Reveal delay={0.1}>
            <Button to="/technologies" variant="outline">Full Stack</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-line p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-maroon-600">
                  {group.category}
                </span>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-700/75">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
