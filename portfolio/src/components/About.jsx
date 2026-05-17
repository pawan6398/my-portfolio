// About.jsx - The "About Me" section
// Shows a photo placeholder, a short bio, and some quick facts

import React from 'react'

// Quick facts displayed as small cards
const facts = [
  { emoji: '🎓', label: 'B.Tech CSE', value: 'AKTU University, 2022–2026' },
  { emoji: '📍', label: 'Location',   value: 'Noida, Uttar Pradesh' },
  { emoji: '💼', label: 'Seeking',    value: 'Frontend / Web Dev Internship' },
  { emoji: '🧠', label: 'Interests',  value: 'React, UI/UX, Open Source' },
]

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        {/* Section heading */}
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">A little bit about who I am</p>

        <div className="about__grid">

          {/* Left: photo placeholder */}
          <div className="about__photo-wrap">
            <div className="about__photo">
              {/* Replace this with an <img> tag pointing to your real photo */}
              <span className="about__photo-initials">PV</span>
            </div>
          </div>

          {/* Right: bio + facts */}
          <div className="about__content">
            <p className="about__bio">
              Hi! I'm Pawan, a 3rd year Computer Science student at AKTU. I got into
              web development during my 1st year when I built a simple HTML page for
              a college assignment — and I've been hooked ever since.
            </p>
            <p className="about__bio">
              I enjoy making things look good and work smoothly in the browser. I'm
              still learning, but I've built a few projects with React and I'm always
              trying to improve my code. Outside of coding, I like playing chess and
              watching tech YouTube.
            </p>

            {/* Quick fact cards */}
            <div className="about__facts">
              {facts.map((fact) => (
                <div key={fact.label} className="about__fact-card">
                  <span className="about__fact-emoji">{fact.emoji}</span>
                  <div>
                    <p className="about__fact-label">{fact.label}</p>
                    <p className="about__fact-value">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download resume button */}
            <a href="#" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
