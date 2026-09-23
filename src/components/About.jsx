import React from 'react';

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-card">
          <span className="section-subtitle">Our Story & Mission</span>
          <h2 className="section-title">About Bella Bride</h2>
          <div className="section-divider"></div>
          <p className="about-text">
            Bella Bride Wedding Salon helps every bride find a dress that makes her feel beautiful and confident on her special day.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Years of Excellence</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">1,500+</span>
              <span className="highlight-label">Happy Brides</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Personalized Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
