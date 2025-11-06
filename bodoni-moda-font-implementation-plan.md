# Bodoni Moda Font Implementation Plan

## Overview

Implement the Bodoni Moda font family throughout the project to create a consistent, elegant typography system.

## Implementation Steps

### 1. Import the Font

Add the Bodoni Moda font from Google Fonts to your project.

#### Option A: Add to HTML Head

Add this to the `<head>` section of your main HTML file (likely in `app/root.tsx` or similar):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

#### Option B: Import in CSS

Add this to your main CSS file (likely `app/styles/app.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800;900&display=swap');
```

### 2. Update CSS Files

#### Global Typography (app/styles/app.css)

Add Bodoni Moda as the primary font for headings and elegant text:

```css
:root {
  --font-bodoni-moda: 'Bodoni Moda', serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-bodoni-moda), serif;
}

.elegant-text {
  font-family: var(--font-bodoni-moda), serif;
}
```

#### Product Cards (app/components/RugsSection.css)

Update the product name styling:

```css
.product-name {
  font-family: 'Bodoni Moda', serif;
  font-size: 17px;
  font-weight: 500;
  color: #2a2a2a;
  text-align: center;
  margin-top: 14px;
  letter-spacing: 0.5px;
}
```

#### Headers (app/components/Header.tsx or similar)

Update navigation and header text:

```css
.header-title,
.nav-link {
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
}
```

#### Footer (app/components/NewFooter.tsx)

Update footer text:

```css
.footer-title,
.footer-text {
  font-family: 'Bodoni Moda', serif;
}
```

#### Hero Section (app/components/HeroSection.tsx)

Update hero text:

```css
.hero-title,
.hero-subtitle {
  font-family: 'Bodoni Moda', serif;
}
```

### 3. Font Weight Variations

Use appropriate font weights for different elements:

- 400 (Regular): Body text and subtle elements
- 500 (Medium): Product names, subheadings
- 600 (Semi-bold): Navigation, section titles
- 700 (Bold): Important headings
- 800-900 (Extra Bold/Black): Large headlines, special emphasis

### 4. Font Fallback

Always include fallback fonts in your font-family declarations:

```css
font-family:
  'Bodoni Moda', 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
```

### 5. Performance Considerations

- Only import the font weights you actually need
- Consider using `font-display: swap` for better loading performance
- For production, consider self-hosting the font files

## Files to Update

1. `app/root.tsx` or main HTML file - Add font import
2. `app/styles/app.css` - Global typography styles
3. `app/components/RugsSection.css` - Product card typography
4. `app/components/Header.tsx` - Navigation typography
5. `app/components/NewFooter.tsx` - Footer typography
6. `app/components/HeroSection.tsx` - Hero section typography
7. Any other component files that use typography

## Testing

After implementation, test across different browsers and devices to ensure:

- Font loads correctly
- Text remains readable at different sizes
- Fallback fonts work properly if the primary font fails to load
- Performance is not significantly impacted
