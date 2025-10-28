import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logger from '../../utils/logger';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

const Content = styled.div`
  background: #161616;
  border-radius: 16px;
  padding: 32px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: #222;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button = styled.button<{ $isSuccess?: boolean }>`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.$isSuccess ? '#4CAF50' : '#eaeaea')};
  color: ${(props) => (props.$isSuccess ? '#fff' : '#161616')};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const DiscountCode = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const WelcomePopup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    if (hasSeenPopup) {
      setShowPopup(false);
    }
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    logger.debug('WelcomePopup - Attempting to subscribe with:', {
      email,
      apiUrl: process.env.REACT_APP_API_URL,
    });

    if (!email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // First, check if we have the API URL
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        throw new Error('API URL is not configured. Please check your environment variables.');
      }

      logger.debug('WelcomePopup - Making API request to:', `${apiUrl}/newsletter/subscribe`);

      const response = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'welcome_popup',
          discount_code: 'WELCOME15',
        }),
      });

      let data;
      try {
        data = await response.json();
        logger.debug('WelcomePopup - Response data:', data);
      } catch {
        throw new Error('Invalid response from server. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to subscribe');
      }

      // Store that user has seen the popup
      localStorage.setItem('hasSeenWelcomePopup', 'true');
      setIsSubmitted(true);
    } catch (error) {
      logger.error('WelcomePopup - Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        {!isSubmitted ? (
          <>
            <Title>Welcome to KK Beauty Lab</Title>
            <Description>
              Sign up now and receive an exclusive 15% off your first purchase!
            </Description>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : 'Get My Discount'}
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Title>Thank You!</Title>
            <Description>Use this code at checkout to receive 15% off your purchase:</Description>
            <DiscountCode>WELCOME15</DiscountCode>
            <Button $isSuccess onClick={() => setShowPopup(false)} style={{ marginTop: '1.5rem' }}>
              Start Shopping
            </Button>
          </>
        )}
      </Content>
    </Overlay>
  );
};

export default WelcomePopup;
