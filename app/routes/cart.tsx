import {Link} from 'react-router';
import {useCart} from '~/lib/cart-context';

export default function CartPage() {
  const {cart, getCartTotal, updateQuantity, removeFromCart, clearCart} =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page-container cart-page-empty">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="mb-6">Your cart is empty.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="mb-8">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Product Image */}
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-collection">
                  Collection: {item.collection}
                </p>
                <div className="cart-item-options">
                  <span className="cart-item-option">Color: {item.color}</span>
                  <span className="cart-item-option">
                    Size:{' '}
                    {item.customSize
                      ? `${item.customSize.width}x${item.customSize.length}`
                      : item.size}
                  </span>
                  <span className="cart-item-option">Shape: {item.shape}</span>
                </div>
              </div>

              {/* Price and Quantity */}
              <div className="cart-item-actions">
                <p className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-item-remove"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <div className="cart-summary-row cart-summary-subtotal">
          <span>Subtotal:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>

        <div className="cart-summary-actions">
          <button
            onClick={clearCart}
            className="cart-summary-button cart-summary-clear"
          >
            Clear Cart
          </button>
          <Link to="/" className="cart-summary-button cart-summary-continue">
            Continue Shopping
          </Link>
          <button className="cart-summary-button cart-summary-checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
