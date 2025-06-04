// src/components/Hero/Hero.tsx
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import * as S from './Hero.styles';
import { Link } from 'react-router-dom';

/**
 * Make sure these paths point to actual files in your public/images folder:
 *   public/images/hero1.jpg
 *   public/images/hero2.jpg
 *   public/images/hero3.jpg
 *
 * If your images live under src/assets instead, import them directly:
 *   import hero1 from '../../assets/images/hero1.jpg';
 *   ...
 */

const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

const categories = [
  { name: 'Haute Couture', link: null },
  { name: 'About Us', link: '/about-us' },
  { name: 'Fine Jewelry & Makeup', link: null },
  { name: 'Newsletter', link: '/newsletter' },
  { name: 'Inside Chanel', link: null },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = images.length;
  const isMobile = useIsMobile(576); // true if viewport <576px

  // Next/Prev handlers
  const next = () => setCurrent((c) => (c + 1) % len);
  const prev = () => setCurrent((c) => (c - 1 + len) % len);

  // Auto-advance every 4 seconds (only on mount or if len changes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % len);
    }, 4000);
    return () => clearInterval(timer);
  }, [len]);

  // Compute prev/next indexes
  const prevIdx = (current - 1 + len) % len;
  const nextIdx = (current + 1) % len;

  return (
    <S.Wrapper>
      {/* Left arrow (hidden on mobile) */}
      <S.Arrow className="left" onClick={prev}>
        ‹
      </S.Arrow>

      <S.SlidesContainer>
        {isMobile ? (
          // 🚀 MOBILE LAYOUT: only show the center slide
          <S.SlideCard image={images[current]} isActive={true} />
        ) : (
          // 🖥 DESKTOP LAYOUT: show prev, current, next
          <>
            <S.SlideCard image={images[prevIdx]} isActive={false} />
            <S.SlideCard image={images[current]} isActive={true} />
            <S.SlideCard image={images[nextIdx]} isActive={false} />
          </>
        )}
      </S.SlidesContainer>

      {/* Right arrow (hidden on mobile) */}
      <S.Arrow className="right" onClick={next}>
        ›
      </S.Arrow>

      {/* Category labels underneath (always shown) */}
      <S.LabelsRow>
        {categories.map((cat) =>
          cat.link ? (
            <S.LabelLink as={Link} key={cat.name} to={cat.link}>
              {cat.name}
            </S.LabelLink>
          ) : (
            <S.LabelItem key={cat.name}>{cat.name}</S.LabelItem>
          )
        )}
      </S.LabelsRow>
    </S.Wrapper>
  );
};

export default Hero;
