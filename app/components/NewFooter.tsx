import {NavLink} from 'react-router';
import logo from '../../public/logo.png';

export function NewFooter() {
  return (
    <footer className="new-footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* Column 1: CONTACT US */}
          <div className="footer-column">
            <h3 className="footer-heading elegant-text">CONTACT US</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <p>Schedule an appointment</p>
              </li>
              <li className="footer-contact-item">
                <p>Monday - Friday</p>
                <p>10am to 5pm</p>
              </li>
              <li className="footer-contact-item">
                <p>Studio Abrash</p>
                <p> (A Brand of Kuki Enterprises)</p>
                <p>
                  D-507, Pioneer Urban Square, Golf Course Extension Road,
                  Sector 62, Gurgaon-122101
                </p>
              </li>
              <li className="footer-contact-item">
                <p>+91 98107 99571</p>
              </li>
              <li className="footer-contact-item">
                <p>info@studioabrash.com</p>
              </li>
            </ul>
          </div>

          {/* Column 2: FOR DESIGNERS */}
          <div className="footer-column">
            <h3 className="footer-heading elegant-text">FOR DESIGNERS</h3>
            <div className="footer-designers-content">
              <p>
                Interior Designers & Architects can gain exclusive access to our
                product range, trade pricing and real-time stock updates
              </p>
            </div>
          </div>

          {/* Column 3: LEARN ABOUT RUGS, BLOG, and INSTAGRAM */}
          <div className="footer-column ">
            <h3 className="footer-heading elegant-text">LEARN ABOUT RUGS</h3>
            <ul className="footer-links-list">
              <li>
                <NavLink to="/rug-size-style-guide" className="footer-link">
                  Rug Size & Style Guide
                </NavLink>
              </li>
              <li>
                <NavLink to="/rug-care" className="footer-link">
                  Rug Care
                </NavLink>
              </li>
            </ul>

            <h3 className="footer-heading mt-6 elegant-text">BLOG</h3>
            <ul className="footer-links-list">
              <li>
                <NavLink to="/blog" className="footer-link">
                  INSTAGRAM
                </NavLink>
              </li>
            </ul>

            <div className="footer-social mt-6">
              <a
                href="https://instagram.com/studioabrash"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span className="sr-only">KEEP IN TOUGH</span>
              </a>
            </div>
          </div>

          {/* Column 4: Logo and Legal Links */}
          <div className="footer-column with-divider">
            <div className="footer-logo-img-container">
              <NavLink to="/" className="">
                <img
                  src={logo}
                  alt="logo"
                  className="footer-logo-img"
                  style={{
                    width: '300px',
                    height: '100px',
                  }}
                />
              </NavLink>
            </div>
            <div className="footer-legal-links"></div>
            <div className="footer-copyright">
              <p>© 2025 STUDIOABRASH. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
