import React from 'react';
import * as S from './FeaturedProducts.styles';
import ProductCard from '../ProductCard/ProductCard';
// image imports (bundled)
import prod1 from '../../assets/images/prod1.jpg';
import prod2 from '../../assets/images/prod2.jpg';
import prod3 from '../../assets/images/prod3.jpg';

const products = [
  { id: 1, name: 'Luxury Serum', image: prod1 },
  { id: 2, name: 'Silk Moisturizer', image: prod2 },
  { id: 3, name: 'Velvet Lipstick', image: prod3 },
];

const FeaturedProducts: React.FC = () => (
  <S.Section>
    <S.Title>Featured Products</S.Title>
    <S.Grid>
      {products.map((p) => (
        <ProductCard key={p.id} image={p.image} name={p.name} />
      ))}
    </S.Grid>
    <S.ViewAll href="#">View All</S.ViewAll>
  </S.Section>
);

export default FeaturedProducts;
