import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  BrainCircuit,
  Palette,
  GitBranch,
} from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTA from '../components/home/CTA.jsx'
import { techStack } from '../data/technologies.js'

const CATEGORY_ICONS = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  Database: Database,
  Cloud: Cloud,
  AI: BrainCircuit,
  'UI/UX': Palette,
  DevOps: GitBranch,
}

export default function Technologies() {
  return (
    <>
      <SEO
        title="Technologies"
        description="The frontend, backend, mobile, database, cloud, AI, UI/UX, and DevOps technologies Hexint Soft builds with."
      />
      <PageHero
        eyebrow="Our Technology Stack"
        title="Chosen for reliability at scale, not resume-building."
        description="We stay opinionated about our stack so we can move fast without cutting corners — every tool below has shipped in production, more than once."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => {
              const Icon = CATEGORY_ICONS[group.category] || Code2
              return (
                <Reveal key={group.category} delay={(i % 4) * 0.06}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-premium">
                    {/* soft corner glow accent */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-maroon-gradient opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />

                    <span className="hex-clip relative flex h-12 w-12 items-center justify-center bg-maroon-gradient text-white shadow-premium">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>

                    <span className="mt-5 block font-mono text-xs uppercase tracking-[0.2em] text-maroon-600">
                      {group.category}
                    </span>

                    <ul className="mt-4 flex flex-col gap-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink-700/85">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-maroon-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
