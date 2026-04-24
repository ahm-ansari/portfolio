const credentials = [
  {
    icon: '🎓',
    title: 'BE — Computer Science & Engineering',
    issuer: 'BSA Crescent Engineering College · 2006',
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'Coursework Certification · Top Mentor',
  },
  {
    icon: '📊',
    title: 'Data Analyst Virtual Training Program',
    issuer: 'Trainity · Professional Certification',
  },
]

export default function Credentials() {
  return (
    <section className="credentials section" id="credentials" aria-labelledby="credentials-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Education &amp; Certifications</span>
          <h2 className="section-h2" id="credentials-heading">
            Credentials &amp; Qualifications
          </h2>
          <p className="section-desc">
            A solid academic foundation backed by industry-recognized certifications in AI, ML, and data analytics.
          </p>
        </header>

        <div className="credentials__grid">
          {credentials.map(c => (
            <article className="cred-card" key={c.title}>
              <div className="cred-card__icon" aria-hidden="true">{c.icon}</div>
              <div>
                <div className="cred-card__title">{c.title}</div>
                <div className="cred-card__issuer">{c.issuer}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
