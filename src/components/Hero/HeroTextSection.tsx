import React from 'react';
import styled from 'styled-components';

interface HeroTextSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const Section = styled.section<{ backgroundImage?: string }>`
  width: 75%;
  max-width: 1200px;
  margin: 2.5rem auto 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.1rem;
  background: ${({ backgroundImage }) =>
    backgroundImage
      ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${backgroundImage}) center/cover no-repeat`
      : '#181818'};
  color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    width: 98vw;
    padding: 2rem 0.5rem;
    margin: 1.5rem auto 0 auto;
    border-radius: 0.5rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const HeroTextSection: React.FC<HeroTextSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  children,
}) => (
  <Section backgroundImage={backgroundImage}>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    <p
      style={{
        maxWidth: '700px',
        fontSize: '1.1rem',
        lineHeight: '1.7',
        margin: '0 auto',
        color: '#eee',
      }}
    >
      True beauty is found in authenticity. When you embrace your uniqueness and let your confidence
      shine, you inspire others to do the same. Celebrate yourself and discover the power of being
      unapologetically you—because every story, every smile, and every moment is beautiful in its
      own way.
    </p>
    {children}
  </Section>
);

export default HeroTextSection;
