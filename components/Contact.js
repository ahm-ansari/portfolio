'use client'
import { useState } from 'react'

const contactItems = [
  { icon: '✉', label: 'Email', value: 'ahm.ansari.m@gmail.com', href: 'mailto:ahm.ansari.m@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+974 71306270', href: 'tel:+97471306270' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/ahm-ansari', href: 'https://linkedin.com/in/ahm-ansari' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/ahm-ansari', href: 'https://github.com/ahm-ansari' },
  { icon: '📍', label: 'Location', value: 'Doha, Qatar (QID + NOC)', href: null },
]

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.'
  if (!fields.message.trim() || fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
  }
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]  = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate network delay (replace with actual API call / mailto / Formspree endpoint)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__grid">
          {/* Left */}
          <div className="contact__info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-h2" id="contact-heading">
              Ready to Build Something Great?
            </h2>
            <p>
              Whether you need a data analyst, a full-stack developer, an AI engineer,
              or all three — I'm open to full-time roles, freelance projects, and consulting
              engagements across Qatar and remotely.
            </p>

            <div className="contact__items">
              {contactItems.map(item => (
                <div className="contact__item" key={item.label}>
                  <div className="contact__item-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact__item-label">{item.label}</div>
                    <div className="contact__item-val">
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form">
            {submitted ? (
              <div className="form-success" role="alert">
                ✅ Message received! I'll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-input${errors.name ? ' error' : ''}`}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <div className="form-error" id="name-err" role="alert">{errors.name}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input${errors.email ? ' error' : ''}`}
                      placeholder="you@company.com"
                      value={fields.email}
                      onChange={handleChange}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <div className="form-error" id="email-err" role="alert">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`form-input${errors.subject ? ' error' : ''}`}
                    placeholder="e.g. Data Analyst Role — Full Time"
                    value={fields.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? 'subject-err' : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <div className="form-error" id="subject-err" role="alert">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-textarea${errors.message ? ' error' : ''}`}
                    placeholder="Tell me about the project or role..."
                    value={fields.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <div className="form-error" id="message-err" role="alert">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn--primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? 'Sending…' : '✉ Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
