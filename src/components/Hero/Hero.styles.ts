// src/components/Hero/Hero.styles.ts
import styled from 'styled-components';

interface SlideProps {
  image: string;
  isActive: boolean;
}

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  /* shrink on mobile */
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%; /* changed from 75% → 100% */
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Slide = styled.div<SlideProps>`
  flex: ${({ isActive }) => (isActive ? '0 0 50%' : '0 0 20%')};
  aspect-ratio: 16/9;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.8)});
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
  user-select: none;
  z-index: 1;

  &.left {
    left: 1rem; /* bring it in a bit from the edge */
  }
  &.right {
    right: 1rem;
  }
`;
