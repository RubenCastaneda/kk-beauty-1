import React from 'react';
import HeroTextSection from '../components/Hero/HeroTextSection';
import CartSection from '../components/Cart/CartSection';

const Cart: React.FC = () => {
  return (
    <>
      <HeroTextSection
        title="Your Shopping Cart"
        subtitle="Review your items and checkout with confidence."
      >
        <span
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '0 auto',
            color: '#eee',
          }}
        >
          All your selected beauty products are listed below. You can adjust quantities or remove
          items before checkout.
        </span>
      </HeroTextSection>
      <CartSection />
    </>
  );
};

export default Cart;
