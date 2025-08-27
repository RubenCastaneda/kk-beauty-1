import React, { useState } from 'react';
import styled from 'styled-components';
import ProductModal from '../ProductModal/ProductModal';
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }
`;

const ProductCard = styled.div`
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 8px;
    border-radius: 8px;
  }
`;

const ProductImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
    margin-bottom: 6px;
  }
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 12px 0;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 6px 0;
  }
`;

const ProductPrice = styled.div`
  font-size: 16px;
  color: #eaeaea;
  margin-top: 8px;

  @media (max-width: 600px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;

// Then in your component:
const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} onClick={() => handleCardClick(product)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductsGrid>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          isOpen={!!selectedProduct}
        />
      )}
    </>
  );
};

export default FeaturedProducts;
