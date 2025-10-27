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

const Message = styled.p<{ error?: boolean }>`
  margin-top: 8px;
  color: ${props => props.error ? '#ff4d4d' : '#4caf50'};
  font-size: 14px;
`;

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

// Mock PostgreSQL connection URL (replace with your actual URL)
const POSTGRES_URL = process.env.DATABASE_URL || '';
if (!POSTGRES_URL) {
  throw new Error('DATABASE_URL is not set');
}

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    if (!email) {
      setMessage('Please enter your email address');
      setError(true);
      return;
    }

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address');
      setError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(POSTGRES_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            INSERT INTO newsletter_subscribers (email)
            VALUES ($1)
            ON CONFLICT (email) DO NOTHING
            RETURNING id;
          `,
          values: [email],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (err) {
      setMessage('Something went wrong. Please try again later.');
      setError(true);
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
          />
          <NewsletterButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </NewsletterButton>
        </NewsletterForm>
        {message && <Message error={error}>{message}</Message>}
      </NewsletterCard>
    </S.Section>
  );
};

export default Newsletter;
