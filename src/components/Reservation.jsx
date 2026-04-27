'use client';
import { useState } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '19:00',
    guests: '2',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setFormData({ name: '', date: '', time: '19:00', guests: '2', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="reservation" className="section-padding container">
      <div className="about-grid">
        <div>
          <h2>Book Your Table</h2>
          <p>Reservations are recommended.</p>
          <ul className="contact-info">
            <li>📍 Location</li>
            <li>📞 (000) 123-4567</li>
            <li>✉️ reservations@restaurantemail.com</li>
          </ul>
          <div className="map-placeholder">
            {/* Google Maps iframe or static image */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.067618870924!2d-122.4194156846819!3d37.77492927975895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1610000000000" 
              width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"
              title="Restaurant location"
            ></iframe>
          </div>
        </div>
        
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group form-row">
            <div>
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4+ People</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Special Requests</label>
            <textarea id="message" name="message" rows="3" placeholder="Allergies, celebration…" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button 
            type="submit" className="btn" 
            style={{width: '100%', textAlign: 'center'}}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Reserved! ✓' : 'Confirm Reservation'}
          </button>
        </form>
      </div>
    </section>
  );
}