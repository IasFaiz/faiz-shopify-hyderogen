import {NavLink} from 'react-router';

export function NewFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* Column 1: CONTACT US */}
          <div className="footer-column">
            <h3 className="footer-heading">CONTACT US</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <p>Schedule an appointment</p>
              </li>
              <li className="footer-contact-item">
                <p>Monday - Friday</p>
                <p>10am to 5pm</p>
              </li>
              <li className="footer-contact-item">
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
            <h3 className="footer-heading">FOR DESIGNERS</h3>
            <div className="footer-designers-content">
              <p>
                Interior Designers & Architects can gain exclusive access to our
                product range, trade pricing and real-time stock updates
              </p>
            </div>
          </div>

          {/* Column 3: LEARN ABOUT RUGS, BLOG, and INSTAGRAM */}
          <div className="footer-column with-divider">
            <h3 className="footer-heading">LEARN ABOUT RUGS</h3>
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

            <h3 className="footer-heading mt-6">BLOG</h3>
            <ul className="footer-links-list">
              <li>
                <NavLink to="/blog" className="footer-link">
                  Latest Articles
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
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123h-.08c-2.643 0-2.987-.012-4.043-.06-.975.045-1.504.207-1.857.344-.467.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.047-1.023-.058-1.351-.058-3.807v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 01-1.153-1.772A4.902 4.902 0 015.45 2.525c-.636-.247-1.363-.416-2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.055.058 1.37.058 4.041v.08c0 2.597-.01 2.917-.058 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597.01-2.917-.058-3.96.045-.976.207-1.505.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Logo and Legal Links */}
          <div className="footer-column">
            <div className="footer-logo-section">
              <NavLink to="/" className="footer-logo">
                STUDIO ABRASH
              </NavLink>
            </div>

            <div className="footer-legal-links">
              <ul className="footer-links-list">
                <li>
                  <NavLink to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms-conditions" className="footer-link">
                    Terms & Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/store-shipping-policy" className="footer-link">
                    Store & Shipping Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/payment-refund-policy" className="footer-link">
                    Payment & Refund Policy
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-copyright">
              <p>© 2025 STUDIOABRASH. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
