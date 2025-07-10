import React from 'react';
import Hero from '../components/Hero/Hero';
import VideoHero from '../components/VideoHero/VideoHero';
import HeroTextSection from '../components/Hero/HeroTextSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../components/Newsletter/Newsletter';

const Home: React.FC = () => (
  <>
    <Hero />
    <HeroTextSection
      title="Discover Your New Favorites"
      subtitle="Shop our bestsellers and exclusive collections."
    >
      <span style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', margin: '0 auto', color: '#eee' }}>
        Explore our curated selection of beauty products designed to help you look and feel your best. From luxurious serums to vibrant lipsticks, find something special for every routine. Don’t miss out on limited-time offers and new arrivals—your next must-have is just a click away!
      </span>
    </HeroTextSection>
    <VideoHero />
    <HeroTextSection
      title="Why Shop With Us?"
      subtitle="Quality, care, and a touch of luxury in every product."
    >
      <span style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', margin: '0 auto', color: '#eee' }}>
        We believe beauty should be effortless and enjoyable. Our products are crafted with premium ingredients and backed by thousands of happy customers. Enjoy fast shipping, easy returns, and personalized recommendations. Treat yourself today and experience the KK Beauty difference!
      </span>
    </HeroTextSection>
    <FeaturedProducts />
    <HeroTextSection
      title="Ready to Glow?"
      subtitle="Sign up for exclusive deals and updates."
    >
      <span style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', margin: '0 auto', color: '#eee' }}>
        Join our newsletter and be the first to know about new products, special promotions, and beauty tips. Your journey to radiant skin and confidence starts here—don’t miss out!
      </span>
    </HeroTextSection>
    <Newsletter />
  </>
);

export default Home;
