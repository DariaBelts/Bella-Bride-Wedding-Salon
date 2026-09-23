import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Bella Bride Wedding Salon</h3>
          <p className="footer-location">Chicago, IL</p>
          <p className="footer-tagline">Making bridal dreams come true.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#dresses">Dresses</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bella Bride Wedding Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
