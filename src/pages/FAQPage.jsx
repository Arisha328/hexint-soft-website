import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTA from '../components/home/CTA.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQPage() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to common questions about working with Hexint Soft — timelines, pricing, process, and support."
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Answers before you have to ask."
        description="Can't find what you're looking for? Reach out and we'll get back to you within one business day."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col divide-y divide-line">
              {faqs.map((f, i) => (
                <Reveal key={f.question} delay={(i % 5) * 0.05}>
                  <div className="py-6">
                    <button
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}
                    >
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {f.question}
                      </span>
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

      <CTA />
    </>
  )
}
