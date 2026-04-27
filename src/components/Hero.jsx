export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Est. 2024</p>
        <h1>Taste the <br/> Extraordinary</h1>
        <p className="hero-description">
          A culinary journey where tradition meets modern innovation.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn">View Menu</a>
          <a href="#reservation" className="btn btn-outline">Reserve</a>
        </div>
        {/* Today's Special Badge */}
        <div className="special-badge">
          <span>✨ Tonight’s Special: Lobster Bisque</span>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}