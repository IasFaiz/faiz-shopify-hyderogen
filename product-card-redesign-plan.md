# Product Card Redesign Plan

## Overview

Update the product card component and layout to match a clean, minimal aesthetic with no card styling - just images with labels in a grid layout.

## Changes Required

### 1. RugsSection.tsx Updates

- Remove "Out of Stock" labels entirely
- Keep only the collection name (e.g., "Morris") below each image
- Maintain the "Customisable" badge overlay

### 2. RugsSection.css Updates

#### Remove These Completely:

- All borders around cards
- All box shadows
- All hover effects (no scaling, no shadow changes)
- Card background colors (use transparent or match page background)
- Any padding/spacing inside the card container
- "Out of Stock" labels (remove entirely)

#### Card Layout:

- Remove card container styling - cards should be borderless
- No visual separation between cards except natural spacing
- Clean, minimal gallery layout
- Grid gap: approximately 20-24px between cards

#### Product Image:

- Image should be full card width with NO borders
- NO rounded corners on images (sharp, clean edges)
- Image aspect ratio: maintain natural rug dimensions (slightly taller than wide)
- "Customisable" badge positioning:
  - Position: top-left corner overlay
  - Background: solid dark navy/black (#1a1a1a or similar)
  - Text: white, uppercase, small font
  - Padding: 6px 12px
  - NO rounded corners or minimal (2-3px max)
  - Font size: 11-12px

#### Product Name/Text:

- Position: directly below image
- Font family: Serif font (similar to Playfair Display, Cormorant, or similar elegant serif)
- Font size: 16-18px
- Font weight: Regular (400) or Medium (500)
- Color: Dark gray or black (#2a2a2a)
- Text alignment: Center
- Letter spacing: slight (0.5px)
- Margin top: 12-16px from image
- NO product codes, NO size info, ONLY collection name (e.g., "Morris")

#### Grid Behavior:

- Fixed card dimensions (do not shrink)
- Cards rearrange based on viewport (3-4 per row on desktop, 2-3 on tablet)
- Use CSS Grid with auto-fit

## Reference Styling to Match:

- Clean, gallery-style catalog aesthetic
- Minimal design with focus on product images
- Elegant serif typography for product names
- No visual "card" effect - just images with labels
- Professional rug showroom feel

## CSS Implementation Example:

```css
.product-card {
  background: transparent;
  border: none;
  box-shadow: none;
  transition: none; /* Remove all transitions */
}

.product-card:hover {
  /* NO hover effects */
  transform: none;
  box-shadow: none;
}

.product-image {
  border-radius: 0; /* Sharp corners */
  width: 100%;
  height: auto;
}

.product-name {
  font-family: 'Playfair Display', 'Cormorant Garamond', serif;
  font-size: 17px;
  font-weight: 400;
  color: #2a2a2a;
  text-align: center;
  margin-top: 14px;
  letter-spacing: 0.5px;
}

.customisable-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #1a1a1a;
  color: white;
  padding: 6px 12px;
  font-size: 11px;
  text-transform: uppercase;
  border-radius: 2px;
  font-weight: 500;
}
```

## Key Points:

- NO card styling whatsoever - just image + text
- Clean, minimal, borderless design
- Elegant serif font for product names
- Remove ALL interactive effects
- Match the sophisticated gallery aesthetic of the reference
