import styled from 'styled-components';

interface SlideProps {
  image: string;
  active: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${(p) => p.theme.colors.background};
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.image});
  background-size: cover;
  background-position: center;
  opacity: ${(p) => (p.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
  user-select: none;

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }

  z-index: 10;
`;
