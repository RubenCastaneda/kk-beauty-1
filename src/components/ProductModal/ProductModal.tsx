import React from 'react';
import * as S from './ProductModal.styles';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => (
  <S.Overlay onClick={onClose}>
    <S.Content onClick={(e) => e.stopPropagation()}>
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
      <S.Image src={product.image} alt={product.name} />
      <S.Details>
        <S.Title>{product.name}</S.Title>
        <S.Description>{product.description}</S.Description>
        <S.Actions>
          <S.Button disabled>Coming Soon</S.Button>
        </S.Actions>
      </S.Details>
    </S.Content>
  </S.Overlay>
);

export default ProductModal;
