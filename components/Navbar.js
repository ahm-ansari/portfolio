'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about',       label: 'About' },
  { href: '#services',    label: 'Services' },
  { href: '#projects',    label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact',     label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="container nav__inner">
          <a href="#hero" className="nav__logo" aria-label="Abul Hassan home">
            AH<span>.</span>
          </a>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav__cta">Hire Me</a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="nav__hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav__mobile${mobileOpen ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={handleNavClick}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn--primary" style={{ marginTop: '.5rem', textAlign: 'center', justifyContent: 'center' }} onClick={handleNavClick}>
          Hire Me
        </a>
      </div>
    </>
  )
}
