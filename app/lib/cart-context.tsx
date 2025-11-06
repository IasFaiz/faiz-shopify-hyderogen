import React, {createContext, useContext, useReducer} from 'react';
import type {ReactNode} from 'react';

// Define cart item type
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  customSize?: {
    width: string;
    length: string;
  };
  color: string;
  shape: string;
  quantity: number;
  collection: string;
}

// Define cart context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

// Create cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define action types
type CartAction =
  | {type: 'ADD_TO_CART'; payload: Omit<CartItem, 'id'>}
  | {type: 'UPDATE_QUANTITY'; payload: {id: number; quantity: number}}
  | {type: 'REMOVE_FROM_CART'; payload: number}
  | {type: 'CLEAR_CART'};

// Define cart reducer
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Generate a unique ID for the cart item
      const id = Date.now();
      return [...state, {...action.payload, id}];
    }
    case 'UPDATE_QUANTITY': {
      return state.map((item) =>
        item.id === action.payload.id
          ? {...item, quantity: action.payload.quantity}
          : item,
      );
    }
    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.payload);
    }
    case 'CLEAR_CART': {
      return [];
    }
    default: {
      return state;
    }
  }
};

// Define cart provider props
interface CartProviderProps {
  children: ReactNode;
}

// Create cart provider
export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    dispatch({type: 'ADD_TO_CART', payload: item});
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({type: 'UPDATE_QUANTITY', payload: {id, quantity}});
  };

  const removeFromCart = (id: number) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: id});
  };

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
