import React, { useState } from 'react';
import * as S from './FeaturedProducts.styles';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal, { Product } from '../ProductModal/ProductModal';
import { Link } from 'react-router-dom';

// sample products with extra details
export const products: Product[] = [
  {
    id: 1,
    name: 'AHA Hand Crème',
    image: '/images/product_pictures/AHA Hand Creme (black BG).jpg',
    description: 'Revitalize dry hands with this rich hand crème.',
    price: '$75',
  },
  {
    id: 2,
    name: 'Biomed Retinol 500',
    image: '/images/product_pictures/Biomed Retinol 500 (black BG).jpg',
    description: 'Rich crème offering skin-conditioning benefits of Vitamin A.',
    price: '$60',
  },
  {
    id: 3,
    name: 'Cascading AOX+ Enviro Serum',
    image: '/images/product_pictures/Cascading AOX + Enviro Serum (black BG).jpg',
    description: 'Peptide enriched antioxidant serum for daily protection.',
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
