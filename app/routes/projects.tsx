import {FeaturedProjects} from '~/components/FeaturedProjects';

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="page-title">PROJECTS</h1>
        <p className="page-subtitle">Discover our portfolio of design work</p>
      </div>

      <div className="projects-filters">
        <button className="filter-button active">ALL</button>
        <button className="filter-button">RESIDENTIAL</button>
        <button className="filter-button">COMMERCIAL</button>
        <button className="filter-button">HOSPITALITY</button>
      </div>

      <div className="projects-container">
        <FeaturedProjects />
      </div>
    </div>
  );
}
