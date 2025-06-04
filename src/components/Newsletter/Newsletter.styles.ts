// src/components/Newsletter/Newsletter.styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const Input = styled.input`
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
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
`;
