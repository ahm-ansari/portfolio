'use client';

import { useEffect, useRef, useState } from 'react';

const SKILL_GROUPS = [
  {
    category: 'Data Analysis & BI',
    icon: '📊',
    skills: [
      { name: 'Power BI', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Excel / DAX', level: 88 },
      { name: 'Tableau', level: 80 },
    ],
  },
  {
    category: 'Programming',
    icon: '🐍',
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 88 },
      { name: 'PHP (CodeIgniter)', level: 90 },
      { name: 'JavaScript / React', level: 85 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 78 },
      { name: 'Generative AI (LLMs)', level: 80 },
      { name: 'RAG / LangChain', level: 75 },
      { name: 'Ollama / NLP', level: 72 },
    ],
  },
  {
    category: 'Databases & ETL',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Power Query (ETL)', level: 88 },
      { name: 'Azure Data Studio', level: 75 },
      { name: 'Data Wrangling', level: 92 },
    ],
  },
  {
    category: 'Visualization Tools',
    icon: '📉',
    skills: [
      { name: 'Matplotlib / Seaborn', level: 85 },
      { name: 'Power BI Dashboards', level: 92 },
      { name: 'Tableau Desktop', level: 80 },
      { name: 'Google Data Studio', level: 78 },
    ],
  },
  {
    category: 'Marketing & SEO',
    icon: '🔍',
    skills: [
      { name: 'SEO Optimization', level: 88 },
      { name: 'Google Analytics', level: 85 },
      { name: 'Email Marketing', level: 80 },
      { name: 'Social Media Campaigns', level: 78 },
    ],
  },
];

const TECH_TAGS = [
  'Python', 'SQL', 'Power BI', 'Tableau', 'DAX', 'PHP', 'React', 'Next.js',
  'Pandas', 'NumPy', 'MySQL', 'ETL', 'Power Query', 'Jupyter', 'Google Colab',
  'PyCharm', 'Azure Data Studio', 'GitHub', 'Ollama', 'LangChain', 'LLM',
  'RAG', 'Machine Learning', 'Generative AI', 'CodeIgniter', 'IPTV', 'SEO',
  'Matplotlib', 'Seaborn', 'Visual Studio', 'Node.js', 'REST API',
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{name}</span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="progress" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency: ${level}%`}>
        <div
          className={`progress-fill ${animate ? 'animate' : ''}`}
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)`,
            transitionDelay: '0.2s',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
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
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="section section-alt"
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
            Technical Skills
          </div>
          <h2
            id="skills-heading"
            className="section-title reveal animate-fade-up delay-100"
            style={{ animationPlayState: 'paused' }}
          >
            Expertise Across the Stack
          </h2>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused' }}
          >
            A comprehensive toolkit spanning data analytics, AI, full-stack development, and business intelligence.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="card reveal animate-fade-up"
              style={{
                animationPlayState: 'paused',
                animationDelay: `${i * 90}ms`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'var(--primary-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animated} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Tag Cloud */}
        <div
          className="reveal animate-fade-up delay-400"
          style={{
            animationPlayState: 'paused',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
          }}
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
            Technology Stack
          </h3>
          <div
            role="list"
            aria-label="Technologies and tools"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="skill-tag" role="listitem">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Row */}
        <div
          className="reveal animate-fade-up delay-500"
          style={{
            animationPlayState: 'paused',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          {[
            {
              title: 'Artificial Intelligence',
              issuer: 'Top Mentor',
              sub: 'Coursework in AI & Machine Learning',
              icon: '🎓',
            },
            {
              title: 'Data Analyst Virtual Training',
              issuer: 'Trainity',
              sub: 'Comprehensive Data Analytics Program',
              icon: '📜',
            },
          ].map(({ title, issuer, sub, icon }) => (
            <div
              key={title}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                transition: 'all var(--transition)',
              }}
            >
              <span
                style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--primary-subtle), #e0f2fe)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {icon}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {title}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {issuer}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
