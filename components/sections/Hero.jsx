'use client';

import { useEffect, useRef } from 'react';

const TYPED_STRINGS = [
  'Data Analyst',
  'Power BI Expert',
  'ML Engineer',
  'Gen AI Developer',
  'Full Stack Dev',
  'RAG Architect',
];

// Animated particle canvas for hero background
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    canvas.width = W;
    canvas.height = H;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 86, 219, ${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });

      // Draw connecting lines between nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(26, 86, 219, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

// Typewriter component
function TypeWriter() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let strIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const current = TYPED_STRINGS[strIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          strIdx = (strIdx + 1) % TYPED_STRINGS.length;
        }
      }
      timeout = setTimeout(type, deleting ? 55 : 90);
    };

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span
      ref={elRef}
      style={{ color: 'var(--primary)', fontStyle: 'italic' }}
      aria-live="polite"
      aria-atomic="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '68px',
        background: 'var(--bg)',
      }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 60% 20%, rgba(26, 86, 219, 0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Z-pattern grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
      />

      <ParticleCanvas />

      {/* Content — Z layout: text left, visual right */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <div>
            {/* Status pill */}
            <div
              className="animate-fade-up"
              style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.375rem 1rem',
                  background: '#d1fae5',
                  color: '#065f46',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse-ring 1.8s infinite',
                    flexShrink: 0,
                  }}
                />
                Available for Hire · Doha, Qatar
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5.5vw, 3.875rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Abul Hassan
              </span>
              <span
                style={{ display: 'block', fontSize: '0.72em', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '-0.02em' }}
              >
                Senior{' '}
                <TypeWriter />
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '0.9em',
                    background: 'var(--primary)',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s step-end infinite',
                  }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Sub */}
            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '520px',
                marginBottom: '2rem',
              }}
            >
              Transforming raw data into actionable business insights with{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>15+ years</strong> of hybrid experience
              across Data Analytics, Full-Stack Development, Machine Learning, and Generative AI.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up delay-300"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}
            >
              <a href="#contact" className="btn btn-primary btn-lg" aria-label="Hire Abul Hassan Mohamed Ansari">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Hire Me Now
              </a>
              <a href="#projects" className="btn btn-outline btn-lg" aria-label="View Abul Hassan's projects">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-up delay-400"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '100+', label: 'Projects Delivered' },
                { value: '3,000+', label: 'IPTV Subscribers' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.875rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Floating card stack */}
          <div
            className="animate-fade-in delay-500 hero-visual"
            style={{ position: 'relative', height: '480px' }}
            aria-hidden="true"
          >
            {/* Main card */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '280px',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-lg)',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.5rem', marginBottom: '1rem',
                }}
              >
                📊
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                Power BI Dashboard
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                KPI tracking · Real-time insights
              </div>
              <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: '6px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.375rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>KPI Score</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>72%</span>
              </div>
            </div>

            {/* Floating badge — top left */}
            <div
              style={{
                position: 'absolute',
                top: '8%',
                left: '2%',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem 1rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                animation: 'float 7s ease-in-out infinite 1s',
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>🤖</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Gen AI + RAG</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>LLM Integration</div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '0%',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem 1rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                animation: 'float 5.5s ease-in-out infinite 0.5s',
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>🐍</span>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Python + ML</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Pandas · NumPy · Sklearn</div>
              </div>
            </div>

            {/* Floating metric — top right */}
            <div
              style={{
                position: 'absolute',
                top: '18%',
                right: '0%',
                background: 'var(--primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.875rem 1.25rem',
                boxShadow: '0 8px 24px rgba(26,86,219,0.35)',
                animation: 'float 6.5s ease-in-out infinite 2s',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>35%</div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.85, marginTop: '0.25rem' }}>Lead Boost</div>
            </div>

            {/* Floating metric — bottom left */}
            <div
              style={{
                position: 'absolute',
                bottom: '20%',
                left: '0%',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem 1rem',
                boxShadow: 'var(--shadow-md)',
                animation: 'float 8s ease-in-out infinite 1.5s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#10b981', flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                NOC Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '24px',
            height: '38px',
            border: '1.5px solid var(--border-strong)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              background: 'var(--primary)',
              borderRadius: '2px',
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
