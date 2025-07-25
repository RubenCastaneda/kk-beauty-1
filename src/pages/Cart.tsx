import React from 'react';
import CartSection from '../components/Cart/CartSection';

const Cart: React.FC = () => {
  return (
    <main
      style={{
        width: '90%',
        maxWidth: 800,
        margin: '2rem auto',
        color: '#fff',
        lineHeight: '1.7',
      }}
    >
      <h1>Your Shopping Cart</h1>
      <p>You&apos;re one step closer to your transformation.</p>
      <p>
        Your curated selection of beauty essentials awaits. Review your items below and get ready to
        step into your spotlight.
      </p>
      <p>
        Adjust quantities or remove items before checkout—your perfect routine is just a click away.
      </p>
      <CartSection />
    </main>
  );
};

export default Cart;
