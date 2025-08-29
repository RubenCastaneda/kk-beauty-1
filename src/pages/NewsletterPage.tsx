import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 75%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 600px) {
    width: 98vw;
    padding: 1.5rem 0.5rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const NewsletterPage: React.FC = () => (
  <Section>
    <Title>Newsletter</Title>
    <Description>Subscribe to receive our latest updates and offers.</Description>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input type="email" placeholder="Your email" />
      <Button type="submit">Subscribe</Button>
    </Form>
  </Section>
);

export default NewsletterPage;
