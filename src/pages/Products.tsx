import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard/ProductCard';
import { products as featuredProducts } from '../components/FeaturedProducts/FeaturedProducts';
import ProductModal, { Product } from '../components/ProductModal/ProductModal';
import HeroTextSection from '../components/Hero/HeroTextSection';
import logo from '../logo.svg';

const allProductImages = [
  '/images/product_pictures/AHA Hand Creme (black BG).png',
  '/images/product_pictures/Biomed Retinol 500 (black BG).png',
  '/images/product_pictures/Cascading AOX + Enviro Serum (black BG).png',
  '/images/product_pictures/Glycolic Cleanser (black BG).png',
  '/images/product_pictures/Glycolic Toner (black BG).png',
  '/images/product_pictures/Hexapeptide Moisture Creme (black BG).png',
  '/images/product_pictures/Hyaluronic Toner (black BG).png',
  '/images/product_pictures/Illuminating Peptide Creme (black BG).png',
  '/images/product_pictures/Retinol & Lactic Exfoliating Serum (black BG).png',
  '/images/product_pictures/Tranexamic B3 Serum (black BG).png',
  '/images/product_pictures/UPDATE BLACK BGpng.png',
];

const extraDetails: Record<number, Partial<Product>> = {
  4: {
    name: 'Glycolic Cleanser',
    description:
      'Gently lifts away impurities and dull surface cells while preserving the skin\u2019s natural radiance.',
    skinTypes: 'Mature \u00b7 Oily/Combination \u00b7 Hyperpigmented',
    whatItDoes:
      'Gently lifts away impurities and dull surface cells while preserving the skin\u2019s natural radiance. Alpha-hydroxy glycolic acid cleanses thoroughly without stripping essential moisture. Botanical extracts of Comfrey, Burdock, and Dandelion enhance hydration and help fortify the skin barrier.',
    howToUseClient: [
      'Wet hands, face, and neck.',
      'Massage a small amount of cleanser into skin, avoiding the eye area.',
      'Rinse thoroughly. A slight tingling sensation is normal.',
      'Use only as directed. If irritation persists, discontinue use and consult a physician.',
      'Sun care: Areas treated with AHAs must be protected with sunscreen before sun exposure.',
    ],
    professionalUse: [
      'On damp skin, massage a small amount over face and neck in circular motions, avoiding eyes.',
      'Remove completely with moist sponges.',
      'May serve as a peel-prep cleanser prior to exfoliation.',
    ],
    sunburnAlert:
      'This product contains an Alpha Hydroxy Acid (AHA) that can increase skin sensitivity to the sun and the likelihood of sunburn. While using this product\u2014and for one week afterward\u2014apply broad-spectrum sunscreen daily, wear protective clothing, and limit sun exposure.',
    cautions:
      'For external use only. Avoid eyes and mucous membranes. Mild stinging may occur. If irritation develops, discontinue use and consult your skincare professional. Exercise care when layering with other exfoliating products.',
    ingredients:
      'Aqua (Purified Water), Tetrahydroxypropyl Ethylenediamine, Glycolic Acid, Helianthus Annuus (Sunflower) Seed Oil, Stearyl Alcohol, Arachidyl Alcohol, Glycerin, Glyceryl Stearate, Persea Gratissima (Avocado) Oil, Butyrospermum Parkii (Shea) Butter, Lauryl Lactate, Behenyl Alcohol, Decyl Glucoside, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Cetyl Alcohol, Euphorbia Cerifera (Candelilla) Wax, Arachidyl Glucoside, Sodium Stearoyl Lactylate, Phenoxyethanol, Caprylyl Glycol, Xanthan Gum, Citrus Limon (Lemon) Peel Oil, Lauryl Glucoside, Citrus Paradisi (Grapefruit) Peel Oil, Tocopheryl Acetate, Lavandula Angustifolia (Lavender) Flower/Leaf/Stem Extract, Sorbic Acid, Acetyl Hexapeptide-8, Pentapeptide-18, Limonene, Citrus Limon Peel Oil, Linalool.',
    ph: '3.5 \u2013 4.5',
  },
};

// Generate a product list using all images, filling in with sample data if needed
const products: Product[] = allProductImages.map((img, i) => {
  const base = {
    id: i + 1,
    name: featuredProducts[i]?.name || `Product ${i + 1}`,
    image: img,
    description: featuredProducts[i]?.description || 'A wonderful product coming soon.',
    price: featuredProducts[i]?.price || '',
  };
  return { ...base, ...extraDetails[i + 1] } as Product;
});

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
      <HeroTextSection title="Shop our Products">
        <p>Your story starts here. Choose your scene.</p>
        <p>
          Every product in our collection is designed to unleash your most confident self. From
          breakthrough serums that transform your skin to bold statements that turn heads—
        </p>
        <p>
          Skincare that performs. Makeup that commands attention. Self-care that celebrates you.
        </p>
        <p>Discover your next obsession below.</p>
      </HeroTextSection>
      <Section>
        <h2
          style={{
            fontFamily: 'Georgia, serif',
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
