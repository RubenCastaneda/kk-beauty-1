import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  skinTypes?: string;
  whatItDoes?: string;
  howToUseClient?: string[];
  professionalUse?: string[];
  sunburnAlert?: string;
  cautions?: string;
  ingredients?: string;
  ph?: string;
}

export interface ModalProps {
  product: Product;
  onClose: () => void;
  isOpen: boolean;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: #161616;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #eaeaea;
  font-size: 24px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin: 16px 0;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  color: #eaeaea;
  margin: 12px 0;
`;

const ProductDescription = styled.p`
  color: #eaeaea;
  line-height: 1.6;
  margin: 16px 0;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #eaeaea;
  color: #161616;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #ffffff;
  }
`;

const ProductDetails = styled.div`
  margin: 16px 0;
`;

const DetailSection = styled.div`
  margin: 12px 0;
`;

const DetailTitle = styled.h3`
  font-size: 16px;
  color: #eaeaea;
  margin-bottom: 8px;
`;

const DetailText = styled.p`
  color: #eaeaea;
  line-height: 1.6;
`;

const ProductModal: React.FC<ModalProps> = ({ product, onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>

            <ProductDetails>
              {product.skinTypes && (
                <DetailSection>
                  <DetailTitle>Skin Types</DetailTitle>
                  <DetailText>{product.skinTypes}</DetailText>
                </DetailSection>
              )}

              {product.whatItDoes && (
                <DetailSection>
                  <DetailTitle>What It Does</DetailTitle>
                  <DetailText>{product.whatItDoes}</DetailText>
                </DetailSection>
              )}

              {product.howToUseClient && (
                <DetailSection>
                  <DetailTitle>How to Use</DetailTitle>
                  <ul>
                    {product.howToUseClient.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </DetailSection>
              )}

              {product.ingredients && (
                <DetailSection>
                  <DetailTitle>Ingredients</DetailTitle>
                  <DetailText>{product.ingredients}</DetailText>
                </DetailSection>
              )}

              {product.ph && (
                <DetailSection>
                  <DetailTitle>pH</DetailTitle>
                  <DetailText>{product.ph}</DetailText>
                </DetailSection>
              )}
            </ProductDetails>

            <BuyButton onClick={() => alert('Coming soon!')}>Add to Cart</BuyButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
