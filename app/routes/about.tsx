export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="page-title">ABOUT US</h1>
        <p className="page-subtitle">Our story, values, and team</p>
      </div>

      <div className="about-content">
        <div className="about-story">
          <div className="story-text">
            <h2 className="section-title">OUR STORY</h2>
            <p className="story-description">
              Founded in 2010, Studio Abrash began as a small design collective
              with a big vision: to create spaces that transform the way people
              live, work, and interact.
            </p>
            <p className="story-description">
              Over the years, we've grown into a full-service design studio
              known for our innovative approach, attention to detail, and
              commitment to sustainability.
            </p>
            <p className="story-description">
              Today, we continue to push the boundaries of design while staying
              true to our core values of creativity, integrity, and excellence.
            </p>
          </div>
          <div className="story-image">
            {/* Placeholder for image */}
            <div className="image-placeholder"></div>
          </div>
        </div>

        <div className="about-team">
          <h2 className="section-title">OUR LEADERSHIP</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                {/* Placeholder for image */}
                <div className="image-placeholder"></div>
              </div>
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-title">Founder & Principal Designer</p>
              <p className="member-bio">
                With over 20 years of experience in the industry, Jane leads our
                creative vision.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                {/* Placeholder for image */}
                <div className="image-placeholder"></div>
              </div>
              <h3 className="member-name">Michael Johnson</h3>
              <p className="member-title">Design Director</p>
              <p className="member-bio">
                Michael brings a wealth of technical knowledge and innovative
                thinking to every project.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                {/* Placeholder for image */}
                <div className="image-placeholder"></div>
              </div>
              <h3 className="member-name">Sarah Williams</h3>
              <p className="member-title">Studio Manager</p>
              <p className="member-bio">
                Sarah ensures that our operations run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h2 className="section-title">OUR VALUES</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We constantly explore new ideas and approaches to push the
                boundaries of design.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Sustainability</h3>
              <p className="value-description">
                We are committed to environmentally responsible design practices
                and materials.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                We believe that the best results come from working closely with
                our clients and partners.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We pursue the highest standards of quality in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
