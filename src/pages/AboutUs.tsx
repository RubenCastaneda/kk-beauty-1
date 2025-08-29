import React from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../hooks/useIsMobile';

const Page = styled.main`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  background: #0f0f0f;
  color: #eaeaea;
  text-align: center;
  font-size: 18px;
  @media (min-width: 992px) {
    width: 70%;
    max-width: 1200px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100vw;
    padding: 20px 12px;
    overflow-x: hidden;
  }
`;

const Card = styled.section`
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin: 8px 0;
  @media (max-width: 768px) {
    padding: 8px;
    margin: 6px 0;
  }
`;

interface LogoSectionProps {
  isMobile: boolean;
}

const LogoSection = styled.div<LogoSectionProps>`
  text-align: center;
  padding: 12px 0;

  img {
    width: ${({ isMobile }) => (isMobile ? '45px' : '65px')};
    height: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  margin: 10px 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 6px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 576px) {
    aspect-ratio: 1/1;
    border-radius: 12px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  margin: 10px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const ValueCard = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: #1f1f1f;
    border-color: rgba(255, 255, 255, 0.15);
  }

  h3 {
    font-size: 1rem;
    color: #eaeaea;
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
    color: #bbbbbb;
    line-height: 1.3;
  }
`;

const CTAButton = styled.button`
  background: #eaeaea;
  color: #0f0f0f;
  border: none;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 12px auto;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(234, 234, 234, 0.3);
  }

  @media (max-width: 768px) {
    padding: 6px 14px;
    font-size: 12px;
    margin: 10px auto;
  }
`;

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile(576);
  const images = isMobile
    ? ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg']
    : ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg', '/images/hero5.jpg'];

  const values = [
    {
      title: 'Premium Quality',
      description:
        'We source only the highest quality products from trusted brands and manufacturers.',
    },
    {
      title: 'Expert Guidance',
      description:
        'Our beauty experts are here to help you find the perfect products for your needs.',
    },
    {
      title: 'Sustainability',
      description:
        'We re committed to eco-friendly practices and supporting sustainable beauty brands.',
    },
    {
      title: 'Community First',
      description: 'Building a supportive community where everyone feels welcome and beautiful.',
    },
  ];

  const handleExploreProducts = () => {
    window.location.href = '/products#/products';
  };

  return (
    <Page>
      <LogoSection isMobile={isMobile}>
        <img src={`${process.env.PUBLIC_URL}/logo_wht.png`} alt="KK Beauty Lab logo" />
      </LogoSection>

      <Card>
        <h1>About KK Beauty Lab</h1>
        <h2 style={{ fontSize: '16px', fontWeight: 700, marginTop: '5px' }}>
          Every story deserves to be seen. Every face tells a story.
        </h2>
        <div style={{ textAlign: 'left', marginTop: '10px' }}>
          <p>
            KK Beauty Lab was founded with a simple yet powerful mission: to empower everyone to
            feel confident and beautiful in their own skin. We believe that beauty is about
            self-expression, self-care, and celebrating individuality. Our curated selection of
            skincare and cosmetics is designed to help you look and feel your best, every single
            day.
          </p>
          <p style={{ marginTop: '5px' }}>
            Our team is passionate about sourcing high-quality, effective products that deliver real
            results. We value transparency, sustainability, and customer satisfaction above all
            else. Whether you&apos;re a beauty enthusiast or just starting your journey, we&apos;re
            here to support you with expert advice, exclusive offers, and a welcoming community.
          </p>
        </div>
      </Card>

      <Card>
        <h2>Our Values</h2>
        <p style={{ marginBottom: '10px' }}>The principles that guide everything we do</p>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Card>

      <Card>
        <h2>Why Choose KK Beauty Lab?</h2>
        <p style={{ marginBottom: '10px' }}>Experience the difference that quality and care make</p>
        <div style={{ textAlign: 'left', marginBottom: '12px' }}>
          <p>
            We&apos;re not just another beauty retailer – we&apos;re your beauty partner. Our
            commitment to excellence means you&apos;ll always find premium, hand-selected products
            that meet our high standards.
          </p>
          <p style={{ marginTop: '5px' }}>
            From our friendly, knowledgeable support team to our fast shipping and easy returns
            policy, every aspect of your experience is designed with your satisfaction in mind.
            We&apos;re proud to offer community-driven events, expert tips, and a commitment to
            sustainability that you can trust.
          </p>
        </div>

        <Gallery>
          {images.map((src, i) => (
            <GalleryImage key={i} src={src} alt={`Gallery ${i + 1}`} />
          ))}
        </Gallery>
      </Card>

      <Card>
        <h2>Join Our Community</h2>
        <p style={{ marginBottom: '10px' }}>Be part of something beautiful</p>
        <div style={{ textAlign: 'left', marginBottom: '12px' }}>
          <p>
            Join thousands of happy customers who trust KK Beauty Lab for their daily routines. Your
            satisfaction is our top priority, and we can&apos;t wait to be part of your beauty
            journey!
          </p>
        </div>
        <CTAButton onClick={handleExploreProducts}>Explore Our Products</CTAButton>
      </Card>
    </Page>
  );
};

export default AboutUs;
