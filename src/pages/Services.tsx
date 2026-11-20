import { useMemo, useState } from 'react'
import {
  categoryLabels,
  services,
  type Service,
} from '../data/services'
import { ServiceRow } from '../components/ServiceRow'
import { Reveal } from '../components/Reveal'

const filters: Array<'all' | Service['category']> = [
  'all',
  'strategy',
  'creative',
  'growth',
  'systems',
]

export function Services() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return services
    return services.filter((s) => s.category === filter)
  }, [filter])

  return (
    <div className="container">
      <div className="page-hero anim-page">
        <h1>Services</h1>
        <p>
          Every package is cart-ready. Stack what you need for launch, growth, or a full marketing
          rebuild.
        </p>
      </div>

      <div className="filter-bar anim-page" role="tablist" aria-label="Filter services" style={{ animationDelay: '60ms' }}>
        {filters.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`filter-btn${filter === key ? ' active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {key === 'all' ? 'All' : categoryLabels[key]}
          </button>
        ))}
      </div>

      <div className="service-list" style={{ marginBottom: '4rem' }}>
        {filtered.map((service, i) => (
          <Reveal key={service.id} delay={i * 55}>
            <ServiceRow service={service} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
