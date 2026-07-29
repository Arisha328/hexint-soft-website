import { useState } from 'react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTA from '../components/home/CTA.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import { projects, projectCategories } from '../data/projects.js'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Portfolio"
        description="Browse Hexint Soft's portfolio of business websites, e-commerce stores, AI chatbots, mobile apps, dashboards, and enterprise systems."
      />
      <PageHero
        eyebrow="Our Portfolio"
        title="Work shipped for real businesses, still running in production."
        description="A cross-section of the platforms, storefronts, and applications we've engineered for clients around the world."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-4 py-2 font-display text-sm font-medium transition-colors ${
                    active === cat
                      ? 'border-maroon-600 bg-maroon-600 text-white'
                      : 'border-line text-ink-700/70 hover:border-maroon-300 hover:text-maroon-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
