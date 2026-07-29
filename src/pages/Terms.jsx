import SEO from '../components/ui/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'

const sections = [
  { title: '1. Services', body: 'Hexint Soft provides software design and development services as agreed in a separate written proposal or contract for each engagement. This website describes our services generally and does not itself constitute a binding offer.' },
  { title: '2. Intellectual Property', body: 'Upon final payment for a completed project, ownership of the delivered source code and associated intellectual property transfers to the client, except for any third-party licenses or pre-existing Hexint Soft tools explicitly noted in the proposal.' },
  { title: '3. Payment Terms', body: 'Payment schedules are defined per project in the signed proposal. Late payments may result in paused delivery until accounts are brought current.' },
  { title: '4. Limitation of Liability', body: 'Hexint Soft is not liable for indirect, incidental, or consequential damages arising from the use of delivered software beyond the value of the engagement itself.' },
  { title: '5. Confidentiality', body: 'We treat all client project information as confidential and do not disclose it to third parties without consent, except as required by law.' },
  { title: '6. Governing Terms', body: 'These general terms are supplemented by the specific terms of each signed client agreement, which take precedence in the event of any conflict.' },
]

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Hexint Soft's terms and conditions for services and website use." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: July 2026" />
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
