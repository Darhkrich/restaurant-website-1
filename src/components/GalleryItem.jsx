export default function GalleryItem({ src, tag, size, onClick }) {
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