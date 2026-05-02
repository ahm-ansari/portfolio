'use client'
import { useEffect, useRef, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts'
import { ML_MODELS, CHURN_FEATURES } from '../lib/data'

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

const TYPE_COLORS: Record<string, string> = {
  Classification: '#1A5276',
  Regression:     '#27AE60',
  Unsupervised:   '#E67E22',
}

const COLOR_MAP: Record<string, { light: string; dark: string }> = {
  brand:   { light: '#EEF4FF', dark: '#1A5276' },
  emerald: { light: '#EAFAF1', dark: '#27AE60' },
  saffron: { light: '#FEF3E2', dark: '#E67E22' },
  ruby:    { light: '#FDEDEC', dark: '#E74C3C' },
}

// Confusion matrix mock data
const CONFUSION = [
  { actual: 'Active',  predActive: 5840, predChurned: 490  },
  { actual: 'Churned', predActive: 420,  predChurned: 1250 },
]

export default function MLSection() {
  const ref = useReveal()
  const [activeModel, setActiveModel] = useState(0)
  const model = ML_MODELS[activeModel]

  const MetricBadge = ({ label, value }: { label: string; value: string | number }) => (
    <div className="rounded-xl px-4 py-3 text-center" style={{ background: '#F3F4F0' }}>
      <div className="display font-bold text-xl mb-0.5" style={{ color: '#0F1923' }}>{value}</div>
      <div className="text-xs" style={{ color: '#6B7280' }}>{label}</div>
    </div>
  )

  return (
    <section id="ml" className="py-24" style={{ background: '#071A2E' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="reveal">
          <div className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#AED6F1' }}>
              Machine Learning
            </div>
            <h2 className="display text-4xl font-bold mb-4 text-white">
              Five Production ML Models
            </h2>
            <p style={{ color: '#7FB3D3', maxWidth: '560px', lineHeight: 1.8 }}>
              Each model was trained with 80/20 chronological splits, 5-fold cross-validation,
              hyperparameter tuning, and SHAP explainability for business stakeholders.
            </p>
          </div>

          {/* Model selector tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {ML_MODELS.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setActiveModel(i)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: activeModel === i ? 'white' : 'rgba(255,255,255,0.08)',
                  color: activeModel === i ? '#0D2D4A' : '#AED6F1',
                  border: activeModel === i ? '1px solid white' : '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {m.name.split(' ')[0]} {m.name.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active model detail */}
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            {/* Left panel */}
            <div className="md:col-span-2 rounded-2xl p-6"
                 style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: TYPE_COLORS[model.type] + '30', color: TYPE_COLORS[model.type] }}>
                  {model.type}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{model.name}</h3>
              <div className="text-sm mb-5" style={{ color: '#7FB3D3' }}>
                Best Algorithm: <span className="text-white font-medium">{model.algorithm}</span>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                {Object.entries(model.metrics).map(([k, v]) => (
                  <div key={k}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs uppercase tracking-wide" style={{ color: '#AED6F1' }}>{k}</span>
                      <span className="text-xs font-medium text-white">
                        {typeof v === 'number' && v < 1 ? (v * 100).toFixed(1) + '%'
                          : typeof v === 'number' && v > 100 ? '₹' + v.toLocaleString()
                          : v}
                      </span>
                    </div>
                    {typeof v === 'number' && v <= 1 && (
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div className="h-full rounded-full" style={{
                          width: `${v * 100}%`,
                          background: 'linear-gradient(90deg, #AED6F1, #1A5276)',
                        }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-xs mb-1" style={{ color: '#7FB3D3' }}>Business impact</div>
                <div className="text-sm text-white">{model.impact}</div>
                <div className="mt-2 text-sm font-medium" style={{ color: '#27AE60' }}>ROI: {model.roi}</div>
              </div>
            </div>

            {/* Right: churn features / chart */}
            <div className="md:col-span-3 rounded-2xl p-6"
                 style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {activeModel === 0 ? (
                <>
                  <div className="text-sm font-medium mb-4 text-white">SHAP Feature Importance — Churn Model</div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={CHURN_FEATURES} layout="vertical"
                              margin={{ left: 0, right: 30, top: 0, bottom: 0 }}>
                      <XAxis type="number" tickFormatter={v => `${(v*100).toFixed(0)}%`}
                             tick={{ fontSize: 10, fill: '#7FB3D3' }} tickLine={false} axisLine={false} />
                      <YAxis type="category" dataKey="feature" width={155}
                             tick={{ fontSize: 10, fill: '#AED6F1' }} tickLine={false} axisLine={false} />
                      <Tooltip formatter={(v: any) => [`${(Number(v)*100).toFixed(1)}%`, 'SHAP importance']}
                               contentStyle={{ background: '#0D2D4A', border: 'none', borderRadius: 10, color: 'white' }} />
                      <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
                        {CHURN_FEATURES.map((_, i) => (
                          <Cell key={i} fill={`hsl(210, ${60 - i*5}%, ${60 - i*5}%)`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  {/* Confusion matrix */}
                  <div className="mt-5">
                    <div className="text-xs mb-3" style={{ color: '#7FB3D3' }}>Confusion Matrix (test set)</div>
                    <div className="grid grid-cols-2 gap-2 max-w-xs">
                      {[
                        { label: 'True Active',   v: 5840, bg: '#1A5276' },
                        { label: 'False Churned', v: 490,  bg: '#E74C3C80' },
                        { label: 'False Active',  v: 420,  bg: '#E74C3C80' },
                        { label: 'True Churned',  v: 1250, bg: '#27AE60' },
                      ].map(c => (
                        <div key={c.label} className="rounded-lg p-3 text-center"
                             style={{ background: c.bg }}>
                          <div className="text-white font-bold">{c.v.toLocaleString()}</div>
                          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{c.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col justify-center h-full text-center p-8">
                  <div className="display font-bold mb-3"
                       style={{ fontSize: '3rem', color: 'white' }}>
                    {Object.values(model.metrics)[0] <= 1
                      ? `${(Object.values(model.metrics)[0] as number * 100).toFixed(0)}%`
                      : Object.values(model.metrics)[0]}
                  </div>
                  <div className="text-sm mb-6" style={{ color: '#7FB3D3' }}>
                    {Object.keys(model.metrics)[0].toUpperCase()} score
                  </div>
                  <div className="text-white font-medium mb-2">{model.impact}</div>
                  <div className="text-sm" style={{ color: '#7FB3D3' }}>
                    All models trained with stratified k-fold cross-validation
                    and evaluated on held-out chronological test set.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* All models summary grid */}
          <div className="grid md:grid-cols-5 gap-3">
            {ML_MODELS.map((m, i) => {
              const firstMetricVal = Object.values(m.metrics)[0]
              const firstMetricKey = Object.keys(m.metrics)[0]
              const displayVal = typeof firstMetricVal === 'number' && firstMetricVal <= 1
                ? `${(firstMetricVal * 100).toFixed(0)}%`
                : typeof firstMetricVal === 'number' && firstMetricVal > 100
                ? `₹${(firstMetricVal/1000).toFixed(0)}K`
                : `${firstMetricVal}`
              return (
                <button
                  key={m.name}
                  onClick={() => setActiveModel(i)}
                  className="rounded-2xl p-4 text-left transition-all hover:scale-105"
                  style={{
                    background: activeModel === i ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                    border: activeModel === i ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="text-xs mb-2" style={{ color: TYPE_COLORS[m.type] }}>{m.type}</div>
                  <div className="text-white text-sm font-medium mb-2 leading-tight">{m.name}</div>
                  <div className="display font-bold" style={{ fontSize: '1.5rem', color: 'white' }}>
                    {displayVal}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#7FB3D3' }}>{firstMetricKey.toUpperCase()}</div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
