// src/components/Header/Header.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  backdrop-filter: saturate(180%) blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.5rem;
  z-index: 1000;

  @media (max-width: 600px) {
    height: 56px;
    font-size: 1.1rem;
    padding: 0 0.2rem;
  }
`;
