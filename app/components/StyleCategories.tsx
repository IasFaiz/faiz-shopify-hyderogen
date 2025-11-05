import {NavLink} from 'react-router';

export function StyleCategories() {
  const categories = [
    {
      name: 'Modern',
      image: '/images/modern.jpg',
      link: '/projects?style=modern',
    },
    {
      name: 'Traditional',
      image: '/images/traditional.jpg',
      link: '/projects?style=traditional',
    },
    {
      name: 'Eclectic',
      image: '/images/eclectic.jpg',
      link: '/projects?style=eclectic',
    },
    {
      name: 'Minimal',
      image: '/images/minimal.jpg',
      link: '/projects?style=minimal',
    },
  ];

  return (
    <section className="style-categories" style={{padding: '5rem 0'}}>
      <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h2 className="section-title" style={{textAlign: 'center', marginBottom: '3rem', fontWeight: 300}}>STYLE CATEGORIES</h2>
        <p className="section-subtitle" style={{textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>Explore our curated collections</p>
      </div>

      <div className="categories-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem', marginBottom: '4rem'}}>
        {categories.map((category, index) => (
          <div key={index} className="category-card" style={{position: 'relative', overflow: 'hidden', height: '320px', cursor: 'pointer'}}>
            <div className="category-image" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
              {/* Placeholder for image */}
              <div className="image-placeholder" style={{background: '#e5e5e5', width: '100%', height: '100%'}}></div>
            </div>
            <div className="category-content" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem', background: 'rgba(255, 255, 255, 0.7)', transition: 'background 0.3s ease'}}>
              <h3 className="category-name" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{category.name}</h3>
              <NavLink to={category.link} className="category-link" style={{display: 'inline-block', padding: '0.75rem 2rem', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid #393939', background: 'transparent', color: '#393939', cursor: 'pointer', transition: 'all 0.2s ease'}}>
                VIEW COLLECTION
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
