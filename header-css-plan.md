# Plan to Create a Separate Header CSS File

## Overview

This document outlines the plan to create a separate CSS file for the header by extracting all header-related styles from the existing files and organizing them in a new dedicated file.

## Current State

Header styles are currently distributed across multiple files:

1. **app/styles/app.css** - Contains basic header styles for the original Header component
2. **app/styles/jaipur-style.css** - Contains more extensive header styling for the NewHeader component

## Header Styles to Extract

### From app.css (lines 184-231):

```css
/*
* --------------------------------------------------
* components/Header
* --------------------------------------------------
*/
.header {
  align-items: center;
  background: #fff;
  display: flex;
  height: var(--header-height);
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.header-menu-mobile-toggle {
  @media (min-width: 48em) {
    display: none;
  }
}

.header-menu-mobile {
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
}

.header-menu-desktop {
  display: none;
  grid-gap: 1rem;
  @media (min-width: 45em) {
    display: flex;
    grid-gap: 1rem;
    margin-left: 3rem;
  }
}

.header-menu-item {
  cursor: pointer;
}

.header-ctas {
  align-items: center;
  display: flex;
  grid-gap: 1rem;
  margin-left: auto;
}

.header-ctas > * {
  min-width: fit-content;
}
```

### From jaipur-style.css (lines 126-203):

```css
/* Header */
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
  /* background-color: #282828; */
}

.logo {
  font-size: 1.5rem;
  font-weight: var(--font-weight-light);
  letter-spacing: var(--letter-spacing-narrow);
  text-transform: uppercase;
  width: 20vw;
  height: auto;
}
.logo img {
  width: 16vw; /* or max-width: 100%; for responsive */
  height: auto;
  object-fit: contain;
  display: block;
  font-weight: bolder;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

/* Navigation */
.nav {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5rem;
  /* background-color: red; */
}
.nav-item {
  font-size: 0.85vw;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  text-decoration: none !important;
  color: var(--color-grey);
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    gap: 5rem;
  }

  .nav-item {
    color: var(--color-grey);
    font-size: 0.85vw;
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    text-decoration: none !important;
  }
}
```

## Implementation Steps

1. Create a new file: `app/styles/header.css`
2. Extract all header-related styles from `app.css` and add them to the new file
3. Extract all header-related styles from `jaipur-style.css` and add them to the new file
4. Organize the styles in the new file with clear comments
5. Update `root.tsx` to import the new `header.css` file
6. Remove header styles from `app.css` and `jaipur-style.css`
7. Verify that the header still displays correctly

## Expected Outcome

After implementing these changes:

- All header-related styles will be centralized in one file
- The header will continue to function and display correctly
- Code organization will be improved with clearer separation of concerns
- Future header styling changes will be easier to implement
