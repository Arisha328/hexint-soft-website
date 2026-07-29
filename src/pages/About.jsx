import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Target, Eye, Heart, ShieldCheck, Users, Trophy, Clock, Layers, Percent } from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'
import CTA from '../components/home/CTA.jsx'

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We tell clients the truth about scope, timelines, and tradeoffs — even when it\'s inconvenient.' },
  { icon: Trophy, title: 'Craft', desc: 'We hold our own bar for quality above what any client would think to ask for.' },
  { icon: Users, title: 'Partnership', desc: 'We act as an extension of your team, invested in outcomes, not just deliverables.' },
  { icon: Clock, title: 'Accountability', desc: 'Deadlines are commitments. When something shifts, we communicate early, not late.' },
]

const highlights = [
  { icon: Trophy, value: 100, suffix: '+', label: 'Projects' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: Layers, value: 15, suffix: '+', label: 'Technologies' },
  { icon: Percent, value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-3xl font-extrabold text-ink">
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Hexint Soft's story, mission, vision, and the values that shape every engagement we take on."
      />
      <PageHero
        eyebrow="About Hexint Soft"
        title="We started as engineers frustrated by agencies that talked more than they shipped."
        description="That's still the standard we hold ourselves to today — clear communication, disciplined execution, and software that performs after launch, not just at the demo."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Our Story"
              title="Built by people who kept getting asked to fix someone else's launch."
              description="Hexint Soft began with a simple observation: most software failures aren't technical — they're the result of poor communication, rushed discovery, and teams optimizing for the pitch instead of the outcome. We built our studio around closing that gap, pairing senior engineering talent with product thinking from day one. What started as a small team taking on overflow work from frustrated founders has grown into a full-stack studio trusted with mission-critical platforms across healthcare, finance, and retail."
            />
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-200 hover:shadow-card"
                  >
                    <HexFrame size="sm">
                      <h.icon className="h-4 w-4" />
                    </HexFrame>
                    <Counter value={h.value} suffix={h.suffix} />
                    <span className="text-xs leading-relaxed text-ink-700/60">{h.label}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-10">
                <HexFrame size="lg"><Target className="h-8 w-8" /></HexFrame>
                <h3 className="font-display text-2xl font-bold text-ink">Our Mission</h3>
                <p className="text-sm leading-relaxed text-ink-700/70">
                  To help ambitious businesses turn ideas into dependable, elegant software —
                  delivered with the transparency and craftsmanship they can't find elsewhere.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-10">
                <HexFrame size="lg" tone="ink"><Eye className="h-8 w-8" /></HexFrame>
                <h3 className="font-display text-2xl font-bold text-ink">Our Vision</h3>
                <p className="text-sm leading-relaxed text-ink-700/70">
                  To be the software partner global brands call first — known for engineering
                  discipline, design judgment, and outcomes that outlast the initial launch.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every engagement."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-line p-8 text-center">
                  <v.icon className="h-8 w-8 text-maroon-600" />
                  <h3 className="font-display text-base font-bold text-ink">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700/65">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-10 text-center lg:p-14">
            <Heart className="mx-auto h-8 w-8 text-maroon-600" />
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">Why Clients Trust Us</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-700/70">
              We don't disappear after the contract is signed. Every engagement includes a
              dedicated project lead, weekly progress visibility, and a post-launch warranty
              period — because trust is earned in the months after delivery, not just the pitch.
            </p>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
