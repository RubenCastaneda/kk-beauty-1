import React from 'react';
import * as S from './Header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <S.Wrapper>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
      <Link
        to="/"
        style={{
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'Playfair Display, serif',
        }}
      >
        KK Beauty
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="cart" style={{ marginRight: '0.5rem' }}>🛒</span> Cart
        </Link>
      </div>
    </div>
  </S.Wrapper>
);

export default Header;
