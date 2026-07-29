import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Github, Linkedin, Instagram, Facebook, Mail, Phone, ArrowRight,
} from 'lucide-react'
import logo from '../../assets/logo.png'
import { services } from '../../data/services.js'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/hexintsoft?igsh=MXVyZ3MzeTJqMDBlMw==', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1BxZin3xiw/', label: 'Facebook' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Hexint Soft logo" className="h-9 w-9 object-contain" />
              <span className="font-display text-lg font-bold">
                Hexint <span className="text-maroon-300">Soft</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A global software house turning ideas into digital excellence — for ambitious
              brands across the USA, UK, Canada, Australia, UAE, and Europe.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-maroon-400 hover:text-maroon-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-sm text-white/70 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/60">
              Insights on engineering, design, and growth — delivered monthly.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-maroon-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 transition-colors hover:bg-maroon-500"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-xs text-maroon-300">You&apos;re subscribed. Welcome aboard.</p>
            )}
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/60">
              <a href="mailto:ahsanrazasoftware@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> ahsanrazasoftware@gmail.com
              </a>
              <a href="tel:03155816705" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> 0315 5816705
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Hexint Soft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
