# Header Implementation Plan

## File Changes Required

### 1. app/components/NewHeader.tsx

#### Current Structure:

```jsx
<header className="header">
  <div className="header-content">
    {/* Logo on the left */}
    <NavLink to="/" className="logo">
      <img src={logo} alt="logo" className="" />
    </NavLink>

    {/* Navigation links in the center */}
    <nav className="nav">{/* Navigation links */}</nav>

    {/* Mobile menu button */}
    <button className="md:hidden text-gray-600" onClick={() => open('mobile')}>
      {/* SVG icon */}
    </button>
  </div>
</header>
```

#### Target Structure:

```jsx
<header className="header">
  <div className="header-content">
    {/* Logo and brand centered horizontally */}
    <div className="logo-brand-container">
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="brand-name">STUDIO ABRASH</span>
      </NavLink>
    </div>

    {/* Navigation links centered below logo/brand */}
    <nav className="nav">
      <NavLink to="/projects" className="nav-item">
        ABOUT US
      </NavLink>
      <NavLink to="/studio" className="nav-item">
        COLLECTIONS
      </NavLink>
      <NavLink to="/about" className="nav-item">
        WHY US
      </NavLink>
      <NavLink to="/journal" className="nav-item">
        OUR WORK
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        CRAFTSMANSHIP
      </NavLink>
    </nav>

    {/* Mobile menu button */}
    <button className="mobile-menu-button" onClick={() => open('mobile')}>
      {/* SVG icon */}
    </button>
  </div>
</header>
```

### 2. app/styles/header.css

#### Current CSS Variables:

```css
:root {
  --header-height: 64px;
  --color-header: #fff6e8;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --letter-spacing-wide: 3px;
  --letter-spacing-narrow: 1px;
  --color-grey: #737373;
}
```

#### Target CSS Variables:

```css
:root {
  --header-height: 120px; /* Increased height for two-row layout */
  --color-header: #fff6e8; /* Light, slightly warm background */
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --letter-spacing-wide: 3px;
  --letter-spacing-narrow: 1px;
  --color-text: #555555; /* Muted dark gray instead of pure black */
  --color-text-hover: #333333; /* Darker gray for hover state */
  --header-max-width: 1580px; /* Max width for header content */
  --header-padding: 2rem; /* Generous vertical padding */
}
```

#### Current Header Styles:

```css
.header {
  background: var(--color-header);
  border-bottom: 1px solid #e5e5e5;
  height: var(--header-height);
  position: sticky;
  top: 0;
  padding: 1.5rem 0rem;
  z-index: 1000;
}

.header-content {
  max-width: 1580px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: var(--font-weight-light);
  letter-spacing: var(--letter-spacing-narrow);
  text-transform: uppercase;
  width: 20vw;
  height: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo img {
  width: 16vw;
  height: auto;
  object-fit: contain;
  display: block;
  font-weight: bolder;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5rem;
}

.nav-item {
  font-size: 0.85vw;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  text-decoration: none !important;
  color: var(--color-grey);
}
```

#### Target Header Styles:

```css
.header {
  background: var(--color-header);
  height: var(--header-height);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--header-padding) 0;
}

.header-content {
  max-width: var(--header-max-width);
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* Space between logo/brand and navigation */
}

.logo-brand-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem; /* Space between logo and brand name */
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-text);
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem; /* Equal spacing between navigation items */
}

.nav-item {
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--color-text-hover);
  text-decoration: underline; /* Minimalist hover state */
}

.mobile-menu-button {
  display: none; /* Hidden on desktop */
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
}

/* Mobile styles */
@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 1.5rem 0;
  }

  .header-content {
    gap: 1rem;
  }

  .nav {
    flex-direction: column;
    gap: 1rem; /* Space between stacked navigation items */
  }

  .mobile-menu-button {
    display: block; /* Visible on mobile */
  }

  .brand-name {
    font-size: 1.2rem;
  }

  .nav-item {
    font-size: 0.9rem;
  }
}
```

### 3. app/components/NewHeader.tsx - MobileHeaderMenu Function

#### Current MobileHeaderMenu:

```jsx
export function MobileHeaderMenu() {
  const {close} = useAside();

  return (
    <nav className="flex flex-col space-y-6 p-4">
      <NavLink
        to="/projects"
        onClick={close}
        className={({isActive}) =>
          `text-lg font-light tracking-wide ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
        }
      >
        PROJECTS
      </NavLink>
      {/* Other navigation links */}
    </nav>
  );
}
```

#### Target MobileHeaderMenu:

```jsx
export function MobileHeaderMenu() {
  const {close} = useAside();

  return (
    <nav className="mobile-nav-menu">
      <NavLink
        to="/projects"
        onClick={close}
        className={({isActive}) =>
          `mobile-nav-item ${isActive ? 'active' : ''}`
        }
      >
        ABOUT US
      </NavLink>
      <NavLink
        to="/studio"
        onClick={close}
        className={({isActive}) =>
          `mobile-nav-item ${isActive ? 'active' : ''}`
        }
      >
        COLLECTIONS
      </NavLink>
      <NavLink
        to="/about"
        onClick={close}
        className={({isActive}) =>
          `mobile-nav-item ${isActive ? 'active' : ''}`
        }
      >
        WHY US
      </NavLink>
      <NavLink
        to="/journal"
        onClick={close}
        className={({isActive}) =>
          `mobile-nav-item ${isActive ? 'active' : ''}`
        }
      >
        OUR WORK
      </NavLink>
      <NavLink
        to="/contact"
        onClick={close}
        className={({isActive}) =>
          `mobile-nav-item ${isActive ? 'active' : ''}`
        }
      >
        CRAFTSMANSHIP
      </NavLink>
    </nav>
  );
}
```

#### Add to app/styles/header.css:

```css
/* Mobile navigation menu styles */
.mobile-nav-menu {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
}

.mobile-nav-item {
  font-size: 1.1rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-nav-item:hover,
.mobile-nav-item.active {
  color: var(--color-text-hover);
  text-decoration: underline;
}
```

## Implementation Steps

1. Update the CSS variables in `app/styles/header.css` to match Studio Abrash design
2. Restructure the header layout in `app/components/NewHeader.tsx`
3. Update the header styles in `app/styles/header.css`
4. Update the mobile navigation menu in `app/components/NewHeader.tsx`
5. Add mobile navigation menu styles to `app/styles/header.css`
6. Test the implementation across different screen sizes
7. Verify all navigation links function correctly
