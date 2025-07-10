import React from 'react';
import styled from 'styled-components';
import HeroTextSection from '../components/Hero/HeroTextSection';
import { Link } from 'react-router-dom';

const Section = styled.section`
  width: 75%;
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 2.5rem 2rem;
  background: #181818;
  border-radius: 0.7rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  th, td {
    padding: 1rem;
    border-bottom: 1px solid #444;
    text-align: left;
    color: #fff;
  }
  th {
    background: #222;
    color: #ffd6e0;
    font-family: ${({ theme }) => theme.fonts.sans};
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  color: #bbb;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  background: #ffd6e0;
  color: #222;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  text-decoration: none;
  text-align: center;
`;

// Dummy cart items for demo
const cartItems = [
  { id: 1, name: 'Rose Glow Serum', price: '$24.99', quantity: 1 },
  { id: 2, name: 'Vintage Lip Tint', price: '$14.99', quantity: 2 },
];

const Cart: React.FC = () => {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$','')) * item.quantity, 0);
  return (
    <>
      <HeroTextSection title="Your Shopping Cart" subtitle="Review your items and checkout with confidence.">
        <span style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', margin: '0 auto', color: '#eee' }}>
          All your selected beauty products are listed below. You can adjust quantities or remove items before checkout.
        </span>
      </HeroTextSection>
      <Section>
        {cartItems.length === 0 ? (
          <EmptyCart>Your cart is empty. Start shopping to add items!</EmptyCart>
        ) : (
          <>
            <CartTable>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{`$${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}`}</td>
                  </tr>
                ))}
              </tbody>
            </CartTable>
            <h3 style={{ textAlign: 'right', color: '#ffd6e0', fontWeight: 600 }}>Total: ${total.toFixed(2)}</h3>
            <Button to="/products">Continue Shopping</Button>
            <Button to="/checkout">Proceed to Checkout</Button>
          </>
        )}
      </Section>
    </>
  );
};

export default Cart;
