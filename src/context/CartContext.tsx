import React, { createContext, useContext, useReducer, ReactNode } from 'react';

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
  | { type: 'decrement'; id: number };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({
  state: { items: [] },
  dispatch: () => {},
});

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + action.item.quantity } : i
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
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case 'decrement':
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      };
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

