import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  background: rgba(24, 24, 24, 0.98);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  color: #fff;
  height: fit-content;
  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
`;

const ItemQuantity = styled.span`
  font-size: 0.8rem;
  color: #999;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  align-self: flex-start;
`;

const ItemSubtotal = styled.div`
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1.5rem 0;
`;

const DiscountSection = styled.div`
  margin: 1rem 0;
`;

const DiscountInput = styled.input`
  width: 70%;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.9rem;
  margin-right: 0.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ApplyButton = styled.button`
  padding: 0.5rem 1rem;
  background: #333;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: #444;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DiscountMessage = styled.div<{ $isError?: boolean }>`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: ${(props) => (props.$isError ? '#ff6b6b' : '#51cf66')};
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const TotalLabel = styled.span`
  color: #ccc;
`;

const TotalAmount = styled.span`
  font-weight: 600;
  color: #fff;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const GrandTotal = styled(TotalRow)`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const SecurityInfo = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SecurityTitle = styled.h4`
  font-size: 0.9rem;
  color: #51cf66;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SecurityText = styled.p`
  font-size: 0.8rem;
  color: #ccc;
  margin: 0;
  line-height: 1.4;
`;

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
  setFinalTotal?: (total: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total, setFinalTotal }) => {
  const [discountCode, setDiscountCode] = React.useState('');
  const [appliedDiscount, setAppliedDiscount] = React.useState<number>(0);
  const [discountMessage, setDiscountMessage] = React.useState<string>('');
  const [isError, setIsError] = React.useState(false);

  const subtotal = total;
  const shipping = 0 as number; // Free shipping

  // Calculate discount if code is applied
  const discount = appliedDiscount > 0 ? subtotal * appliedDiscount : 0;

  // Calculate tax after discount
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * 0.08; // 8% tax

  const grandTotal = subtotal - discount + shipping + tax;

  React.useEffect(() => {
    if (setFinalTotal) {
      setFinalTotal(grandTotal);
    }
  }, [grandTotal, setFinalTotal]);

  const handleApplyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (code === 'WELCOME15') {
      if (appliedDiscount > 0) {
        setIsError(true);
        setDiscountMessage('A discount code has already been applied');
        return;
      }

      setAppliedDiscount(0.15); // 15% discount
      setDiscountMessage('15% discount applied successfully!');
      setIsError(false);
    } else {
      setIsError(true);
      setDiscountMessage('Invalid discount code');
      setAppliedDiscount(0);
    }
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Order Summary</SummaryTitle>

      <ItemsList>
        {items.map((item) => (
          <ItemCard key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
            </ItemDetails>
            <ItemSubtotal>
              ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
            </ItemSubtotal>
          </ItemCard>
        ))}
      </ItemsList>

      <Divider />

      <DiscountSection>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <DiscountInput
            type="text"
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            disabled={appliedDiscount > 0}
          />
          <ApplyButton
            onClick={handleApplyDiscount}
            disabled={!discountCode.trim() || appliedDiscount > 0}
          >
            Apply
          </ApplyButton>
        </div>
        {discountMessage && <DiscountMessage $isError={isError}>{discountMessage}</DiscountMessage>}
      </DiscountSection>

      <Divider />

      <TotalSection>
        <TotalRow>
          <TotalLabel>Subtotal</TotalLabel>
          <TotalAmount>${subtotal.toFixed(2)}</TotalAmount>
        </TotalRow>
        {discount > 0 && (
          <TotalRow>
            <TotalLabel>Discount (15%)</TotalLabel>
            <TotalAmount style={{ color: '#51cf66' }}>-${discount.toFixed(2)}</TotalAmount>
          </TotalRow>
        )}
        <TotalRow>
          <TotalLabel>Shipping</TotalLabel>
          <TotalAmount>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</TotalAmount>
        </TotalRow>
        <TotalRow>
          <TotalLabel>Tax</TotalLabel>
          <TotalAmount>${tax.toFixed(2)}</TotalAmount>
        </TotalRow>
        <GrandTotal>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>${grandTotal.toFixed(2)}</TotalAmount>
        </GrandTotal>
      </TotalSection>

      <SecurityInfo>
        <SecurityTitle>🔒 Secure Payment</SecurityTitle>
        <SecurityText>
          Your payment information is encrypted and secure. We use industry-standard SSL encryption
          to protect your data.
        </SecurityText>
      </SecurityInfo>
    </SummaryContainer>
  );
};

export default OrderSummary;
