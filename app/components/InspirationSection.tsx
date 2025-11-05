import {NavLink} from 'react-router';

export function InspirationSection() {
  const inspirations = [
    {
      title: 'Design Trends 2023',
      description: 'The latest trends in interior design',
      image: '/images/design-trends.jpg',
      link: '/journal/design-trends-2023',
    },
    {
      title: 'Color Palettes',
      description: 'How to choose the perfect colors for your space',
      image: '/images/color-palettes.jpg',
      link: '/journal/color-palettes',
    },
    {
      title: 'Sustainable Living',
      description: 'Eco-friendly design solutions for modern homes',
      image: '/images/sustainable-living.jpg',
      link: '/journal/sustainable-living',
    },
    {
      title: 'Small Spaces',
      description: 'Maximizing functionality in compact areas',
      image: '/images/small-spaces.jpg',
      link: '/journal/small-spaces',
    },
  ];

  return (
    <section className="inspiration-section" style={{padding: '5rem 0'}}>
      <div
        className="section-header"
        style={{textAlign: 'center', marginBottom: '3rem'}}
      >
        <h2
          className="section-title"
          style={{textAlign: 'center', marginBottom: '3rem', fontWeight: 300}}
        >
          INSPIRATION
        </h2>
        <p
          className="section-subtitle"
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Get inspired by our latest articles and ideas
        </p>
      </div>

      <div
        className="inspiration-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {inspirations.map((inspiration, index) => (
          <div
            key={index}
            className="inspiration-card"
            style={{textAlign: 'center'}}
          >
            <div
              className="inspiration-image"
              style={{height: '192px', marginBottom: '1.5rem'}}
            >
              {/* Placeholder for image */}
              <div
                className="image-placeholder"
                style={{background: '#e5e5e5', width: '100%', height: '100%'}}
              ></div>
            </div>
            <div className="inspiration-content">
              <h3
                className="inspiration-title"
                style={{fontSize: '1.5rem', marginBottom: '1rem'}}
              >
                {inspiration.title}
              </h3>
              <p
                className="inspiration-description"
                style={{marginBottom: '1.5rem'}}
              >
                {inspiration.description}
              </p>
              <NavLink
                to={inspiration.link}
                className="inspiration-link"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  border: '1px solid #393939',
                  background: 'transparent',
                  color: '#393939',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                READ MORE
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container" style={{textAlign: 'center'}}>
        <NavLink
          to="/journal"
          className="view-all-button"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            border: '1px solid #393939',
            background: 'transparent',
            color: '#393939',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          VIEW ALL ARTICLES
        </NavLink>
      </div>
    </section>
  );
}
