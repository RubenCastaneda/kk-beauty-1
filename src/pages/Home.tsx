import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const hero1 = '/images/hero1.jpg';
const hero2 = '/images/hero3.jpg';
const hero3 = '/images/Product_Group.jpg';

export default function Home() {
  return (
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
          <Link to="/newsletter">NEWSLETTER</Link>
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
  );
}
