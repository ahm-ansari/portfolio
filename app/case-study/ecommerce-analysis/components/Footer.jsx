'use client'

export default function Footer() {
  return (
    <footer className="no-print" style={{ background: '#071A2E', color: '#7FB3D3' }}>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                   style={{ background: '#1A5276' }}>
                SC
              </div>
              <div>
                <div className="text-white font-medium">Ecommerce</div>
                <div className="text-xs" style={{ color: '#7FB3D3' }}>Analytics Case Study</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              End-to-End Ecommerce Data Analytics & Machine Learning Solution for
              India's premier senior-citizen ecommerce platform, headquartered in Chennai.
            </p>
          </div>

          {/* Sections */}
          <div>
            <div className="text-white font-medium mb-4 text-sm">Report Sections</div>
            <div className="space-y-2">
              {[
                ['#kpis',            'Key Performance Indicators'],
                ['#sales',           'Sales & Revenue Analysis'],
                ['#customers',       'Customer Intelligence'],
                ['#ml',              'Machine Learning Models'],
                ['#products',        'Product & Support Analysis'],
                ['#recommendations', 'ROI & Recommendations'],
                ['#tech',            'Technical Architecture'],
              ].map(([href, label]) => (
                <a key={href} href={href}
                   className="block text-sm hover:text-white transition-colors"
                   style={{ color: '#7FB3D3' }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="text-white font-medium mb-4 text-sm">Project Deliverables</div>
            <div className="space-y-2">
              {[
                '290,500+ row synthetic dataset',
                '5 production ML models',
                'Streamlit analytics dashboard',
                'PostgreSQL schema + 5 views',
                'KPI documentation (25 KPIs)',
                'Power BI 6-tab design spec',
                'Next.js case study report',
                'Full Python codebase (4,000+ lines)',
              ].map(d => (
                <div key={d} className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#1A5276' }} />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
             style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="text-sm">
            © 2025 Senior Data Science Consultant — Delivered for{' '}
            <span className="text-white">A Ecommerce Company</span>, Chennai, India
          </div>
          <div className="flex items-center gap-3">
            {['Python', 'XGBoost', 'Next.js', 'PostgreSQL'].map(t => (
              <span key={t} className="px-2.5 py-1 rounded-full text-xs"
                    style={{ background: 'rgba(255,255,255,0.07)', color: '#AED6F1' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
