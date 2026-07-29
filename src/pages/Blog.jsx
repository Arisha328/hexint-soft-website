import { ArrowRight } from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { blogPosts } from '../data/blog.js'

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Notes on engineering, design, AI, and growth from the Hexint Soft team."
      />
      <PageHero
        eyebrow="From the Blog"
        title="Notes on engineering, design, and growth."
        description="Practical writing from the team building the software — no filler, no recycled listicles."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-maroon-200 hover:shadow-card">
                  <span className="w-fit rounded-full bg-maroon-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-maroon-600">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-ink">{post.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-700/65">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-line pt-4 text-xs text-ink-700/50">
                    <span>{post.date} · {post.readTime}</span>
                    <ArrowRight className="h-4 w-4 text-maroon-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
