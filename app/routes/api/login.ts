import type {ActionFunctionArgs} from 'react-router';
import {CUSTOMER_LOGIN_MUTATION} from '~/lib/fragments';

type ActionResponse = {
  error?: string;
  success?: boolean;
  customerAccessToken?: {
    accessToken: string;
    expiresAt: string;
  };
  customer?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export async function action({request, context}: ActionFunctionArgs) {
  const {session, storefront} = context;

  const formData = await request.formData();
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');

  // Validate form data
  if (!email || !password) {
    return new Response(
      JSON.stringify({error: 'Email and password are required'}),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  try {
    // Create customer access token
    const {customerAccessTokenCreate} = await storefront.mutate(
      CUSTOMER_LOGIN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          },
        },
      },
    );

    // Handle errors
    if (customerAccessTokenCreate?.customerUserErrors?.length) {
      const errors = customerAccessTokenCreate.customerUserErrors;
      return new Response(
        JSON.stringify({
          error: errors[0].message || 'Invalid email or password',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Get the customer access token
    const customerAccessToken = customerAccessTokenCreate?.customerAccessToken;

    if (!customerAccessToken) {
      return new Response(
        JSON.stringify({error: 'Failed to create access token'}),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Store the customer access token in the session
    session.set('customerAccessToken', customerAccessToken.accessToken);
    session.set('customerAccessTokenExpiresAt', customerAccessToken.expiresAt);

    // Commit the session
    const sessionHeader = await session.commit();

    // Return success response with session cookie
    return new Response(
      JSON.stringify({
        success: true,
        customerAccessToken,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': sessionHeader,
        },
      },
    );
  } catch (error) {
    console.error('Customer login error:', error);
    return new Response(
      JSON.stringify({error: 'An error occurred during login'}),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
