'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Development',
    badge: 'Full-Stack',
    badgeType: 'badge-primary',
    summary:
      'Crafting high-performance, SEO-optimized websites using React, Next.js, and PHP that drive real business outcomes.',
    businessValue:
      'A well-built website is your 24/7 salesperson. We deliver fast-loading, mobile-first websites designed to convert visitors into clients.',
    keywords: ['React', 'Next.js', 'PHP', 'SEO', 'Responsive Design'],
    metric: '100+ sites delivered',
  },
  {
    icon: '⚙️',
    title: 'Web Application Development',
    badge: 'Enterprise',
    badgeType: 'badge-accent',
    summary:
      'Building scalable web applications with modern React or Next.js architecture, optimized for performance, security, and SEO.',
    businessValue:
      'Custom web applications automate workflows, reduce operational costs, and scale seamlessly as your business grows.',
    keywords: ['React', 'Node.js', 'REST APIs', 'MySQL', 'CodeIgniter'],
    metric: '25% conversion lift',
  },
  {
    icon: '📊',
    title: 'Data Analysis',
    badge: 'Analytics',
    badgeType: 'badge-success',
    summary:
      'Transforming raw datasets into actionable business insights using Python, SQL, and advanced statistical analysis techniques.',
    businessValue:
      'Data-driven organizations outperform peers by 23x in customer acquisition. We build the analytics foundation that enables confident decision-making.',
    keywords: ['Python', 'SQL', 'Pandas', 'NumPy', 'ETL', 'Tableau'],
    metric: '35% lead boost achieved',
  },
  {
    icon: '📈',
    title: 'Power BI Dashboard Design',
    badge: 'BI & Reporting',
    badgeType: 'badge-warning',
    summary:
      'Designing interactive Power BI dashboards with DAX measures, dynamic KPIs, and real-time data models for all business functions.',
    businessValue:
      'Replace static spreadsheet reports with live, interactive dashboards that give leadership instant visibility into what matters most.',
    keywords: ['Power BI', 'DAX', 'KPI', 'Data Modeling', 'Power Query'],
    metric: 'Automated reporting cycles',
  },
  {
    icon: '🤖',
    title: 'Machine Learning (ML)',
    badge: 'AI / ML',
    badgeType: 'badge-primary',
    summary:
      'Developing predictive models, classification systems, and ML pipelines that uncover patterns hidden in your business data.',
    businessValue:
      'Machine learning turns historical data into competitive advantage — enabling demand forecasting, churn prediction, and intelligent automation.',
    keywords: ['Scikit-learn', 'Python', 'Regression', 'Classification', 'NLP'],
    metric: 'Predictive accuracy focus',
  },
  {
    icon: '✨',
    title: 'Generative AI & RAG',
    badge: 'Cutting Edge',
    badgeType: 'badge-success',
    summary:
      'Architecting Generative AI solutions with Retrieval-Augmented Generation (RAG) pipelines using LangChain, Ollama, and vector databases.',
    businessValue:
      'Deploy intelligent AI assistants that answer from your private knowledge base, automate content creation, and accelerate enterprise productivity.',
    keywords: ['LangChain', 'Ollama', 'RAG', 'LLM', 'Vector DB', 'GPT'],
    metric: 'Enterprise-ready AI systems',
  },
];

function ServiceCard({ service, index }) {
  return (
    <article
      className="card"
      aria-labelledby={`service-title-${index}`}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Icon + Badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '52px', height: '52px',
            borderRadius: '14px',
            background: 'var(--primary-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}
          aria-hidden="true"
        >
          {service.icon}
        </div>
        <span className={`badge ${service.badgeType}`} style={{ fontSize: '0.75rem' }}>
          {service.badge}
        </span>
      </div>

      {/* Title */}
      <h3
        id={`service-title-${index}`}
        itemProp="name"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.0625rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}
      >
        {service.title}
      </h3>

      {/* Summary */}
      <p itemProp="description" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
        {service.summary}
      </p>

      {/* Business Value */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.875rem',
          marginBottom: '1.125rem',
          borderLeft: '3px solid var(--primary)',
        }}
      >
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Business value: </strong>
          {service.businessValue}
        </p>
      </div>

      {/* Keywords */}
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.125rem' }}
        role="list"
        aria-label={`Technologies for ${service.title}`}
      >
        {service.keywords.map((kw) => (
          <span key={kw} className="skill-tag" role="listitem" style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}>
            {kw}
          </span>
        ))}
      </div>

      {/* Metric */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          {service.metric}
        </span>
        <a
          href="#contact"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          aria-label={`Discuss ${service.title} project`}
        >
          Discuss →
        </a>
      </div>
    </article>
  );
}

export default function Services() {
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
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
              What I Do
            </div>
            <h2
              id="services-heading"
              className="section-title reveal animate-fade-up delay-100"
              style={{ animationPlayState: 'paused', margin: 0 }}
            >
              Services &amp; Expertise
            </h2>
          </div>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused', maxWidth: '420px', margin: 0 }}
          >
            From data pipelines to AI-powered applications — end-to-end technical capabilities that create measurable business impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`reveal animate-fade-up`}
              style={{
                animationPlayState: 'paused',
                animationDelay: `${i * 80 + 150}ms`,
              }}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal animate-fade-up delay-600"
          style={{
            animationPlayState: 'paused',
            marginTop: '3rem',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
            Have a specific requirement? Let's talk.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg" aria-label="Start a project with Abul Hassan">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
