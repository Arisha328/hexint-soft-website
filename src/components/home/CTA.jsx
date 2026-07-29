import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Have a project in mind? Let&apos;s build something excellent.
            </h2>
            <p className="text-white/60">
              Tell us about your goals — we&apos;ll respond with a clear plan, not a sales pitch.
            </p>
            <Button to="/contact" variant="primary">Book a Free Consultation</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
