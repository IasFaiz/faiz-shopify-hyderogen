import type {ActionFunctionArgs} from 'react-router';
import {CUSTOMER_LOGOUT_MUTATION} from '~/lib/fragments';

type ActionResponse = {
  error?: string;
  success?: boolean;
};

export async function action({request, context}: ActionFunctionArgs) {
  const {session, storefront} = context;

  try {
    // Get the customer access token from the session
    const customerAccessToken = session.get('customerAccessToken');

    if (customerAccessToken) {
      // Revoke the customer access token
      await storefront.mutate(CUSTOMER_LOGOUT_MUTATION, {
        variables: {
          customerAccessToken,
        },
      });

      // Clear the customer access token from the session
      session.unset('customerAccessToken');
      session.unset('customerAccessTokenExpiresAt');
    }

    // Commit the session
    const sessionHeader = await session.commit();

    // Return success response with cleared session cookie
    return new Response(
      JSON.stringify({
        success: true,
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
    console.error('Customer logout error:', error);
    return new Response(
      JSON.stringify({error: 'An error occurred during logout'}),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
