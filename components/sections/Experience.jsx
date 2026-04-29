'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCE = [
  {
    company: 'ARMA CITIZENS',
    role: 'Data Analyst',
    period: '2024 – Present',
    type: 'Current',
    typeBg: '#d1fae5',
    typeColor: '#065f46',
    location: 'Doha, Qatar',
    summary: 'Leading data analytics initiatives, building KPI dashboards, and delivering automated reporting solutions.',
    achievements: [
      'Conduct exploratory data analysis using Python, SQL, and Power BI to uncover actionable business insights.',
      'Designed and deployed interactive dashboards monitoring KPIs and metrics for operations, hiring, and sales functions.',
      'Automated routine performance tracking workflows, enabling faster and more informed stakeholder decisions.',
      'Key projects: E-Commerce Sales Analysis, Data Segregation System, Hiring Funnel Analysis.',
    ],
    skills: ['Python', 'SQL', 'Power BI', 'KPI Dashboards', 'ETL', 'Data Wrangling'],
  },
  {
    company: 'Viveoli Retail',
    role: 'Senior Developer',
    period: '2020 – 2024',
    type: '4 years',
    typeBg: 'var(--primary-subtle)',
    typeColor: 'var(--primary)',
    location: 'Chennai, India',
    summary: 'Built and optimized e-commerce platforms integrating analytics modules that drove significant commercial results.',
    achievements: [
      'Developed robust e-commerce solutions using PHP CodeIgniter and React, with integrated analytics and BI modules.',
      'Improved frontend and backend performance, resulting in a measurable 25% uplift in customer conversion rates.',
      'Collaborated with marketing teams to embed Power BI dashboards for real-time campaign performance measurement.',
    ],
    skills: ['PHP', 'CodeIgniter', 'React', 'Power BI', 'Analytics', 'E-Commerce'],
  },
  {
    company: 'Oli Consulting Group',
    role: 'Senior Developer',
    period: '2008 – 2019',
    type: '11 years',
    typeBg: 'var(--bg-tertiary)',
    typeColor: 'var(--text-secondary)',
    location: 'Chennai, India',
    summary: 'Led development of 100+ client websites and a large-scale IPTV platform serving international subscribers.',
    achievements: [
      'Oversaw end-to-end development of 100+ client websites across various industries, from concept to deployment.',
      'Architected and maintained a Tamil IPTV platform serving over 3,000 international subscribers with analytics-driven content delivery.',
      'Led cross-functional projects spanning PHP, video streaming technology, and SEO with consistently measurable outcomes.',
      'Built and maintained full infrastructure: web hosting, domain management, analytics, and server operations.',
    ],
    skills: ['PHP', 'IPTV', 'SEO', 'Web Analytics', 'MySQL', 'Video Streaming', 'Server Management'],
  },
];

export default function Experience() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="section section-alt"
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: '3.5rem',
          }}
          className="exp-header"
        >
          <div>
            <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
              Work History
            </div>
            <h2
              id="experience-heading"
              className="section-title reveal animate-fade-up delay-100"
              style={{ animationPlayState: 'paused', margin: 0 }}
            >
              Professional Experience
            </h2>
          </div>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused', margin: 0 }}
          >
            A 15+ year journey from full-stack development to enterprise data analytics and AI — always delivering measurable impact.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '19px',
              top: '20px',
              bottom: '0',
              width: '1px',
              background: 'var(--border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EXPERIENCE.map((exp, i) => (
              <article
                key={exp.company}
                className="timeline-item reveal animate-slide-right"
                style={{
                  animationPlayState: 'paused',
                  animationDelay: `${i * 150}ms`,
                  display: 'flex',
                  gap: '1.5rem',
                }}
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>

                {/* Card */}
                <div
                  className="card"
                  style={{ flex: 1, minWidth: 0, padding: '1.5rem' }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.875rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: 0,
                            letterSpacing: '-0.02em',
                          }}
                          itemProp="name"
                        >
                          {exp.role}
                        </h3>
                        <span
                          style={{
                            padding: '0.2rem 0.625rem',
                            background: exp.typeBg,
                            color: exp.typeColor,
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: 'var(--primary)',
                        }}
                        itemProp="memberOf"
                      >
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          marginBottom: '0.125rem',
                        }}
                        itemProp="startDate"
                      >
                        {exp.period}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        📍 {exp.location}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {exp.summary}
                  </p>

                  {/* Achievements */}
                  <ul
                    role="list"
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1.125rem',
                    }}
                  >
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.625rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: 'var(--primary)',
                            flexShrink: 0, marginTop: '7px',
                          }}
                          aria-hidden="true"
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div
                    role="list"
                    aria-label={`Technologies used at ${exp.company}`}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}
                  >
                    {exp.skills.map((s) => (
                      <span key={s} className="skill-tag" role="listitem" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className="reveal animate-fade-up delay-500"
          style={{
            animationPlayState: 'paused',
            marginTop: '3rem',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'linear-gradient(135deg, var(--primary-subtle), #e0f2fe)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', flexShrink: 0,
            }}
            aria-hidden="true"
          >
            🎓
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.375rem' }}>
              Education
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)', fontSize: '1.125rem',
                fontWeight: 700, color: 'var(--text-primary)',
                letterSpacing: '-0.02em', marginBottom: '0.25rem',
              }}
              itemScope itemType="https://schema.org/EducationalOccupationalCredential"
            >
              <span itemProp="name">Bachelor of Engineering — Computer Science & Engineering</span>
            </h3>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--primary)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}
              itemScope itemType="https://schema.org/CollegeOrUniversity"
            >
              <span itemProp="name">BSA Crescent Engineering College</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Graduated 2006 · Chennai, India</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .exp-header {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
