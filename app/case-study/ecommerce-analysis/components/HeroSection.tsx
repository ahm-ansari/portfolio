'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Animated particle grid
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      })
    }

    let animId: number
    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas!.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.15)'
        ctx.fill()
      })
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071A2E 0%, #1A5276 50%, #0D2D4A 100%)' }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5"
           style={{ border: '1px solid white' }} />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full opacity-5"
           style={{ border: '1px solid white' }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5"
           style={{ border: '1px solid white' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
             style={{ background: 'rgba(255,255,255,0.1)', color: '#AED6F1', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          Case Study — Senior Citizen Ecommerce Analytics
        </div>

        {/* Main heading */}
        <h1 className="display text-white mb-6 leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
          End-to-End Analytics<br />
          <span style={{ color: '#F39C12' }}>&amp; Machine Learning</span>
        </h1>

        <p className="text-xl mb-4" style={{ color: '#AED6F1', maxWidth: '640px', fontWeight: 300, lineHeight: 1.8 }}>
          A production-grade data science consulting engagement for{' '}
          <span className="font-medium" style={{ color: 'white' }}>A Ecommerce Company</span> —
          India's premier ecommerce platform for senior citizens, headquartered in Chennai.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mt-12 pt-12"
             style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {[
            { n: '2,90,500+', label: 'Data Records' },
            { n: '5',          label: 'ML Models' },
            { n: '₹34–54L',   label: 'Projected ROI' },
            { n: '8 Weeks',   label: 'Engagement' },
          ].map(s => (
            <div key={s.n}>
              <div className="display text-white font-bold" style={{ fontSize: '2rem' }}>{s.n}</div>
              <div style={{ color: '#7FB3D3', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
             style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>
          <span className="tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 animate-pulse-slow" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>
    </section>
  )
}
