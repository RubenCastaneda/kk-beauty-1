// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import * as S from './ProductCard.styles';
import { Product } from '../ProductModal/ProductModal';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <S.Card
    data-product-id={product.id}
    onClick={onClick}
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
  >
    <S.Image src={product.image} alt={product.name} />
    <S.Name>{product.name}</S.Name>
    <S.Price>{product.price}</S.Price>
  </S.Card>
);

export default ProductCard;
