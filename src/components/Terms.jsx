import React from 'react'

function Terms() {
  const termsData = [
    {
      title: 'Ordering',
      content: 'Orders can be placed via the contact form. We confirm availability, price, and delivery time before production/shipping.'
    },
    {
      title: 'Delivery',
      content: 'Delivery timelines depend on stock and your location. Local delivery is available; courier shipping is offered on request.'
    },
    {
      title: 'Returns',
      content: 'If an item arrives damaged or incorrect, contact us within 48 hours. Custom engraved items may be non-returnable unless defective.'
    },
    {
      title: 'Care',
      content: 'Hand-wash only, dry immediately, and oil occasionally. Avoid soaking and dishwashers to prevent cracking.'
    },
    {
      title: 'Developer',
      content: 'This website was built by AHOYANKUYE GAD (full‑stack developer). Need a website like this? Contact me on WhatsApp +250 795 252 386 or via my social links below.'
    },
    {
      title: 'Supporter',
      content: 'Special thanks to MASENGESHO Yves Smyres for support and contribution.'
    },
  ]

  return (
    <section id="terms" className="section alt" aria-label="Terms">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Terms</h2>
            <p className="muted">Clear policies for ordering, delivery, and care.</p>
          </div>
        </div>

        <div className="terms">
          {termsData.map((term, idx) => (
            <article key={idx} className="term">
              <h3>{term.title}</h3>
              <p>{term.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Terms
