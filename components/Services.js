const services = [
  {
    icon: '📊',
    iconVariant: '',
    title: 'Data Analysis & Business Intelligence',
    desc: 'Transform raw datasets into actionable insights with Python, SQL, and Power BI. From exploratory analysis to automated KPI dashboards, I help businesses make evidence-driven decisions faster.',
    tags: ['Python', 'SQL', 'Power BI', 'Tableau', 'DAX', 'Excel'],
  },
  {
    icon: '🤖',
    iconVariant: '',
    title: 'Machine Learning Solutions',
    desc: 'Design and deploy predictive models for classification, regression, and clustering. Practical ML pipelines that integrate seamlessly with existing business workflows to reduce cost and increase efficiency.',
    tags: ['Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Model Deployment'],
  },
  {
    icon: '🧠',
    iconVariant: 'teal',
    title: 'Generative AI & RAG Pipelines',
    desc: 'Build intelligent Gen AI applications and Retrieval-Augmented Generation (RAG) systems using LangChain and Ollama. Custom AI assistants, document Q&A, and knowledge bases tailored to your domain.',
    tags: ['LangChain', 'Ollama', 'RAG', 'LLM', 'Vector DBs', 'Prompt Engineering'],
  },
  {
    icon: '🌐',
    iconVariant: 'teal',
    title: 'Website Development',
    desc: 'Craft modern, SEO-optimized websites using React and Next.js with clean semantic HTML, fast load times, and mobile-first responsive design — built to rank on Google and convert visitors.',
    tags: ['Next.js', 'React', 'HTML5', 'CSS3', 'SEO', 'Performance'],
  },
  {
    icon: '⚙️',
    iconVariant: '',
    title: 'Web Application Development',
    desc: 'Build scalable full-stack web applications using Next.js and PHP (CodeIgniter). E-commerce platforms, admin panels, and custom business tools with integrated analytics and BI dashboards.',
    tags: ['Next.js', 'PHP', 'CodeIgniter', 'MySQL', 'REST APIs', 'React'],
  },
  {
    icon: '🔍',
    iconVariant: 'teal',
    title: 'SEO & Digital Marketing Analytics',
    desc: 'Combine technical SEO expertise with data analytics to measurably grow organic traffic. Analytics integration, performance tracking, and campaign ROI measurement for marketing teams.',
    tags: ['Technical SEO', 'Web Analytics', 'GA4', 'Email Marketing', 'Social Media'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">What I Do</span>
          <h2 className="section-h2" id="services-heading">
            End-to-End Data &amp; Development Services
          </h2>
          <p className="section-desc">
            From data pipelines to production web apps — I bring the full stack so you
            don't have to hire three different specialists.
          </p>
        </header>

        <div className="services__grid">
          {services.map(s => (
            <article className="service-card" key={s.title}>
              <div className={`service-card__icon${s.iconVariant ? ` service-card__icon--${s.iconVariant}` : ''}`} aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map(t => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
