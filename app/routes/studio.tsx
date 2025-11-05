export default function StudioPage() {
  return (
    <div className="studio-page">
      <div className="studio-header">
        <h1 className="page-title">STUDIO</h1>
        <p className="page-subtitle">Our design philosophy and approach</p>
      </div>

      <div className="studio-content">
        <div className="studio-philosophy">
          <div className="philosophy-text">
            <h2 className="section-title">OUR PHILOSOPHY</h2>
            <p className="philosophy-description">
              We believe in creating spaces that inspire and delight. Our
              approach combines innovative design with practical functionality
              to deliver exceptional results for our clients.
            </p>
            <p className="philosophy-description">
              With a focus on sustainability and environmental responsibility,
              we strive to minimize our impact while maximizing beauty and
              utility of every project we undertake.
            </p>
          </div>
          <div className="philosophy-image">
            {/* Placeholder for image */}
            <div className="image-placeholder"></div>
          </div>
        </div>

        <div className="studio-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Team Members</div>
          </div>
        </div>

        <div className="studio-process">
          <h2 className="section-title">OUR PROCESS</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Discovery</h3>
                <p className="step-description">
                  We begin by understanding your vision, needs, and constraints.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Design</h3>
                <p className="step-description">
                  Our team creates detailed concepts and plans for your
                  approval.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Implementation</h3>
                <p className="step-description">
                  We bring design to life with expert craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
