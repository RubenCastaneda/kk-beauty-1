import React, { useState, useEffect } from 'react';
import * as S from './Hero.styles';

const images = [
  '/assets/images/hero1.jpg',
  '/assets/images/hero2.jpg',
  '/assets/images/hero3.jpg',
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const next = () => setCurrent((current + 1) % length);
  const prev = () => setCurrent((current - 1 + length) % length);

  // auto-rotate every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [current]);

  return (
    <S.Wrapper>
      {images.map((img, idx) => (
        <S.Slide key={idx} image={img} active={idx === current} />
      ))}
      <S.Arrow className="left" onClick={prev}>‹</S.Arrow>
      <S.Arrow className="right" onClick={next}>›</S.Arrow>
    </S.Wrapper>
  );
};

export default Hero;
