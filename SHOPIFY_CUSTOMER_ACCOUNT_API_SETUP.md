# Shopify Customer Account API Setup Guide

This guide will help you set up the Shopify Customer Account API credentials to fix the "You do not have valid credential to use Customer Account API (/account)" error.

## Prerequisites

1. Access to your Shopify store admin panel
2. Developer permissions to create API credentials
3. Your Hydrogen storefront project

## Step 1: Enable Customer Accounts in Shopify

1. Log in to your Shopify admin panel
2. Go to **Settings** > **Checkout**
3. Under the **Customer accounts** section, select **Accounts are required**
4. Configure additional settings as needed:
   - Show login link on storefront pages
   - Require customers to log in to view their order history
   - Allow customers to create accounts during checkout
5. Click **Save**

## Step 2: Create Customer Account API Credentials

1. In your Shopify admin, go to **Settings** > **Apps and sales channels**
2. Click **Develop apps** (at the bottom)
3. Click **Create an app**
4. Fill in the app details:
   - **App name**: "Storefront Customer Account" (or your preferred name)
   - **App developer**: Your email or company name
   - **Developer privacy policy**: Add your privacy policy URL (optional)
   - **Terms of service**: Add your terms URL (optional)
5. Click **Create app**

## Step 3: Configure API Scopes

1. In the app configuration page, go to the **Configuration** tab
2. Under **API credentials**, click **Configure Admin API access**
3. Select the following scopes:
   - `read_customers`
   - `write_customers`
   - `read_customer_legacy_api_tokens`
   - `write_customer_legacy_api_tokens`
4. Click **Save**

## Step 4: Get Your Credentials

1. Go back to the app configuration page
2. Under **API credentials**, find the **Customer Account API** section
3. Note down these values:
   - **Client ID**
   - **Client Secret**

## Step 5: Get Your Storefront ID

1. In your Shopify admin, go to **Online Store** > **Preferences**
2. Scroll down to the **Storefront API** section
3. Find your **Storefront API token** (if not already created, create one)
4. Your Storefront ID is in this format: `gid://shopify/Shop/123456789`
   - It might be displayed directly or you can extract it from the API access details

## Step 6: Update Your Environment Variables

Replace the placeholder values in your `.env` file with your actual credentials:

```bash
# The variables added in this file are only available locally in MiniOxygen.
# Run `h2 link` to also inject environment variables from your storefront,
# or `h2 env pull` to populate this file.
SESSION_SECRET="foobar"

# Shopify Store Configuration
PUBLIC_STORE_DOMAIN=faiz-store-8377.myshopify.com
PUBLIC_STOREFRONT_API_TOKEN=d4f16ca415f3d46704705eb3774315d8
PUBLIC_CHECKOUT_DOMAIN=faiz-store-8377.myshopify.com

# Customer Account API Configuration
PUBLIC_STOREFRONT_ID=gid://shopify/Shop/123456789  # Replace with your actual Storefront ID
PUBLIC_CUSTOMER_ACCOUNT_CLIENT_ID=your-actual-client-id  # Replace with your actual Client ID
PUBLIC_CUSTOMER_ACCOUNT_CLIENT_SECRET=your-actual-client-secret  # Replace with your actual Client Secret
```

## Step 7: Install the App

1. In the app configuration page, go to the **Overview** tab
2. Click **Select store** and choose your store
3. Click **Install app**
4. Review the permissions and click **Install**

## Step 8: Test the Configuration

1. Restart your development server
2. Try to register a new account at `/register`
3. Verify that the registration completes successfully
4. Try to log in with the new account at `/login`

## Troubleshooting

### Error: "You do not have valid credential to use Customer Account API"

1. Verify all environment variables are correctly set
2. Ensure the Customer Account API app is installed
3. Check that the API scopes include all required permissions
4. Verify that customer accounts are enabled in your Shopify settings

### Error: "Invalid client ID or secret"

1. Double-check your Client ID and Client Secret
2. Ensure there are no extra spaces or characters
3. Verify the app is properly installed

### Error: "Customer not found"

1. Ensure the customer exists in your Shopify admin
2. Check that the customer account is properly created
3. Verify the customer is not disabled

## Additional Resources

- [Shopify Customer Account API Documentation](https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api)
- [Hydrogen Authentication Guide](https://shopify.dev/docs/custom-storefronts/hydrogen/authentication)
- [Shopify Developer Documentation](https://shopify.dev/docs)

## Next Steps

After completing this setup:

1. Test the registration flow thoroughly
2. Verify login functionality works correctly
3. Ensure customer account pages display properly
4. Test logout functionality
5. Implement any additional customer account features as needed
