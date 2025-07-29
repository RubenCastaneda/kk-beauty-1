import React from 'react';
import * as S from './ProductModal.styles';
import { useCart } from '../../context/CartContext';

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

const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => {
  const { dispatch } = useCart();
  const handleAdd = () => {
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
    onClose();
  };
  return (
    <S.Overlay onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.Image src={product.image} alt={product.name} />
        <S.Details>
          <S.Title>{product.name}</S.Title>
          <S.Description>{product.description}</S.Description>
          <S.Actions>
            <S.Button onClick={handleAdd}>Add to Cart</S.Button>
          </S.Actions>
        </S.Details>
      </S.Content>
    </S.Overlay>
  );
};

export default ProductModal;
