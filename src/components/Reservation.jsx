'use client';
import { useState } from 'react';
import styles from './Reservation.module.css';

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
    <section id="reservation" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <h2 className={styles.heading}>Book Your Table</h2>
            <p className={styles.subtitle}>
              Reserve an unforgettable dining experience. We’ll hold your table for 15 minutes.
            </p>

            <ul className={styles.contactList}>
              <li>📍 123 Culinary Avenue, Food District</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ reservations@lumierebasil.com</li>
            </ul>

            <div className={styles.openingHours}>
              <span className={styles.hoursLabel}>Opening Hours</span>
              <span>Mon–Thu: 18:00–22:00</span>
              <span>Fri–Sat: 18:00–23:00</span>
              <span>Sun: Closed</span>
            </div>
          </div>

          <div className={styles.cardRight}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" placeholder="Your name"
                  value={formData.name} onChange={handleChange} required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Date</label>
                  <input
                    id="date" name="date" type="date"
                    value={formData.date} onChange={handleChange} required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="time">Time</label>
                  <input
                    id="time" name="time" type="time"
                    value={formData.time} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="guests">Guests</label>
                <select
                  id="guests" name="guests" value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Special Requests</label>
                <textarea
                  id="message" name="message" rows="3"
                  placeholder="Allergies, celebrations, preferences…"
                  value={formData.message} onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting'
                  ? 'Securing your table…'
                  : status === 'success'
                    ? '✓ Reserved – See you soon!'
                    : 'Confirm Reservation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}