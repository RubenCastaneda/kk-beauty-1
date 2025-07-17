import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  width: 75%;
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 2rem 1rem;
  background: #111;
  border-radius: 0.1rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid #333;
    text-align: left;
    color: #fff;
    background: #000;
    border-radius: 0.1rem;
  }
  th {
    background: #111;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.sans};
    border-radius: 0.1rem;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  color: #bbb;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const Button = styled(Link)`
  margin-top: 1.2rem;
  padding: 0.9rem 1.2rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 0.1rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #222;
    color: #fff;
  }
`;

// Dummy cart items for demo
const cartItems = [
  { id: 1, name: 'Rose Glow Serum', price: '$24.99', quantity: 1 },
  { id: 2, name: 'Vintage Lip Tint', price: '$14.99', quantity: 2 },
];

const CartSection: React.FC = () => {
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0,
  );
  return (
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
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{`$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </CartTable>
          <h3 style={{ textAlign: 'right', color: '#fff', fontWeight: 600 }}>
            Total: ${total.toFixed(2)}
          </h3>
          <Button to="/products">Continue Shopping</Button>
          <Button to="/checkout">Proceed to Checkout</Button>
        </>
      )}
    </Section>
  );
};

export default CartSection;
