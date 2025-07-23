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
  { name: 'About Us', link: '/about-us' },
  { name: 'Our Products', link: '/products' },
  { name: 'Newsletter', link: '#newsletter' }, // anchor link for scrolling
  { name: 'Contact Us', link: '/contact' },
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

  // Scroll to newsletter section if anchor is clicked
  const handleLabelClick = (link: string) => {
    if (link === '#newsletter') {
      const el = document.getElementById('newsletter');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.Wrapper>
      {/* Left arrow (hidden on mobile) */}
      <S.Arrow className="left" onClick={prev}>
        ‹
      </S.Arrow>

      <S.SlidesContainer>
        {isMobile ? (
          // 🚀 MOBILE LAYOUT: only show the center slide
          <S.SlideCard image={images[current]} isActive={true} position="center" />
        ) : (
          // 🖥 DESKTOP LAYOUT: show prev, current, next
          <>
            <S.SlideCard image={images[prevIdx]} isActive={false} position="prev" />
            <S.SlideCard image={images[current]} isActive={true} position="center" />
            <S.SlideCard image={images[nextIdx]} isActive={false} position="next" />
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
          cat.link === '#newsletter' ? (
            <S.LabelLink as="button" key={cat.name} onClick={() => handleLabelClick(cat.link)}>
              {cat.name}
            </S.LabelLink>
          ) : (
            <S.LabelLink as={Link} key={cat.name} to={cat.link}>
              {cat.name}
            </S.LabelLink>
          ),
        )}
      </S.LabelsRow>
    </S.Wrapper>
  );
};

export default Hero;
