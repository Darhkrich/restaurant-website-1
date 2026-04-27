'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">Lumière & Basil</div>
        
        {/* Hamburger / Close button */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile overlay + full‑width menu panel */}
        <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu} />
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Our Story</a></li>
          <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#reservation" className="btn" onClick={closeMenu}>Book a Table</a></li>
        </ul>
      </div>
    </nav>
  );
}