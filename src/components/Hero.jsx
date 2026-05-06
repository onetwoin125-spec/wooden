import React from 'react'

function Hero() {
  return (
    <section id="home" className="section hero" aria-label="Home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hand-finished. Food-safe. Built to last.</p>
          <h1>Wooden tools that make cooking feel effortless.</h1>
          <p className="lede">
            Discover handcrafted wooden spoons, boards, mortars, and kitchen essentials—made for daily cooking and
            easy care.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#portfolio">Browse portfolio</a>
            <a className="btn btn-ghost" href="#contact">Request a quote</a>
          </div>

          <dl className="hero-stats" aria-label="Highlights">
            <div className="stat">
              <dt>Materials</dt>
              <dd>Olive • Beech • Walnut</dd>
            </div>
            <div className="stat">
              <dt>Finish</dt>
              <dd>Food-grade oil</dd>
            </div>
            <div className="stat">
              <dt>Shipping</dt>
              <dd>Fast local delivery</dd>
            </div>
          </dl>
        </div>

        <div className="hero-card" aria-label="Featured product">
          <div className="hero-card-top">
            <span className="pill">Featured</span>
            <span className="price">Handcrafted</span>
          </div>
          <div className="hero-card-body">
            <h2 className="hero-card-title">Chef Spoon Set</h2>
            <p className="muted">Heat-resistant, gentle on pans, and comfortable in the hand.</p>
            <ul className="checklist">
              <li>Non-scratch</li>
              <li>Easy to clean</li>
              <li>Gift-ready packaging</li>
            </ul>
          </div>
          <div className="hero-card-actions">
            <a className="btn btn-secondary" href="#portfolio">View work</a>
            <a className="btn btn-link" href="#terms">Read terms</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
