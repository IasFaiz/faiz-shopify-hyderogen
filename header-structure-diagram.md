# Header Structure Diagram

## Current Header Structure

```
+--------------------------------------------------+
| LOGO    NAV1  NAV2  NAV3  NAV4  NAV5  [MENU]    |
+--------------------------------------------------+
```

## Target Studio Abrash Header Structure (Desktop)

```
+--------------------------------------------------+
|                  LOGO STUDIO ABRASH               |
|                                                  |
|        ABOUT  COLLECTIONS  WHY  OUR  CRAFT        |
|             US                 WORK  MANSHIP      |
+--------------------------------------------------+
```

## Target Studio Abrash Header Structure (Mobile)

```
+--------------------------------------------------+
|                  LOGO STUDIO ABRASH               |
|                                                  |
|                ABOUT US                          |
|                COLLECTIONS                       |
|                WHY US                            |
|                OUR WORK                          |
|                CRAFTSMANSHIP                     |
+--------------------------------------------------+
```

## Key Layout Changes

### 1. Logo and Branding

- **Current**: Logo on the left, navigation on the right
- **Target**: Logo and brand name centered horizontally
- **Implementation**: Use flexbox with justify-content: center

### 2. Navigation Layout

- **Current**: Navigation links in a row, right-aligned
- **Target**: Navigation links in a row, centered below logo/brand
- **Implementation**: Create two separate flex containers, one for logo/brand and one for navigation

### 3. Responsive Design

- **Current**: Navigation links collapse into mobile menu
- **Target**: Navigation links stack vertically below logo on mobile
- **Implementation**: Use media queries to change flex direction on smaller screens

### 4. Typography

- **Current**: Mixed case navigation links
- **Target**: Uppercase navigation links with letter spacing
- **Implementation**: Use text-transform: uppercase and letter-spacing CSS properties
