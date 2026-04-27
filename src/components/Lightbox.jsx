'use client';
import { useEffect, useCallback } from 'react';

export default function Lightbox({ src, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-close" onClick={onClose}>&times; Close</span>
        <img src={src} alt="Enlarged view" className="lightbox-img" />
      </div>
    </div>
  );
}