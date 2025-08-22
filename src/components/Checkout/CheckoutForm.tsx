import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { useCart } from '../../context/CartContext';
import paymentService from '../../services/paymentService';

const FormContainer = styled.div`
  background: rgba(24, 24, 24, 0.98);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  color: #fff;
  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ccc;
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1.5px solid #333;
  border-radius: 0.25rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #fff;
  }

  &::placeholder {
    color: #666;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.65rem;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1.5px solid #333;
  border-radius: 0.25rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  cursor: pointer;

  &:focus {
    border-color: #fff;
  }

  option {
    background: #000;
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.65rem;
  }
`;

const StripeContainer = styled.div`
  padding: 0.75rem;
  border: 1.5px solid #333;
  border-radius: 0.25rem;
  background: #000;
  transition: border-color 0.2s;

  &.StripeElement--focus {
    border-color: #fff;
  }
  @media (max-width: 600px) {
    padding: 0.65rem;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: #222;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.85rem;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div<{ $isSuccess: boolean }>`
  background: rgba(24, 24, 24, 0.98);
  border-radius: 1rem;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
  border: 2px solid ${(props) => (props.$isSuccess ? '#51cf66' : '#ff6b6b')};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const PopupIcon = styled.div<{ $isSuccess: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) => (props.$isSuccess ? '#51cf66' : '#ff6b6b')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  color: white;
  animation: popIn 0.5s ease-out;

  @keyframes popIn {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const PopupTitle = styled.h2<{ $isSuccess: boolean }>`
  color: ${(props) => (props.$isSuccess ? '#51cf66' : '#ff6b6b')};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

const PopupMessage = styled.p`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const PopupButton = styled.button<{ $isSuccess: boolean }>`
  padding: 0.75rem 2rem;
  background: ${(props) => (props.$isSuccess ? '#51cf66' : '#ff6b6b')};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$isSuccess ? '#40c057' : '#fa5252')};
    transform: translateY(-2px);
  }
`;

interface CheckoutFormProps {
  total: number;
}

// Common countries list
const countries = [
  { code: '', name: 'Select Country' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'BE', name: 'Belgium' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'AT', name: 'Austria' },
  { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'IE', name: 'Ireland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'GR', name: 'Greece' },
  { code: 'PL', name: 'Poland' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'HU', name: 'Hungary' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'HR', name: 'Croatia' },
  { code: 'RO', name: 'Romania' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LV', name: 'Latvia' },
  { code: 'EE', name: 'Estonia' },
  { code: 'MT', name: 'Malta' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'SG', name: 'Singapore' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'MX', name: 'Mexico' },
  { code: 'BR', name: 'Brazil' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CL', name: 'Chile' },
  { code: 'CO', name: 'Colombia' },
  { code: 'PE', name: 'Peru' },
  { code: 'UY', name: 'Uruguay' },
];

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total }) => {
  const { state, getCartTotal, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<{
    type: 'success' | 'error';
    title: string;
    message: string;
    orderId?: string;
    amount?: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const { total: cartTotal } = getCartTotal();
  const items = state.items;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('🚀 Form submitted - starting payment process');
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('❌ Stripe or elements not loaded');
      return;
    }

    console.log('✅ Stripe and elements loaded, proceeding...');
    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card element not found');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create payment intent on backend
      console.log('Creating payment intent with:', {
        amount: parseFloat(cartTotal),
        items: items.length,
        customer: formData.name,
      });

      const { client_secret } = await paymentService.createPaymentIntent(
        total, // Use total prop which includes taxes, not cartTotal
        'usd',
        items,
        {
          name: formData.name,
          email: formData.email,
          address: formData.address,
        },
      );

      console.log('Payment intent created successfully, client_secret received');

      // Step 2: Confirm payment with Stripe
      console.log('🔄 Confirming payment with Stripe...');
      console.log('🔑 Using client_secret:', client_secret);
      console.log('💳 Card element:', cardElement);
      console.log('📋 Billing details:', {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        postal_code: formData.postalCode,
        country: formData.country,
      });

      const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            address: {
              line1: formData.address,
              city: formData.city,
              postal_code: formData.postalCode,
              country: formData.country,
            },
          },
        },
      });

      console.log('🎯 Stripe confirmCardPayment completed!');
      console.log('📨 Full Stripe response:', { error, paymentIntent });
      console.log('✅ Payment intent object:', paymentIntent);
      console.log('📊 Payment intent status:', paymentIntent?.status);
      console.log('❌ Error object:', error);
      console.log('🔍 Error type:', typeof error);
      console.log('🔍 PaymentIntent type:', typeof paymentIntent);

      if (error) {
        console.error('Payment failed:', error);
        showErrorPopup('Payment Failed', error.message || 'Payment failed. Please try again.');
        console.log('Error popup should show now');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('✅ Payment succeeded! Processing success flow...');
        console.log('Payment intent details:', paymentIntent);

        // Send confirmation to backend and wait for response
        console.log('📡 Sending confirmation to backend...');
        try {
          const backendResponse = await paymentService.paymentSuccess(
            paymentIntent.id,
            items,
            {
              name: formData.name,
              email: formData.email,
              address: formData.address,
            },
            total.toString(),
          );
          console.log('✅ Backend confirmation successful:', backendResponse);

          // Only show success popup AFTER backend confirms
          showSuccessPopup(backendResponse, total.toString());
        } catch (confirmError) {
          console.error('❌ Backend confirmation failed:', confirmError);
          // Show error popup if backend fails
          showErrorPopup(
            'Order Confirmation Failed',
            'Payment succeeded but order confirmation failed. Please contact support with your payment details.',
          );
        }
      } else {
        // Handle cases where payment intent exists but status is not 'succeeded'
        console.log('⚠️ Unexpected payment state:');
        console.log('Payment Intent:', paymentIntent);
        console.log('Status:', paymentIntent?.status);
        console.log('Error:', error);

        // Show error popup for unexpected states
        showErrorPopup(
          'Payment Status Unclear',
          'Payment status unclear. Please check your payment method or try again.',
        );
      }
    } catch (err) {
      console.error('Error:', err);
      showErrorPopup('Unexpected Error', 'An unexpected error occurred. Please try again.');
    } finally {
      console.log('🏁 Payment process completed, setting loading to false');
      setLoading(false);
    }
  };

  // Helper function to show success popup with backend data
  const showSuccessPopup = (
    backendResponse: { success: boolean; orderId: string; message: string },
    amount: string,
  ) => {
    console.log('🎉 Showing success popup with backend data:', backendResponse);
    const popupDataToSet = {
      type: 'success' as const,
      title: 'Payment Successful!',
      message:
        backendResponse.message ||
        `Payment of $${amount} was successful! Thank you for your purchase.`,
      orderId: backendResponse.orderId,
      amount: amount,
    };
    console.log('📋 Setting popup data:', popupDataToSet);
    setPopupData(popupDataToSet);
    console.log('🔄 Setting showPopup to true...');
    setShowPopup(true);
    setSuccess(true);
    console.log('✅ Popup state should now be visible');
  };

  // Helper function to show error popup
  const showErrorPopup = (title: string, message: string) => {
    console.log('❌ Showing error popup:', { title, message });
    setPopupData({
      type: 'error',
      title,
      message,
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupData(null);
    if (popupData?.type === 'success') {
      // Clear cart only when user dismisses success popup
      clearCart();
      // Optionally redirect or perform other success actions
    }
  };

  // Test function to manually show success popup (for debugging)
  const testSuccessPopup = () => {
    console.log('Testing success popup...');
    showSuccessPopup(
      { success: true, orderId: 'test_12345', message: 'Test order confirmed successfully' },
      total.toString(),
    );
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        '::placeholder': {
          color: '#666',
        },
        backgroundColor: 'transparent',
      },
      invalid: {
        color: '#ff6b6b',
      },
    },
  };

  return (
    <>
      <FormContainer>
        <FormTitle>Payment Information</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </FormSection>

          <FormSection>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </FormSection>

          <FormSection>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
          </FormSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <FormSection>
              <Label htmlFor="city">City</Label>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                required
              />
            </FormSection>

            <FormSection>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                required
              />
            </FormSection>
          </div>

          <FormSection>
            <Label htmlFor="country">Country</Label>
            <Select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </Select>
          </FormSection>

          <FormSection>
            <Label>Card Information</Label>
            <StripeContainer>
              <CardElement options={cardElementOptions} />
            </StripeContainer>
          </FormSection>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" disabled={loading || !stripe}>
            {loading && <LoadingSpinner />}
            {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </SubmitButton>

          {/* Debug button - remove this later */}
          {process.env.NODE_ENV === 'development' && (
            <button
              type="button"
              onClick={testSuccessPopup}
              style={{
                marginTop: '10px',
                padding: '10px',
                background: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Test Success Popup
            </button>
          )}
        </Form>
      </FormContainer>

      {showPopup && popupData && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent
            $isSuccess={popupData.type === 'success'}
            onClick={(e) => e.stopPropagation()}
          >
            <PopupIcon $isSuccess={popupData.type === 'success'}>
              {popupData.type === 'success' ? '✓' : '✕'}
            </PopupIcon>
            <PopupTitle $isSuccess={popupData.type === 'success'}>{popupData.title}</PopupTitle>
            <PopupMessage>
              {popupData.message}
              {popupData.type === 'success' && popupData.orderId && (
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#999' }}>
                  Order ID: {popupData.orderId}
                </div>
              )}
            </PopupMessage>
            <PopupButton $isSuccess={popupData.type === 'success'} onClick={closePopup}>
              {popupData.type === 'success' ? 'Continue' : 'Try Again'}
            </PopupButton>
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Debug info - remove this later */}
      {process.env.NODE_ENV === 'development' && (
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'black',
            color: 'white',
            padding: '10px',
            fontSize: '12px',
            zIndex: 9999,
          }}
        >
          Debug: showPopup={String(showPopup)}, popupType={popupData?.type || 'none'}, success=
          {String(success)}
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
