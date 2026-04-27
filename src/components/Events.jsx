export default function Events() {
  return (
    <section className="section-padding events-section">
      <div className="container">
        <div className="section-header">
          <h2>Private Dining & Events</h2>
          <p>Celebrate in style.</p>
        </div>
        <div className="events-grid">
          <div className="event-card">
            <h3>Wine Room</h3>
            <p>Intimate space for up to 12 guests, perfect for wine tastings and private dinners.</p>
            <a href="#reservation" className="btn">Inquire</a>
          </div>
          <div className="event-card">
            <h3>The Garden Terrace</h3>
            <p>Outdoor seating under the stars, ideal for receptions and birthdays.</p>
            <a href="#reservation" className="btn">Inquire</a>
          </div>
          <div className="event-card">
            <h3>Chef’s Table</h3>
            <p>A front‑row seat to the kitchen, with a custom multi‑course menu.</p>
            <a href="#reservation" className="btn">Inquire</a>
          </div>
        </div>
      </div>
    </section>
  );
}