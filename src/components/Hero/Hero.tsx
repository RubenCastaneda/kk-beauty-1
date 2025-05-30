import React, { useState, useEffect } from 'react';
import * as S from './Hero.styles';

const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  const next = () => setCurrent((c) => (c + 1) % len);
  const prev = () => setCurrent((c) => (c - 1 + len) % len);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [current]);

  // indexes for side panels
  const prevIdx = (current - 1 + len) % len;
  const nextIdx = (current + 1) % len;

  return (
    <S.Wrapper>
      <S.Container>
        <S.Arrow className="left" onClick={prev}>
          ‹
        </S.Arrow>

        <S.Slide image={images[prevIdx]} isActive={false} />
        <S.Slide image={images[current]} isActive={true} />
        <S.Slide image={images[nextIdx]} isActive={false} />

        <S.Arrow className="right" onClick={next}>
          ›
        </S.Arrow>
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
