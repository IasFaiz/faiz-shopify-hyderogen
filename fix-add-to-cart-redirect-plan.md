# Fix Add to Cart Button Redirect Issue

## Problem

The "Add to Cart" button on the product details page is still opening the cart as a sidebar instead of redirecting to the cart page.

## Root Cause

The AddToCartButton component is using CartForm which might be triggering the cart sidebar to open instead of redirecting to the cart page.

## Solution Plan

### 1. Modify AddToCartButton Component

- Update the AddToCartButton component to add a hidden input field for redirect
- Set the redirectTo input to "/cart" to ensure the user is redirected to the cart page after adding an item

### 2. Update CartForm Action

- Modify the CartForm action to include a redirectTo parameter
- This will ensure that after adding an item to the cart, the user is redirected to the cart page

### 3. Update Cart Route Action

- Ensure the cart route action handles the redirectTo parameter correctly
- This will ensure the redirect works as expected

## Implementation Steps

1. **Modify AddToCartButton.tsx**
   - Add a hidden input field with name="redirectTo" and value="/cart"
   - This will be submitted along with the form data

2. **Update ProductForm.tsx**
   - Remove the setTimeout navigation code since we'll be handling the redirect through the form
   - This will simplify the code and make it more reliable

3. **Test the Changes**
   - Verify that clicking "Add to Cart" now redirects to the cart page
   - Ensure the cart page displays correctly with the added item

## Expected Outcome

After implementing these changes, when a user clicks the "Add to Cart" button on the product details page, they will be redirected to the cart page instead of seeing the cart sidebar.
