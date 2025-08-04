import React from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import OrderSummary from '../components/Checkout/OrderSummary';
import StripeProvider from '../components/Checkout/StripeProvider';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 6.5rem;
  @media (max-width: 768px) {
    width: 98vw;
    padding: 1.5rem 0.5rem;
    margin-top: 5rem;
  }
`;

const CheckoutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Checkout: React.FC = () => {
  const { state } = useCart();
  const cartItems = state.items;

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <Title>Checkout</Title>
          <Subtitle>Your cart is empty. Please add items before proceeding to checkout.</Subtitle>
        </CheckoutHeader>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Title>Checkout</Title>
        <Subtitle>Complete your purchase to receive your beauty essentials</Subtitle>
      </CheckoutHeader>

      <StripeProvider>
        <CheckoutGrid>
          <CheckoutForm total={total} />
          <OrderSummary items={cartItems} total={total} />
        </CheckoutGrid>
      </StripeProvider>
    </CheckoutContainer>
  );
};

export default Checkout;
