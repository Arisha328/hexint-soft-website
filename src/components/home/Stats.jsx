import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Container from '../ui/Container.jsx'

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 45, suffix: '+', label: 'Global Clients' },
  { value: 8, suffix: '+', label: 'Years of Combined Expertise' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
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
    <span ref={ref} className="font-display text-4xl font-extrabold text-white lg:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-maroon-gradient py-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
