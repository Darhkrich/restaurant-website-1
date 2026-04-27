export default function About() {
  return (
    <section id="about" className="section-padding container">
      <div className="about-grid">
        <div className="about-text">
          <h2>The Art of Dining</h2>
          <p style={{marginBottom: '20px'}}>
            At Lumière & Basil, food is emotion. Chef Antoine leads a kitchen rooted in 
            sustainable sourcing and artistic plating.
          </p>
          <p>Every dish tells a story of the seasons.</p>
          <div className="chef-signature">Antoine R.</div>
          <div className="awards">
            <span>🏆 2 Michelin Stars</span>
            <span>🍷 Wine Spectator Award 2024</span>
            <span>🌿 Sustainable Restaurant Seal</span>
          </div>
        </div>
        <div className="about-img-wrapper">
           <img 
             src="/9.jpg" 
             alt="Chef plating food" 
             className="about-img"
           />
        </div>
      </div>
    </section>
  );
}