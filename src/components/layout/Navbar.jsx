import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import Button from '../ui/Button.jsx'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-xl border-b border-line shadow-sm'
          : 'bg-paper/40 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Hexint Soft logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Hexint <span className="text-maroon-600">Soft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-display text-sm font-medium transition-colors ${
                  isActive ? 'text-maroon-600' : 'text-ink-700 hover:text-maroon-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !text-[13px]">
            Get a Quote
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-base font-medium ${isActive ? 'text-maroon-600' : 'text-ink-700'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" className="mt-2 w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
