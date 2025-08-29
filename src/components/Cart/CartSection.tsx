import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import * as S from './CartSection.styles';

const CartSection: React.FC = () => {
  const { state, dispatch } = useCart();
  const cartItems = state.items;
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <S.Section style={{ minHeight: '60vh', justifyContent: 'center' }}>
        <div
          style={{
            width: '75%',
            margin: '7rem auto 0 auto',
            background: 'rgba(24,24,24,0.98)',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <S.Heading
            style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              color: '#fff',
              textShadow: '0 2px 8px #0004',
            }}
          >
            Your cart is empty
          </S.Heading>
          <S.Paragraph style={{ fontSize: '1.25rem', color: '#eee' }}>
            Start shopping to add items!
          </S.Paragraph>
        </div>
      </S.Section>
    );
  }

  return (
    <S.Section style={{ minHeight: '60vh', justifyContent: 'center' }}>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm bg-white rounded text-center align-middle">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 font-semibold text-left">Product</th>
                <th className="p-2 font-semibold text-center">Price</th>
                <th className="p-2 font-semibold text-center">Qty</th>
                <th className="p-2 font-semibold text-center">Subtotal</th>
                <th className="p-2" />
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t border-gray-100">
                  <td className="p-3 flex items-center gap-4 text-left">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded border border-gray-200 shadow-sm"
                      style={{ width: 60, height: 60, objectFit: 'cover' }}
                    />
                    <span className="text-base font-medium">{item.name}</span>
                  </td>
                  <td className="p-2">{item.price}</td>
                  <td className="p-2">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => dispatch({ type: 'decrement', id: item.id })}
                        className="px-2 py-1 border border-gray-300 rounded text-lg bg-gray-50 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        aria-label={`Increase ${item.name}`}
                        onClick={() => dispatch({ type: 'increment', id: item.id })}
                        className="px-2 py-1 border border-gray-300 rounded text-lg bg-gray-50 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 font-semibold">
                    {`$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`}
                  </td>
                  <td className="p-2">
                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => dispatch({ type: 'remove', id: item.id })}
                      className="text-red-500 hover:underline text-lg"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 border-t pt-4 text-center">
          <span className="text-lg font-semibold">Total: ${total.toFixed(2)}</span>
          <Link
            to="/checkout"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </S.Section>
  );
};

export default CartSection;
