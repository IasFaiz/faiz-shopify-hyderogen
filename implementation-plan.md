# Implementation Plan

## Task 1: Update all image URLs in DummyData.tsx

### Problem

Only the first image URL is working, and we need to replace all image URLs with the working one from the first object.

### Solution

Replace all image URLs in the dummyData array with:
`'https://images.unsplash.com/photo-1588421874990-1fe162747f9b?w=800&h=1200&fit=crop'`

### Implementation Steps

1. Open `app/assets/DummyData.tsx`
2. Replace all image URLs (lines 23, 40, 57, 74, 91, 108, 125, 142, 159, 176, 193, 210, 227, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397, 414, 431, 448, 465, 482, 499, 516, 533, 550, 567, 584, 601, 618, 635, 652, 669) with the working URL from the first object.

## Task 2: Fix footer width to occupy most of the available space

### Problem

The footer content is shrinking in the center instead of utilizing the available width.

### Solution

Adjust the footer styling to make it occupy most of the width with appropriate margins.

### Implementation Steps

1. Open `app/styles/jaipur-style.css`
2. Modify the `.footer-content` class to:
   - Increase the max-width to a larger value (e.g., 95% or 100%)
   - Adjust padding to ensure proper margins on the sides
3. Alternatively, modify the `.footer-links` grid to better utilize the available space.

### Current Footer Classes to Modify

- `.footer-content` - Controls the overall width and padding of the footer content
- `.footer-links` - Controls the grid layout for footer columns
- `.footer-column` - Controls individual column styling

### Proposed Changes

```css
.footer-content {
  max-width: 100%; /* Change from 1580px to 100% */
  margin: 0 auto;
  padding: 0 3rem; /* Increase side padding for better margins */
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  width: 100%; /* Ensure full width usage */
}
```

## Order of Implementation

1. First, update all image URLs in DummyData.tsx
2. Then, fix the footer width styling in jaipur-style.css
