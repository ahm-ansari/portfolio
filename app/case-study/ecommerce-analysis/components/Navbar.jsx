'use client'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#hero',            label: 'Overview'   },
  { href: '#kpis',            label: 'KPIs'        },
  { href: '#sales',           label: 'Sales'       },
  { href: '#customers',       label: 'Customers'   },
  { href: '#ml',              label: 'ML Models'   },
  { href: '#products',        label: 'Products'    },
  { href: '#recommendations', label: 'ROI'         },
  { href: '#tech',            label: 'Tech Stack'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('#hero')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Highlight active section
      for (const link of [...NAV_LINKS].reverse()) {
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
               style={{ background: '#1A5276' }}>
            60+
          </div>
          <div>
            <div className="text-sm font-medium leading-tight"
                 style={{ color: scrolled ? '#0F1923' : 'white' }}>
              60plusindia.com
            </div>
            <div className="text-xs leading-tight"
                 style={{ color: scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.6)' }}>
              Case Study
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                color: active === link.href
                  ? '#1A5276'
                  : scrolled ? '#374151' : 'rgba(255,255,255,0.75)',
                background: active === link.href
                  ? '#EEF4FF'
                  : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Print button */}
        <button
          onClick={() => window.print()}
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
          style={{
            background: scrolled ? '#1A5276' : 'rgba(255,255,255,0.15)',
            color: 'white',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Export PDF
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? '#0F1923' : 'white' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-4 pt-2 flex flex-col gap-1"
             style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid #E5E7EB' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium"
              style={{
                color: active === link.href ? '#1A5276' : '#374151',
                background: active === link.href ? '#EEF4FF' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
