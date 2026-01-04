import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import FAQs from './components/FAQs'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import SmallBusiness from './pages/SmallBusiness'
import Contact from './pages/Contact'
import ConstructionInterior from './pages/ConstructionInterior';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <AboutUs />
      <FAQs />
      <CaseStudies />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/small-business" element={<SmallBusiness />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/construction-interior" element={<ConstructionInterior />} />
      </Routes>
    </Router>
  )
}

export default App
