import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { faqs } from '../../data/faqs.js'

export default function FAQPreview() {
  const [open, setOpen] = useState(0)
  const featured = faqs.slice(0, 5)

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers before you have to ask."
            align="center"
          />

          <div className="mt-12 flex flex-col divide-y divide-line">
            {featured.map((f, i) => (
              <Reveal key={f.question} delay={i * 0.05}>
                <div className="py-5">
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-base font-semibold text-ink">{f.question}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-maroon-600 transition-transform duration-300 ${
                        open === i ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-ink-700/70">{f.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
