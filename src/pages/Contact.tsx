import { useState, type FormEvent } from 'react'
import { addressLines, company } from '../data/company'
import { IconCheck, IconGlobe, IconMail, IconPin, IconSend } from '../components/Icons'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    window.setTimeout(() => {
      setSent(true)
      setSending(false)
    }, 550)
  }

  return (
    <div className="container">
      <div className="page-hero anim-page">
        <h1>Contact</h1>
        <p>Tell us what you&apos;re building. We reply within one business day.</p>
      </div>

      <div className="contact-grid">
        <Reveal className="contact-details">
          <div className="contact-block">
            <span className="contact-icon">
              <IconPin size={18} />
            </span>
            <div>
              <h3>Studio</h3>
              <address className="contact-address">
                {addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
          </div>
          <div className="contact-block">
            <span className="contact-icon">
              <IconMail size={18} />
            </span>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div className="contact-block">
            <span className="contact-icon">
              <IconGlobe size={18} />
            </span>
            <div>
              <h3>Domain</h3>
              <a href={`https://${company.domain}`}>{company.domain}</a>
            </div>
          </div>
          <div className="contact-block">
            <span className="contact-icon pulse-dot" />
            <div>
              <h3>Hours</h3>
              <p>Mon–Fri · 9:00–18:00 GMT</p>
            </div>
          </div>
        </Reveal>

        {sent ? (
          <div className="anim-page">
            <div className="success-badge" aria-hidden="true">
              <IconCheck size={28} />
            </div>
            <p className="section-label">Sent</p>
            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
              Message received.
            </h2>
            <p className="section-desc">
              We&apos;ll get back to you shortly from {company.email}.
            </p>
          </div>
        ) : (
          <form
            className="form-grid anim-page"
            onSubmit={handleSubmit}
            style={{ animationDelay: '100ms' }}
          >
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" required />
            </div>
            <div className="field">
              <label htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                name="message"
                required
                placeholder="What should we know?"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-icon" disabled={sending}>
              {sending ? (
                <>
                  <span className="btn-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <IconSend size={17} />
                  Send message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
