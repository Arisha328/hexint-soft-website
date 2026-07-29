import { useState } from 'react'
import {
  Mail, Phone, Linkedin, Instagram,
  Send, CheckCircle2,
} from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'

const directContacts = [
  { icon: Mail, label: 'Email', value: 'ahsanrazasoftware@gmail.com', href: 'mailto:ahsanrazasoftware@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+92 315 5816705', href: 'tel:+923155816705' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Hexint Soft', href: '#' },
  { icon: Instagram, label: 'Instagram', value: '@hexintsoft', href: 'https://www.instagram.com/hexintsoft?igsh=MXVyZ3MzeTJqMDBlMw==' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Hexint Soft — tell us about your project and we'll respond within one business day."
      />
      <PageHero
        eyebrow="Let's Talk"
        title="Let's Build Something Amazing Together"
        description="Tell us about your project and our experts will get back to you within one business day."
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    Let&apos;s Build Something Amazing Together
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-700/70">
                    Tell us about your project and our experts will get back to you within one
                    business day.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {directContacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href?.startsWith('http') ? '_blank' : undefined}
                      rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-maroon-200 hover:shadow-premium"
                    >
                      <HexFrame size="md">
                        <c.icon className="h-5 w-5" />
                      </HexFrame>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-700/50">
                          {c.label}
                        </p>
                        <p className="font-display text-sm font-semibold text-ink group-hover:text-maroon-600">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-paper p-8 lg:p-10">
                {sent ? (
                  <div className="flex flex-col items-center gap-4 py-16 text-center">
                    <CheckCircle2 className="h-12 w-12 text-maroon-600" />
                    <h3 className="font-display text-xl font-bold text-ink">Message received</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-ink-700/65">
                      Thanks, {form.name.split(' ')[0]}. We'll reply to {form.email} within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-700/50">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-maroon-500 focus:outline-none"
                          placeholder="Jordan Miller"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-700/50">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-maroon-500 focus:outline-none"
                          placeholder="jordan@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-700/50">
                        Estimated Budget (optional)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-maroon-500 focus:outline-none"
                      >
                        <option value="">Select a range</option>
                        <option value="5-15k">$5,000 – $15,000</option>
                        <option value="15-50k">$15,000 – $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-700/50">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-maroon-500 focus:outline-none"
                        placeholder="Tell us what you're building and what success looks like..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex items-center justify-center gap-2 rounded-full bg-maroon-600 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-premium transition-colors hover:bg-maroon-700"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
