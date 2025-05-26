import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background: ${(p) => p.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;
