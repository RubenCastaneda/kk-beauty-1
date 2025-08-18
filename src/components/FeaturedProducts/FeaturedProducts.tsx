import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Product } from '../ProductModal/ProductModal';

// sample products with extra details
export const products: Product[] = [
  {
    id: 1,
    name: 'AHA Hand Crème',
    image: '/images/product_pictures/AHA Hand Creme (black BG).jpg',
    description:
      'Revitalize dry hands with this rich hand crème. Multi-source fruit acids gently exfoliate distressed skin leaving hands smooth and soft as the rich formula melts in.',
    price: '$75',
  },
  {
    id: 2,
    name: 'Biomed Retinol 500',
    image: '/images/product_pictures/Biomed Retinol 500 (black BG).jpg',
    description:
      'Rich crème offering skin-conditioning benefits of Vitamin A. Contains Retinol and Cariciline® SB to refine and support mature or combination skin while Bisabolol defends against daily stresses.',
    price: '$60',
  },
  {
    id: 3,
    name: 'Cascading AOX+ Enviro Serum',
    image: '/images/product_pictures/Cascading AOX + Enviro Serum (black BG).jpg',
    description:
      'Peptide enriched antioxidant serum fortified with Ameliox™ Complex to protect against environmental aggression while enhancing natural radiance.',
    price: '$30',
  },
];

const Card = styled.section`
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  padding: 16px;
  margin: 20px 0;
`;

const ProductsStrip = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 8px 0;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductCard = styled.div`
  flex: 0 0 auto;
  width: 112px;
  border-radius: 14px;
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 10px;
  text-align: center;
  scroll-snap-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 8px;
`;

const ProductName = styled.div`
  font-size: 18px;
  line-height: 1.3;
  min-height: 32px;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  opacity: 0.85;
`;

const ViewAll = styled(Link)`
  display: block;
  height: 44px;
  line-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #1d1d1d;
  text-align: center;
  text-decoration: none;
  color: #eaeaea;
  margin: 16px auto 0 auto;
  max-width: 160px;
`;

const FeaturedProducts: React.FC = () => (
  <Card style={{ textAlign: 'center' }}>
    <h2>Featured Products</h2>
    <ProductsStrip>
      {products.map((p) => (
        <ProductCard key={p.id}>
          <ProductImage src={p.image} alt={p.name} />
          <ProductName>{p.name}</ProductName>
          <ProductPrice>{p.price}</ProductPrice>
        </ProductCard>
      ))}
    </ProductsStrip>
    <ViewAll to="/shop">View All</ViewAll>
  </Card>
);

export default FeaturedProducts;
