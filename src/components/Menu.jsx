import { starters, mains, desserts, drinks, chefFavorites } from '@/data/menu';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        <div className="section-header">
          <h2>Curated Menu</h2>
          <p>A selection of our finest creations.</p>
        </div>

        {/* Chef's Favorites Showcase */}
        <div className="menu-category">
          <h3>Chef’s Favorites</h3>
          <div className="chef-favorites-grid">
            {chefFavorites.map((item, idx) => (
              <div key={idx} className="favorite-card">
                <img src={item.image} alt={item.title} />
                <div className="favorite-info">
                  <h4>{item.title}</h4>
                  <span className="item-price">{item.price}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Starters */}
        <div className="menu-category">
          <h3>Starters</h3>
          <div className="menu-grid">
            {starters.map((item, idx) => <MenuItem key={idx} {...item} />)}
          </div>
        </div>

        {/* Mains */}
        <div className="menu-category">
          <h3>Mains</h3>
          <div className="menu-grid">
            {mains.map((item, idx) => <MenuItem key={idx} {...item} />)}
          </div>
        </div>

        {/* Desserts */}
        <div className="menu-category">
          <h3>Desserts</h3>
          <div className="menu-grid">
            {desserts.map((item, idx) => <MenuItem key={idx} {...item} />)}
          </div>
        </div>

        {/* Drinks */}
        <div className="menu-category">
          <h3>Drinks & Cocktails</h3>
          <div className="menu-grid">
            {drinks.map((item, idx) => <MenuItem key={idx} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}