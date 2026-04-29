'use client';

import { useState, useRef, useEffect } from 'react';

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'ahm.ansari.m@gmail.com', href: 'mailto:ahm.ansari.m@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+974 713 06270', href: 'tel:+97471306270' },
  { icon: '📍', label: 'Location', value: 'Doha, Qatar (NOC Available)', href: null },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ahm-ansari', href: 'https://linkedin.com/in/ahm-ansari' },
  { icon: '💻', label: 'GitHub', value: 'github.com/ahm-ansari', href: 'https://github.com/ahm-ansari' },
];

const SERVICES_LIST = [
  'Website Development',
  'Web Application Development',
  'Data Analysis',
  'Power BI Dashboard',
  'Machine Learning (ML)',
  'Generative AI / RAG',
  'Other',
];

function validateForm(data) {
  const errors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (min 2 characters).';
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.subject.trim() || data.subject.trim().length < 4) {
    errors.subject = 'Please enter a subject (min 4 characters).';
  }
  if (!data.service) {
    errors.service = 'Please select a service you are interested in.';
  }
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  // Basic spam detection
  const spamPatterns = [/\bviagra\b/i, /\bcasino\b/i, /\bloan\b/i, /\bclick here\b/i, /\bfree money\b/i, /\bmake money fast\b/i, /\bseo services\b/i, /https?:\/\/[^\s]{30,}/i];
  const fullText = `${data.name} ${data.subject} ${data.message}`;
  if (spamPatterns.some((p) => p.test(fullText))) {
    errors.message = 'Your message was flagged as potential spam. Please revise it.';
  }
  // Honeypot
  if (data.honeypot) {
    errors._spam = true;
  }
  return errors;
}

const INITIAL = { name: '', email: '', subject: '', service: '', message: '', honeypot: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [touched, setTouched] = useState({});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errs = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, service: true, message: true });
    const errs = validateForm(form);
    setErrors(errs);

    if (errs._spam || Object.keys(errs).length > 0) return;

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm(INITIAL);
        setTouched({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    background: 'var(--bg)',
    border: `1.5px solid ${errors[field] && touched[field] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition)',
    outline: 'none',
    boxShadow: errors[field] && touched[field] ? '0 0 0 4px rgba(239,68,68,0.1)' : 'none',
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label reveal animate-fade-up" style={{ animationPlayState: 'paused' }}>
            Get In Touch
          </div>
          <h2
            id="contact-heading"
            className="section-title reveal animate-fade-up delay-100"
            style={{ animationPlayState: 'paused' }}
          >
            Let's Work Together
          </h2>
          <p
            className="section-subtitle reveal animate-fade-up delay-200"
            style={{ animationPlayState: 'paused' }}
          >
            Ready to transform your data, build powerful dashboards, or launch an AI-powered solution? I'm available for new projects in Doha and remotely worldwide.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* LEFT: Contact info */}
          <div>
            <div
              className="reveal animate-fade-up delay-200"
              style={{ animationPlayState: 'paused' }}
            >
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.125rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '0.875rem',
                    transition: 'all var(--transition)',
                  }}
                >
                  <span
                    style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'var(--primary-subtle)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.125rem', flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--primary)', textDecoration: 'none', wordBreak: 'break-all' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="reveal animate-fade-up delay-400"
              style={{
                animationPlayState: 'paused',
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: '#d1fae5',
                border: '1px solid #6ee7b7',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
              }}
            >
              <span
                style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#10b981', flexShrink: 0,
                  boxShadow: '0 0 0 4px rgba(16,185,129,0.2)',
                }}
                aria-hidden="true"
              />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#065f46', fontSize: '0.9375rem' }}>
                  Available for New Projects
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#047857', marginTop: '0.125rem' }}>
                  Doha, Qatar (Valid QID · NOC Available) · Remote Worldwide
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div
            className="reveal animate-fade-up delay-300"
            style={{ animationPlayState: 'paused' }}
          >
            {status === 'success' ? (
              <div
                style={{
                  background: '#d1fae5',
                  border: '1px solid #6ee7b7',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  textAlign: 'center',
                }}
                role="alert"
                aria-live="polite"
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }} aria-hidden="true">✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#065f46', marginBottom: '0.5rem' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#047857', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. I'll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-outline"
                  style={{ borderColor: '#10b981', color: '#065f46' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                }}
              >
                {/* Honeypot — hidden from real users, visible to bots */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="honeypot">Leave this empty</label>
                  <input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                      Full Name <span aria-label="required" style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      style={inputStyle('name')}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.375rem' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                      Email Address <span aria-label="required" style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      style={inputStyle('email')}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.375rem' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    Subject <span aria-label="required" style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Brief description of your project"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.subject && touched.subject)}
                    aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                    style={inputStyle('subject')}
                  />
                  {errors.subject && touched.subject && (
                    <p id="subject-error" role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.375rem' }}>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="service" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    Service Required <span aria-label="required" style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.service && touched.service)}
                    style={{
                      ...inputStyle('service'),
                      cursor: 'pointer',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && touched.service && (
                    <p role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.375rem' }}>
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    Message <span aria-label="required" style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals…"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px' }}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" role="alert" style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '0.375rem' }}>
                      {errors.message}
                    </p>
                  )}
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>
                    {form.message.length} / 20 characters minimum
                  </p>
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    style={{
                      padding: '0.875rem 1rem',
                      background: '#fef2f2',
                      border: '1px solid #fca5a5',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      color: '#b91c1c',
                      marginBottom: '1rem',
                    }}
                  >
                    Something went wrong. Please email me directly at{' '}
                    <a href="mailto:ahm.ansari.m@gmail.com" style={{ color: 'inherit', fontWeight: 600 }}>
                      ahm.ansari.m@gmail.com
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'submitting' ? 0.75 : 1 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <span
                        style={{
                          width: '16px', height: '16px', borderRadius: '50%',
                          border: '2px solid rgba(255,255,255,0.4)',
                          borderTopColor: '#fff',
                          animation: 'spin 0.7s linear infinite',
                          display: 'inline-block',
                        }}
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.875rem' }}>
                  🔒 Your information is private and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
