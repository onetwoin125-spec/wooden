import React from 'react'

function Header() {
  return (
    <header className="site-header" data-header>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Mondo wooden utensils Home">
          <span className="brand-mark" aria-hidden="true">
            <img className="brand-logo" src="/images/logo.png" alt="" loading="eager" data-logo />
            <span className="brand-fallback">WC</span>
          </span>
          <span className="brand-text">
            <span className="brand-name">Mondo wooden utensils</span>
            <span className="brand-tag">Wooden cooking essentials</span>
          </span>
        </a>

        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span className="nav-toggle-lines" aria-hidden="true"></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <button className="theme-toggle" type="button" aria-label="Toggle theme">
          <span className="theme-ico" aria-hidden="true">◐</span>
          <span className="theme-text">Theme</span>
        </button>

        <nav id="site-nav" className="nav">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#videos">Videos</a>
          <a className="nav-link" href="#terms">Terms</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="nav-cta" href="#portfolio">View work</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
