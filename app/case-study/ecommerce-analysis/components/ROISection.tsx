'use client'
import { useEffect, useRef } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { ROI_PROJECTIONS } from '../lib/data'

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

const RECS = [
  {
    priority: 'P1',
    title: 'Churn Intervention Programme',
    detail: 'Deploy XGBoost churn model into CRM. Auto-trigger personalised WhatsApp messages with ₹100–200 vouchers to top 500 at-risk customers monthly. Platinum-first approach based on CLV.',
    roi: '₹12–18L/yr',
    timeline: '0–30 days',
    effort: 'Low',
    color: '#1A5276',
    bg: '#EEF4FF',
  },
  {
    priority: 'P1',
    title: 'Inventory Auto-Reorder System',
    detail: 'Connect demand forecasting model to procurement system. Set automated PO drafts when stock < 1.5× weekly demand forecast. Focus on Medical Devices and Mobility Aids first.',
    roi: '₹8–12L/yr',
    timeline: '0–60 days',
    effort: 'Low',
    color: '#27AE60',
    bg: '#EAFAF1',
  },
  {
    priority: 'P2',
    title: 'WhatsApp Abandoned Cart Recovery',
    detail: 'Senior users have 3× higher WhatsApp response rate vs email. Automate cart recovery messages 2 hours after abandonment. Include product image, original price, and single tap to resume.',
    roi: '₹4–6L/yr',
    timeline: '30 days',
    effort: 'Low',
    color: '#8E44AD',
    bg: '#F5EEF8',
  },
  {
    priority: 'P2',
    title: 'Mobile UX Accessibility Redesign',
    detail: 'Mobile converts 22% less than desktop. Senior-first redesign: larger tap targets (minimum 44px), simplified checkout (3 steps), auto-fill for repeat customers, voice search support.',
    roi: '₹6–10L/yr',
    timeline: '60–120 days',
    effort: 'High',
    color: '#E67E22',
    bg: '#FEF3E2',
  },
  {
    priority: 'P3',
    title: 'Segment-Based Personalisation Engine',
    detail: 'Deploy K-Means segment labels to marketing stack. Serve different homepage banners, email templates, and product recommendations per cluster. Start with Premium vs Budget segmentation.',
    roi: '₹4–8L/yr',
    timeline: '90–150 days',
    effort: 'Medium',
    color: '#E74C3C',
    bg: '#FDEDEC',
  },
]

const ROADMAP = [
  { month: 'Month 1–2',  action: 'Deploy churn model → CRM integration → WhatsApp campaigns',         status: 'active' },
  { month: 'Month 2–3',  action: 'Demand forecasting → inventory auto-reorder alerts',                status: 'active' },
  { month: 'Month 3–4',  action: 'K-Means segmentation → personalised email & WhatsApp flows',        status: 'upcoming' },
  { month: 'Month 4–5',  action: 'Return prediction → product page improvement for Mobility Aids',    status: 'upcoming' },
  { month: 'Month 5–6',  action: 'Streamlit dashboard → internal BI rollout',                         status: 'planned' },
  { month: 'Month 6–9',  action: 'Power BI executive dashboard → board-level reporting',              status: 'planned' },
  { month: 'Month 9–12', action: 'Recommendation engine → AWS cloud deployment → A/B testing',        status: 'future' },
]

const STATUS_STYLES: Record<string, { dot: string; line: string; text: string }> = {
  active:   { dot: '#27AE60', line: '#27AE60', text: '#145A32' },
  upcoming: { dot: '#1A5276', line: '#1A5276', text: '#0D2D4A' },
  planned:  { dot: '#AED6F1', line: '#AED6F1', text: '#2E86C1' },
  future:   { dot: '#D1D5DB', line: '#D1D5DB', text: '#9CA3AF' },
}

export default function ROISection() {
  const ref = useReveal()

  const roiChartData = ROI_PROJECTIONS.map(r => ({
    name: r.initiative.split(' ').slice(0, 2).join(' '),
    investment: r.investment,
    minReturn: r.minReturn,
    maxReturn: r.maxReturn,
    roi: Math.round(((r.minReturn + r.maxReturn) / 2 / r.investment) * 10) / 10,
  }))

  return (
    <section id="recommendations" className="py-24 px-8 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">

        {/* Header */}
        <div className="mb-14">
          <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1A5276' }}>
            Business Recommendations
          </div>
          <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
            ROI Projections &amp; Action Plan
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
            Five prioritised initiatives with quantified revenue impact, effort estimates,
            and implementation timelines — ready for sprint planning.
          </p>
        </div>

        {/* ROI Summary cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Investment',       value: '₹7.8L',     sub: 'One-time + setup costs',  color: '#E67E22' },
            { label: 'Projected Annual Return', value: '₹34–54L',  sub: 'Conservative estimate',   color: '#27AE60' },
            { label: 'Return on Investment',    value: '4.4–6.9×', sub: 'Within 12 months',         color: '#1A5276' },
          ].map(c => (
            <div key={c.label} className="rounded-2xl p-6 text-center"
                 style={{ background: 'white', border: '1px solid #E5E7EB' }}>
              <div className="display font-bold mb-1" style={{ fontSize: '2.2rem', color: c.color }}>
                {c.value}
              </div>
              <div className="font-medium text-sm mb-1" style={{ color: '#0F1923' }}>{c.label}</div>
              <div className="text-xs" style={{ color: '#9CA3AF' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* ROI chart */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: 'white', border: '1px solid #E5E7EB' }}>
          <div className="font-medium text-lg mb-1" style={{ color: '#0F1923' }}>Investment vs Projected Return (₹)</div>
          <div className="text-sm mb-5" style={{ color: '#6B7280' }}>Min and max annual return per initiative</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={roiChartData} margin={{ top: 4, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F1EE" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#374151' }} tickLine={false} axisLine={false} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: '#9CA3AF' }} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(v: any, n: string) => [fmt(Number(v)), n === 'investment' ? 'Investment' : n === 'minReturn' ? 'Min Return' : 'Max Return']}
                contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }}
              />
              <Bar dataKey="investment" fill="#FED7AA" radius={[4, 4, 0, 0]} name="investment" />
              <Bar dataKey="minReturn"  fill="#AED6F1" radius={[4, 4, 0, 0]} name="minReturn" />
              <Bar dataKey="maxReturn"  fill="#1A5276" radius={[4, 4, 0, 0]} name="maxReturn" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recommendations */}
        <div className="space-y-4 mb-14">
          {RECS.map((r, i) => (
            <div key={r.title} className="rounded-2xl p-6 flex gap-5 items-start"
                 style={{ background: r.bg, border: `1px solid ${r.color}18` }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                   style={{ background: r.color }}>
                {r.priority}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-medium text-base" style={{ color: '#0F1923' }}>{r.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: r.color + '20', color: r.color }}>
                    {r.timeline}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: '#F3F4F0', color: '#6B7280' }}>
                    Effort: {r.effort}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: '#374151' }}>{r.detail}</p>
                <div className="font-medium text-sm" style={{ color: r.color }}>Projected ROI: {r.roi}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Roadmap */}
        <div>
          <div className="font-medium text-xl mb-6" style={{ color: '#0F1923' }}>
            Implementation Roadmap
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: '#E5E7EB' }} />
            <div className="space-y-5">
              {ROADMAP.map((step, i) => {
                const s = STATUS_STYLES[step.status]
                return (
                  <div key={i} className="flex gap-4 items-start pl-12 relative">
                    <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2"
                         style={{ background: s.dot, border: '2px solid white', boxShadow: `0 0 0 2px ${s.dot}40` }} />
                    <div>
                      <span className="text-xs font-medium mr-3 px-2 py-0.5 rounded"
                            style={{ background: s.dot + '18', color: s.text }}>
                        {step.month}
                      </span>
                      <span className="text-sm" style={{ color: '#374151' }}>{step.action}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6 pt-5" style={{ borderTop: '1px solid #E5E7EB' }}>
            {[
              { label: 'Immediate (Active)',    color: '#27AE60' },
              { label: 'Upcoming',              color: '#1A5276' },
              { label: 'Planned',               color: '#AED6F1' },
              { label: 'Future',                color: '#D1D5DB' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
