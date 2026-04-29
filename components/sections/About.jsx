'use client';

import { useEffect, useRef } from 'react';

const QUICK_FACTS = [
  { icon: '🎓', label: 'Education', value: 'BE Computer Science & Engineering' },
  { icon: '📍', label: 'Location', value: 'Doha, Qatar (Valid QID · NOC)' },
  { icon: '📅', label: 'Experience', value: '15+ Years Hybrid Experience' },
  { icon: '🌐', label: 'Languages', value: 'English · Tamil · Arabic (Basic)' },
];

const CORE_VALUES = [
  { title: 'Data-Driven', desc: 'Every decision backed by evidence and analysis, not intuition alone.' },
  { title: 'Cross-Functional', desc: 'Bridge between technical teams and business stakeholders effortlessly.' },
  { title: 'Continuous Learner', desc: 'Actively upskilling in AI, ML, and emerging technologies.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.style.animationPlayState = 'running';
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="section section-alt"
    >
      <div className="container">
        {/* Z-pattern: label + title full width */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '680px' }}>
          <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
            About Me
          </div>
          <h2
            id="about-heading"
            className="section-title reveal animate-fade-up delay-100"
            style={{ animationPlayState: 'paused' }}
          >
            15+ Years Turning Data into Decisions
          </h2>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused' }}
          >
            I'm an analytical and detail-oriented professional who bridges the gap between raw data and strategic business outcomes — blending deep technical expertise with strong communication skills.
          </p>
        </div>

        {/* Z-pattern content: 2 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* LEFT: Bio paragraphs */}
          <div>
            <article
              itemScope
              itemType="https://schema.org/Person"
              itemProp="description"
            >
              <p
                className="reveal animate-fade-up delay-200"
                style={{ animationPlayState: 'paused', marginBottom: '1.25rem', lineHeight: 1.8 }}
              >
                My journey began in 2008 at <strong style={{ color: 'var(--text-primary)' }}>Oli Consulting Group</strong>, where I oversaw the development of 100+ client websites and built an IPTV platform serving over 3,000 international subscribers — a project that taught me to think at scale.
              </p>
              <p
                className="reveal animate-fade-up delay-300"
                style={{ animationPlayState: 'paused', marginBottom: '1.25rem', lineHeight: 1.8 }}
              >
                At <strong style={{ color: 'var(--text-primary)' }}>Viveoli Retail</strong>, I evolved into a Senior Developer leading e-commerce solutions that drove a <strong style={{ color: 'var(--primary)' }}>25% improvement in customer conversion rates</strong> through embedded BI dashboards and analytics-driven optimization.
              </p>
              <p
                className="reveal animate-fade-up delay-400"
                style={{ animationPlayState: 'paused', marginBottom: '2rem', lineHeight: 1.8 }}
              >
                Today at <strong style={{ color: 'var(--text-primary)' }}>ARMA CITIZENS</strong>, I conduct exploratory data analysis, build KPI dashboards, and deliver automation that empowers stakeholders to make faster, better-informed decisions — while also diving deep into <strong style={{ color: 'var(--primary)' }}>Generative AI and RAG architectures</strong>.
              </p>
            </article>

            {/* Core Values */}
            <div
              className="reveal animate-fade-up delay-500"
              style={{ animationPlayState: 'paused' }}
            >
              {CORE_VALUES.map(({ title, desc }) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    padding: '1rem',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition)',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      borderRadius: '4px',
                      background: 'var(--primary)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {title}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Quick Facts + Metrics */}
          <div>
            {/* Quick Facts Card */}
            <div
              className="card reveal animate-fade-up delay-300"
              style={{ animationPlayState: 'paused', marginBottom: '1.5rem' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Quick Facts
              </h3>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {QUICK_FACTS.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                    }}
                  >
                    <span
                      style={{
                        width: '36px', height: '36px',
                        borderRadius: '8px',
                        background: 'var(--primary-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <div>
                      <dt style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>
                        {label}
                      </dt>
                      <dd style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Metrics Grid */}
            <div
              className="reveal animate-fade-up delay-400"
              style={{
                animationPlayState: 'paused',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {[
                { val: '25%', label: 'Conversion Rate Lift', color: 'var(--primary)' },
                { val: '35%', label: 'Lead Generation Boost', color: 'var(--accent)' },
                { val: '40%', label: 'Search Time Reduced', color: '#8b5cf6' },
                { val: '20%', label: 'Hiring Speed Improved', color: 'var(--accent-success)' },
              ].map(({ val, label, color }) => (
                <div
                  key={label}
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.125rem',
                    textAlign: 'center',
                    transition: 'all var(--transition)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.875rem',
                      color,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {val}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <div
              className="reveal animate-fade-up delay-500"
              style={{ animationPlayState: 'paused', marginTop: '1.5rem' }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label="Request resume of Abul Hassan Mohamed Ansari"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Request Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
