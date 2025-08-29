// src/components/ImageHero/ImageHero.tsx
import React from 'react';
import * as S from './ImageHero.styles';

interface ImageHeroProps {
  src: string;
  alt?: string;
}

const ImageHero: React.FC<ImageHeroProps> = ({ src, alt }) => (
  <S.Wrapper>
    <S.Container>
      <S.Image src={src} alt={alt} />
    </S.Container>
  </S.Wrapper>
);

export default ImageHero;
