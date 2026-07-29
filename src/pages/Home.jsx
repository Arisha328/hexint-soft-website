import SEO from '../components/ui/SEO.jsx'
import Hero from '../components/home/Hero.jsx'
import TrustedTech from '../components/home/TrustedTech.jsx'
import Intro from '../components/home/Intro.jsx'
import ServicesGrid from '../components/home/ServicesGrid.jsx'
import Process from '../components/home/Process.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Stats from '../components/home/Stats.jsx'
import Team from '../components/home/Team.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import IndustriesPreview from '../components/home/IndustriesPreview.jsx'
import TechStackPreview from '../components/home/TechStackPreview.jsx'
import TestimonialsPreview from '../components/home/TestimonialsPreview.jsx'
import FAQPreview from '../components/home/FAQPreview.jsx'
import BlogPreview from '../components/home/BlogPreview.jsx'
import CTA from '../components/home/CTA.jsx'

export default function Home() {
  return (
    <>
      <SEO
        title="Global Software House"
        description="Hexint Soft designs and engineers web, mobile, and AI-driven software for ambitious brands across the USA, UK, Canada, Australia, UAE, and Europe."
      />
      <Hero />
      <TrustedTech />
      <Intro />
      <ServicesGrid />
      <Process />
      <FeaturedProjects />
      <Stats />
      <Team />
      <WhyChooseUs />
      <IndustriesPreview />
      <TechStackPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <BlogPreview />
      <CTA />
    </>
  )
}
