import styled from 'styled-components';

interface SlideProps {
  image: string;
  position: 'prev' | 'current' | 'next';
}

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: ${p => p.theme.colors.background};
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.serif};
  font-size: 2.5rem;
  color: ${p => p.theme.colors.text};
  margin-bottom: 2rem;
`;

export const SlideContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const Slide = styled.div<SlideProps>`
  flex: ${p => (p.position === 'current' ? '0 0 50%' : '0 0 25%')};
  height: auto;
  padding-top: calc( (9 / 16) * 100% * ${p => (p.position === 'current' ? 0.5 : 0.25)} ); /* preserve 16:9 */
  margin: 0 0.5rem;
  background-image: url(${p => p.image});
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  opacity: ${p => (p.position === 'current' ? 1 : 0.6)};
  transform: scale(${p => (p.position === 'current' ? 1 : 0.8)});
  transition: all 0.5s ease;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  z-index: 2;

  &.left  { left: -2rem; }
  &.right { right: -2rem; }
`;

export const Nav = styled.nav`
  margin-top: 2rem;
  display: flex;
  gap: 2.5rem;
  font-family: ${p => p.theme.fonts.serif};
  font-size: 1rem;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
  a {
    text-decoration: none;
    color: inherit;
    &:hover { color: ${p => p.theme.colors.accent}; }
  }
`;
