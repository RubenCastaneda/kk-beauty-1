import React from 'react';
import Hero from '../components/Hero/Hero';
import VideoHero from '../components/VideoHero/VideoHero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../components/Newsletter/Newsletter';

const Home: React.FC = () => (
  <>
    <Hero />
    <VideoHero />
    <FeaturedProducts />
    <Newsletter />
  </>
);

export default Home;
