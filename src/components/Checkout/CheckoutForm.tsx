import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
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

interface CheckoutFormProps {
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card element not found');
      setLoading(false);
      return;
    }

    try {
      // Create payment intent
      const paymentIntent = await paymentService.createPaymentIntent(total);

      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
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
      });

      if (paymentMethodError) {
        setError(paymentMethodError.message || 'Payment failed');
        setLoading(false);
        return;
      }

      if (!paymentMethod) {
        setError('Failed to create payment method');
        setLoading(false);
        return;
      }

      // Confirm payment with backend
      const result = await paymentService.confirmPayment(paymentIntent.id, paymentMethod.id);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || 'Payment failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
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

  if (success) {
    return (
      <FormContainer>
        <SuccessMessage>
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
        </SuccessMessage>
      </FormContainer>
    );
  }

  return (
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
          <Input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Country"
            required
          />
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
      </Form>
    </FormContainer>
  );
};

export default CheckoutForm;
