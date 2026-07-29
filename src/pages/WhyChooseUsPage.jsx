import { Gauge, Users, Lock, Globe2, Award, MessageSquare } from 'lucide-react'
import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'
import CTA from '../components/home/CTA.jsx'

const reasons = [
  { icon: Gauge, title: 'Delivery You Can Set a Clock To', desc: 'Milestone-based timelines with weekly demos — no disappearing for months at a time.' },
  { icon: Users, title: 'Senior Talent, Not a Rotating Bench', desc: 'The team that scopes your project is the team that builds it, start to finish.' },
  { icon: Lock, title: 'Full Ownership, No Lock-In', desc: 'Source code and IP are yours on final payment. No proprietary platforms.' },
  { icon: Globe2, title: 'Built for Global Collaboration', desc: 'Async-friendly workflows and overlapping hours for clients across five continents.' },
  { icon: Award, title: 'Quality Bar Above the Brief', desc: 'We push back on shortcuts that would compromise performance or accessibility.' },
  { icon: MessageSquare, title: 'Direct Access to Engineers', desc: 'You talk to the people building your product, not an account manager relaying messages.' },
]

export default function WhyChooseUsPage() {
  return (
    <>
      <SEO
        title="Why Choose Us"
        description="See why global brands choose Hexint Soft over other software houses and agencies."
      />
      <PageHero
        eyebrow="Why Choose Hexint Soft"
        title="Chosen by teams who've been burned by agencies before."
        description="We built our process around the exact reasons client relationships with agencies usually break down."
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-line p-8">
                  <HexFrame size="md">
                    <r.icon className="h-6 w-6" />
                  </HexFrame>
                  <h3 className="font-display text-base font-bold text-ink">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700/65">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
