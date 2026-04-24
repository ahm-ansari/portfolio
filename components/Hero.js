export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Background orbs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="container">
        <div className="hero__grid">
          {/* Left — text */}
          <div>
            <div className="hero__badge animate-fadeUp">
              Available for hire · Doha, Qatar
            </div>

            <h1 className="hero__h1 animate-fadeUp delay-1">
              Data Analyst &amp; <em>Full-Stack</em> Developer
            </h1>

            <p className="hero__desc animate-fadeUp delay-2">
              15+ years turning raw data into business intelligence and shipping
              scalable web applications. Specialized in Python, Power BI, Machine
              Learning, Generative AI, and RAG pipelines.
            </p>

            <div className="hero__actions animate-fadeUp delay-3">
              <a href="#contact" className="btn btn--primary">
                ✉ Hire Me
              </a>
              <a href="#projects" className="btn btn--outline">
                View Projects →
              </a>
            </div>

            <div className="hero__stats animate-fadeUp delay-4">
              <div>
                <span className="stat__num">15<span>+</span></span>
                <span className="stat__label">Years Experience</span>
              </div>
              <div>
                <span className="stat__num">100<span>+</span></span>
                <span className="stat__label">Projects Delivered</span>
              </div>
              <div>
                <span className="stat__num">35<span>%</span></span>
                <span className="stat__label">Avg Lead Boost</span>
              </div>
            </div>
          </div>

          {/* Right — floating card stack */}
          <div className="hero__visual animate-fadeIn delay-3" aria-hidden="true">
            <div className="hero__card-stack">
              <div className="hero__card hero__card--back1" />
              <div className="hero__card hero__card--back2" />
              <div className="hero__card hero__card--main">
                <div className="hero__avatar">AH</div>
                <div className="hero__card-name">Abul Hassan M. Ansari</div>
                <div className="hero__card-title">Data Analyst · Full-Stack Developer</div>
                <div className="hero__card-chips">
                  <span className="chip chip--accent">Python</span>
                  <span className="chip chip--teal">Power BI</span>
                  <span className="chip">SQL</span>
                  <span className="chip chip--accent">Gen AI</span>
                  <span className="chip chip--teal">RAG</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">Tableau</span>
                  <span className="chip chip--accent">ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
