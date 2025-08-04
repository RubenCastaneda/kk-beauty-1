import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const cartItems = state.items;

  const updateQty = (id: number, delta: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    if (delta === -1 && item.quantity > 1) {
      dispatch({ type: 'decrement', id });
    } else if (delta === 1 && item.quantity < 99) {
      dispatch({ type: 'increment', id });
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'remove', id });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <Container>
        <Title>Your Cart</Title>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Your Cart</Title>
      {cartItems.map((item) => (
        <Row key={item.id}>
          <Thumb src={item.image} alt={item.name} />
          <Name>{item.name}</Name>
          <PriceQty>
            <Price>{item.price}</Price>
            <QtyBox>
              <button onClick={() => updateQty(item.id, -1)} disabled={item.quantity === 1}>
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.id, 1)} disabled={item.quantity === 99}>
                +
              </button>
            </QtyBox>
          </PriceQty>
          <Remove onClick={() => removeItem(item.id)}>×</Remove>
        </Row>
      ))}
      <Summary>
        <SummaryRow>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </SummaryRow>
      </Summary>
      <CheckoutButton to="/checkout">Checkout</CheckoutButton>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 2rem;
  color: #fff;
  background: #181818;
  border-radius: 0.5rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 100px 40px;
  align-items: center;
  column-gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const Thumb = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const PriceQty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const Price = styled.span`
  font-weight: 500;
`;

const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 20px;
  overflow: hidden;
  font-size: 14px;

  button {
    width: 24px;
    height: 24px;
    border: none;
    background: #444;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;

    &:hover {
      background: #555;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  span {
    padding: 0 8px;
    color: #fff;
  }
`;

const Remove = styled.button`
  border: none;
  background: none;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Summary = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 14px;
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 16px;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #444;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
`;
