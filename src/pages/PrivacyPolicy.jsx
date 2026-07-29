import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'

const sections = [
  { title: '1. Information We Collect', body: 'We collect information you provide directly, such as your name, email address, and project details submitted through our contact form. We also collect standard analytics data (pages visited, device type) to improve the site.' },
  { title: '2. How We Use Your Information', body: 'We use the information you provide to respond to inquiries, prepare proposals, and deliver services you request. We do not sell or rent your personal information to third parties.' },
  { title: '3. Data Security', body: 'We apply industry-standard safeguards to protect information submitted through this site. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.' },
  { title: '4. Cookies', body: 'This site may use cookies for basic analytics purposes. You can disable cookies through your browser settings without affecting core site functionality.' },
  { title: '5. Your Rights', body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at ahsanrazasoftware@gmail.com.' },
  { title: '6. Changes to This Policy', body: 'We may update this policy periodically. Continued use of the site after changes indicates acceptance of the revised policy.' },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Hexint Soft's privacy policy — how we collect, use, and protect your information." />
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: July 2026" />
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            {sections.map((s) => (
              <Reveal key={s.title}>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
