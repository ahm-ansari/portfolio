import Link from 'next/link';

const projects = [
  {
    icon: '📈',
    title: 'Hiring Process Analysis',
    impact: '↑ 20% Hiring Speed',
    desc: 'End-to-end recruitment analytics using Python and SQL to identify bottlenecks across sourcing, screening, and offer stages. Power BI dashboard gives HR leadership real-time funnel visibility.',
    stack: ['Python', 'SQL', 'Power BI', 'Pandas'],
    link: '/case-study/hiring-analysis',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Sales Data Analysis',
    impact: 'Discount ROI Optimized',
    desc: 'Analyzed 2 years of sales data across product categories to identify underperformers. Suggested targeted discount campaigns that boosted category revenue without margin erosion.',
    stack: ['Python', 'Excel', 'Pandas', 'Matplotlib'],
    link: '#',
  },
  {
    icon: '🎯',
    title: 'Lead Generation Analysis',
    impact: '↑ 35% Qualified Leads',
    desc: 'Built a Power BI model integrating CRM and marketing data to score and segment leads by conversion probability. Enhanced targeting across email and social channels for the sales team.',
    stack: ['Power BI', 'Excel', 'DAX', 'CRM Integration'],
    link: '/case-study/lead-generation',
  },
  {
    icon: '⚡',
    title: 'Data Segregation System',
    impact: '↓ 40% Search Time',
    desc: 'Designed a Python-based automated data classification and tagging system with a lightweight HTML/CSS interface. Reduced manual search time by 40% for operations staff.',
    stack: ['Python', 'HTML', 'CSS', 'MySQL'],
    link: '#',
  },
  {
    icon: '📺',
    title: 'Tamil IPTV Analytics Case Study',
    impact: 'Content Strategy Optimized',
    desc: 'Mapped viewer behavior patterns for a 3,000+ subscriber IPTV platform. Analytics insights shaped content delivery strategy — peak hours, popular genres, churn risk segments.',
    stack: ['Web Analytics', 'PHP', 'MySQL', 'Dashboards'],
    link: '#',
  },
  {
    icon: '🌐',
    title: 'E-Commerce Platform (Viveoli)',
    impact: '↑ 25% Conversion Rate',
    desc: 'Full-stack e-commerce platform with React frontend and PHP CodeIgniter backend. Integrated BI modules and A/B testing infrastructure that lifted customer conversion by 25%.',
    stack: ['React', 'PHP', 'CodeIgniter', 'MySQL', 'BI Dashboards'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-h2" id="projects-heading">
            Projects That Moved the Needle
          </h2>
          <p className="section-desc">
            Every project here has a measurable business outcome — not just a tech stack showcase.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map(p => (
            <article className="project-card" key={p.title}>
              <div className="project-card__header">
                <div className="project-card__icon" aria-hidden="true">{p.icon}</div>
                <span className="project-card__impact">{p.impact}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map(t => (
                  <span className="stack-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card__footer" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'right' }}>
                <Link href={p.link} className="btn btn--outline" style={{ borderColor: "var(--surface)", padding: "10px", color: "var(--white)" }}>View Case Study →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
