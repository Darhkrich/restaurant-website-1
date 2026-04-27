'use client';
import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import { galleryImages } from '@/data/gallery';

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <>
      <section id="gallery" className="section-padding container">
        <div className="section-header">
           <h2>Visual Feast</h2>
           <p>Click any image to enlarge.</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <GalleryItem 
              key={idx}
              src={img.src} 
              tag={img.tag} 
              size={img.size} 
              onClick={setLightboxSrc} 
            />
          ))}
        </div>
      </section>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
  );
}