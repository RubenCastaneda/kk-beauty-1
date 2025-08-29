import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useCart } from '../../context/CartContext';

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
  width: 95%;
  max-width: 700px;
  max-height: 85vh;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 40px;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2a2a2a;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;

    &:hover {
      background: #777;
    }
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #555 #2a2a2a;
`;

const CloseButton = styled.button`
  position: sticky;
  top: 0;
  right: 16px;
  background: #161616;
  border: none;
  color: #eaeaea;
  font-size: 24px;
  cursor: pointer;
  float: right;
  margin-bottom: 16px;
  z-index: 10;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #2a2a2a;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  padding-bottom: 40px;
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
  const { dispatch } = useCart();

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePurchase = () => {
    dispatch({
      type: 'add',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    });
  };

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

            <BuyButton onClick={handlePurchase}>Purchase</BuyButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
