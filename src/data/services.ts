export type Service = {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  unit: 'project' | 'month'
  category: 'strategy' | 'creative' | 'growth' | 'systems'
  deliverables: string[]
}

export const services: Service[] = [
  {
    id: 'brand-strategy',
    name: 'Brand Strategy',
    tagline: 'Positioning that cuts through noise',
    description:
      'Audience research, competitive framing, voice guidelines, and a sharp narrative platform your team can ship against.',
    price: 1200,
    unit: 'project',
    category: 'strategy',
    deliverables: ['Brand audit', 'Positioning brief', 'Messaging map', 'Voice kit'],
  },
  {
    id: 'social-engine',
    name: 'Social Engine',
    tagline: 'Always-on presence with intent',
    description:
      'Monthly content systems across LinkedIn, Instagram, and X — calendars, creative, captions, and community response.',
    price: 1800,
    unit: 'month',
    category: 'creative',
    deliverables: ['12–16 posts', 'Stories / shorts', 'Community replies', 'Monthly report'],
  },
  {
    id: 'seo-growth',
    name: 'SEO Growth Engine',
    tagline: 'Search that compounds',
    description:
      'Technical SEO, topical clusters, on-page rewrites, and link acquisition roadmap built for durable organic growth.',
    price: 2400,
    unit: 'month',
    category: 'growth',
    deliverables: ['Site audit', 'Keyword map', '4 articles', 'Technical fixes'],
  },
  {
    id: 'paid-media',
    name: 'Paid Media Lab',
    tagline: 'Spend that earns its keep',
    description:
      'Meta + Google campaigns with creative testing loops, audience refinement, and weekly optimization sprints.',
    price: 1500,
    unit: 'month',
    category: 'growth',
    deliverables: ['Campaign build', 'Creative tests', 'Weekly ops', 'ROAS dashboard'],
  },
  {
    id: 'content-studio',
    name: 'Content Studio',
    tagline: 'Assets people actually stop for',
    description:
      'Photo, motion, and short-form video packages for launches, founders, and product storytelling.',
    price: 2000,
    unit: 'project',
    category: 'creative',
    deliverables: ['Shoot day', '8 stills', '3 motion cuts', 'Usage rights'],
  },
  {
    id: 'landing-systems',
    name: 'Landing Systems',
    tagline: 'Pages built to convert',
    description:
      'High-converting landing pages and micro-sites with copy, layout, and analytics hooks — ready for paid traffic.',
    price: 3500,
    unit: 'project',
    category: 'systems',
    deliverables: ['UX wire', 'Copy + design', 'Dev handoff', 'A/B variants'],
  },
  {
    id: 'email-crm',
    name: 'Email & CRM Flows',
    tagline: 'Nurture that feels human',
    description:
      'Lifecycle flows, launch sequences, and CRM hygiene so every lead has a next step worth opening.',
    price: 1100,
    unit: 'project',
    category: 'systems',
    deliverables: ['Flow map', '5–7 emails', 'Segmentation', 'Klaviyo / HubSpot setup'],
  },
  {
    id: 'analytics',
    name: 'Analytics & Attribution',
    tagline: 'Clarity on what actually works',
    description:
      'Tracking plans, dashboards, and attribution models so budget decisions stop being guesswork.',
    price: 900,
    unit: 'project',
    category: 'systems',
    deliverables: ['Tracking plan', 'GA4 / ads sync', 'Looker board', 'Monthly readout'],
  },
]

export const categoryLabels: Record<Service['category'], string> = {
  strategy: 'Strategy',
  creative: 'Creative',
  growth: 'Growth',
  systems: 'Systems',
}

export function formatPrice(price: number, unit: Service['unit']) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
  return unit === 'month' ? `${formatted}/mo` : formatted
}
