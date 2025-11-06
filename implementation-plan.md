# Interactive Product Details Flow Implementation Plan

## Overview

This plan outlines the implementation of an interactive product details flow in the Hydrogen storefront, including clickable product cards, a detailed product page, and a cart page.

## Current State

- Homepage with product cards exists in `app/components/RugsSection.tsx`
- Product data is available in `app/assets/DummyData.tsx`
- Basic routing structure exists in `app/routes.ts`

## Implementation Steps

### 1. Make Existing Product Cards Clickable

- **File to modify**: `app/components/RugsSection.tsx`
- **Changes needed**:
  - Import `Link` from `@shopify/hydrogen`
  - Wrap the product card in a `Link` component
  - Set the `to` prop to navigate to `/products/[productId]`
  - Pass product ID as a parameter in the URL

### 2. Create Dynamic Product Details Route

- **File to create**: `app/routes/products.$productId.tsx`
- **Purpose**: Handle dynamic routing to product details pages
- **Implementation**:
  - Use file-based routing convention for dynamic routes
  - Extract productId from URL params
  - Fetch product data from dummy data using the productId
  - Handle case where product is not found

### 3. Implement Product Details Page

- **File to implement**: `app/routes/products.$productId.tsx`
- **Components needed**:
  - **Image Gallery**:
    - Main product image display
    - Five sub-images below (repeat single image if only one exists)
    - Click functionality to update main image when sub-image is clicked
  - **Product Information**:
    - Breadcrumb navigation (Home / Rugs / {Product Name})
    - Product name, collection, characteristics (as tags/list)
  - **Customization Options**:
    - Size selection (pre-defined sizes + custom size option)
    - Custom size inputs (width + length) with validation
    - Color options (repeat same image if needed)
    - Shape options (radio buttons: "Square or Rectangle", "Circle or Oval")
    - Quantity controls (increment/decrement)
  - **Action Button**:
    - "Add to Cart" or "Get Quote" button
    - Disable until required selections are made
    - Navigate to cart page on click

### 4. Create Cart Context

- **File to create**: `app/lib/cart-context.tsx`
- **Purpose**: Manage cart state across the application
- **Implementation**:
  - Create React context for cart state
  - Implement context provider with cart state and actions
  - Add functions to add items to cart, update quantity, remove items
  - Add context to the app root

### 5. Implement Cart Page

- **File to create**: `app/routes/cart.tsx`
- **Components needed**:
  - Cart items display with:
    - Small product image
    - Product name
    - Selected options (color, size, shape)
    - Quantity
    - Price
  - Cart summary (subtotal, etc.)
  - Dummy "Checkout" button (no real API integration)

### 6. Update Routing Configuration

- **File to modify**: `app/routes.ts`
- **Changes needed**:
  - Add route for product details page
  - Add route for cart page

### 7. Add Navigation Components

- **Implementation**:
  - Breadcrumb navigation for product details page
  - Back to products link
  - Continue shopping link on cart page

### 8. Implement Form Validation

- **Implementation**:
  - Validate custom size inputs (ensure width and length are provided)
  - Validate that all required options are selected before enabling "Add to Cart"
  - Show appropriate error messages

### 9. Style the Pages

- **Files to modify/create**:
  - Update existing styles as needed
  - Create new styles for product details and cart pages if needed
- **Implementation**:
  - Ensure consistent styling with existing design
  - Make pages responsive
  - Add hover states and transitions for better UX

### 10. Test the Complete Flow

- **Testing scenarios**:
  - Click product card on homepage
  - Navigate to product details page
  - Select various options
  - Add product to cart
  - Navigate to cart page
  - Verify all information is displayed correctly

## Technical Considerations

### Data Flow

1. Homepage displays product cards from `DummyData.tsx`
2. Clicking a card navigates to `/products/[productId]`
3. Product details page fetches product data using the productId
4. User selects options and adds to cart
5. Cart context stores the cart state
6. Cart page displays items from cart context

### State Management

- Use React context for cart state
- Use local state for product selections on the details page
- Use URL params for product identification

### Routing

- Use Hydrogen's file-based routing
- Use `Link` components for navigation
- Implement dynamic routes for product details

### Accessibility

- Add appropriate ARIA labels
- Ensure keyboard navigation works
- Add focus styles for interactive elements
- Use semantic HTML elements

## File Structure

```
app/
├── components/
│   ├── RugsSection.tsx (modify)
│   └── ... (existing components)
├── lib/
│   ├── cart-context.tsx (create)
│   └── ... (existing lib files)
├── routes/
│   ├── products.$productId.tsx (create)
│   ├── cart.tsx (create)
│   └── routes.ts (modify)
└── ... (existing files)
```

## Timeline Estimate

- Making product cards clickable: 1-2 hours
- Creating product details route: 2-3 hours
- Implementing product details page: 4-6 hours
- Creating cart context: 2-3 hours
- Implementing cart page: 3-4 hours
- Styling and polish: 3-4 hours
- Testing and bug fixes: 2-3 hours

**Total estimated time: 17-25 hours**
