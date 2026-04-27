import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Guests Say</h2>
          <p>Real experiences from our diners.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="quote">“{t.quote}”</p>
              <div className="author">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}