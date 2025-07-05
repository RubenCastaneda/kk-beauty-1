import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard/ProductCard';
import { products } from '../components/FeaturedProducts/FeaturedProducts';

const Section = styled.section`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Products: React.FC = () => (
  <Section>
    <Title>Our Products</Title>
    <Grid>
      {products.map((p) => (
        <ProductCard key={p.id} image={p.image} name={p.name} />
      ))}
    </Grid>
  </Section>
);

export default Products;
