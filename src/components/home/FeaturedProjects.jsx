import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import ProjectCard from '../portfolio/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="bg-ink py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that shipped, and kept performing."
            light
          />
          <Reveal delay={0.1}>
            <Button to="/portfolio" variant="outline-light">Full Portfolio</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.1} dark />
          ))}
        </div>
      </Container>
    </section>
  )
}
