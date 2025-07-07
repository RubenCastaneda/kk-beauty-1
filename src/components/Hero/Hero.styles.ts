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
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;

  /* On slightly larger mobile screens, shrink height so hero doesn't become too tall */
  @media (max-width: 576px) {
    height: 50vh;
    padding-top: 1.5rem;
  }
`;

export const SlidesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 75%;
  max-width: 1200px;
  overflow: visible;
  height: 420px;
`;

export const SlideCard = styled.div<SlideProps & { position?: 'prev' | 'next' | 'center' }>`
  flex: ${({ isActive, position }) => (position === 'center' ? '0 0 50%' : '0 0 40%')};
  aspect-ratio: 16 / 9;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: ${({ position }) =>
    position === 'prev' ? 'right center' : position === 'next' ? 'left center' : 'center'};
  border-radius: 0.4rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.9)})
    translateX(
      ${({ position }) => (position === 'prev' ? '-50%' : position === 'next' ? '50%' : '0')}
    );
  margin-left: ${({ position }) => (position === 'next' ? '-7.5%' : '0')};
  margin-right: ${({ position }) => (position === 'prev' ? '-7.5%' : '0')};
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1),
    flex 0.4s cubic-bezier(0.4, 0.2, 0.2, 1),
    margin 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  z-index: ${({ isActive }) => (isActive ? 2 : 1)};
  box-shadow: ${({ isActive }) =>
    isActive ? '0 4px 32px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.10)'};

  @media (max-width: 576px) {
    flex: 0 0 90%;
    opacity: 1;
    transform: scale(1) translateX(0);
    background-position: center;
    margin: 0;
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
  margin-top: 0.5 rem;
  padding: 1rem 0;
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

export const LabelLink = styled(LabelItem)`
  background: none;
  color: #fff;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: inherit;
  text-decoration: none;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
