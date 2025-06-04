// src/components/Hero/Hero.styles.ts
import styled from 'styled-components';

interface SlideProps {
  image: string;
  isActive: boolean;
}

/**
 * 1) Wrapper: covers the entire viewport, black background.
 * 2) SlidesContainer: flex container that holds up to three slides.
 * 3) SlideCard: individual slide (prev/center/next). Rounded corners, background-image, etc.
 *    - On desktop: prev and next are smaller + translucent; center is larger + fully opaque.
 *    - On mobile (<576px): ONLY the center slide gets flex: 0 0 70%; the two side cards are effectively hidden (overflow: hidden).
 * 4) Arrow: left/right arrow, absolutely positioned at mid-height.
 *    - Hidden on mobile (<576px).
 * 5) LabelsRow: row of category labels beneath the slides.
 * 6) LabelItem: each label’s style.
 **/

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 75vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* On slightly larger mobile screens, shrink height so hero doesn't become too tall */
  @media (max-width: 576px) {
    height: 50vh;
  }
`;

export const SlidesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* space between each card */
  width: 75%;
  max-width: 1200px;
  overflow: hidden; /* hide off-screen slides on mobile */
`;

export const SlideCard = styled.div<SlideProps>`
  flex: ${({ isActive }) => (isActive ? '0 0 40%' : '0 0 25%')};
  aspect-ratio: 16 / 9;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.9)});
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    flex 0.4s ease;

  /* On narrow screens (<576px), only render a single centered slide:
     - We force flex: 0 0 70% for whichever card is rendered (we’ll only render the “center” slide in Hero.tsx).
     - The other two slides are effectively “outside” the container and hidden by overflow: hidden.
  */
  @media (max-width: 576px) {
    flex: 0 0 70%;
    opacity: 1;
    transform: scale(1);
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
  z-index: 2;

  &.left {
    left: 1rem; /* sits just inside left edge */
  }
  &.right {
    right: 1rem; /* sits just inside right edge */
  }

  &:hover {
    opacity: 0.7;
  }

  /* Hide arrows on mobile narrower than 576px */
  @media (max-width: 576px) {
    display: none;
  }
`;

export const LabelsRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* space between each label */
  width: 90%;
  max-width: 1200px;
`;

export const LabelItem = styled.div`
  color: #fff;
  font-size: 0.95rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
  }
`;

export const LabelLink = styled(LabelItem).attrs({ as: 'a' })``;
