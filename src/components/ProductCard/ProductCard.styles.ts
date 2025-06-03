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
  border-radius: 0.75rem; /* softer corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* light base shadow */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px); /* lift on hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* stronger shadow */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* always fill */
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05); /* gentle zoom */
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7); /* slightly darker overlay */
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem; /* readable */
  text-align: center;
  padding: 1rem 0; /* taller overlay */
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease;

  ${Card}:hover & {
    transform: translateY(0);
    opacity: 1; /* fade in */
  }
`;
