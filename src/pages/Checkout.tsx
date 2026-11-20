import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/services'
import {
  IconArrow,
  IconCheck,
  IconGrid,
  IconHome,
  IconSend,
} from '../components/Icons'

export function Checkout() {
  const { items, subtotal, clearCart, getService, itemCount } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [name, setName] = useState('')

  if (items.length === 0 && !submitted) {
    return <Navigate to="/cart" replace />
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    window.setTimeout(() => {
      setSubmitted(true)
      clearCart()
      setSending(false)
    }, 650)
  }

  if (submitted) {
    return (
      <div className="container">
        <div className="success-panel anim-page">
          <div className="success-badge" aria-hidden="true">
            <IconCheck size={28} />
          </div>
          <p className="section-label">Request received</p>
          <h1>Thanks{name ? `, ${name.split(' ')[0]}` : ''} — your stack is with us.</h1>
          <p>
            We&apos;ll review your services and reply within one business day with a kickoff plan and
            timeline. Watch your inbox for hello@neomarketing.cloud.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-icon">
              <IconHome size={17} />
              Back home
            </Link>
            <Link to="/services" className="btn btn-ghost btn-icon">
              <IconGrid size={17} />
              Browse more services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="page-hero anim-page">
        <h1>Checkout</h1>
        <p>
          {itemCount} service{itemCount === 1 ? '' : 's'} · {formatPrice(subtotal, 'project')}{' '}
          estimated
        </p>
      </div>

      <div className="checkout-layout">
        <form className="form-grid anim-page" onSubmit={handleSubmit} style={{ animationDelay: '80ms' }}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" required autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="budget">Monthly budget range</label>
              <select id="budget" name="budget" required defaultValue="">
                <option value="" disabled>
                  Select range
                </option>
                <option value="under-3k">Under $3k</option>
                <option value="3k-8k">$3k – $8k</option>
                <option value="8k-20k">$8k – $20k</option>
                <option value="20k-plus">$20k+</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="notes">Project notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Goals, timelines, markets, or anything we should know…"
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
                Submit project request
                <IconArrow size={16} className="btn-trail" />
              </>
            )}
          </button>
        </form>

        <aside className="cart-summary anim-slide-in">
          <h2>Your stack</h2>
          {items.map((item) => {
            const service = getService(item.serviceId)
            if (!service) return null
            return (
              <div className="summary-row" key={item.serviceId}>
                <span>
                  {service.name} × {item.quantity}
                </span>
                <span>{formatPrice(service.price * item.quantity, 'project')}</span>
              </div>
            )
          })}
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(subtotal, 'project')}</span>
          </div>
          <p className="note">No payment charged yet — this locks your request with our team.</p>
        </aside>
      </div>
    </div>
  )
}
