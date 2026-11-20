import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { company } from '../data/company'
import { ServiceRow } from '../components/ServiceRow'
import { HeroVisual } from '../components/HeroVisual'
import { Reveal } from '../components/Reveal'
import { IconArrow, IconCart, IconGrid, IconPhone } from '../components/Icons'

export function Home() {
  const featured = services.slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" aria-hidden="true" />
        <HeroVisual />
        <div className="hero-content">
          <h1 className="hero-brand">
            neo<span className="dot">marketing</span>
          </h1>
          <p className="hero-headline">
            Marketing that moves like the cloud — fast, layered, impossible to ignore.
          </p>
          <p className="hero-sub">
            Strategy, creative, paid media, and growth systems for brands that want signal, not
            noise.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary btn-icon">
              <IconGrid size={18} />
              Browse services
              <IconArrow size={16} className="btn-trail" />
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-icon">
              <IconPhone size={17} />
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className="section ceo-section">
        <div className="container">
          <Reveal>
            <p className="section-label">A note from our CEO</p>
            <blockquote className="ceo-message">
              <p>
                Brands do not win by shouting louder. They win by becoming unmistakably clear —
                in what they stand for, who they serve, and how every campaign earns attention
                rather than buying noise.
              </p>
              <p>
                At Neomarketing, we built a practice around that belief: sharp strategy, honest
                creative, and growth systems you can measure. From our studio in London to teams
                across the cloud, our promise is simple — marketing that moves with intention,
                and results you can defend in a boardroom.
              </p>
              <p>
                If you are ready to stop guessing and start compounding, we would be honoured to
                build with you.
              </p>
            </blockquote>
            <footer className="ceo-signoff">
              <div className="ceo-avatar" aria-hidden="true">
                CA
              </div>
              <div>
                <cite className="ceo-name">{company.ceo.name}</cite>
                <p className="ceo-title">{company.ceo.title}, Neomarketing</p>
              </div>
            </footer>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label">Selected services</p>
            <h2 className="section-title">Pick what you need. Add to cart. We build from there.</h2>
            <p className="section-desc">
              Transparent packages you can stack — from brand foundation to always-on growth.
            </p>
          </Reveal>
          <div className="service-list">
            {featured.map((service, i) => (
              <Reveal key={service.id} delay={i * 70}>
                <ServiceRow service={service} showDescription={false} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/services" className="btn btn-ghost btn-icon">
                View all services
                <IconArrow size={16} className="btn-trail" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="container band-row">
          <Reveal>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-label">How we work</p>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Four steps. No theater.
              </h2>
              <p className="section-desc">
                You assemble a stack in the cart. We scope, launch, and tune until the numbers move.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/cart" className="btn btn-primary btn-icon">
              <IconCart size={18} />
              Open cart
              <IconArrow size={16} className="btn-trail" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label">Process</p>
            <h2 className="section-title">From brief to broadcast</h2>
          </Reveal>
          <div className="process-track">
            {[
              {
                num: '01',
                title: 'Assemble',
                text: 'Choose services that match your stage — strategy, creative, growth, or systems.',
              },
              {
                num: '02',
                title: 'Align',
                text: 'We lock goals, audiences, and success metrics in a kickoff that stays short.',
              },
              {
                num: '03',
                title: 'Ship',
                text: 'Creative and campaigns go live on a cadence you can feel week to week.',
              },
              {
                num: '04',
                title: 'Tune',
                text: 'Dashboards, tests, and ruthless cuts so budget follows what actually works.',
              },
            ].map((step, i) => (
              <Reveal key={step.num} className="process-step" delay={i * 90}>
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
