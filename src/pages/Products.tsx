import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard/ProductCard';
import { products as featuredProducts } from '../components/FeaturedProducts/FeaturedProducts';
import ProductModal, { Product } from '../components/ProductModal/ProductModal';
import HeroTextSection from '../components/Hero/HeroTextSection';
import logo from '../logo.svg';

const allProductImages = [
  '/images/prod1.jpg',
  '/images/prod2.jpg',
  '/images/prod3.jpg',
  '/images/prod_11.jpg',
  '/images/prod_2.jpg',
  '/images/prod_3.jpg',
  '/images/prod_4.jpg',
  '/images/prod_5.jpg',
  '/images/prod_7.jpg',
  '/images/prod_8.jpg',
  '/images/prod_9.jpg',
];

// Generate a product list using all images, filling in with sample data if needed
const products: Product[] = allProductImages.map((img, i) => ({
  id: i + 1,
  name: featuredProducts[i]?.name || `Product ${i + 1}`,
  image: img,
  description: featuredProducts[i]?.description || 'A wonderful product coming soon.',
  price: featuredProducts[i]?.price || '',
}));

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Products: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <>
      <img
        src={logo}
        alt="KK Beauty Lab logo"
        style={{ width: '80px', margin: '2rem auto', display: 'block' }}
      />
      <HeroTextSection
        title="Shop All Products"
        subtitle="Find your new favorites and bestsellers."
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
          Browse our full collection of beauty essentials. Whether you’re looking for skincare,
          makeup, or self-care treats, we have something for every routine and every style. Click on
          any product to learn more!
        </span>
      </HeroTextSection>
      <Section>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#fff',
          }}
        >
          Our Products
        </h2>
        <Grid>
          {products.map((p) => (
            <div key={p.id} onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
              <ProductCard image={p.image} name={p.name} price={p.price} />
            </div>
          ))}
        </Grid>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </Section>
      <HeroTextSection
        title="Ready to treat yourself?"
        subtitle="Enjoy fast shipping and exclusive offers."
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
          Don’t wait—add your favorites to your cart and experience the KK Beauty Lab difference.
          Your next beauty obsession is just a click away!
        </span>
      </HeroTextSection>
    </>
  );
};

export default Products;
