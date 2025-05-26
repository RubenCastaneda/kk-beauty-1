import React, { useState, useEffect } from 'react';
import * as S from './Hero.styles';

// If you’re bundling via imports, do:
// import hero1 from '../../assets/images/hero1.jpg';
// …
const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [current]);

  return (
    <S.Wrapper>
      <S.Container>
        {images.map((img, idx) => (
          <S.Slide key={idx} image={img} active={idx === current} />
        ))}
        <S.Arrow className="left" onClick={prev}>
          ‹
        </S.Arrow>
        <S.Arrow className="right" onClick={next}>
          ›
        </S.Arrow>
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
