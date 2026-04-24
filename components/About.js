const skillCategories = [
  {
    label: 'Data & BI',
    tags: ['Python', 'SQL', 'Power BI', 'Tableau', 'DAX', 'Excel'],
  },
  {
    label: 'Programming',
    tags: ['PHP', 'React', 'Next.js', 'Pandas', 'NumPy', 'HTML/CSS'],
  },
  {
    label: 'AI / ML',
    tags: ['Machine Learning', 'Gen AI', 'RAG', 'LangChain', 'Ollama'],
  },
  {
    label: 'Databases & ETL',
    tags: ['MySQL', 'Power Query', 'Azure Data Studio', 'GitHub'],
  },
  {
    label: 'Visualization',
    tags: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau'],
  },
  {
    label: 'Marketing & SEO',
    tags: ['Web Analytics', 'SEO', 'Email Marketing', 'Social Media'],
  },
]

const experience = [
  {
    company: 'ARMA Citizens',
    role: 'Data Analyst',
    period: '2024 – Present',
    bullets: [
      'Exploratory data analysis using Python, SQL, and Power BI.',
      'Built KPI dashboards for operations, hiring, and sales teams.',
      'Automated performance tracking reports for stakeholder decisions.',
    ],
  },
  {
    company: 'Viveoli Retail, Chennai',
    role: 'Senior Developer',
    period: '2020 – 2024',
    bullets: [
      'Built e-commerce platforms with PHP (CodeIgniter) and React.',
      'Improved conversion rates by 25% via frontend/backend optimization.',
      'Embedded BI dashboards to measure campaign performance.',
    ],
  },
  {
    company: 'Oli Consulting Group, Chennai',
    role: 'Senior Developer',
    period: '2008 – 2019',
    bullets: [
      'Oversaw development of 100+ client websites and IPTV systems.',
      'Managed infrastructure for 3,000+ international IPTV subscribers.',
      'Led cross-functional projects in PHP, video streaming, and SEO.',
    ],
  },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">
          {/* Left column */}
          <div className="about__left">
            <div className="about__avatar-wrap">
              <div className="about__avatar"></div>
              <div className="about__status">Open to Opportunities</div>
            </div>
            <div className="about__name">Abul Hassan Mohamed Ansari</div>
            <div className="about__role">Senior Data Analyst &amp; Developer</div>
            <p style={{ fontSize: '.88rem', color: 'var(--ink-soft)' }}>
              Doha, Qatar · Valid QID (NOC Available)
            </p>

            <div className="about__links">
              <a
                href="mailto:ahm.ansari.m@gmail.com"
                className="about__link"
                aria-label="Email Abul Hassan"
              >
                <span className="about__link-icon">✉</span>
                ahm.ansari.m@gmail.com
              </a>
              <a
                href="tel:+97471306270"
                className="about__link"
                aria-label="Call Abul Hassan"
              >
                <span className="about__link-icon">📞</span>
                +974 71306270
              </a>
              <a
                href="https://linkedin.com/in/ahm-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="about__link"
                aria-label="Abul Hassan LinkedIn profile"
              >
                <span className="about__link-icon">in</span>
                linkedin.com/in/ahm-ansari
              </a>
              <a
                href="https://github.com/ahm-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="about__link"
                aria-label="Abul Hassan GitHub profile"
              >
                <span className="about__link-icon">⌥</span>
                github.com/ahm-ansari
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-h2" id="about-heading">
                15+ Years of Turning Data into Decisions
              </h2>
              <p className="section-desc">
                I bridge the gap between raw data and real business outcomes — whether that's
                building intelligent dashboards, architecting scalable web applications,
                or deploying Generative AI and RAG pipelines for modern enterprises.
              </p>
            </div>

            <p className="about__bio">
              My journey started in web development and IT infrastructure, giving me a rare
              full-stack understanding that most pure analysts lack. Today I combine
              <strong> data engineering, machine learning, and modern web development</strong> to
              build solutions that don't just look good — they drive measurable results.
              I hold a <strong>BE in Computer Science &amp; Engineering</strong> and have delivered
              projects across e-commerce, IPTV, HR analytics, and lead generation.
            </p>

            {/* Skills grid */}
            <div className="skills-grid" aria-label="Technical skills">
              {skillCategories.map(cat => (
                <div className="skill-cat" key={cat.label}>
                  <div className="skill-cat__label">{cat.label}</div>
                  <div className="skill-cat__tags">
                    {cat.tags.map(t => (
                      <span className="skill-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience timeline */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--ink)', letterSpacing: '-.01em' }}>
                Work Experience
              </h3>
              <div className="timeline">
                {experience.map((job, i) => (
                  <article className="timeline__item" key={job.company}>
                    <div className="timeline__left">
                      <div className="timeline__dot" />
                      {i < experience.length - 1 && <div className="timeline__line" />}
                    </div>
                    <div>
                      <div className="timeline__company">{job.company}</div>
                      <div className="timeline__role">{job.role}</div>
                      <div className="timeline__period">{job.period}</div>
                      <ul className="timeline__bullets">
                        {job.bullets.map(b => (
                          <li className="timeline__bullet" key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
