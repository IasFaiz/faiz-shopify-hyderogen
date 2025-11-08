import {Form, Link, useLoaderData, useNavigate} from 'react-router';
import type {ActionFunctionArgs, LoaderFunctionArgs} from 'react-router';
import {CUSTOMER_QUERY} from '~/lib/fragments';

type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  defaultAddress?: {
    id: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    province?: string;
    country: string;
    zip: string;
  };
  orders?: {
    edges: Array<{
      node: {
        id: string;
        orderNumber: string;
        processedAt: string;
        financialStatus: string;
        fulfillmentStatus: string;
        currentTotalPrice: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
};

export async function loader({context}: LoaderFunctionArgs) {
  const {session, storefront} = context;

  // Get the customer access token from the session
  const customerAccessToken = session.get('customerAccessToken');

  if (!customerAccessToken) {
    // Redirect to login page if no access token
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }

  try {
    // Fetch customer data
    const {customer} = await storefront.query(CUSTOMER_QUERY, {
      variables: {
        customerAccessToken,
      },
    });

    if (!customer) {
      // Redirect to login page if customer not found
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/login',
        },
      });
    }

    return new Response(JSON.stringify({customer}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Customer data fetch error:', error);
    // Redirect to login page on error
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }
}

export async function action({request, context}: ActionFunctionArgs) {
  const {session} = context;

  // Handle logout
  if (request.method === 'POST') {
    const formData = await request.formData();
    const intent = formData.get('intent');

    if (intent === 'logout') {
      // Clear the customer access token from the session
      session.unset('customerAccessToken');
      session.unset('customerAccessTokenExpiresAt');

      // Commit the session
      const sessionHeader = await session.commit();

      // Redirect to home page
      return new Response(null, {
        status: 302,
        headers: {
          'Set-Cookie': sessionHeader,
          Location: '/',
        },
      });
    }
  }

  return new Response(null, {status: 400});
}

export default function AccountPage() {
  const data = useLoaderData<{customer: Customer}>();
  const navigate = useNavigate();
  const customer = data?.customer;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Account Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application information.
                </p>
              </div>
              <Form method="post">
                <input type="hidden" name="intent" value="logout" />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </Form>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customer?.firstName} {customer?.lastName}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customer?.email}
                </dd>
              </div>

              {customer?.phone && (
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {customer.phone}
                  </dd>
                </div>
              )}

              {customer?.defaultAddress && (
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Default Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <address className="not-italic">
                      {customer.defaultAddress.firstName}{' '}
                      {customer.defaultAddress.lastName}
                      <br />
                      {customer.defaultAddress.address1}
                      {customer.defaultAddress.address2 && (
                        <>
                          <br />
                          {customer.defaultAddress.address2}
                        </>
                      )}
                      <br />
                      {customer.defaultAddress.city},{' '}
                      {customer.defaultAddress.province}{' '}
                      {customer.defaultAddress.zip}
                      <br />
                      {customer.defaultAddress.country}
                    </address>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        {customer?.orders && customer.orders.edges.length > 0 && (
          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order History
              </h3>
            </div>

            <div className="px-4 py-5 sm:p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Order
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customer.orders.edges.map((edge) => (
                      <tr key={edge.node.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{edge.node.orderNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(edge.node.processedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {edge.node.financialStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {edge.node.currentTotalPrice.amount}{' '}
                          {edge.node.currentTotalPrice.currencyCode}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
