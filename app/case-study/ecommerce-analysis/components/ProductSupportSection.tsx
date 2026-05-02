'use client'
import { useEffect, useRef } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ScatterChart, Scatter, ZAxis,
} from 'recharts'
import { SUPPORT_ISSUES, CATEGORY_REVENUE } from '../lib/data'

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

const SATISFACTION_COLOR = (score: number) => {
  if (score >= 4.0) return '#27AE60'
  if (score >= 3.5) return '#E67E22'
  return '#E74C3C'
}

export default function ProductSupportSection() {
  const ref = useReveal()

  const returnData = CATEGORY_REVENUE.map(c => ({
    category: c.category.split(' ')[0],
    fullName: c.category,
    returns: c.returns,
    revenue: c.revenue,
  })).sort((a, b) => b.returns - a.returns)

  return (
    <section id="products" className="py-24" style={{ background: '#F3F4F0' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="reveal">
          <div className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1A5276' }}>
              Product & Support Intelligence
            </div>
            <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
              Returns, Satisfaction & Inventory
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
              Product return analysis and support ticket patterns reveal actionable
              improvements in logistics, product pages, and customer service workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Return rate by category */}
            <ChartCard title="Return Rate by Category" subtitle="% of delivered orders returned">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={returnData} margin={{ top: 4, right: 4, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F1EE" />
                  <XAxis dataKey="category" tick={{ fontSize: 9, fill: '#374151' }}
                         angle={-30} textAnchor="end" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={v => `${v}%`} tick={{ fontSize: 10, fill: '#9CA3AF' }}
                         tickLine={false} axisLine={false} />
                  <Tooltip
                    formatter={(v: any) => [`${v}%`, 'Return Rate']}
                    labelFormatter={(l, payload) => payload?.[0]?.payload?.fullName || l}
                    contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }}
                  />
                  <Bar dataKey="returns" radius={[4, 4, 0, 0]}>
                    {returnData.map(d => (
                      <Cell
                        key={d.category}
                        fill={d.returns > 10 ? '#E74C3C' : d.returns > 7 ? '#E67E22' : '#27AE60'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex gap-4 mt-2">
                {[['> 10% — High Risk', '#E74C3C'], ['7–10% — Watch', '#E67E22'], ['< 7% — Healthy', '#27AE60']].map(([l, c]) => (
                  <div key={l} className="flex items-center gap-1.5 text-xs" style={{ color: '#6B7280' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: c }} />{l}
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Support issues */}
            <ChartCard title="Support Ticket Volume & Satisfaction" subtitle="Issue type breakdown with CSAT scores">
              <div className="space-y-3">
                {SUPPORT_ISSUES.map(issue => (
                  <div key={issue.issue}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm" style={{ color: '#374151' }}>{issue.issue}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: SATISFACTION_COLOR(issue.satisfaction) + '18',
                                color: SATISFACTION_COLOR(issue.satisfaction),
                              }}>
                          ★ {issue.satisfaction}
                        </span>
                        <span className="text-xs font-medium w-14 text-right" style={{ color: '#6B7280' }}>
                          {issue.tickets.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F3F4F0' }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(issue.tickets / 9300) * 100}%`,
                          background: SATISFACTION_COLOR(issue.satisfaction),
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          {/* Inventory alert + support KPIs */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Inventory status */}
            <ChartCard title="Inventory Status" subtitle="Products by stock health">
              <div className="space-y-4">
                {[
                  { label: 'Healthy (> 2× reorder)', count: 376, pct: 75.2, color: '#27AE60' },
                  { label: 'Watch (1–2× reorder)',   count:  110, pct: 22.0, color: '#E67E22' },
                  { label: 'Critical (≤ reorder)',   count:   14, pct:  2.8, color: '#E74C3C' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{s.label}</span>
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#0F1923' }}>
                        {s.count} <span style={{ color: '#9CA3AF', fontWeight: 400 }}>({s.pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F3F4F0' }}>
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-3 rounded-xl text-xs leading-relaxed"
                     style={{ background: '#FDEDEC', color: '#922B21' }}>
                  ⚠️ 3 Medical Device SKUs at zero stock — estimated ₹2.1L in lost sales per month if not reordered immediately.
                </div>
              </div>
            </ChartCard>

            {/* Support KPIs */}
            <ChartCard title="Support KPIs" subtitle="Overall customer service health">
              <div className="space-y-5">
                {[
                  { label: 'Avg CSAT Score',      value: '3.9 / 5.0', target: '4.2',  pct: 78, color: '#E67E22' },
                  { label: 'Avg Resolution Time', value: '4.1 days',   target: '2 days', pct: 51, color: '#E74C3C' },
                  { label: 'Resolution Rate',     value: '60%',         target: '80%',   pct: 75, color: '#27AE60' },
                  { label: 'Escalation Rate',     value: '10%',         target: '5%',    pct: 50, color: '#E67E22' },
                ].map(k => (
                  <div key={k.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm" style={{ color: '#374151' }}>{k.label}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium" style={{ color: '#0F1923' }}>{k.value}</span>
                        <span className="text-xs ml-2" style={{ color: '#9CA3AF' }}>target: {k.target}</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F3F4F0' }}>
                      <div className="h-full rounded-full" style={{ width: `${k.pct}%`, background: k.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Quick wins */}
            <ChartCard title="Quick Wins Identified" subtitle="Actionable in < 30 days">
              <div className="space-y-3">
                {[
                  { win: 'Add size guide to Mobility Aids pages', impact: '−2.1% returns', effort: 'Low' },
                  { win: 'Auto-close resolved tickets after 7 days', impact: '+0.3 CSAT',   effort: 'Low' },
                  { win: 'Pre-call customers on Medical Devices orders', impact: '−18% returns', effort: 'Low' },
                  { win: 'WhatsApp order status updates', impact: '−28% delay tickets', effort: 'Med' },
                  { win: 'Reorder alert Slack bot for warehouse', impact: '0 stockouts',   effort: 'Low' },
                ].map(w => (
                  <div key={w.win} className="flex items-start gap-3 p-3 rounded-xl"
                       style={{ background: '#F9FAFB' }}>
                    <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                         style={{ background: '#EAFAF1' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#27AE60' }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-0.5" style={{ color: '#0F1923' }}>{w.win}</div>
                      <div className="flex gap-2">
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#EAFAF1', color: '#27AE60' }}>
                          {w.impact}
                        </span>
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: '#F3F4F0', color: '#6B7280' }}>
                          Effort: {w.effort}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </section>
  )
}
