'use client'
import { useEffect, useRef, useState } from 'react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend,
} from 'recharts'
import { MONTHLY_REVENUE, CATEGORY_REVENUE, STATE_PERFORMANCE } from '../lib/data'

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

const fmt = (v: number) => `₹${(v / 1e5).toFixed(1)}L`
const COLORS = ['#1A5276','#2E86C1','#27AE60','#E67E22','#E74C3C','#8E44AD','#16A085','#F39C12']

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

export default function RevenueCharts() {
  const ref = useReveal()
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  // Show last 12 months for clarity
  const recent = MONTHLY_REVENUE.slice(-12)

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
      <div className="rounded-xl p-3 text-sm shadow-lg"
           style={{ background: '#0D2D4A', color: 'white', border: 'none' }}>
        <div className="font-medium mb-1">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2">
            <span style={{ color: p.color }}>■</span>
            <span style={{ color: '#AED6F1' }}>{p.name}:</span>
            <span>{p.name === 'revenue' ? fmt(p.value) : p.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="sales" className="py-24" style={{ background: '#F3F4F0' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="reveal">
          <div className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1A5276' }}>
              Sales Analytics
            </div>
            <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
              Revenue &amp; Sales Performance
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
              Three years of monthly transaction data reveals strong seasonal patterns,
              consistent Q4 spikes, and year-over-year growth of 28–35% across key categories.
            </p>
          </div>

          {/* Big area chart */}
          <div className="mb-6">
            <ChartCard title="Monthly Revenue Trend (2022–2024)" subtitle="Delivered orders only — ₹ in Lakhs">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={MONTHLY_REVENUE} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#1A5276" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#1A5276" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F1EE" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9CA3AF' }}
                         tickLine={false} axisLine={false} interval={2} />
                  <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: '#9CA3AF' }}
                         tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="revenue" stroke="#1A5276" strokeWidth={2.5}
                        fill="url(#revGrad)" name="revenue" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Category revenue */}
            <ChartCard title="Revenue by Category" subtitle="Share of total delivered revenue">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={CATEGORY_REVENUE.slice(0,6)} layout="vertical"
                          margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F0F1EE" />
                  <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 10, fill: '#9CA3AF' }}
                         tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="category" width={130}
                         tick={{ fontSize: 10, fill: '#374151' }} tickLine={false} axisLine={false} />
                  <Tooltip formatter={(v: number) => [fmt(v), 'Revenue']}
                           contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }} />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {CATEGORY_REVENUE.slice(0,6).map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* State performance */}
            <ChartCard title="Top States by Revenue" subtitle="Delivered orders, 2022–2024">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={STATE_PERFORMANCE.slice(0,7)} layout="vertical"
                          margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F0F1EE" />
                  <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 10, fill: '#9CA3AF' }}
                         tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="state" width={110}
                         tick={{ fontSize: 10, fill: '#374151' }} tickLine={false} axisLine={false} />
                  <Tooltip
                    formatter={(v: any, n: string) => n === 'revenue' ? [fmt(v), 'Revenue'] : [v + '%', 'YoY Growth']}
                    contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }} />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {STATE_PERFORMANCE.slice(0,7).map((_, i) => (
                      <Cell key={i} fill={i === 0 ? '#1A5276' : '#AED6F1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Insights row */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Q4 Revenue Boost',   value: '+34%',  note: 'Oct–Dec vs Q2 average',         color: '#1A5276' },
              { label: 'YoY Growth (2023)',   value: '+28%',  note: 'Revenue vs 2022 baseline',       color: '#27AE60' },
              { label: 'Top Category Share',  value: '28%',   note: 'Health & Wellness of total rev', color: '#E67E22' },
            ].map(i => (
              <div key={i.label} className="rounded-2xl p-5 text-center"
                   style={{ background: 'white', border: '1px solid #E5E7EB' }}>
                <div className="display font-bold mb-1" style={{ fontSize: '2.2rem', color: i.color }}>
                  {i.value}
                </div>
                <div className="font-medium text-sm mb-1" style={{ color: '#0F1923' }}>{i.label}</div>
                <div className="text-xs" style={{ color: '#9CA3AF' }}>{i.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
