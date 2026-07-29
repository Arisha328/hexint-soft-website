import { Linkedin, Github, Mail } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import ceoPortrait from '../../assets/ceo-portrait.jpg'

/**
 * Team members. `photo` is used when available (Ahsan Raza's real portrait).
 * Arisha and Irsa currently use a generated initials avatar since no photo
 * asset was provided — swap in a real photo file the same way ceoPortrait
 * is wired up whenever one is available.
 */
const team = [
  {
    name: 'Ahsan Raza',
    role: 'Founder & CEO',
    desc: 'Leading Hexint Soft with expertise in technology, education consultancy, digital strategy, and business growth.',
    photo: ceoPortrait,
    initials: 'AR',
  },
  {
    name: 'Arisha Inayat',
    role: 'Full Stack Developer & UI/UX Designer',
    desc: 'Passionate about creating scalable web applications, modern UI/UX experiences, and innovative digital products.',
    photo: null,
    initials: 'AI',
  },
  {
    name: 'Irsa',
    role: 'Frontend Developer',
    desc: 'Focused on responsive interfaces, user experience, and clean frontend architecture.',
    photo: null,
    initials: 'IR',
  },
]

function Avatar({ member }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    )
  }
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-maroon-gradient">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 200 250" fill="none">
        <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" stroke="#FFFFFF" strokeWidth="1.4" />
        <circle cx="100" cy="55" r="2.5" fill="#FFFFFF" />
        <circle cx="180" cy="145" r="2.5" fill="#FFFFFF" />
      </svg>
      <span className="font-display text-5xl font-extrabold text-white/95 transition-transform duration-500 group-hover:scale-110">
        {member.initials}
      </span>
    </div>
  )
}

export default function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our People"
          title="Meet Our Leadership Team"
          description="Passionate professionals dedicated to innovation and client success."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-maroon-200 hover:shadow-premium">
                <div className="relative overflow-hidden">
                  <Avatar member={m} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25">
                      <Github className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-lg font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-maroon-600">
                    {m.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700/65">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
