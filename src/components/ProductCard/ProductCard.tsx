// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import * as S from './ProductCard.styles';

interface ProductCardProps {
  image: string;
  name: string;
  price?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => (
  <S.Card>
    <S.Image src={image} alt={name} style={{ borderRadius: '8px', padding: '1rem' }} />
    <S.Name>{name}</S.Name>
    {price && <S.Price>{price}</S.Price>}
  </S.Card>
);

export default ProductCard;
