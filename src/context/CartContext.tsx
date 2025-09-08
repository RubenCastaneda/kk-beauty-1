import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'add'; item: CartItem }
  | { type: 'remove'; id: number }
  | { type: 'increment'; id: number }
  | { type: 'decrement'; id: number }
  | { type: 'clear' };

const STORAGE_KEY = 'cart-items';

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
  getCartTotal: () => { total: string; subtotal: number };
  clearCart: () => void;
}>({
  state: { items: [] },
  dispatch: () => undefined,
  getCartTotal: () => ({ total: '0.00', subtotal: 0 }),
  clearCart: () => undefined,
});

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + action.item.quantity } : i,
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case 'remove':
      return { items: state.items.filter((i) => i.id !== action.id) };
    case 'increment':
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      };
    case 'decrement':
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      };
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

const init = (): CartState => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return { items: JSON.parse(stored) };
      } catch {
        return { items: [] };
      }
    }
  }
  return { items: [] };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] }, init);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items]);

  const getCartTotal = () => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
      0,
    );
    return {
      total: subtotal.toFixed(2),
      subtotal,
    };
  };

  const clearCart = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
