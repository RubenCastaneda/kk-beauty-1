import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.serif};
  text-align: center;
  padding: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: translateY(0);
  }
`;
