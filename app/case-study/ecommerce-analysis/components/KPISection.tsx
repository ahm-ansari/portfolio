'use client'
import { useEffect, useRef, useState } from 'react'
import { KPI_CARDS } from '../lib/data'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const COLOR_MAP: Record<string, { bg: string; accent: string; text: string }> = {
  brand:   { bg: '#EEF4FF', accent: '#1A5276', text: '#0D2D4A' },
  saffron: { bg: '#FEF3E2', accent: '#E67E22', text: '#784212' },
  emerald: { bg: '#EAFAF1', accent: '#27AE60', text: '#145A32' },
  ruby:    { bg: '#FDEDEC', accent: '#E74C3C', text: '#922B21' },
}

export default function KPISection() {
  const ref = useReveal()

  return (
    <section id="kpis" className="py-24 px-8 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="mb-12">
          <div className="text-xs font-medium tracking-widest uppercase mb-3"
               style={{ color: '#1A5276' }}>
            Business Performance
          </div>
          <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
            Key Performance Indicators
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
            Headline metrics from the 3-year (2022–2024) synthetic dataset, reflecting
            realistic business conditions for a senior-citizen ecommerce platform in India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {KPI_CARDS.map((card, i) => {
            const c = COLOR_MAP[card.color] || COLOR_MAP.brand
            return (
              <div
                key={card.label}
                className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.accent}20`,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="text-xs font-medium tracking-widest uppercase mb-3"
                     style={{ color: c.accent }}>
                  {card.label}
                </div>
                <div className="display font-bold mb-1"
                     style={{ fontSize: '1.9rem', color: c.text, letterSpacing: '-0.02em' }}>
                  {card.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: c.accent }}>{card.sub}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
