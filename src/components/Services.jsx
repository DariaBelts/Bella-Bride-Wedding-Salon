import React from 'react';

const services = [
  {
    id: 'consultation',
    title: 'Bridal Consultation',
    description: 'Enjoy a private 90-minute styling session with an expert bridal stylist, champagne, and dedicated lounge.',
    icon: '🥂'
  },
  {
    id: 'fitting',
    title: 'Dress Fitting',
    description: 'Personalized fitting sessions to ensure your gown accentuates your beauty and feels perfectly tailored.',
    icon: '🪡'
  },
  {
    id: 'alterations',
    title: 'Alterations',
    description: 'Master in-house seamstresses carefully customize every detail for flawless precision and ultimate comfort.',
    icon: '✂️'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Curated selection of handcrafted veils, headpieces, tiaras, jewelry, and belts to complete your bridal look.',
    icon: '✨'
  }
];

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Tailored For You</span>
          <h2 className="section-title">Our Salon Services</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
