// src/components/Hero/Hero.tsx
import React, { useState, useEffect } from 'react';
import * as S from './Hero.styles';
import { useIsMobile } from '../../hooks/useIsMobile';

// If these images are indeed in public/images/...
const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = images.length;
  const isMobile = useIsMobile(768);

  const prev = () => setCurrent((c) => (c - 1 + len) % len);
  const next = () => setCurrent((c) => (c + 1) % len);

  // Only run this effect once (or if len ever changes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % len);
    }, 5000);
    return () => clearInterval(timer);
  }, [len]);

  const prevIdx = (current - 1 + len) % len;
  const nextIdx = (current + 1) % len;

  return (
    <S.Wrapper>
      <S.Arrow className="left" onClick={prev}>
        ‹
      </S.Arrow>

      <S.Container>
        {isMobile ? (
          <S.Slide image={images[current]} isActive={true} />
        ) : (
          <>
            <S.Slide image={images[prevIdx]} isActive={false} />
            <S.Slide image={images[current]} isActive={true} />
            <S.Slide image={images[nextIdx]} isActive={false} />
          </>
        )}
      </S.Container>

      <S.Arrow className="right" onClick={next}>
        ›
      </S.Arrow>
    </S.Wrapper>
  );
};

export default Hero;
