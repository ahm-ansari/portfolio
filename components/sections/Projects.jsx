'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    title: 'Hiring Funnel Analysis',
    tag: 'HR Analytics',
    tagType: 'badge-primary',
    stack: ['Python', 'SQL', 'Power BI'],
    outcome: 'Improved hiring speed by 20%',
    outcomeColor: 'var(--primary)',
    summary:
      'Identified bottlenecks across the full recruitment lifecycle — from job posting to offer acceptance — enabling the HR team to make data-backed process improvements.',
    corporateSteps: [
      {
        phase: 'Phase 1: Discovery',
        steps: [
          'Stakeholder interviews with HR, Recruitment, and Management',
          'Define KPIs: Time-to-Fill, Offer Acceptance Rate, Stage Conversion',
          'Audit existing ATS (Applicant Tracking System) data quality',
          'Document data sources: HRIS, Excel sheets, email records',
        ],
      },
      {
        phase: 'Phase 2: Data Engineering',
        steps: [
          'Extract raw recruitment data from ATS and HRIS via SQL queries',
          'Build ETL pipeline in Python (Pandas) to clean and normalize data',
          'Create a unified star-schema data model in Power BI',
          'Implement incremental refresh for real-time pipeline tracking',
        ],
      },
      {
        phase: 'Phase 3: Analysis & Modeling',
        steps: [
          'Funnel drop-off analysis: calculate stage-wise conversion rates',
          'Cohort analysis: track candidates by job family and source channel',
          'Root cause analysis on bottlenecks using Pareto charting',
          'Predictive model to estimate time-to-fill by role complexity',
        ],
      },
      {
        phase: 'Phase 4: Dashboard & Delivery',
        steps: [
          'Design interactive Power BI dashboard with drill-through filters',
          'Create executive summary page: headline KPIs and trend lines',
          'Build operations page: recruiter-level workload and SLA compliance',
          'Conduct UAT with HR stakeholders and iterate on feedback',
          'Deploy to Power BI Service with scheduled automated refresh',
        ],
      },
    ],
  },
  {
    title: 'E-Commerce Sales Data Analysis',
    tag: 'Retail Analytics',
    tagType: 'badge-success',
    stack: ['Python', 'Excel', 'Power BI'],
    outcome: 'Discount campaign recommendations for underperforming SKUs',
    outcomeColor: 'var(--accent-success)',
    summary:
      'End-to-end sales data analysis across product categories, regions, and time periods to surface revenue opportunities and guide promotional strategy.',
    corporateSteps: [
      {
        phase: 'Phase 1: Business Context',
        steps: [
          'Align with Sales and Marketing leads on key business questions',
          'Define scope: which product categories, date range, and markets',
          'Establish success metric: Revenue Growth % post-recommendation',
          'Set up data governance: access controls and PII masking',
        ],
      },
      {
        phase: 'Phase 2: Data Collection & Prep',
        steps: [
          'Pull sales transaction data from ERP / e-commerce platform via API',
          'Merge product catalog, inventory, and pricing tables in Python',
          'Handle missing values, duplicates, and currency normalization',
          'Engineer features: AOV, CLV, return rate, margin per SKU',
        ],
      },
      {
        phase: 'Phase 3: Exploratory Analysis',
        steps: [
          'Trend analysis: revenue by category, week, and customer segment',
          'RFM segmentation to identify high-value vs. at-risk customers',
          'Basket analysis to discover product affinity (association rules)',
          'Underperformer identification: low-margin, high-return products',
        ],
      },
      {
        phase: 'Phase 4: Recommendations & Presentation',
        steps: [
          'Build A/B test framework for discount campaign evaluation',
          'Design campaign recommendation report with financial impact model',
          'Present findings to C-suite with Power BI storytelling deck',
          'Establish ongoing monitoring dashboard for campaign ROI tracking',
        ],
      },
    ],
  },
  {
    title: 'Lead Generation Analysis',
    tag: 'Marketing Analytics',
    tagType: 'badge-warning',
    stack: ['Power BI', 'Excel', 'DAX'],
    outcome: 'Boosted qualified leads by 35%',
    outcomeColor: 'var(--accent-warm)',
    caseStudyUrl: '/case-study/lead-generation',
    summary:
      'Analyzed multi-channel lead data to optimize targeting strategies, reduce CAC, and dramatically increase the volume of sales-qualified leads.',
    corporateSteps: [
      {
        phase: 'Phase 1: Channel Audit',
        steps: [
          'Map all active lead generation channels: paid, organic, referral, email',
          'Instrument UTM tracking for consistent attribution across channels',
          'Define lead qualification criteria aligned to Sales team standards',
          'Extract historical lead data from CRM (last 12 months)',
        ],
      },
      {
        phase: 'Phase 2: Attribution Modeling',
        steps: [
          'Build multi-touch attribution model in Excel and Power BI',
          'Calculate CPL (Cost Per Lead) and CAC per channel segment',
          'Identify high-converting traffic sources and audience segments',
          'Segment leads by quality score, geography, and industry vertical',
        ],
      },
      {
        phase: 'Phase 3: Optimization Analysis',
        steps: [
          'Regression analysis to identify leading indicators of lead quality',
          'A/B test analysis on landing pages, ad copy, and CTAs',
          'Time-of-day and day-of-week analysis for optimal ad scheduling',
          'Budget reallocation model: shift spend toward high-ROI channels',
        ],
      },
      {
        phase: 'Phase 4: Dashboard & Automation',
        steps: [
          'Build Power BI lead performance dashboard with DAX measures',
          'Set up automated alerts for CPL threshold breaches',
          'Integrate CRM data for pipeline velocity and win-rate tracking',
          'Deliver weekly automated email summary to Marketing leadership',
        ],
      },
    ],
  },
  {
    title: 'Data Segregation System',
    tag: 'System Development',
    tagType: 'badge-primary',
    stack: ['Python', 'HTML', 'CSS'],
    outcome: 'Search time reduced by 40%',
    outcomeColor: 'var(--primary)',
    summary:
      'Custom internal tool to intelligently categorize, tag, and index large volumes of unstructured data — enabling instant contextual search across the organization.',
    corporateSteps: [
      {
        phase: 'Phase 1: Requirements',
        steps: [
          'Workshop with end-users to map pain points in current data discovery',
          'Define data types: documents, spreadsheets, emails, images',
          'Establish taxonomy and category hierarchy for tagging',
          'Technical spec: performance targets, user roles, integration points',
        ],
      },
      {
        phase: 'Phase 2: Architecture Design',
        steps: [
          'Design system architecture: Python backend + HTML/CSS frontend',
          'Select NLP approach for automated text classification and tagging',
          'Define database schema for metadata storage and indexing',
          'Plan API endpoints for CRUD operations and search queries',
        ],
      },
      {
        phase: 'Phase 3: Development',
        steps: [
          'Build Python NLP pipeline for document parsing and classification',
          'Implement full-text search with ranked relevance scoring',
          'Develop web interface with filter facets and instant search UI',
          'Build admin panel for category management and user permissions',
          'Write automated tests for classification accuracy benchmarks',
        ],
      },
      {
        phase: 'Phase 4: Deployment & Adoption',
        steps: [
          'Deploy to internal server with automated backup configuration',
          'Conduct user acceptance testing with pilot team of 10 users',
          'Gather feedback and iterate on search relevance tuning',
          'Roll out company-wide with training sessions and documentation',
          'Monitor search success rate and time-to-find KPIs post-launch',
        ],
      },
    ],
  },
];

function ProjectCard({ project, onSelect, isSelected }) {
  return (
    <article
      className="card"
      onClick={() => onSelect(project)}
      style={{
        cursor: 'pointer',
        borderColor: isSelected ? 'var(--primary-light)' : 'var(--border)',
        background: isSelected ? 'var(--primary-subtle)' : 'var(--bg)',
      }}
      aria-labelledby={`proj-title-${project.title.replace(/\s+/g, '-')}`}
      aria-pressed={isSelected}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
        <span className={`badge ${project.tagType}`}>{project.tag}</span>
        {isSelected && (
          <span
            style={{
              width: '20px', height: '20px', borderRadius: '50%',
              background: 'var(--primary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '0.75rem',
            }}
            aria-label="Selected"
          >
            ✓
          </span>
        )}
      </div>

      <h3
        id={`proj-title-${project.title.replace(/\s+/g, '-')}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}
      >
        {project.title}
      </h3>

      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
        {project.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.875rem' }}>
        {project.stack.map((t) => (
          <span key={t} className="skill-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>{t}</span>
        ))}
      </div>

      <div
        style={{
          padding: '0.625rem 0.875rem',
          background: `${project.outcomeColor}14`,
          border: `1px solid ${project.outcomeColor}30`,
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: project.outcomeColor,
        }}
      >
        🎯 {project.outcome}
      </div>
      {project.caseStudyUrl && (
        <div style={{ marginTop: '0.75rem' }}>
          <Link
            href={project.caseStudyUrl}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--primary)',
              background: 'var(--primary-subtle)',
              padding: '0.4rem 0.875rem',
              borderRadius: 'var(--radius-full)',
              textDecoration: 'none',
              border: '1px solid var(--primary-light)',
              transition: 'all var(--transition)',
            }}
            aria-label={`View full case study: ${project.title}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Full Case Study
          </Link>
        </div>
      )}
    </article>
  );
}

function CorporateSteps({ project }) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <span className={`badge ${project.tagType}`} style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
          {project.tag}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          {project.summary}
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        <h4
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '1.5rem',
          }}
        >
          Corporate Execution Roadmap
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {project.corporateSteps.map(({ phase, steps }, phaseIdx) => (
            <div
              key={phase}
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              {/* Phase indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'var(--primary)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(26,86,219,0.3)',
                  }}
                  aria-hidden="true"
                >
                  {phaseIdx + 1}
                </div>
                {phaseIdx < project.corporateSteps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, background: 'var(--border)', minHeight: '20px', marginTop: '4px' }} />
                )}
              </div>

              {/* Phase content */}
              <div style={{ paddingBottom: '0.5rem', flex: 1, minWidth: 0 }}>
                <h5
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {phase}
                </h5>
                <ul
                  role="list"
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {steps.map((step, stepIdx) => (
                    <li
                      key={stepIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.625rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: '18px', height: '18px',
                          borderRadius: '4px',
                          background: 'var(--primary-subtle)',
                          border: '1px solid var(--primary-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.625rem',
                          color: 'var(--primary)',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '2px',
                          fontFamily: 'var(--font-mono)',
                        }}
                        aria-hidden="true"
                      >
                        {stepIdx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1rem 1.25rem',
            background: `${project.outcomeColor}10`,
            border: `1.5px solid ${project.outcomeColor}35`,
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span style={{ fontSize: '1.25rem' }} aria-hidden="true">🎯</span>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
              Measured Outcome
            </div>
            <div style={{ fontWeight: 700, color: project.outcomeColor, fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
              {project.outcome}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
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
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
            Key Projects
          </div>
          <h2
            id="projects-heading"
            className="section-title reveal animate-fade-up delay-100"
            style={{ animationPlayState: 'paused' }}
          >
            Projects &amp; Corporate Execution Steps
          </h2>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused' }}
          >
            Real projects with measurable outcomes. Click any project to see the detailed corporate execution roadmap.
          </p>
        </div>

        {/* Layout: Cards left, Steps right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="projects-layout"
        >
          {/* Project Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                className="reveal animate-fade-up"
                style={{
                  animationPlayState: 'paused',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                  isSelected={selectedProject.title === project.title}
                />
              </div>
            ))}
          </div>

          {/* Corporate Steps Detail */}
          <div
            className="reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused', position: 'sticky', top: '88px' }}
          >
            <CorporateSteps project={selectedProject} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .projects-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
