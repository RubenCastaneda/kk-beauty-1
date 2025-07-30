import React from 'react';
import * as S from './ProductModal.styles';
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
          {product.skinTypes && (
            <>
              <S.SubTitle>Skin Types</S.SubTitle>
              <S.Text>{product.skinTypes}</S.Text>
            </>
          )}
          {product.whatItDoes && (
            <>
              <S.SubTitle>What It Does</S.SubTitle>
              <S.Text>{product.whatItDoes}</S.Text>
            </>
          )}
          {product.howToUseClient && (
            <>
              <S.SubTitle>How to Use</S.SubTitle>
              <S.List>
                {product.howToUseClient.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </S.List>
            </>
          )}
          {product.professionalUse && (
            <>
              <S.SubTitle>Professional Use</S.SubTitle>
              <S.List>
                {product.professionalUse.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </S.List>
            </>
          )}
          {product.sunburnAlert && (
            <>
              <S.SubTitle>Sunburn Alert</S.SubTitle>
              <S.Text>{product.sunburnAlert}</S.Text>
            </>
          )}
          {product.cautions && (
            <>
              <S.SubTitle>Cautions</S.SubTitle>
              <S.Text>{product.cautions}</S.Text>
            </>
          )}
          {product.ingredients && (
            <>
              <S.SubTitle>Ingredients (INCI)</S.SubTitle>
              <S.Text>{product.ingredients}</S.Text>
            </>
          )}
          {product.ph && (
            <>
              <S.SubTitle>pH</S.SubTitle>
              <S.Text>{product.ph}</S.Text>
            </>
          )}
          <S.Actions>
            <S.Button onClick={handleAdd}>Add to Cart</S.Button>
          </S.Actions>
        </S.Details>
      </S.Content>
    </S.Overlay>
  );
};

export default ProductModal;
