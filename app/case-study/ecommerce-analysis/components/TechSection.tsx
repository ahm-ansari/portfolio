'use client'
import { useEffect, useRef } from 'react'
import { TECH_STACK, DATASET_OVERVIEW } from '../lib/data'

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

const COLOR_MAP: Record<string, { light: string; dark: string }> = {
  brand:   { light: '#EEF4FF', dark: '#1A5276' },
  emerald: { light: '#EAFAF1', dark: '#27AE60' },
  saffron: { light: '#FEF3E2', dark: '#E67E22' },
  ruby:    { light: '#FDEDEC', dark: '#E74C3C' },
}

const PIPELINE_STEPS = [
  { step: '01', label: 'Data Generation',   detail: 'Faker library → 5 relational tables → 2,90,500+ rows with business logic',   icon: '⚙️' },
  { step: '02', label: 'Data Engineering',  detail: 'Cleaning → Feature engineering → RFM/CLV computation → KPI factory',         icon: '🔧' },
  { step: '03', label: 'EDA',               detail: '20+ business charts → Sales, Customer, Product, Marketing, Support analysis', icon: '📊' },
  { step: '04', label: 'ML Pipeline',       detail: '5 models → train/test → cross-validation → SHAP explainability',             icon: '🤖' },
  { step: '05', label: 'Dashboards',        detail: 'Streamlit 6-page app + Next.js case study + Power BI specification',          icon: '📈' },
]

export default function TechSection() {
  const ref = useReveal()

  const totalRows = DATASET_OVERVIEW.reduce((s, d) => s + d.rows, 0)

  return (
    <section id="tech" className="py-24 px-8 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="mb-12">
          <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1A5276' }}>
            Technical Architecture
          </div>
          <h2 className="display text-4xl font-bold mb-4" style={{ color: '#0F1923' }}>
            Dataset &amp; Technology Stack
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '560px', lineHeight: 1.8 }}>
            Five-stage modular pipeline built for enterprise scalability — each module
            independently testable, configurable via YAML, and deployable to cloud.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mb-12">
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: '#E5E7EB', zIndex: 0 }} />
            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 text-2xl"
                       style={{ background: 'white', border: '2px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold mb-1" style={{ color: '#1A5276' }}>{step.step}</div>
                  <div className="font-medium text-sm mb-2" style={{ color: '#0F1923' }}>{step.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{step.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Dataset table */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
            <div className="px-6 py-4" style={{ background: '#0D2D4A' }}>
              <div className="font-medium text-white">Dataset Overview</div>
              <div className="text-xs mt-0.5" style={{ color: '#7FB3D3' }}>
                {totalRows.toLocaleString()} total rows across 5 relational tables
              </div>
            </div>
            <table className="w-full text-sm" style={{ background: 'white' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F3F4F0' }}>
                  {['Table', 'Rows', 'Cols', 'Description'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium tracking-wide"
                        style={{ color: '#9CA3AF' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DATASET_OVERVIEW.map((d, i) => (
                  <tr key={d.table}
                      style={{ borderBottom: i < DATASET_OVERVIEW.length - 1 ? '1px solid #F9FAFB' : 'none' }}>
                    <td className="px-4 py-3 mono text-xs font-medium" style={{ color: '#1A5276' }}>
                      {d.table}
                    </td>
                    <td className="px-4 py-3 text-xs font-medium" style={{ color: '#0F1923' }}>
                      {d.rows.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: '#6B7280' }}>{d.cols}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: '#374151' }}>{d.description}</td>
                  </tr>
                ))}
                <tr style={{ background: '#F9FAFB' }}>
                  <td className="px-4 py-3 text-xs font-bold" style={{ color: '#0F1923' }}>TOTAL</td>
                  <td className="px-4 py-3 text-xs font-bold" style={{ color: '#1A5276' }}>{totalRows.toLocaleString()}</td>
                  <td colSpan={2} />
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tech stack */}
          <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid #E5E7EB' }}>
            <div className="font-medium text-lg mb-5" style={{ color: '#0F1923' }}>Technology Stack</div>
            <div className="space-y-4">
              {TECH_STACK.map(layer => {
                const c = COLOR_MAP[layer.color] || COLOR_MAP.brand
                return (
                  <div key={layer.layer}>
                    <div className="text-xs font-medium mb-2" style={{ color: c.dark }}>{layer.layer}</div>
                    <div className="flex flex-wrap gap-2">
                      {layer.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ background: c.light, color: c.dark }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* SQL Schema highlight */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
          <div className="px-6 py-4 flex items-center justify-between"
               style={{ background: '#1A1A2E', borderBottom: '1px solid #2D2D4E' }}>
            <div>
              <div className="font-medium text-white text-sm">PostgreSQL Schema Snippet</div>
              <div className="text-xs mt-0.5" style={{ color: '#7FB3D3' }}>Production-ready DDL with constraints, indexes & analytical views</div>
            </div>
            <div className="flex gap-1.5">
              {['#FF5F57','#FFBD2E','#28C840'].map(c => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div className="p-6 mono text-xs leading-7 overflow-x-auto"
               style={{ background: '#0D0D1A', color: '#E2E8F0' }}>
            <div><span style={{ color: '#7FB3D3' }}>CREATE TABLE</span> <span style={{ color: '#F39C12' }}>orders</span> {'('}</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>order_id</span>         <span style={{ color: '#27AE60' }}>VARCHAR(12)</span>    <span style={{ color: '#E74C3C' }}>PRIMARY KEY</span>,</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>customer_id</span>      <span style={{ color: '#27AE60' }}>VARCHAR(12)</span>    <span style={{ color: '#E74C3C' }}>NOT NULL REFERENCES</span> <span style={{ color: '#F39C12' }}>customers</span>(customer_id),</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>order_date</span>       <span style={{ color: '#27AE60' }}>TIMESTAMPTZ</span>    <span style={{ color: '#E74C3C' }}>NOT NULL</span>,</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>order_value</span>      <span style={{ color: '#27AE60' }}>NUMERIC(12,2)</span>  <span style={{ color: '#E74C3C' }}>NOT NULL</span>,</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>profit_margin</span>    <span style={{ color: '#27AE60' }}>NUMERIC(6,4)</span>,</div>
            <div className="ml-4"><span style={{ color: '#AED6F1' }}>delivery_status</span>  <span style={{ color: '#27AE60' }}>VARCHAR(15)</span>    <span style={{ color: '#E74C3C' }}>CHECK</span> (delivery_status <span style={{ color: '#E74C3C' }}>IN</span> (<span style={{ color: '#F39C12' }}>'Delivered','Shipped','Cancelled'</span>))</div>
            <div>{')'};</div>
            <div className="mt-2"><span style={{ color: '#7FB3D3' }}>CREATE INDEX</span> <span style={{ color: '#AED6F1' }}>idx_orders_date</span> <span style={{ color: '#7FB3D3' }}>ON</span> <span style={{ color: '#F39C12' }}>orders</span>(order_date);</div>
            <div><span style={{ color: '#7FB3D3' }}>CREATE INDEX</span> <span style={{ color: '#AED6F1' }}>idx_orders_customer</span> <span style={{ color: '#7FB3D3' }}>ON</span> <span style={{ color: '#F39C12' }}>orders</span>(customer_id);</div>
            <div className="mt-2 text-gray-500">{'-- Analytical view'}</div>
            <div><span style={{ color: '#7FB3D3' }}>CREATE VIEW</span> <span style={{ color: '#F39C12' }}>vw_monthly_revenue</span> <span style={{ color: '#7FB3D3' }}>AS</span></div>
            <div className="ml-4"><span style={{ color: '#7FB3D3' }}>SELECT</span> DATE_TRUNC(<span style={{ color: '#F39C12' }}>'month'</span>, order_date) <span style={{ color: '#7FB3D3' }}>AS</span> month,</div>
            <div className="ml-8"><span style={{ color: '#7FB3D3' }}>SUM</span>(order_value) <span style={{ color: '#7FB3D3' }}>AS</span> gross_revenue,</div>
            <div className="ml-8"><span style={{ color: '#7FB3D3' }}>COUNT</span>(order_id)  <span style={{ color: '#7FB3D3' }}>AS</span> total_orders</div>
            <div className="ml-4"><span style={{ color: '#7FB3D3' }}>FROM</span> orders <span style={{ color: '#7FB3D3' }}>WHERE</span> delivery_status = <span style={{ color: '#F39C12' }}>'Delivered'</span></div>
            <div className="ml-4"><span style={{ color: '#7FB3D3' }}>GROUP BY</span> 1 <span style={{ color: '#7FB3D3' }}>ORDER BY</span> 1;</div>
          </div>
        </div>
      </div>
    </section>
  )
}
