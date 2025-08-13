// src/components/FeaturedProducts/FeaturedProducts.styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 1600px; /* cap to prevent overly wide layouts */
  margin: 0 auto; /* center horizontally */
  padding: 2rem 1rem;
  text-align: center;

  /* Allow a bit of breathing room on smaller screens */
  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    padding: 1.2rem 0.5rem;
  }
`;

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.serif};
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const ViewAll = styled.a`
  display: inline-block;
  font-family: ${(p) => p.theme.fonts.serif};
  border: 1px solid ${(p) => p.theme.colors.accent};
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: ${(p) => p.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.background};
  }

  @media (max-width: 600px) {
    border: none;
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.background};
    font-family: ${(p) => p.theme.fonts.sans};
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
    box-shadow: none;
  }
`;
