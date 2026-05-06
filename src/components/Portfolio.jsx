import React, { useState } from 'react'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const products = [
    { id: 1, category: 'spoons', title: 'Classic Cooking Spoon', img: '/images/Classic Cooking Spoon.jpg', desc: 'A sturdy daily spoon for stirring, serving, and sautéing.', meta: ['Food-safe oil', 'Medium'] },
    { id: 2, category: 'spoons', title: 'Flat Spatula', img: '/images/Flat Spatula.jpg', desc: 'Great for flipping, scraping, and mixing in non-stick pans.', meta: ['Smooth edge', 'Wide'] },
    { id: 3, category: 'boards', title: 'Chopping Board', img: '/images/Chopping Board.jpg', desc: 'Thick, stable board that\'s gentle on knives.', meta: ['Juice groove', 'Large'] },
    { id: 4, category: 'boards', title: 'Serving Board', img: '/images/Serving Board.jpg', desc: 'Perfect for cheese, bread, and table presentation.', meta: ['Handle', 'Oval'] },
    { id: 5, category: 'mortars', title: 'Wood Mortar & Pestle', img: '/images/Wood Mortar & Pestle.jpg', desc: 'Crush spices and herbs with comfortable grip and control.', meta: ['Deep bowl', 'Heavy'] },
    { id: 6, category: 'sets', title: 'Starter Kitchen Set', img: '/images/Starter Kitchen Set.jpg', desc: 'Spoon + spatula + small board. Best value bundle.', meta: ['Bundle', 'Gift box'] },
    { id: 7, category: 'sets', title: 'Utensil Set', img: '/images/Utensil Set.jpg', desc: 'A clean matching set for everyday cooking.', meta: ['Matched grain', 'Finish: oil'] },
    { id: 8, category: 'spoons', title: 'Stirring Spoon (Detail)', img: '/images/Stirring Spoon (Detail).jpg', desc: 'Smooth edges and balanced handle for comfort.', meta: ['Hand-sanded', 'Lightweight'] },
    { id: 9, category: 'boards', title: 'Board Surface Finish', img: '/images/Board Detail.jpg', desc: 'Food-safe finish that highlights the wood grain.', meta: ['Sealed', 'Easy care'] },
    { id: 10, category: 'mortars', title: 'Mortar Close‑Up', img: '/images/Mortar Close‑Up.jpg', desc: 'Deep bowl for spices, herbs, and garlic.', meta: ['Deep bowl', 'Stable base'] },
    { id: 11, category: 'spoons', title: 'Spatula (Detail)', img: '/images/Spatula (Detail).jpg', desc: 'Thin edge for scraping and flipping without scratching.', meta: ['Thin edge', 'Non‑scratch'] },
    { id: 12, category: 'boards', title: 'Serving Board (Alt)', img: '/images/Serving Board (Alt).jpg', desc: 'Made for table presentation and everyday use.', meta: ['Rounded edges', 'Table ready'] },
    { id: 13, category: 'spoons', title: 'Cooking Spoon (Alt)', img: '/images/Cooking Spoon (Alt).jpg', desc: 'A versatile spoon for soups, sauces, and stew.', meta: ['Comfort grip', 'Everyday'] },
    { id: 14, category: 'mortars', title: 'Mortar & Pestle (Alt)', img: '/images/Mortar & Pestle (Alt).jpg', desc: 'Crafted for control and comfortable grinding.', meta: ['Heavy', 'Ergonomic'] },
    { id: 15, category: 'boards', title: 'Chopping Board (Alt)', img: '/images/Chopping Board (Alt).jpg', desc: 'Thick and stable, ideal for daily prep.', meta: ['Thick cut', 'Stable'] },
    { id: 16, category: 'sets', title: 'Gift Bundle', img: '/images/Gift Bundle.jpg', desc: 'A gift-ready selection of wooden essentials.', meta: ['Gift-ready', 'Custom options'] },
    { id: 17, category: 'spoons', title: 'Spoon Texture', img: '/images/Spoon Texture.jpg', desc: 'Showcasing smooth grain and finish.', meta: ['Smooth grain', 'Polished'] },
    { id: 18, category: 'boards', title: 'Board Detail', img: '/images/Board Detail.jpg', desc: 'Edge profile and finish detail.', meta: ['Edge detail', 'Finished'] },
    { id: 19, category: 'sets', title: 'Utensil Collection', img: '/images/Utensil Collection.jpg', desc: 'A collection view of multiple pieces together.', meta: ['Collection', 'Handmade'] },
    { id: 20, category: 'mortars', title: 'Craftsmanship Close‑Up', img: '/images/Craftsmanship Close‑Up.jpg', desc: 'A closer look at the wood grain and finishing.', meta: ['Grain', 'Finish'] },
  ]

  const filteredProducts = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="section" aria-label="Portfolio">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <img className="section-logo" src="/images/logo.png" alt="" loading="lazy" data-logo />
            <div>
              <h2>Portfolio</h2>
              <p className="muted">A selection of handcrafted wooden utensils and kitchen pieces.</p>
            </div>
          </div>

          <div className="controls" role="group" aria-label="Portfolio filters">
            {['all', 'spoons', 'boards', 'mortars', 'sets'].map(filter => (
              <button
                key={filter}
                className={`chip ${activeFilter === filter ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid" data-portfolio-grid>
          {filteredProducts.map(product => (
            <article key={product.id} className="card" data-category={product.category}>
              <div className="card-media">
                <img src={product.img} alt={product.title} loading="lazy" />
              </div>
              <div className="card-top">
                <h3>{product.title}</h3>
                <span className="badge">Off 25%</span>
              </div>
              <p className="muted">{product.desc}</p>
              <div className="card-meta">
                {product.meta.map((m, idx) => (
                  <span key={idx} className="meta">{m}</span>
                ))}
              </div>
              <div className="card-actions">
                <a className="btn btn-small" href="#contact">Request similar</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
