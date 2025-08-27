// src/components/Newsletter/Newsletter.tsx
import React from 'react';
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
`;

const Newsletter: React.FC = () => (
  <S.Section id="newsletter">
    <NewsletterCard>
      <h2 style={{ fontSize: 18 }}>Ready to Glow?</h2>
      <p>
        Join our newsletter and be the first to know about new products, special promotions, and
        beauty tips.
      </p>
      <NewsletterForm>
        <NewsletterInput type="email" placeholder="Email address" />
        <NewsletterButton type="submit">Subscribe</NewsletterButton>
      </NewsletterForm>
    </NewsletterCard>
  </S.Section>
);

export default Newsletter;
