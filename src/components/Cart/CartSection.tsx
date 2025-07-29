import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartSection: React.FC = () => {
  const { state, dispatch } = useCart();
  const cartItems = state.items;

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0,
  );

  const tableRows = (
    <div className="hidden sm:block overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-black/80">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Subtotal</th>
            <th className="p-3" />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-700">
              <td className="p-3 flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-16 h-16 object-cover rounded"
                />
                {item.name}
              </td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <button
                    aria-label={`Decrease ${item.name}`}
                    onClick={() => dispatch({ type: 'decrement', id: item.id })}
                    className="w-11 h-11 bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase ${item.name}`}
                    onClick={() => dispatch({ type: 'increment', id: item.id })}
                    className="w-11 h-11 bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-3">
                {`$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`}
              </td>
              <td className="p-3">
                <button
                  aria-label={`Remove ${item.name}`}
                  onClick={() => dispatch({ type: 'remove', id: item.id })}
                  className="w-11 h-11 text-red-400 hover:text-red-200"
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const cardRows = (
    <ul className="sm:hidden space-y-4">
      {cartItems.map((item) => (
        <li key={item.id} className="bg-black/70 p-4 rounded">
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm mb-2">{item.price}</p>
              <div className="flex items-center gap-2">
                <button
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => dispatch({ type: 'decrement', id: item.id })}
                  className="w-11 h-11 bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label={`Increase ${item.name}`}
                  onClick={() => dispatch({ type: 'increment', id: item.id })}
                  className="w-11 h-11 bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                >
                  +
                </button>
                <button
                  aria-label={`Remove ${item.name}`}
                  onClick={() => dispatch({ type: 'remove', id: item.id })}
                  className="w-11 h-11 ml-auto text-red-400 hover:text-red-200"
                >
                  ×
                </button>
              </div>
              <p className="mt-2">
                {`Subtotal: $${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(
                  2,
                )}`}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="relative max-w-5xl mx-auto p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-black text-white">
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          Your cart is empty. Start shopping to add items!
        </div>
      ) : (
        <>
          {tableRows}
          {cardRows}
          <footer className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-lg font-semibold">Total: ${total.toFixed(2)}</span>
            <Link
              to="/checkout"
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded w-full sm:w-auto text-center"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              Proceed to Checkout
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default CartSection;
