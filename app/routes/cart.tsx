import {useLoaderData, useNavigate} from 'react-router';
import {CartMain} from '~/components/CartMain';
import {CartSummary} from '~/components/CartSummary';
import {CartLineItem} from '~/components/CartLineItem';
import type {CartLayout} from '~/components/CartMain';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import '~/styles/cart.css';

export default function CartPage() {
  const navigate = useNavigate();
  const cart = useLoaderData<typeof loader>() as CartApiQueryFragment | null;
  
  const layout: CartLayout = 'page';

  if (!cart || !cart.lines?.nodes || cart.lines.nodes.length === 0) {
    return (
      <div className="cart-page-container cart-page-empty">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="mb-6">Your cart is empty.</p>
        <button
          onClick={() => void navigate('/')}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-header-with-back">
        <button
          onClick={() => void navigate(-1)}
          className="cart-back-button"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      </div>

      {/* Cart Items */}
      <div className="mb-8">
        {cart.lines.nodes.map((line: any) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </div>

      {/* Cart Summary */}
      <CartSummary cart={cart} layout={layout} />
    </div>
  );
}

// Loader function to fetch cart data
export async function loader({context}: {context: any}) {
  const {cart} = context;
  return await cart.get();
}
