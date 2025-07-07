// src/components/ProductCard/ProductCard.styles.ts
import styled from 'styled-components';

/**
 * Card:
 *  - smoother border‐radius, light drop shadow
 *  - lifts up slightly on hover
 * Image:
 *  - object‐fit: cover so it always fills
 *  - subtle scale on hover
 * Info (overlay):
 *  - darker translucent background
 *  - fades in while sliding up on hover
 */

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0; /* sharp corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: #181818;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 0.75rem;
`;

export const Price = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 1rem;
`;
