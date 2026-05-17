// Footer.jsx - Simple footer at the bottom of the page
// Shows your name, quick links, and copyright info

import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Left: Name / Logo */}
        <p className="footer__logo">Pawan Verma</p>

        {/* Center: Quick links */}
        <ul className="footer__links">
          <li><a href="#home"         className="footer__link">Home</a></li>
          <li><a href="#about"        className="footer__link">About</a></li>
          <li><a href="#projects"     className="footer__link">Projects</a></li>
          <li><a href="#contact"      className="footer__link">Contact</a></li>
        </ul>

        {/* Right: Copyright */}
        <p className="footer__copy">
          © {currentYear} · Made with ❤️ using React
        </p>
      </div>
    </footer>
  )
}

export default Footer
