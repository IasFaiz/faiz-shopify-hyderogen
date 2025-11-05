export function ContactSection() {
  return (
    <section
      className="contact-section"
      style={{background: '#f6f5f4', padding: '5rem 0'}}
    >
      <div
        className="contact-content"
        style={{
          maxWidth: '1580px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <div className="contact-info">
          <h2
            className="contact-title"
            style={{fontSize: '2rem', marginBottom: '1rem', fontWeight: 300}}
          >
            GET IN TOUCH
          </h2>
          <p className="contact-subtitle" style={{marginBottom: '2rem'}}>
            Let's create something beautiful together
          </p>

          <div
            className="contact-details"
            style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}
          >
            <div className="contact-item">
              <h3
                className="contact-label"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                VISIT US
              </h3>
              <p className="contact-text" style={{marginBottom: '0.25rem'}}>
                123 Design Street
              </p>
              <p className="contact-text">New York, NY 10001</p>
            </div>

            <div className="contact-item">
              <h3
                className="contact-label"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                CONTACT US
              </h3>
              <p className="contact-text" style={{marginBottom: '0.25rem'}}>
                info@studioabrash.com
              </p>
              <p className="contact-text">+1 (212) 555-1234</p>
            </div>

            <div className="contact-item">
              <h3
                className="contact-label"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                BUSINESS HOURS
              </h3>
              <p className="contact-text" style={{marginBottom: '0.25rem'}}>
                Monday - Friday: 9am - 6pm
              </p>
              <p className="contact-text" style={{marginBottom: '0.25rem'}}>
                Saturday: 10am - 4pm
              </p>
              <p className="contact-text">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group" style={{marginBottom: '1.5rem'}}>
              <label
                htmlFor="name"
                className="form-label"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d8d6cf',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div className="form-group" style={{marginBottom: '1.5rem'}}>
              <label
                htmlFor="email"
                className="form-label"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d8d6cf',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div className="form-group" style={{marginBottom: '1.5rem'}}>
              <label
                htmlFor="message"
                className="form-label"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                rows={5}
                placeholder="Tell us about your project"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d8d6cf',
                  fontSize: '1rem',
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="form-submit"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                border: '1px solid #393939',
                background: '#393939',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
