// Hero.jsx - The first section users see (the "welcome" screen)
// It shows your name, a tagline, and buttons to view work or contact you

import React from 'react'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">

        {/* Small greeting label */}
        <p className="hero__greeting">Hey there, I'm</p>

        {/* Your name — big and bold */}
        <h1 className="hero__name">Pawan Verma</h1>

        {/* What you are / what you're studying */}
        <h2 className="hero__tagline">
          Computer Science Student &amp; Aspiring Frontend Developer
        </h2>

        {/* Short description */}
        <p className="hero__description">
          I'm a 3rd year B.Tech student who loves building websites and learning
          new technologies. Currently looking for internships to grow my skills.
        </p>

        {/* Call-to-action buttons */}
        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline">
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero__social">
          <a
            href="https://github.com/pawan6398"
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            GitHub
          </a>
          <span className="hero__social-divider">·</span>
          <a
            href="https://www.linkedin.com/in/pawan-verma-63a283376/"
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Decorative blob/shape in the background */}
      <div className="hero__blob" aria-hidden="true"></div>
    </section>
  )
}

export default Hero
