import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(p) => p.theme.fonts.serif};
  z-index: 1000;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;
