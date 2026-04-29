'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const CASE_STUDY_LINK = { href: '/case-study/lead-generation', label: 'Case Study ↗', external: false };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    let current = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 96) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <nav
        className="container"
        role="navigation"
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Abul Hassan Mohamed Ansari – Home"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.125rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--primary)',
              color: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
            }}
          >
            AH
          </span>
          <span style={{ display: 'none' }} className="logo-text">Abul Hassan</span>
        </Link>

        {/* Desktop Nav */}
        <ul
          role="list"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            listStyle: 'none',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    padding: '0.5rem 0.875rem',
                    borderRadius: 'var(--radius-full)',
                    transition: 'all var(--transition)',
                    textDecoration: 'none',
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--primary-subtle)' : 'transparent',
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="#contact"
            className="btn btn-primary btn-sm no-print"
            aria-label="Hire Abul Hassan"
          >
            Hire Me
          </a>
          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="mobile-burger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                marginBottom: '5px',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                marginBottom: '5px',
                opacity: menuOpen ? 0 : 1,
                transition: 'all 0.3s',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        style={{
          display: menuOpen ? 'block' : 'none',
          position: 'fixed',
          inset: '68px 0 0',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          padding: '1.5rem',
          borderTop: '1px solid var(--border)',
        }}
        className="mobile-menu"
      >
        <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  padding: '0.875rem 1.125rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'all var(--transition)',
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1rem' }}>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
          .logo-text { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
