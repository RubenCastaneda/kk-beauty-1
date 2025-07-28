import React from 'react';
import * as S from './Header.styles';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const count = state.items.reduce((s, i) => s + i.quantity, 0);
  return (
  <S.Wrapper>
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'Georgia, serif',
        }}
      >
        <img src={logo} alt="KK Beauty Lab logo" style={{ width: '32px', marginRight: '0.5rem' }} />
        KK Beauty Lab
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link
          to="/cart"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span role="img" aria-label="cart" style={{ marginRight: '0.5rem' }}>
            🛒
          </span>{' '}
          Cart {count > 0 && `(${count})`}
        </Link>
      </div>
    </div>
  </S.Wrapper>
  );
};

export default Header;
