// src/components/Newsletter/Newsletter.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './Newsletter.styles';

const NewsletterCard = styled.div`
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  padding: 16px;
  margin: 20px 0;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  height: 44px;
  border-radius: 999px;
  padding: 0 14px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #eaeaea;
  font-size: 18px;
  text-align: center;
`;

const NewsletterButton = styled.button`
  height: 44px;
  margin-left: 8px;
  border-radius: 999px;
  padding: 0 16px;
  background: #eaeaea;
  color: #0f0f0f;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ isError?: boolean }>`
  margin-top: 12px;
  color: ${(props) => (props.isError ? '#ff4d4d' : '#4caf50')};
  font-size: 14px;
`;

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      // First, check if we have the API URL
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error('API URL is not configured. Please check your environment variables.');
      }

      const response = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }).catch(() => {
        // Handle network errors without unused error parameter
        throw new Error('Unable to connect to the server. Please check your internet connection.');
      });

      // Check if response exists before trying to parse JSON
      if (!response) {
        throw new Error('No response from server');
      }

      let data;
      try {
        data = await response.json();
      } catch {
        // Removed unused parseError parameter
        throw new Error('Invalid response from server. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to subscribe');
      }

      setMessage('Thanks for subscribing! 🎉');
      setEmail('');
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Section id="newsletter">
      <NewsletterCard>
        <h2 style={{ fontSize: 18 }}>Ready to Glow?</h2>
        <p>
          Join our newsletter and be the first to know about new products, special promotions, and
          beauty tips.
        </p>
        <NewsletterForm onSubmit={handleSubmit}>
          <NewsletterInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <NewsletterButton type="submit" disabled={isLoading}>
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </NewsletterButton>
        </NewsletterForm>
        {message && <Message isError={isError}>{message}</Message>}
      </NewsletterCard>
    </S.Section>
  );
};

export default Newsletter;
