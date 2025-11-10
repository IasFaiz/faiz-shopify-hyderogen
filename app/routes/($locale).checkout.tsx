import {
  useLoaderData,
  data,
  type HeadersFunction,
  useActionData,
  Form,
  redirect,
  Link,
} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartMain} from '~/components/CartMain';
import {useState} from 'react';
import '~/styles/checkout.css';

type ActionData = {
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    contactNumber?: string;
  };
  success?: boolean;
  formData?: {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    notes: string;
  };
};

export const meta = () => {
  return [{title: `Hydrogen | Checkout`}];
};

export const headers: HeadersFunction = ({actionHeaders}) => actionHeaders;

export async function action({request, context}: any) {
  const {cart} = context;
  const formData = await request.formData();

  // Get form data
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const contactNumber = formData.get('contactNumber') as string;
  const notes = formData.get('notes') as string;

  // Basic validation
  const errors = {
    firstName: !firstName ? 'First name is required' : '',
    lastName: !lastName ? 'Last name is required' : '',
    email: !email
      ? 'Email is required'
      : !/\S+@\S+\.\S+/.test(email)
        ? 'Email is invalid'
        : '',
    contactNumber: !contactNumber
      ? 'Contact number is required'
      : !/^\d+$/.test(contactNumber)
        ? 'Contact number must be numeric'
        : '',
  };

  // If there are errors, return them
  if (Object.values(errors).some((error) => error)) {
    return data({errors}, {status: 400});
  }

  // Process the order (in a real app, you would send this to your backend)
  // For now, we'll just return a success response
  return data({
    success: true,
    formData: {firstName, lastName, email, contactNumber, notes},
  });
}

export async function loader({context}: any) {
  const {cart} = context;
  return await cart.get();
}

export default function Checkout() {
  const cart = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If form was submitted successfully, show thank you message
  if ((actionData as ActionData)?.success || isSubmitted) {
    return (
      <div className="checkout-thank-you">
        <h1>Thank you!</h1>
        <p>Thank you, our consultant will contact you shortly!</p>
        <Link to="/" className="back-to-home-button">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page-container">
      <div className="checkout-header">
        <Link to="/cart" className="back-to-cart-button">
          ← Back to Cart
        </Link>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        {/* Left Section - Order Summary */}

        {/* Right Section - Contact Form */}
        <div className="checkout-form-container">
          <h2>Contact Information</h2>
          <Form method="post" className="checkout-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className={
                    (actionData as ActionData)?.errors?.firstName ? 'error' : ''
                  }
                />
                {(actionData as ActionData)?.errors?.firstName && (
                  <div className="error-message">
                    {(actionData as ActionData).errors?.firstName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className={
                    (actionData as ActionData)?.errors?.lastName ? 'error' : ''
                  }
                />
                {(actionData as ActionData)?.errors?.lastName && (
                  <div className="error-message">
                    {(actionData as ActionData).errors?.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={
                  (actionData as ActionData)?.errors?.email ? 'error' : ''
                }
              />
              {(actionData as ActionData)?.errors?.email && (
                <div className="error-message">
                  {(actionData as ActionData).errors?.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number *</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                className={
                  (actionData as ActionData)?.errors?.contactNumber
                    ? 'error'
                    : ''
                }
              />
              {(actionData as ActionData)?.errors?.contactNumber && (
                <div className="error-message">
                  {(actionData as ActionData).errors?.contactNumber}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Leave a note"
                rows={4}
              />
            </div>

            <button type="submit" className="submit-order-button">
              Submit
            </button>
          </Form>
        </div>
        <div className="checkout-order-summary">
          <h2>Order Summary</h2>
          <div className="checkout-cart-items">
            <CartMain layout="page" cart={cart} showPrices={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
