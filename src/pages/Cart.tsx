import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/services'
import { Reveal } from '../components/Reveal'
import {
  IconArrow,
  IconGrid,
  IconMinus,
  IconPlus,
  IconTrash,
} from '../components/Icons'

export function Cart() {
  const { items, subtotal, setQuantity, removeItem, getService, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="page-hero anim-page">
          <h1>Cart</h1>
          <p>Your stack is empty — add services to build a proposal-ready order.</p>
        </div>
        <Reveal className="cart-empty">
          <h2>Nothing here yet</h2>
          <p>Browse the catalog and add the packages that fit your next quarter.</p>
          <Link to="/services" className="btn btn-primary btn-icon">
            <IconGrid size={18} />
            Browse services
            <IconArrow size={16} className="btn-trail" />
          </Link>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="page-hero anim-page">
        <h1>Cart</h1>
        <p>
          {itemCount} item{itemCount === 1 ? '' : 's'} ready to scope. Adjust quantities, then check
          out.
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item, i) => {
            const service = getService(item.serviceId)
            if (!service) return null
            return (
              <Reveal key={item.serviceId} className="cart-item" delay={i * 60}>
                <div>
                  <h3>{service.name}</h3>
                  <p className="muted">
                    {formatPrice(service.price, service.unit)} · {service.tagline}
                  </p>
                  <div className="cart-item-controls">
                    <div className="qty" aria-label="Quantity">
                      <button
                        type="button"
                        aria-label="Decrease"
                        onClick={() => setQuantity(item.serviceId, item.quantity - 1)}
                      >
                        <IconMinus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase"
                        onClick={() => setQuantity(item.serviceId, item.quantity + 1)}
                      >
                        <IconPlus size={14} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="link-btn link-btn-icon"
                      onClick={() => removeItem(item.serviceId)}
                    >
                      <IconTrash size={14} />
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item-price">
                  {formatPrice(service.price * item.quantity, 'project')}
                  {service.unit === 'month' && (
                    <div className="muted" style={{ fontWeight: 500, fontSize: '0.8rem' }}>
                      billed monthly
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <aside className="cart-summary anim-slide-in">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal, 'project')}</span>
          </div>
          <div className="summary-row">
            <span>Kickoff call</span>
            <span>Included</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(subtotal, 'project')}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary btn-icon">
            Proceed to checkout
            <IconArrow size={16} className="btn-trail" />
          </Link>
          <p className="note">
            Checkout sends a project request to our team. Monthly services renew until paused.
          </p>
        </aside>
      </div>
    </div>
  )
}
