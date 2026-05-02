'use client'
import { useEffect, useRef } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts'
import { RFM_SEGMENTS, CLV_BY_MEMBERSHIP, CONVERSION_FUNNEL, TRAFFIC_SOURCES } from '../lib/data'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return 
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid #E5E7EB' }}>
      <div className="mb-5">
        <div className="font-medium text-lg" style={{ color: '#0F1923' }}>{title}</div>
        {subtitle && <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{subtitle}</div>}
      </div>
      {children}
    </div>
  )
}

export default function CustomerSection() {
  const ref = useReveal()
  const funnelMax = CONVERSION_FUNNEL[0].count

  return (
    <section id="customers" className="py-24 px-8 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="mb-12">
          <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1A5276' }}>
            Customer Intelligence
          </div>
          <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
            RFM, CLV &amp; Conversion Analysis
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
            Deep behavioural segmentation using Recency-Frequency-Monetary scoring reveals
            that 18% of customers drive 41% of total revenue — the classic Pareto effect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* RFM Segments */}
          <ChartCard title="RFM Customer Segments" subtitle="6 behavioural tiers across 10,000 customers">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={RFM_SEGMENTS} margin={{ top: 4, right: 4, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F1EE" />
                <XAxis dataKey="segment" tick={{ fontSize: 9, fill: '#374151' }} angle={-25}
                       textAnchor="end" tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
                <Tooltip
                  formatter={(v: any) => [v.toLocaleString(), 'Customers']}
                  contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {RFM_SEGMENTS.map(s => <Cell key={s.segment} fill={s.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* CLV by Membership */}
          <ChartCard title="Customer Lifetime Value by Tier" subtitle="Projected 12-month CLV (₹)">
            <div className="space-y-4 pt-2">
              {CLV_BY_MEMBERSHIP.map((t, i) => (
                <div key={t.tier}>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full"
                           style={{ background: ['#1A5276','#2E86C1','#AED6F1','#D4E6F1'][i] }} />
                      <span className="text-sm font-medium" style={{ color: '#374151' }}>{t.tier}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>Churn: {t.churn}%</span>
                      <span className="font-medium text-sm" style={{ color: '#0F1923' }}>
                        ₹{t.clv.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F3F4F0' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${(t.clv / 22400) * 100}%`,
                        background: ['#1A5276','#2E86C1','#AED6F1','#D4E6F1'][i],
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 rounded-xl text-sm"
                   style={{ background: '#EEF4FF', color: '#1A5276' }}>
                Platinum members spend <strong>6.4×</strong> more than Basic members.
                Membership upgrade campaigns have clear ROI.
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Conversion Funnel */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ChartCard title="Website Conversion Funnel" subtitle="150,000 sessions tracked">
            <div className="space-y-3 pt-2">
              {CONVERSION_FUNNEL.map((step, i) => (
                <div key={step.stage}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm" style={{ color: '#374151' }}>{step.stage}</span>
                    <span className="text-sm font-medium" style={{ color: '#0F1923' }}>
                      {step.count.toLocaleString()} <span style={{ color: '#9CA3AF', fontWeight: 400 }}>({step.pct}%)</span>
                    </span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: '#F3F4F0' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${step.pct}%`,
                        background: `hsl(${210 + i * 15}, ${60 - i * 5}%, ${45 + i * 4}%)`,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs pt-2" style={{ color: '#9CA3AF' }}>
                Cart abandonment rate: 38% — WhatsApp recovery campaigns can recapture ₹6L+/month.
              </p>
            </div>
          </ChartCard>

          {/* Traffic Sources */}
          <ChartCard title="Traffic Source Conversion Rates" subtitle="Sessions → purchases by channel">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={TRAFFIC_SOURCES} margin={{ top: 4, right: 4, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F1EE" />
                <XAxis dataKey="source" tick={{ fontSize: 9, fill: '#374151' }} angle={-25}
                       textAnchor="end" tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false}
                       tickFormatter={v => `${v}%`} />
                <Tooltip
                  formatter={(v: any) => [`${v}%`, 'Conv. Rate']}
                  contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }} />
                <Bar dataKey="convRate" radius={[4, 4, 0, 0]}>
                  {TRAFFIC_SOURCES.map(s => <Cell key={s.source} fill={s.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs mt-2" style={{ color: '#9CA3AF' }}>
              WhatsApp (15.6%) and Email (14.2%) outperform all other channels for seniors.
            </p>
          </ChartCard>
        </div>

        {/* Segment strategy cards */}
        <div>
          <div className="font-medium text-lg mb-4" style={{ color: '#0F1923' }}>
            Segment-based Strategy Map
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { tier: 'Premium',    pct: 18, clv: '₹22,400', strategy: 'VIP programme, exclusive products, dedicated agent', color: '#1A5276', bg: '#EEF4FF' },
              { tier: 'High-Value', pct: 29, clv: '₹11,800', strategy: 'Upsell to Premium, loyalty points, category expansion', color: '#2E86C1', bg: '#EBF5FB' },
              { tier: 'Mid-Tier',   pct: 31, clv: '₹5,200',  strategy: 'Re-engagement emails, value bundles, WhatsApp nudges', color: '#E67E22', bg: '#FEF3E2' },
              { tier: 'Budget',     pct: 22, clv: '₹1,900',  strategy: 'EMI options, flash sales, basic tier upgrade incentives', color: '#6B7280', bg: '#F9FAFB' },
            ].map(s => (
              <div key={s.tier} className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.color}20` }}>
                <div className="font-bold text-lg mb-1" style={{ color: s.color }}>{s.tier}</div>
                <div className="text-xs mb-2" style={{ color: s.color }}>
                  {s.pct}% of customers · Avg CLV {s.clv}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: '#374151' }}>{s.strategy}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
