# Header Redesign to Match Studio Abrash - Summary

## Overview

This document summarizes the plan to restyle the site header to match Studio Abrash's header design. The redesign will transform the current header layout to feature a centered logo and brand name with navigation links positioned below in a centered, single row.

## Current Implementation

- Header with logo on the left and navigation links on the right
- Navigation links are right-aligned in a horizontal row
- Light cream background color (`#fff6e8`)
- Mobile menu functionality is already implemented

## Target Design

- Centered logo and brand name ("STUDIO ABRASH") horizontally within the header
- Navigation links ("ABOUT US", "COLLECTIONS", "WHY US", "OUR WORK", "CRAFTSMANSHIP") in a single row, horizontally centered below the logo/brand
- Uppercase lettering with letter spacing for navigation links
- Muted dark gray text color instead of pure black
- Minimalist hover states (color change or underline)
- Responsive design: on mobile/tablet, centered logo with stacked navigation links below
- Light, slightly warm background color

## Implementation Plan

### Files to be Modified:

1. `app/components/NewHeader.tsx` - Restructure header layout
2. `app/styles/header.css` - Update styles to match Studio Abrash design

### Key Changes:

#### 1. Header Structure (NewHeader.tsx)

- Create a centered logo and brand container
- Move navigation links below the logo/brand
- Update mobile menu button positioning

#### 2. CSS Variables (header.css)

- Update header height for two-row layout
- Define muted dark gray text color
- Set appropriate padding and spacing variables

#### 3. Header Styles (header.css)

- Center logo and brand horizontally
- Position navigation links in a centered row below logo/brand
- Apply uppercase lettering with letter spacing
- Add minimalist hover states
- Implement responsive design for different screen sizes

#### 4. Mobile Navigation Menu (NewHeader.tsx)

- Update mobile navigation menu to match new header design
- Add corresponding CSS styles

## Visualizations

- `header-structure-diagram.md` - Visual representation of current and target header structures
- `header-layout-visualization.md` - Mermaid diagrams showing component hierarchy and layout flow
- `header-implementation-plan.md` - Detailed code changes required

## Expected Outcome

After implementation, the header will:

- Have a centered logo and brand name
- Display navigation links in a single row below the logo/brand
- Use uppercase lettering with appropriate letter spacing
- Have a light, slightly warm background color
- Be fully responsive across different screen sizes
- Match the visual style of Studio Abrash's header

## Next Steps

1. Review and approve this implementation plan
2. Switch to Code mode to implement the changes
3. Test the implementation across different screen sizes
4. Verify all navigation links function correctly
