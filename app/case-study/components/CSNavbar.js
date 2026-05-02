'use client';
import styles from './CSNavbar.module.css';
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function CSNavbar({ title, style, logo, links, year }) {
  
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('#hero')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Highlight active section
      for (const link of [...links].reverse()) {
        const el = document.querySelector(link.href)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(link.href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav 
    className={styles.nav} 
    style={{
      background: scrolled ? '#0c1a2e' :`${style}`,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
    }}>
      
      <Link className={styles.blink} href="/#projects"> ← Back to Portfolio </Link>
      <div className={styles.logo}>
        Case Study of  <span style={{ color: logo }}>{title}</span>
      </div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <span className={styles.tag} style={{ background: logo }}>Case Study · {year}</span>
    </nav>
  );
}
