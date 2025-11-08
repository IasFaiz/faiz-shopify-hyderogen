import type {ActionFunctionArgs} from 'react-router';
import {CUSTOMER_REGISTER_MUTATION} from '~/lib/fragments';

type ActionResponse = {
  error?: string;
  success?: boolean;
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
  const firstName = String(formData.get('firstName') || '');
  const lastName = String(formData.get('lastName') || '');

  // Validate form data
  if (!email || !password || !firstName || !lastName) {
    return new Response(JSON.stringify({error: 'All fields are required'}), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (password.length < 8) {
    return new Response(
      JSON.stringify({error: 'Password must be at least 8 characters'}),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  try {
    // Create customer
    const {customerCreate} = await storefront.mutate(
      CUSTOMER_REGISTER_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
            firstName,
            lastName,
          },
        },
      },
    );

    // Handle errors
    if (customerCreate?.customerUserErrors?.length) {
      const errors = customerCreate.customerUserErrors;
      return new Response(
        JSON.stringify({
          error: errors[0].message || 'Could not create customer',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        customer: customerCreate.customer,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Customer registration error:', error);
    return new Response(
      JSON.stringify({error: 'An error occurred during registration'}),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
