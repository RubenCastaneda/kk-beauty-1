import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.section`
  position: relative;
  width: 100%;
`;

const Slide = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 16px;
`;

const slides = [
  { src: "/images/hero1.jpg", alt: "Model 1" },
  { src: "/images/hero3.jpg", alt: "Model 3" },
];

export default function HeroCarousel() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <Wrap className="hero-carousel">
      <Slide src={slides[i].src} alt={slides[i].alt} loading="eager" />
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          display: "flex",
          gap: "8px",
        }}
      >
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
        <Link to="/collections" className="btn btn-secondary">
          Explore Collections
        </Link>
      </div>
    </Wrap>
  );
}
