import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.sans};
  line-height: 1.6;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const AboutUs: React.FC = () => (
  <Section>
    <Title>About Us</Title>
    <Paragraph>
      KK Beauty Lab is dedicated to crafting timeless cosmetics with a focus on quality and
      elegance.
    </Paragraph>
    <Paragraph>
      Our team of artisans creates products that celebrate individual beauty and self‑expression.
    </Paragraph>
  </Section>
);

export default AboutUs;
