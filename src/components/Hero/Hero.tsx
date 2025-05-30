import React, { useState } from 'react';
import * as S from './Hero.styles';

// either import from src/assets or point to public/images
import img1 from '../../assets/images/hero1.jpg';
import img2 from '../../assets/images/hero2.jpg';
import img3 from '../../assets/images/hero3.jpg';

const images = [img1, img2, img3];

const categories = [
  'Skincare',
  'Makeup',
  'Fragrance',
  'Tools',
  'About Us',
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prev = () => setCurrent((c) => (c - 1 + length) % length);
  const next = () => setCurrent((c) => (c + 1) % length);

  const prevIndex = (current - 1 + length) % length;
  const nextIndex = (current + 1) % length;

  return (
    <S.Wrapper>
      <S.Title>KK Beauty Lab</S.Title>

      <S.SlideContainer>
        <S.Arrow className="left" onClick={prev}>‹</S.Arrow>

        <S.Slide image={images[prevIndex]}  position="prev" />
        <S.Slide image={images[current]}    position="current" />
        <S.Slide image={images[nextIndex]}  position="next" />

        <S.Arrow className="right" onClick={next}>›</S.Arrow>
      </S.SlideContainer>

      <S.Nav>
        {categories.map(cat => (
          <a key={cat} href="#">{cat}</a>
        ))}
      </S.Nav>
    </S.Wrapper>
  );
};

export default Hero;
