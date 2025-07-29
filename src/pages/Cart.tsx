import React from 'react';
import CartSection from '../components/Cart/CartSection';

const Cart: React.FC = () => {
  return (
    <main
      className="w-11/12 max-w-3xl mx-auto text-white leading-relaxed"
      style={{ marginTop: '6.5rem' }}
    >
      <h1
        className="text-3xl font-bold mb-4 text-center"
        style={{ marginTop: '0', textAlign: 'center' }}
      >
        Your Shopping Cart
      </h1>
      <div
        style={{
          width: '75%',
          margin: '2.5rem auto',
          background: 'rgba(24,24,24,0.98)',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p className="mb-2 text-lg">You&apos;re one step closer to your transformation.</p>
        <p className="mb-2 text-lg">
          Your curated selection of beauty essentials awaits. Review your items below and get ready
          to step into your spotlight.
        </p>
        <p className="mb-0 text-lg">
          Adjust quantities or remove items before checkout—your perfect routine is just a click
          away.
        </p>
      </div>
      <CartSection />
    </main>
  );
};

export default Cart;
