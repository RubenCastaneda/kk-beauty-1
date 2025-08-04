import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  qty: number;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    imgSrc: '/images/prod1.jpg',
    name: 'Luxe Lipstick',
    price: 25,
    qty: 1,
  },
  {
    id: 2,
    imgSrc: '/images/prod2.jpg',
    name: 'Glow Serum',
    price: 45,
    qty: 2,
  },
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.min(99, Math.max(1, item.qty + delta)) } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Container>
      <Title>Your Cart</Title>
      {cartItems.map((item) => (
        <Row key={item.id}>
          <Thumb src={item.imgSrc} alt={item.name} />
          <Name>{item.name}</Name>
          <PriceQty>
            <Price>${item.price.toFixed(2)}</Price>
            <QtyBox>
              <button onClick={() => updateQty(item.id, -1)} disabled={item.qty === 1}>
                −
              </button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)} disabled={item.qty === 99}>
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
  padding: 0 16px;
  color: #000;
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
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  font-size: 14px;

  button {
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  span {
    padding: 0 8px;
  }
`;

const Remove = styled.button`
  border: none;
  background: none;
  color: #888;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #000;
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
  background: #000;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
