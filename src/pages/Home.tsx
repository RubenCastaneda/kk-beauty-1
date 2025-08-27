import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../components/Newsletter/Newsletter';
import '../styles/home.css';
import styled from 'styled-components';

const Page = styled.main`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
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
    padding: 0 12px;
    overflow-x: hidden;
  }
`;

const BrandRow = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 0;
`;

const MediaStrip = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 8px;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MediaItem = styled.img`
  flex: 0 0 auto;
  width: 96px;
  height: 96px;
  border-radius: 12px;
  object-fit: cover;
  scroll-snap-align: center;
`;

const Card = styled.section`
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  padding: 16px;
  margin: 20px 0;
`;

const VideoContainer = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 12px;
`;

const Banner = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 16/9;
  margin: 12px 0;
`;
const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  height: 44px;
  border-radius: 999px;
  padding: 0 14px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #eaeaea;
  font-size: 18px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

const NewsletterButton = styled.button`
  height: 44px;
  margin-left: 8px;
  border-radius: 999px;
  padding: 0 16px;
  background: #eaeaea;
  color: #0f0f0f;
  font-weight: 600;
`;

const FooterLinks = styled.footer`
  text-align: center;
  font-size: 18px;
  opacity: 0.85;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const hero1 = '/images/hero1.jpg';
const hero2 = '/images/hero3.jpg';
const hero3 = '/images/Product_Group.jpg';

const Home: React.FC = () => {
  // Scroll to newsletter section
  const scrollToNewsletter = () => {
    const el = document.getElementById('newsletter');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="carousel" aria-label="Featured products">
            <div className="carousel__track">
              <img src={hero1} alt="KK Beauty Lab product 1" className="slide slide--left" />
              <img src={hero2} alt="KK Beauty Lab product 2" className="slide slide--center" />
              <img src={hero3} alt="KK Beauty Lab product 3" className="slide slide--right" />
            </div>
          </div>

          <nav className="hero__nav">
            <Link to="/about">ABOUT US</Link>
            <Link to="/products">OUR PRODUCTS</Link>
            <button
              onClick={scrollToNewsletter}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                fontSize: 'inherit',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              NEWSLETTER
            </button>
            <Link to="/contact">CONTACT US</Link>
          </nav>

          <h1 className="hero__logo">KK</h1>

          <div className="hero__cta">
            <Link to="/shop" className="btn">
              Shop Now
            </Link>
            <Link to="/collections" className="btn btn--ghost">
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      <Page>
        <Card style={{ padding: '16px 16px 0 16px' }}>
          <h1>Discover Your New Favorites</h1>
          <h2 style={{ fontSize: '16px', fontWeight: 700 }}>
            Every face tells a story. Every story deserves to be seen.
          </h2>
        </Card>
        <VideoContainer>
          <video autoPlay loop playsInline style={{ width: '100%', height: '100%' }}>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </VideoContainer>
        <Card>
          <h2>Why shop with us:</h2>
          <p>
            In a world of filters and facades, true beauty breaks through the noise. Your skin is
            your canvas. Your confidence, the masterpiece.
          </p>
          <p style={{ marginTop: 8 }}>
            This is your moment to step into the spotlight—unapologetically, authentically,
            brilliantly you.
          </p>
          <p style={{ marginTop: 8 }}>
            Our curated collection of luxury skincare transforms your daily ritual into something
            extraordinary. From breakthrough serums that rewrite your skin&apos;s story to bold
            statements that command attention, each product is designed for those who refuse to fade
            into the background.
          </p>
          <p style={{ marginTop: 8 }}>
            Because when you embrace your authentic self, you don&apos;t just change how you
            look—you change how the world sees possibility.
          </p>
          <p style={{ marginTop: 8 }}>Your next scene starts now.</p>
        </Card>
        <Banner src="/images/Product_Group.jpg" alt="Product group" />
        <FeaturedProducts />
        <Newsletter />
        <FooterLinks>
          <span>Contact</span>
          <span>|</span>
          <span>Privacy</span>
          <span>|</span>
          <span>Terms</span>
        </FooterLinks>
      </Page>
    </>
  );
};

export default Home;
