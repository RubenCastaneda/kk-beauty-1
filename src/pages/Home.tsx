import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import VideoHero from '../components/VideoHero/VideoHero';
import HeroTextSection from '../components/Hero/HeroTextSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../components/Newsletter/Newsletter';
import logo from '../logo.svg';

const Section = styled.section`
  width: 75%;
  max-width: 1200px;
  margin: 2.5rem auto 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.1rem;
  background: #181818;
  color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    width: 98vw;
    padding: 2rem 0.5rem;
    margin: 1.5rem auto 0 auto;
    border-radius: 0.5rem;
  }
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.5rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 auto;
  color: #eee;
`;

const Home: React.FC = () => (
  <>
    <Hero />
    <img
      src={logo}
      alt="KK Beauty Lab logo"
      style={{ width: '80px', margin: '2rem auto', display: 'block' }}
    />
    <Section className="bio">
      <Heading>Discover Your New Favorites</Heading>
      <Paragraph>Every face tells a story. Every story deserves to be seen.</Paragraph>
    </Section>
    <VideoHero />
    <Section className="why-shop">
      <Heading>Why shop with us:</Heading>
      <Paragraph>
        In a world of filters and facades, true beauty breaks through the noise. Your skin is your
        canvas. Your confidence, the masterpiece.
      </Paragraph>
      <Paragraph>
        This is your moment to step into the spotlight—unapologetically, authentically, brilliantly
        you.
      </Paragraph>
      <Paragraph>
        Our curated collection of luxury skincare transforms your daily ritual into something
        extraordinary. From breakthrough serums that rewrite your skin&apos;s story to bold
        statements that command attention, each product is designed for those who refuse to fade
        into the background.
      </Paragraph>
      <Paragraph>
        Because when you embrace your authentic self, you don&apos;t just change how you look—you
        change how the world sees possibility.
      </Paragraph>
      <Paragraph>Your next scene starts now.</Paragraph>
    </Section>
    <FeaturedProducts />
    <HeroTextSection title="Ready to Glow?" subtitle="Sign up for exclusive deals and updates.">
      <span
        style={{
          maxWidth: '700px',
          fontSize: '1.1rem',
          lineHeight: '1.7',
          margin: '0 auto',
          color: '#eee',
        }}
      >
        Join our newsletter and be the first to know about new products, special promotions, and
        beauty tips. Your journey to radiant skin and confidence starts here—don’t miss out!
      </span>
    </HeroTextSection>
    <Newsletter />
  </>
);

export default Home;
