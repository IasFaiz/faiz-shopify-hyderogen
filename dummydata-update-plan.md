# Plan to Update DummyData.tsx

## Overview

This document outlines the plan to add 17 new entries to the existing `dummyData2` array in `app/assets/DummyData.tsx`. The original 13 entries will be preserved, and 17 new entries will be added with IDs 14-30.

## Current State

- The `dummyData2` array currently contains 13 entries (IDs 1-13)
- All entries follow the Morris collection pattern
- Entries have consistent properties: id, name, image, price, availability, size, color, material, style, pileHeight, collection, characteristics, description, and customisable

## Existing Images

Based on the existing 13 entries, the following images are available in the public folder:

- '/ABR-55-OSE-201-BEIGE.jpg'
- '/ABR-55-OSE-201-CAMEL.JPG'
- '/ABR-55-OSE-203-CAMEL.jpg'
- '/ABR-55-OSE-204-BEIGE.jpg'
- '/ABR-55, OSE-204-BROWN-BROWN.JPG'
- '/ABR-55-OSE-205-CAMEL.jpg'
- '/ABR-55-OSE-211-CHARCOAL.jpg'
- '/MR- 1030 MEADOW.jpg'
- '/MR-1031-FLORA.jpg'
- '/MR-1032-PINE.jpg'
- '/MR-1033-MARY.jpg'
- '/MR-1034-GARDENIA.jpg'
- '/MR-1035-EMBER.jpg'

## New Entries to Add

The following 17 entries will be added to the `dummyData2` array, using only the existing images from the list above:

```javascript
  {
    id: 14,
    name: 'Morris MR-1036',
    image: '/ABR-55-OSE-201-BEIGE.jpg',
    price: 850000,
    availability: true,
    size: '8x10',
    color: 'Blue / Gray / Ivory',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-201-BEIGE-2',
    customisable: false,
  },
  {
    id: 15,
    name: 'Morris MR-1037',
    image: '/ABR-55-OSE-201-CAMEL.JPG',
    price: 920000,
    availability: true,
    size: '9x12',
    color: 'Ivory / Gold / Blue',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-201-CAMEL-2',
    customisable: false,
  },
  {
    id: 16,
    name: 'Morris MR-1038',
    image: '/ABR-55-OSE-203-CAMEL.jpg',
    price: 1150000,
    availability: true,
    size: '10x14',
    color: 'Red / Gold / Green',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-203-CAMEL-2',
    customisable: false,
  },
  {
    id: 17,
    name: 'Morris MR-1039',
    image: '/ABR-55-OSE-204-BEIGE.jpg',
    price: 1350000,
    availability: true,
    size: '12x15',
    color: 'Gold / Ivory / Blue',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-204-BEIGE-2',
    customisable: false,
  },
  {
    id: 18,
    name: 'Morris MR-1040',
    image: '/ABR-55, OSE-204-BROWN-BROWN.JPG',
    price: 780000,
    availability: true,
    size: '9x12 / 10x14',
    color: 'Green / Blue / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-204-BROWN-BROWN-2',
    customisable: false,
  },
  {
    id: 19,
    name: 'Morris MR-1041',
    image: '/ABR-55-OSE-205-CAMEL.jpg',
    price: 890000,
    availability: true,
    size: '9x12',
    color: 'Purple / Gold / Ivory',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-205-CAMEL-2',
    customisable: false,
  },
  {
    id: 20,
    name: 'Morris MR-1042',
    image: '/ABR-55-OSE-211-CHARCOAL.jpg',
    price: 950000,
    availability: true,
    size: '9x12 / 10x14 / 12x15',
    color: 'Coral / Blue / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-211-CHARCOAL-2',
    customisable: false,
  },
  {
    id: 21,
    name: 'Morris MR-1043',
    image: '/MR- 1030 MEADOW.jpg',
    price: 680000,
    availability: true,
    size: '8x10 / 9x12 / 10x14',
    color: 'Teal / Gold / Ivory',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: MR-1030-MEADOW-2',
    customisable: false,
  },
  {
    id: 22,
    name: 'Morris MR-1044',
    image: '/MR-1031-FLORA.jpg',
    price: 0,
    availability: true,
    size: 'Custom',
    color: 'Blue / Teal / Ivory',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'Customisable'],
    description: 'Morris – Code: MR-1031-FLORA-2',
    customisable: true,
  },
  {
    id: 23,
    name: 'Morris MR-1045',
    image: '/MR-1032-PINE.jpg',
    price: 0,
    availability: true,
    size: 'Custom',
    color: 'Orange / Red / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'Customisable'],
    description: 'Morris – Code: MR-1032-PINE-2',
    customisable: true,
  },
  {
    id: 24,
    name: 'Morris MR-1046',
    image: '/MR-1033-MARY.jpg',
    price: 0,
    availability: true,
    size: 'Custom',
    color: 'Green / Brown / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'Customisable'],
    description: 'Morris – Code: MR-1033-MARY-2',
    customisable: true,
  },
  {
    id: 25,
    name: 'Morris MR-1047',
    image: '/MR-1034-GARDENIA.jpg',
    price: 0,
    availability: true,
    size: 'Custom',
    color: 'Purple / Gold / Ivory',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'Customisable'],
    description: 'Morris – Code: MR-1034-GARDENIA-2',
    customisable: true,
  },
  {
    id: 26,
    name: 'Morris MR-1048',
    image: '/MR-1035-EMBER.jpg',
    price: 0,
    availability: true,
    size: 'Custom',
    color: 'Beige / Brown / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'Customisable'],
    description: 'Morris – Code: MR-1035-EMBER-2',
    customisable: true,
  },
  {
    id: 27,
    name: 'Morris MR-1049',
    image: '/ABR-55-OSE-201-BEIGE.jpg',
    price: 1200000,
    availability: true,
    size: '10x14 / 12x15',
    color: 'Blue / White / Silver',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-201-BEIGE-3',
    customisable: false,
  },
  {
    id: 28,
    name: 'Morris MR-1050',
    image: '/ABR-55-OSE-201-CAMEL.JPG',
    price: 1300000,
    availability: true,
    size: '12x15',
    color: 'Green / Yellow / Orange',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-201-CAMEL-3',
    customisable: false,
  },
  {
    id: 29,
    name: 'Morris MR-1051',
    image: '/ABR-55-OSE-203-CAMEL.jpg',
    price: 1150000,
    availability: true,
    size: '10x14 / 12x15',
    color: 'Silver / Gray / Blue',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-203-CAMEL-3',
    customisable: false,
  },
  {
    id: 30,
    name: 'Morris MR-1052',
    image: '/ABR-55-OSE-204-BEIGE.jpg',
    price: 1400000,
    availability: true,
    size: '12x15',
    color: 'Black / Silver / Gold',
    material: 'Pure Silk & Wool',
    style: 'Transitional',
    pileHeight: 'Medium',
    collection: 'Morris',
    characteristics: ['Handknotted', 'Rectangular', 'In Stock'],
    description: 'Morris – Code: ABR-55-OSE-204-BEIGE-3',
    customisable: false,
  },
```

## Implementation Steps

1. Open the `app/assets/DummyData.tsx` file
2. Locate the end of the `dummyData2` array (after the entry with id: 13)
3. Insert the 17 new entries before the closing bracket `];` of the array
4. Save the file
5. Verify that the file now contains 30 entries (13 original + 17 new)

## Expected Outcome

After implementing these changes, the `dummyData2` array will contain 30 entries total:

- The original 13 entries (IDs 1-13) will remain unchanged
- 17 new entries (IDs 14-30) will be added with appropriate variations

The file will continue to export the `dummyData2` array as the default export.
