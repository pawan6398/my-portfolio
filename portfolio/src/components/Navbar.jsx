// Navbar.jsx - The top navigation bar
// It shows your name/logo and links to each section of the page
// The "scrolled" prop changes its background once user scrolls down

import React, { useState } from 'react'

// navLinks is just an array of objects — each has a label and a link target
const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
]

function Navbar({ scrolled }) {
  // menuOpen tracks whether the mobile hamburger menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo / Name on the left */}
        <a href="#home" className="navbar__logo">
          Pawan<span>.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — only visible on mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)} // close menu after clicking
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
