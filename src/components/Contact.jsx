import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      weddingDate: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Book an Appointment</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card">
            <h3>Visit Our Salon</h3>
            <p className="contact-location">
              <strong>Bella Bride Wedding Salon</strong><br />
              Chicago, IL
            </p>
            <div className="info-details">
              <p><strong>Hours:</strong> Tue - Sun: 10:00 AM - 6:00 PM</p>
              <p><strong>Phone:</strong> (312) 555-0199</p>
              <p><strong>Email:</strong> appointments@bellabride.com</p>
            </div>
            <div className="appointment-note">
              <p>💡 Appointments are recommended to ensure personalized attention with our senior stylists.</p>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="submission-success">
                <div className="success-icon">💐</div>
                <h3>Thank You, {formData.name || 'Bride'}!</h3>
                <p>Your appointment request has been received. Our team will contact you shortly to confirm your visit.</p>
                <button onClick={handleReset} className="btn btn-primary mt-4">
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(312) 555-0100"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="weddingDate">Wedding Date *</label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dream dress style, preferred fitting dates, or any special requests..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
