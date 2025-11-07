# Image URL Update Plan

## Overview

This plan outlines the changes needed to update image URLs in dummyData2 to use local images from the public folder and replace dummyData with dummyData2 throughout the project.

## Image URL Mapping for dummyData2

The following mapping should be applied to update image URLs in dummyData2:

1. Morris MR-1023 (id: 1)
   - Current: `https://your-image-path/ABR-55-OSE-201-BEIGE.jpg`
   - Update to: `/ABR-55-OSE-201-BEIGE.jpg`

2. Morris MR-1024 (id: 2)
   - Current: `https://your-image-path/ABR-55-OSE-201-CAMEL.JPG`
   - Update to: `/ABR-55-OSE-201-CAMEL.JPG`

3. Morris MR-1025 (id: 3)
   - Current: `https://your-image-path/ABR-55-OSE-203-CAMEL.jpg`
   - Update to: `/ABR-55-OSE-203-CAMEL.jpg`

4. Morris MR-1026 (id: 4)
   - Current: `https://your-image-path/ABR-55-OSE-204-BEIGE.jpg`
   - Update to: `/ABR-55-OSE-204-BEIGE.jpg`

5. Morris MR-1027 (id: 5)
   - Current: `https://your-image-path/ABR-55-OSE-204-BROWN-BROWN.jpg`
   - Update to: `/ABR-55, OSE-204-BROWN-BROWN.JPG`

6. Morris MR-1028 (id: 6)
   - Current: `https://your-image-path/ABR-55-OSE-205-CAMEL.jpg`
   - Update to: `/ABR-55-OSE-205-CAMEL.jpg`

7. Morris MR-1029 (id: 7)
   - Current: `https://your-image-path/ABR-55-OSE-211-CHARCOAL.jpg`
   - Update to: `/ABR-55-OSE-211-CHARCOAL.jpg`

8. Morris MR-1030 (id: 8)
   - Current: `https://your-image-path/MR-1030-MEADOW.jpg`
   - Update to: `/MR- 1030 MEADOW.jpg`

9. Morris MR-1031 (id: 9)
   - Current: `https://your-image-path/MR-1031-FLORA.jpg`
   - Update to: `/MR-1031-FLORA.jpg`

10. Morris MR-1032 (id: 10)
    - Current: `https://your-image-path/MR-1032-PINE.jpg`
    - Update to: `/MR-1032-PINE.jpg`

11. Morris MR-1033 (id: 11)
    - Current: `https://your-image-path/MR-1033-MARY.jpg`
    - Update to: `/MR-1033-MARY.jpg`

12. Morris MR-1034 (id: 12)
    - Current: `https://your-image-path/MR-1034-GARDENIA.jpg`
    - Update to: `/MR-1034-GARDENIA.jpg`

13. Morris MR-1035 (id: 13)
    - Current: `https://your-image-path/MR-1035-EMBER.jpg`
    - Update to: `/MR-1035-EMBER.jpg`

## File Changes Required

### 1. app/assets/DummyData.tsx

- Update all image URLs in dummyData2 array as per the mapping above
- Change the export statement from `export default dummyData` to `export default dummyData2`
- Update the import statement in RugsSection.tsx to use dummyData2 instead of dummyData

### 2. app/components/RugsSection.tsx

- Change the import statement from `import dummyData from '../assets/DummyData'` to `import dummyData2 from '../assets/DummyData'`
- Update all references to `dummyData` to `dummyData2` in the component
- No CSS changes are needed

### 3. app/routes/products.$productId.tsx

- Change the import statement from `import dummyData from '../assets/DummyData'` to `import dummyData2 from '../assets/DummyData'`
- Update the product finding logic to use dummyData2 instead of dummyData

## Data Structure Differences

### dummyData vs dummyData2

1. **Collection Values**:
   - dummyData: Multiple collections (Acadia, Aakar, Adair, Aibel, Aion)
   - dummyData2: Only one collection (Morris)

2. **Price Range**:
   - dummyData: Lower price range (e.g., 425 to 3480)
   - dummyData2: Higher price range (e.g., 578000 to 1300000)

3. **Characteristics**:
   - dummyData: Various characteristics (Hand Crafted, Indoor, Easy Care, Pet Friendly, etc.)
   - dummyData2: Limited characteristics (Handknotted, Rectangular, In Stock, Customisable)

4. **Customisation**:
   - dummyData: Mix of customisable and non-customisable products
   - dummyData2: First 7 products are non-customisable, last 6 products are customisable

## Filter Updates Required

### RugsSection.tsx Filter Updates

The following filter options need to be updated to match dummyData2 data structure:

1. **Colors Filter**:
   - Current: Based on dummyData colors
   - Update to: Colors from dummyData2 (e.g., "Gray / Teal / Green", "Gray / Brown", etc.)

2. **Sizes Filter**:
   - Current: Based on dummyData sizes
   - Update to: Sizes from dummyData2 (e.g., "10x14", "9x12", "12x15", etc.)

3. **Materials Filter**:
   - Current: Multiple materials from dummyData
   - Update to: Only "Pure Silk & Wool" (all products in dummyData2 have this material)

4. **Price Filter**:
   - Current: Ranges for lower prices (Under $1000, $1000 - $2000, etc.)
   - Update to: Ranges for higher prices (e.g., Under 600000, 600000 - 800000, etc.)

5. **Styles Filter**:
   - Current: Multiple styles from dummyData
   - Update to: Only "Transitional" (all products in dummyData2 have this style)

6. **Pile Heights Filter**:
   - Current: Multiple pile heights from dummyData
   - Update to: Only "Medium" (all products in dummyData2 have this pile height)

7. **Collections Filter**:
   - Current: Multiple collections from dummyData
   - Update to: Only "Morris" (all products in dummyData2 belong to this collection)

8. **Characteristics Filter**:
   - Current: Various characteristics from dummyData
   - Update to: Only "Handknotted", "Rectangular", "In Stock", "Customisable"

## Implementation Steps

1. Update image URLs in dummyData2 array
2. Change default export from dummyData to dummyData2
3. Update import statements in RugsSection.tsx and products.$productId.tsx
4. Update filter options in RugsSection.tsx to match dummyData2 data structure
5. Test the application to ensure all features work correctly

## Notes

- No CSS changes are required
- The overall structure and functionality of the components will remain the same
- Only the data source and filter options will be updated
