import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const SERVICES = [
  'Website Development',
  'Web Application Development',
  'Data Analysis',
  'Power BI Dashboards',
  'Machine Learning',
  'Generative AI & RAG',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--gray-900)',
        color: 'var(--gray-400)',
        paddingTop: '4rem',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '0.75rem',
                letterSpacing: '-0.03em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'var(--primary)',
                  color: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                }}
              >
                AH
              </span>
              Abul Hassan
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--gray-400)', maxWidth: '260px', marginBottom: '1.25rem' }}>
              Senior Data Analyst &amp; Full Stack Developer based in Doha, Qatar. Transforming data into decisions.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://linkedin.com/in/ahm-ansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.07)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gray-400)', transition: 'all 0.2s', fontSize: '0.875rem',
                  textDecoration: 'none',
                }}
              >
                in
              </a>
              <a
                href="https://github.com/ahm-ansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.07)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gray-400)', transition: 'all 0.2s', fontSize: '0.875rem',
                  textDecoration: 'none',
                }}
              >
                gh
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Navigation
            </h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} style={{ fontSize: '0.875rem', color: 'var(--gray-400)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Services
            </h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICES.map((s) => (
                <li key={s} style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address
            style={{ fontStyle: 'normal' }}
            itemScope
            itemType="https://schema.org/Person"
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="mailto:ahm.ansari.m@gmail.com"
                itemProp="email"
                style={{ fontSize: '0.875rem', color: 'var(--gray-400)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
              >
                <span aria-hidden="true">✉</span>
                ahm.ansari.m@gmail.com
              </a>
              <a
                href="tel:+97471306270"
                itemProp="telephone"
                style={{ fontSize: '0.875rem', color: 'var(--gray-400)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
              >
                <span aria-hidden="true">☎</span>
                +974 713 06270
              </a>
              <span
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{ fontSize: '0.875rem', color: 'var(--gray-400)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span aria-hidden="true">📍</span>
                <span itemProp="addressLocality">Doha</span>,&nbsp;
                <span itemProp="addressCountry">Qatar</span>
              </span>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1.5rem 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', margin: 0 }}>
            &copy; {year} Abul Hassan Mohamed Ansari. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', margin: 0 }}>
            Data Analyst &amp; Full Stack Developer — Doha, Qatar
          </p>
        </div>
      </div>
    </footer>
  );
}
