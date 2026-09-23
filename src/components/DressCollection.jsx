import React from 'react';

const dresses = [
  {
    id: 'isabella',
    name: 'Isabella',
    description: 'A romantic A-line gown featuring delicate lace floral appliqués and a flowing tulle skirt.',
    price: '$1,850',
    tag: 'A-Line',
    bgGradient: 'linear-gradient(135deg, #fbf7f5 0%, #f4eae6 100%)',
    icon: '✨'
  },
  {
    id: 'sophia',
    name: 'Sophia',
    description: 'Timeless mermaid silhouette with an off-the-shoulder neckline and intricately embellished bodice.',
    price: '$2,200',
    tag: 'Mermaid',
    bgGradient: 'linear-gradient(135deg, #faf3f0 0%, #eddcd2 100%)',
    icon: '👑'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Grand ballgown with a shimmering satin bodice, cathedral-length train, and subtle sparkle accents.',
    price: '$2,500',
    tag: 'Ballgown',
    bgGradient: 'linear-gradient(135deg, #fdf8f5 0%, #f7e7e1 100%)',
    icon: '💎'
  },
  {
    id: 'olivia',
    name: 'Olivia',
    description: 'Modern bohemian sheath gown with intricate chantilly lace, open back, and airy flutter sleeves.',
    price: '$1,650',
    tag: 'Boho Sheath',
    bgGradient: 'linear-gradient(135deg, #f9f4f1 0%, #eadbd6 100%)',
    icon: '🌸'
  },
  {
    id: 'grace',
    name: 'Grace',
    description: 'Classic minimalist crepe dress with a sleek cowl neck, buttons trailing down the back, and tailored fit.',
    price: '$1,950',
    tag: 'Minimalist',
    bgGradient: 'linear-gradient(135deg, #fbf6f6 0%, #f2dfdd 100%)',
    icon: '🌿'
  },
  {
    id: 'victoria',
    name: 'Victoria',
    description: 'Regal silk mikado gown styled with a dramatic sweetheart neckline, hidden pockets, and detachable bow.',
    price: '$2,800',
    tag: 'Couture',
    bgGradient: 'linear-gradient(135deg, #fdf6f3 0%, #f5e1da 100%)',
    icon: '💍'
  }
];

export function DressCollection() {
  return (
    <section id="dresses" className="section dresses-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Gown Gallery</span>
          <h2 className="section-title">Wedding Dress Collection</h2>
          <div className="section-divider"></div>
        </div>

        <div className="dresses-grid">
          {dresses.map((dress) => (
            <div key={dress.id} className="dress-card">
              <div
                className="dress-image-placeholder"
                style={{ background: dress.bgGradient }}
              >
                <div className="dress-badge">{dress.tag}</div>
                <div className="dress-icon">{dress.icon}</div>
                <div className="dress-placeholder-text">{dress.name} Gown</div>
              </div>
              <div className="dress-card-body">
                <h3 className="dress-name">{dress.name}</h3>
                <p className="dress-description">{dress.description}</p>
                <div className="dress-card-footer">
                  <span className="dress-price">{dress.price}</span>
                  <a href="#contact" className="btn btn-outline-sm">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
