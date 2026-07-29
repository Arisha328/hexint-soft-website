import { motion } from 'framer-motion'
import { ShieldCheck, Search, Code2, GraduationCap, LineChart, TrendingUp } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import ceoPortrait from '../../assets/ceo-portrait.jpg'

const highlights = [
  { icon: ShieldCheck, label: 'CEO & Founder' },
  { icon: Search, label: 'SEO Specialist' },
  { icon: Code2, label: 'WordPress Developer' },
  { icon: GraduationCap, label: 'Education Consultant' },
  { icon: LineChart, label: 'Business Strategist' },
  { icon: TrendingUp, label: 'Digital Growth Expert' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-maroon-100 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-8%] h-[380px] w-[380px] rounded-full bg-maroon-200/40 blur-3xl opacity-40" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — CEO intro copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-maroon-100 bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-maroon-600 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-maroon-600" />
              CEO &amp; Founder
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7 font-display text-4xl font-extrabold leading-[1.08] text-ink text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              Meet Ahsan Raza
              <span className="mt-2 block text-maroon-600">
                Leading Innovation. Delivering Digital Excellence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700/70"
            >
              Ahsan Raza is the Founder &amp; CEO of Hexint Soft, bringing expertise in
              international education consultancy, SEO strategy, website development, digital
              marketing, business consulting, and leadership. With years of experience guiding
              students and helping businesses grow digitally, he is committed to building
              innovative technology solutions and delivering exceptional client experiences
              worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-card"
                >
                  <h.icon className="h-4 w-4 shrink-0 text-maroon-600" />
                  <span className="font-display text-xs font-semibold leading-tight text-ink">
                    {h.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button to="/contact" variant="primary">Book Free Consultation</Button>
              <Button to="/portfolio" variant="outline">View Portfolio</Button>
            </motion.div>
          </div>

          {/* Right — CEO portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* abstract burgundy gradients behind the portrait */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-maroon-gradient opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-52 w-52 rounded-full bg-maroon-400/30 blur-3xl" />
            <svg className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 opacity-20 lg:h-36 lg:w-36" viewBox="0 0 100 100" fill="none">
              <polygon points="50,3 93,26 93,74 50,97 7,74 7,26" stroke="#7A1B34" strokeWidth="1.5" />
            </svg>

            {/* glassmorphism card wrapping the portrait */}
            <div className="relative rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-premium backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.6rem]">
                <img
                  src={ceoPortrait}
                  alt="Ahsan Raza — Founder & CEO of Hexint Soft"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              {/* floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="animate-float absolute -left-6 top-8 flex items-center gap-2.5 rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-premium backdrop-blur-md sm:-left-10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-gradient text-white">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold leading-none text-ink">8+</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-700/50">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="animate-float absolute -right-6 top-1/2 flex items-center gap-2.5 rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-premium backdrop-blur-md sm:-right-10"
                style={{ animationDelay: '1.2s' }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-gradient text-white">
                  <Search className="h-4 w-4" />
                </span>
                <p className="font-display text-xs font-bold text-ink">SEO Expert</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="animate-float absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-premium backdrop-blur-md"
                style={{ animationDelay: '2.1s' }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-gradient text-white">
                  <LineChart className="h-4 w-4" />
                </span>
                <p className="font-display text-xs font-bold text-ink">Business Consultant</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
