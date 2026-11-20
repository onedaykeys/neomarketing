export const company = {
  ceo: {
    name: 'Mr Cyrus Anim',
    title: 'Founder & CEO',
  },
  address: {
    line1: 'Neomarketing Ltd',
    line2: 'Level 4, 1 Mark Square',
    line3: 'Shoreditch, London EC2A 4EG',
    country: 'United Kingdom',
  },
  email: 'hello@neomarketing.cloud',
  domain: 'neomarketing.cloud',
} as const

export const addressLines = [
  company.address.line1,
  company.address.line2,
  company.address.line3,
  company.address.country,
]

export const addressOneLine = `${company.address.line2}, ${company.address.line3}, ${company.address.country}`
