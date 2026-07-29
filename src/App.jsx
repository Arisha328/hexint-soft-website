import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Technologies from './pages/Technologies.jsx'
import Industries from './pages/Industries.jsx'
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
