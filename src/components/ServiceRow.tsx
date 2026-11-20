import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  categoryLabels,
  formatPrice,
  type Service,
} from '../data/services'
import { useCart } from '../context/CartContext'
import { IconCart, IconCheck } from './Icons'

type Props = {
  service: Service
  showDescription?: boolean
}

export function ServiceRow({ service, showDescription = true }: Props) {
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    addItem(service.id)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1800)
  }

  return (
    <article className={`service-row${justAdded ? ' just-added' : ''}`}>
      <div>
        <div className="service-meta">
          <span className="service-cat">{categoryLabels[service.category]}</span>
          <h3 className="service-name">{service.name}</h3>
          <span className="service-price">{formatPrice(service.price, service.unit)}</span>
        </div>
        <p className="service-tagline">{service.tagline}</p>
        {showDescription && <p className="service-desc">{service.description}</p>}
        <ul className="deliverables">
          {service.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <div className="service-actions">
        <button
          type="button"
          className={`btn btn-ink btn-sm btn-icon${justAdded ? ' btn-success' : ''}`}
          onClick={handleAdd}
        >
          {justAdded ? <IconCheck size={16} /> : <IconCart size={16} />}
          {justAdded ? 'Added' : 'Add to cart'}
        </button>
        {justAdded && (
          <span className="added-toast">
            <Link to="/cart">View cart →</Link>
          </span>
        )}
      </div>
    </article>
  )
}
