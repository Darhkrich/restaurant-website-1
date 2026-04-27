export default function MenuItem({ title, price, desc, dietary }) {
  return (
    <div className="menu-item">
      <div className="item-header">
        <span>{title}</span>
        <span className="item-price">{price}</span>
      </div>
      <p className="item-desc">{desc}</p>
      {dietary && dietary.length > 0 && (
        <div className="dietary-badges">
          {dietary.map((d) => (
            <span key={d} className="badge">{d === 'vegetarian' ? '🌱 V' : d === 'gluten-free' ? '🌾 GF' : d}</span>
          ))}
        </div>
      )}
    </div>
  );
}