import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { blogPosts } from '../../data/blog.js'

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3)

  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From the Blog"
            title="Notes on engineering, design, and growth."
          />
          <Reveal delay={0.1}>
            <Button to="/blog" variant="outline">Visit Blog</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <article className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-maroon-200 hover:shadow-card">
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
  )
}
