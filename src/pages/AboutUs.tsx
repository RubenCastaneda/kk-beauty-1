import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import HeroTextSection from '../components/Hero/HeroTextSection';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  width: 75%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.7rem;
    width: 98vw;
    margin: 1rem auto;
    padding: 0 0.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100vw;
    margin: 0.5rem auto;
    padding: 0 1rem;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 0.4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    border-radius: 0.3rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 576px) {
    aspect-ratio: 1/1;
    border-radius: 0.2rem;
    box-shadow: none;
  }
`;

const AboutUs: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 576;
  const images = isMobile
    ? ['/images/hero1.jpg', '/images/prod1.jpg']
    : ['/images/hero1.jpg', '/images/prod1.jpg', '/images/hero3.jpg', '/images/prod2.jpg'];
  return (
    <>
      <img
        src={logo}
        alt="KK Beauty Lab logo"
        style={{ width: '80px', margin: '2rem auto', display: 'block' }}
      />
      <HeroTextSection
        title="About KK Beauty Lab"
        subtitle="Our story, our values, and our promise to you."
      >
        <span
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '0 auto',
            color: '#eee',
          }}
        >
          KK Beauty Lab was founded with a simple mission: to empower everyone to feel confident and
          beautiful in their own skin. We believe that beauty is about self-expression, self-care,
          and celebrating individuality. Our curated selection of skincare and cosmetics is designed
          to help you look and feel your best, every day.
          <br />
          <br />
          Our team is passionate about sourcing high-quality, effective products that deliver real
          results. We value transparency, sustainability, and customer satisfaction above all else.
          Whether you&apos;re a beauty enthusiast or just starting your journey, we&apos;re here to
          support you with expert advice, exclusive offers, and a welcoming community.
          <br />
          <br />
          Thank you for choosing KK Beauty Lab. We can&apos;t wait to be part of your story!
        </span>
      </HeroTextSection>
      <Gallery>
        {images.map((src, i) => (
          <GalleryImage key={i} src={src} alt={`Gallery ${i + 1}`} />
        ))}
      </Gallery>
      <HeroTextSection title="Why Choose Us?" subtitle="Experience the KK Beauty Lab difference.">
        <span
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '0 auto',
            color: '#eee',
          }}
        >
          - Premium, hand-selected products
          <br />
          - Friendly, knowledgeable support
          <br />
          - Fast shipping and easy returns
          <br />
          - Community-driven events and tips
          <br />
          - Commitment to sustainability and transparency
          <br />
          <br />
          Join thousands of happy customers who trust KK Beauty Lab for their daily routines. Your
          satisfaction is our top priority!
        </span>
      </HeroTextSection>
    </>
  );
};
// ...existing code...

export default AboutUs;
