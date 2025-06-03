// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import * as S from './ProductCard.styles';

interface ProductCardProps {
  image: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name }) => (
  <S.Card>
    <S.Image src={image} alt={name} />
    <S.Info>{name}</S.Info>
  </S.Card>
);

export default ProductCard;
