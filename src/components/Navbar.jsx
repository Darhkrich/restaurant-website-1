'use client';
import { useState } from 'react';
import styles from './Navbar.module.css'; // We'll move relevant styles here

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">Restaurant Name</div>
        <button 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? styles.active : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a></li>
          <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#reservation" className="btn" onClick={() => setMenuOpen(false)}>Book a Table</a></li>
        </ul>
      </div>
    </nav>
  );
}