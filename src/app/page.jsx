'use client';
import { useState } from 'react';

export default function Home() {
  // Existing state for form
  const [formData, setFormData] = useState({ name: '', date: '', guests: '2' });
  
  // NEW: State for Lightbox
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Request Sent!");
  }

  // Helper to open lightbox
  const openLightbox = (src) => {
    setLightboxSrc(src);
  };

  return (
    <main>
      {/* --- Navigation --- */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Lumière & Basil</div>
          <ul className="nav-links">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reservation" className="btn">Book a Table</a></li>
          </ul>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Est. 2024</p>
          <h1>Taste the <br/> Extraordinary</h1>
          <p style={{marginBottom: '30px', maxWidth: '600px', marginInline: 'auto'}}>
            A culinary journey where tradition meets modern innovation.
          </p>
          <a href="#menu" className="btn">View Menu</a>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="section-padding container">
        <div className="about-grid">
          <div className="about-text">
            <h2>The Art of Dining</h2>
            <p style={{marginBottom: '20px'}}>
              At Lumière & Basil, food is emotion. Chef Antoine leads a kitchen rooted in 
              sustainable sourcing and artistic plating.
            </p>
            <p>Every dish tells a story of the seasons.</p>
            <br />
            <div style={{fontFamily: 'cursive', fontSize: '2rem', color: '#D4AF37', opacity: 0.8}}>
                Antoine R.
            </div>
          </div>
          <div className="about-img-wrapper">
             <img 
               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
               alt="Chef plating food" 
               className="about-img"
             />
          </div>
        </div>
      </section>

      {/* --- Menu Section --- */}
      <section id="menu" className="section-padding menu-section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2>Curated Menu</h2>
            <p>A selection of our finest creations.</p>
          </div>

          <div className="menu-category">
            <h3>Starters</h3>
            <div className="menu-grid">
              <MenuItem title="Truffle Arancini" price="$18" desc="Crispy risotto balls, black truffle, parmesan foam." />
              <MenuItem title="Scallop Carpaccio" price="$24" desc="Hokkaido scallops, yuzu pearls, micro cilantro." />
              <MenuItem title="Wagyu Beef Tartare" price="$28" desc="Hand-cut beef, cured egg yolk, toasted brioche." />
            </div>
          </div>

          <div className="menu-category">
            <h3>Mains</h3>
            <div className="menu-grid">
              <MenuItem title="Pan-Seared Sea Bass" price="$42" desc="Lemon butter sauce, asparagus, saffron risotto." />
              <MenuItem title="Duck Confit" price="$38" desc="Slow-cooked duck leg, cherry glaze, potato gratin." />
              <MenuItem title="Wild Mushroom Risotto" price="$32" desc="Arborio rice, porcini mushrooms, aged parmesan." />
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (With Click Handlers) --- */}
      <section id="gallery" className="section-padding container">
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
           <h2>Visual Feast</h2>
           <p>Click any image to enlarge.</p>
        </div>
        
        <div className="gallery-grid">
            <GalleryItem 
              src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop"
              tag="Mixology"
              size="wide"
              onClick={openLightbox}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop"
              tag="Plating"
              size="tall"
              onClick={openLightbox}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
              tag="Ambiance"
              onClick={openLightbox}
            />
            <GalleryItem 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              tag="Freshness"
              onClick={openLightbox}
            />
             <GalleryItem 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              tag="Fine Dining"
              size="wide"
              onClick={openLightbox}
            />
        </div>
      </section>

      {/* --- Visual Break --- */}
      <section className="section-padding" style={{background: 'url(https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop) fixed center/cover', height: '400px', position: 'relative'}}>
        <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{color: '#fff', fontSize: '3rem', textAlign: 'center'}}>Atmosphere is <br/>Everything</h2>
        </div>
      </section>

      {/* --- Reservation Section --- */}
      <section id="reservation" className="section-padding container">
        <div className="about-grid">
          <div>
             <h2>Book Your Table</h2>
             <p>Reservations are recommended.</p>
             <ul style={{marginTop: '20px', listStyle: 'none', color: 'var(--text-muted)'}}>
               <li style={{marginBottom: '10px'}}>📍 123 Culinary Avenue, Food District</li>
               <li style={{marginBottom: '10px'}}>📞 (555) 123-4567</li>
               <li>✉️ reservations@lumierebasil.com</li>
             </ul>
          </div>
          
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="date" name="date" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <select name="guests" onChange={handleChange}>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4+ People</option>
              </select>
            </div>
            <button type="submit" className="btn" style={{width: '100%', textAlign: 'center'}}>Confirm Reservation</button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <div className="container">
          <div className="logo" style={{marginBottom: '20px'}}>Lumière & Basil</div>
          <p>© 2024 Lumière & Basil Restaurant.</p>
        </div>
      </footer>

      {/* --- LIGHTBOX COMPONENT (Rendered if state exists) --- */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
             <span className="lightbox-close" onClick={() => setLightboxSrc(null)}>&times; Close</span>
             <img src={lightboxSrc} alt="Enlarged view" className="lightbox-img" />
          </div>
        </div>
      )}

    </main>
  );
}

// --- Helper Components ---

function MenuItem({ title, price, desc }) {
  return (
    <div className="menu-item">
      <div className="item-header">
        <span>{title}</span>
        <span className="item-price">{price}</span>
      </div>
      <p style={{fontSize: '0.9rem'}}>{desc}</p>
    </div>
  );
}

// Cleaned up Gallery Item Component
function GalleryItem({ src, tag, size, onClick }) {
  return (
    <div 
      className={`gallery-item ${size || ''}`} 
      onClick={() => onClick(src)}
    >
      <img src={src} className="gallery-img" alt={tag} />
      <div className="gallery-overlay"><span>{tag}</span></div>
    </div>
  );
}