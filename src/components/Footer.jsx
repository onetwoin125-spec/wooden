import React from 'react'

function Footer() {
  return (
    <>
      <footer className="site-footer" aria-label="Footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src="/images/logo.png" alt="" loading="lazy" data-logo />
              <span className="brand-fallback">MW</span>
            </span>
            <div>
              <strong>Mondo wooden utensils</strong>
              <p className="muted">Handcrafted wooden cooking products.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#videos">Videos</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social" aria-label="Footer social links">
            <a href="https://www.instagram.com/mondowoodenutensils" target="_blank" rel="noreferrer">
              <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 0 1 2.2 0Z" />
              </svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/mondowoodenutensils" target="_blank" rel="noreferrer">
              <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M13.5 22v-8h2.6l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.7-.1-1.8-.2-3-.2c-2.9 0-4.8 1.7-4.8 4.9V11H6.4v3h2.4v8h4.7Z" />
              </svg>
              Facebook
            </a>
            <a href="https://x.com/mondowoodenutensils" target="_blank" rel="noreferrer">
              <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z" />
              </svg>
              X
            </a>
            <a href="https://wa.me/250790701620?text=Hello%20mondowoodenutensils%2C%20I%27d%20like%20to%20order." target="_blank" rel="noreferrer">
              <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 0 16c-1.3 0-2.6-.3-3.8-.9l-.3-.1l-2.9.7l.8-2.7l-.2-.3A8 8 0 0 1 12 4Zm4.6 10.5c-.2-.1-1.2-.6-1.4-.7c-.2-.1-.3-.1-.5.1c-.1.2-.6.7-.7.9c-.1.2-.3.2-.5.1c-.2-.1-.9-.3-1.6-1c-.6-.5-1-1.2-1.1-1.4c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5c.1-.2 0-.3 0-.5c-.1-.1-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3c-.2.2-.9.8-.9 2c0 1.2.9 2.4 1.1 2.5c.1.2 1.8 2.8 4.4 3.8c.6.3 1.1.4 1.5.5c.6.2 1.2.2 1.6.1c.5-.1 1.2-.5 1.4-1c.2-.5.2-.9.1-1c-.1-.2-.2-.2-.4-.3Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="dev" aria-label="Developer details">
            <p className="muted dev-title">Developed by <strong className="dev-name">AHOYANKUYE</strong></p>
            <div className="dev-links" aria-label="Developer social links">
              <a className="dev-btn" href="https://www.instagram.com/nkuye.gad/" target="_blank" rel="noopener noreferrer" aria-label="Developer Instagram">
                <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 0 1 2.2 0Z" />
                </svg>
                Instagram
              </a>
              <a className="dev-btn" href="https://x.com/Ahoyankuye2006/" target="_blank" rel="noopener noreferrer" aria-label="Developer X">
                <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z" />
                </svg>
                X
              </a>
              <a className="dev-btn" href="https://wa.me/250795252386?text=Hello%20Gad%2C%20I%20want%20to%20work%20with%20you." target="_blank" rel="noopener noreferrer" aria-label="Developer WhatsApp">
                <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 0 16c-1.3 0-2.6-.3-3.8-.9l-.3-.1l-2.9.7l.8-2.7l-.2-.3A8 8 0 0 1 12 4Zm4.6 10.5c-.2-.1-1.2-.6-1.4-.7c-.2-.1-.3-.1-.5.1c-.1.2-.6.7-.7.9c-.1.2-.3.2-.5.1c-.2-.1-.9-.3-1.6-1c-.6-.5-1-1.2-1.1-1.4c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5c.1-.2 0-.3 0-.5c-.1-.1-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3c-.2.2-.9.8-.9 2c0 1.2.9 2.4 1.1 2.5c.1.2 1.8 2.8 4.4 3.8c.6.3 1.1.4 1.5.5c.6.2 1.2.2 1.6.1c.5-.1 1.2-.5 1.4-1c.2-.5.2-.9.1-1c-.1-.2-.2-.2-.4-.3Z" />
                </svg>
                WhatsApp
              </a>
              <a className="dev-btn" href="https://www.facebook.com/nkuye.gad" target="_blank" rel="noopener noreferrer" aria-label="Developer Facebook">
                <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M13.5 22v-8h2.6l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.7-.1-1.8-.2-3-.2c-2.9 0-4.8 1.7-4.8 4.9V11H6.4v3h2.4v8h4.7Z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <p className="footer-copy muted">© <span data-year></span> Mondo wooden utensils. All rights reserved.</p>
        </div>
      </footer>

      <button className="to-top" type="button" data-to-top aria-label="Back to top">
        <span aria-hidden="true">↑</span>
      </button>
    </>
  )
}

export default Footer
