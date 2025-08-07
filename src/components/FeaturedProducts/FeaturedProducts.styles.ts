// src/components/FeaturedProducts/FeaturedProducts.styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  width: 75%;
  max-width: 1600px; /* optional cap if you don’t want it to grow beyond a certain size */
  margin: 0 auto; /* center it horizontally */
  padding: 2rem 1rem;
  text-align: center;

  @media (max-width: 600px) {
    width: 98%;
    padding: 1.2rem 0.2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    margin-bottom: 0.7rem;
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
