# Studio Abrash Header Redesign Plan

## Overview

This document outlines the plan to restyle the site header to match Studio Abrash's header design.

## Current Implementation Analysis

- The current `NewHeader.tsx` component has a logo on the left and navigation links on the right
- Navigation links are right-aligned in a horizontal row
- The header uses a light cream background color (`#fff6e8`)
- Mobile menu functionality is already implemented

## Required Changes

### 1. Header Structure Updates

- Center the logo and brand name horizontally within the header
- Move navigation links below the logo/brand text, centered horizontally
- Ensure proper vertical alignment between logo and text

### 2. Navigation Layout Changes

- Display navigation items ("ABOUT US", "COLLECTIONS", "WHY US", "OUR WORK", "CRAFTSMANSHIP") in a single row
- Ensure equal spacing between navigation items
- Make navigation responsive (stacked on mobile/tablet)

### 3. Styling Updates

- Use uppercase lettering for all navigation links
- Apply letter spacing (tracking) to navigation links
- Use muted dark gray for text color instead of pure black
- Add minimalist hover states (color change or underline)

### 4. Responsive Design

- On mobile/tablet, center the logo and stack navigation links below
- Ensure each navigation item is evenly spaced

## Implementation Steps

### Step 1: Update Header Structure in NewHeader.tsx

- Restructure the header to have a centered layout
- Add a brand name text next to the logo
- Reorganize the navigation to be positioned below the logo/brand

### Step 2: Update CSS Variables in header.css

- Update color scheme to match Studio Abrash (light, slightly warm background)
- Define new typography variables for letter spacing and text color
- Set appropriate padding and spacing variables

### Step 3: Implement New Header Styles

- Create styles for centered logo and brand name
- Style navigation links with uppercase lettering and letter spacing
- Add minimalist hover states
- Implement responsive design for different screen sizes

### Step 4: Update Mobile Header Menu

- Ensure mobile menu is consistent with new desktop design
- Adjust mobile menu styles to match the new header design

### Step 5: Testing and Verification

- Test header implementation across different screen sizes
- Verify header works with existing Hydrogen/React project structure
- Ensure all navigation links function correctly

## Expected Outcome

After implementing these changes, the header will:

- Have a centered logo and brand name
- Display navigation links in a single row below the logo/brand
- Use uppercase lettering with appropriate letter spacing
- Have a light, slightly warm background color
- Be fully responsive across different screen sizes
- Match the visual style of Studio Abrash's header
