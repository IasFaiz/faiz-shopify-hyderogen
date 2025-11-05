import {NavLink} from 'react-router';

export function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1rem',
        position: 'relative',
        backgroundColor: '#f6f5f4',
      }}
    >
      <div className="hero-content" style={{maxWidth: '1200px', zIndex: 1}}>
        <h1
          className="hero-title"
          style={{
            fontSize: '3rem',
            fontWeight: 300,
            marginBottom: '1.5rem',
            letterSpacing: '-0.36px',
          }}
        >
          STUDIO ABRASH
        </h1>
        <p
          className="hero-subtitle"
          style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Curated Living Spaces
        </p>
        <NavLink
          to="/projects"
          className="hero-button"
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
          EXPLORE COLLECTION
        </NavLink>
      </div>
    </section>
  );
}
