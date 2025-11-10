# Footer Fixes Plan

## Issues to Fix

1. **Logo Visibility Issue**: The logo image is not visible in the footer
2. **Link Underline Issue**: Footer links are showing underline on hover

## Detailed Analysis

### Issue 1: Logo Visibility

**Problem**: The logo image is not visible and the `fill` and `color` properties in the inline style won't work for a PNG image.

**Root Cause**:

- In [`app/components/NewFooter.tsx`](app/components/NewFooter.tsx:91-101), the logo image has inline styles with `fill` and `color` properties
- These properties don't work on PNG images as they are raster formats, not SVG
- There's no CSS rule for the `.logo-img` class in the footer CSS file

**Solution**:

1. Remove the `fill` and `color` properties from the inline style
2. Add a CSS rule for the `.logo-img` class in [`app/styles/footer.css`](app/styles/footer.css)
3. Use CSS filters if needed to adjust the image appearance

### Issue 2: Link Underlines

**Problem**: Footer links are showing underline text decoration on hover.

**Root Cause**:

- While [`app/styles/footer.css`](app/styles/footer.css:117-126) has `text-decoration: none` for `.footer-link`, there might be conflicting styles
- The global CSS in [`app/styles/app.css`](app/styles/app.css:20-23) has a `.link:hover` rule that adds underlines

**Solution**:

1. Update the `.footer-link:hover` CSS rule to explicitly set `text-decoration: none`
2. Add `!important` if necessary to override conflicting styles

## Implementation Steps

### Step 1: Fix Logo Image in NewFooter.tsx

**File**: [`app/components/NewFooter.tsx`](app/components/NewFooter.tsx:91-101)

**Current Code**:

```jsx
<img
  src={logo}
  alt="logo"
  className="logo-img"
  style={{
    width: '100px',
    height: '100px',
    fill: 'red !important',
    color: 'red !important',
  }}
/>
```

**Updated Code**:

```jsx
<img
  src={logo}
  alt="logo"
  className="footer-logo-img"
  style={{
    width: '100px',
    height: '100px',
  }}
/>
```

### Step 2: Add CSS for Logo Image in footer.css

**File**: [`app/styles/footer.css`](app/styles/footer.css)

**Add this CSS rule** (after line 161):

```css
/* Footer Logo Image */
.footer-logo-img {
  display: block;
  max-width: 100%;
  height: auto;
  filter: brightness(0) invert(1); /* This will make the logo white */
}
```

### Step 3: Fix Link Hover Underlines in footer.css

**File**: [`app/styles/footer.css`](app/styles/footer.css:124-126)

**Current Code**:

```css
.footer-link:hover {
  opacity: 0.8; /* Subtle hover state */
}
```

**Updated Code**:

```css
.footer-link:hover {
  opacity: 0.8; /* Subtle hover state */
  text-decoration: none !important; /* Remove underline */
}
```

### Step 4: Add CSS for Footer Social Link

**File**: [`app/styles/footer.css`](app/styles/footer.css)

**Add this CSS rule** (after line 142):

```css
.footer-social-link:hover {
  opacity: 0.8; /* Subtle hover state */
  text-decoration: none !important; /* Remove underline */
}
```

## Testing Recommendations

1. **Test Logo Visibility**:
   - Verify the logo is visible in the footer
   - Check that it appears white against the dark blue background
   - Ensure it maintains proper proportions

2. **Test Link Hover States**:
   - Hover over all footer links to verify no underline appears
   - Check that the opacity change still works for hover feedback

3. **Responsive Testing**:
   - Test the footer on different screen sizes (mobile, tablet, desktop)
   - Ensure the logo and links display correctly across all devices

## Additional Notes

1. If the logo still doesn't appear white enough with the `filter: brightness(0) invert(1)` property, you may need to:
   - Use a white version of the logo image
   - Adjust the filter values
   - Consider using an SVG logo instead of PNG for better color control

2. If the link underlines persist, you may need to:
   - Add more specific CSS selectors
   - Use `!important` to override other styles
   - Check for any JavaScript that might be adding styles dynamically
