import React, { useState } from 'react';
import * as S from './FeaturedProducts.styles';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal, { Product } from '../ProductModal/ProductModal';
import { Link } from 'react-router-dom';

// sample products with extra details
export const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Serum',
    image: '/images/prod1.jpg',
    description: 'A deeply hydrating serum infused with botanical extracts.',
    price: '$75',
  },
  {
    id: 2,
    name: 'Silk Moisturizer',
    image: '/images/prod2.jpg',
    description: 'Lightweight cream to leave skin smooth and radiant.',
    price: '$60',
  },
  {
    id: 3,
    name: 'Velvet Lipstick',
    image: '/images/prod3.jpg',
    description: 'Rich, long-lasting color with a velvety finish.',
    price: '$30',
  },
];

const FeaturedProducts: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <S.Section>
        <S.Title>Featured Products</S.Title>
        <S.Grid>
          {products.map((p) => (
            <div key={p.id} onClick={() => setSelected(p)}>
              <ProductCard image={p.image} name={p.name} />
            </div>
          ))}
        </S.Grid>
        <S.ViewAll as={Link} to="/products">
          View All
        </S.ViewAll>
      </S.Section>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default FeaturedProducts;
