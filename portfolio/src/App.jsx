// App.jsx - The main component that holds everything together
// Think of it like the "frame" of the website — it imports and arranges all sections

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // This tracks whether the user has scrolled down (used to change navbar style)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Listen for scroll events and update the "scrolled" state
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Pass "scrolled" to Navbar so it can change its background */}
      <Navbar scrolled={scrolled} />

      {/* Each section of the portfolio */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
