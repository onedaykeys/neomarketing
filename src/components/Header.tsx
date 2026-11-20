import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { IconCart } from './Icons'

export function Header() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    if (itemCount === 0) return
    setBump(true)
    const t = window.setTimeout(() => setBump(false), 450)
    return () => window.clearTimeout(t)
  }, [itemCount])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          neo<span>marketing</span>
        </Link>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={close}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={close}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <Link
            to="/cart"
            className={`nav-cart${bump ? ' cart-bump' : ''}`}
            onClick={close}
          >
            <IconCart size={17} />
            Cart
            {itemCount > 0 && <span className="nav-cart-count">{itemCount}</span>}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
