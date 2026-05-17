// Certificates.jsx - Shows your certifications and courses completed
// Great for freshers to show they've been proactively learning

import React from 'react'

// Certificate data — add your own certifications here
const certificates = [
  {
    id: 1,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'March 2024',
    link: 'https://freecodecamp.org/certification/aryan-sharma/javascript-algorithms-and-data-structures',
    color: '#0a0a23',
    emoji: '🏅',
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'January 2024',
    link: 'https://freecodecamp.org/certification/aryan-sharma/responsive-web-design',
    color: '#0a0a23',
    emoji: '🎖️',
  },
  {
    id: 3,
    title: 'React – The Complete Guide',
    issuer: 'Udemy · Maximilian Schwarzmüller',
    date: 'June 2024',
    link: 'https://udemy.com/certificate/example',
    color: '#a435f0',
    emoji: '📜',
  },
  {
    id: 4,
    title: 'Introduction to Programming with Python',
    issuer: 'Coursera · University of Michigan',
    date: 'December 2023',
    link: 'https://coursera.org/certificate/example',
    color: '#0056d2',
    emoji: '🐍',
  },
]

// A single certificate card
function CertCard({ cert }) {
  return (
    <div className="cert-card">
      <div className="cert-card__left">
        <span className="cert-card__emoji">{cert.emoji}</span>
      </div>
      <div className="cert-card__body">
        <h3 className="cert-card__title">{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>
        <p className="cert-card__date">Issued: {cert.date}</p>
      </div>
      <div className="cert-card__right">
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="cert-card__verify"
        >
          Verify ↗
        </a>
      </div>
    </div>
  )
}

function Certificates() {
  return (
    <section id="certificates" className="certificates section section--alt">
      <div className="container">

        <h2 className="section__title">Certificates</h2>
        <p className="section__subtitle">Courses and certifications I've completed</p>

        <div className="certificates__list">
          {certificates.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
