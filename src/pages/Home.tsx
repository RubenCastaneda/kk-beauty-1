import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../components/Newsletter/Newsletter';

const Home: React.FC = () => (
  <>
    <Hero />
    <FeaturedProducts />
    <Newsletter />
  </>
);

export default Home;
