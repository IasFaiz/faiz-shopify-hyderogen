import {NavLink} from 'react-router';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Urban Loft',
      description: 'A modern loft space in the heart of the city',
      image: '/images/urban-loft.jpg',
      link: '/projects/urban-loft',
    },
    {
      title: 'Coastal Retreat',
      description: 'A serene beachfront property with ocean views',
      image: '/images/coastal-retreat.jpg',
      link: '/projects/coastal-retreat',
    },
    {
      title: 'Mountain Escape',
      description: 'A rustic yet luxurious cabin in the mountains',
      image: '/images/mountain-escape.jpg',
      link: '/projects/mountain-escape',
    },
  ];

  return (
    <section className="featured-projects" style={{padding: '5rem 0'}}>
      <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h2 className="section-title" style={{textAlign: 'center', marginBottom: '3rem', fontWeight: 300}}>FEATURED PROJECTS</h2>
        <p className="section-subtitle" style={{textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>Discover our latest design work</p>
      </div>

      <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem', marginBottom: '4rem'}}>
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div className="project-image" style={{flex: 1, height: '256px'}}>
              {/* Placeholder for image */}
              <div className="image-placeholder" style={{background: '#e5e5e5', width: '100%', height: '100%'}}></div>
            </div>
            <div className="project-content" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 className="project-title" style={{fontSize: '1.75rem', marginBottom: '1rem'}}>{project.title}</h3>
              <p className="project-description" style={{marginBottom: '1.5rem'}}>{project.description}</p>
              <NavLink to={project.link} className="project-link" style={{display: 'inline-block', padding: '0.75rem 2rem', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid #393939', background: 'transparent', color: '#393939', cursor: 'pointer', transition: 'all 0.2s ease'}}>
                VIEW PROJECT
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container" style={{textAlign: 'center'}}>
        <NavLink to="/projects" className="view-all-button" style={{display: 'inline-block', padding: '0.75rem 2rem', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid #393939', background: 'transparent', color: '#393939', cursor: 'pointer', transition: 'all 0.2s ease'}}>
          VIEW ALL PROJECTS
        </NavLink>
      </div>
    </section>
  );
}
