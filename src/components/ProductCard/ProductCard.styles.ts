// src/components/ProductCard/ProductCard.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const Card = styled(motion.div)`
  background: #161616;
  border-radius: 16px;
  padding: 12px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  min-height: 220px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition:
    transform 0.6s cubic-bezier(0.2, 0, 0.2, 1),
    box-shadow 0.6s cubic-bezier(0.2, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    min-width: 0;
    border-radius: 0.5rem;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);
    padding: 6px;
    min-height: 140px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  display: block;
  box-sizing: border-box;
  transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
  border-radius: 8px;
  padding: 0.5rem;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0.15rem;
  }
`;

export const Name = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 0.75rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }
`;

export const Price = styled.p`
  margin: 4px 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin-bottom: 0.4rem;
  }
`;
