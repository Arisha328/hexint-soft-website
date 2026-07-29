import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import HexFrame from '../components/ui/HexFrame.jsx'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper py-32">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
          <HexFrame size="lg"><Compass className="h-8 w-8" /></HexFrame>
          <h1 className="font-display text-3xl font-extrabold text-ink">Page not found</h1>
          <p className="text-sm leading-relaxed text-ink-700/65">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Button to="/" variant="primary">Back to Home</Button>
        </div>
      </Container>
    </section>
  )
}
