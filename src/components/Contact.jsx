import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ message: '', type: '', visible: false })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // Clear status messages when component mounts
    setStatus({ message: '', type: '', visible: false })
  }, [])

  const SERVICE_ID = 'service_c9d45le'
  const TEMPLATE_ID = 'template_uxssjk7'
  const PUBLIC_KEY = 'rNQ9-Wm6ZVPIFLOeU'

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formRef.current) return

    if ([SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].includes('YOUR_SERVICE_ID') ||
        [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].includes('YOUR_TEMPLATE_ID') ||
        [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].includes('YOUR_PUBLIC_KEY')) {
      setStatus({
        message: 'Email service is not configured. Please add your EmailJS service ID, template ID, and public key.',
        type: 'error',
        visible: true
      })
      return
    }

    setSubmitting(true)
    setStatus({ message: '', type: '', visible: false })

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus({ message: 'Message sent successfully. Thank you!', type: 'success', visible: true })
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        message: 'We could not send your message. Please try again later.',
        type: 'error',
        visible: true
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Contact</h2>
            <p className="muted">Send a message and we'll respond quickly.</p>
          </div>
        </div>

        <div className="contact-grid">
          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="location">Location [Country, City, Village]</label>
              <input id="location" name="location" type="text" placeholder="your location" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 ..." />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you want (products, quantity, location)..."
                required
              ></textarea>
              <p className="hint muted">Tell us what you want and we'll respond quickly.</p>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send message'}
              </button>
              <button className="btn btn-ghost" type="reset">Reset</button>
            </div>
            {status.visible && (
              <p className={status.type === 'success' ? 'form-success' : 'form-error'}>
                {status.message}
              </p>
            )}
          </form>

          <aside className="contact-card" aria-label="Business details">
            <h3>Business info</h3>
            <ul className="contact-list">
              <li><span className="k">Hours</span><span className="v">Mon–Sat, 8:00–18:00</span></li>
              <li><span className="k">Delivery</span><span className="v">Local + courier options</span></li>
              <li><span className="k">Customization</span><span className="v">Engraving available</span></li>
              <li><span className="k">WhatsApp</span><span className="v">+250 790 701 620</span></li>
            </ul>
            <div className="social">
              <h4>Chat with us</h4>
              <div className="social-links" aria-label="Social media links">
                <a className="social-btn" href="https://www.instagram.com/mondowoodenutensils" target="_blank" rel="noreferrer">
                  <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 0 1 2.2 0Z" />
                  </svg>
                  Instagram
                </a>
                <a className="social-btn" href="https://www.facebook.com/mondowoodenutensils" target="_blank" rel="noreferrer">
                  <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M13.5 22v-8h2.6l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.7-.1-1.8-.2-3-.2c-2.9 0-4.8 1.7-4.8 4.9V11H6.4v3h2.4v8h4.7Z" />
                  </svg>
                  Facebook
                </a>
                <a className="social-btn" href="https://x.com/mondowoodenutensils" target="_blank" rel="noreferrer">
                  <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.5 3.9H5.7L17.8 20Z" />
                  </svg>
                  X
                </a>
                <a className="social-btn" href="https://wa.me/250790701620?text=Hello%20mondowoodenutensils%2C%20I%27d%20like%20to%20order." target="_blank" rel="noreferrer">
                  <svg className="social-ico" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 0 16c-1.3 0-2.6-.3-3.8-.9l-.3-.1l-2.9.7l.8-2.7l-.2-.3A8 8 0 0 1 12 4Zm4.6 10.5c-.2-.1-1.2-.6-1.4-.7c-.2-.1-.3-.1-.5.1c-.1.2-.6.7-.7.9c-.1.2-.3.2-.5.1c-.2-.1-.9-.3-1.6-1c-.6-.5-1-1.2-1.1-1.4c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5c.1-.2 0-.3 0-.5c-.1-.1-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.3c-.2.2-.9.8-.9 2c0 1.2.9 2.4 1.1 2.5c.1.2 1.8 2.8 4.4 3.8c.6.3 1.1.4 1.5.5c.6.2 1.2.2 1.6.1c.5-.1 1.2-.5 1.4-1c.2-.5.2-.9.1-1c-.1-.2-.2-.2-.4-.3Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <p className="muted social-hint">Chat with us on WhatsApp for orders and questions.</p>
            </div>
            <div className="callout">
              <h4>Care tip</h4>
              <p className="muted">Oil your boards monthly to keep the wood sealed and smooth.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
