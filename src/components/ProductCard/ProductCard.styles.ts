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

  @media (max-width: 600px) {
    min-width: 0;
    border-radius: 0.5rem;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  display: block;
  box-sizing: border-box;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 0.75rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export const Price = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;
