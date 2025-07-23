import React from 'react';

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
=======
const AboutUs: React.FC = () => (
  <main
    style={{
      width: '90%',
      maxWidth: 800,
      margin: '2rem auto',
      color: '#fff',
      lineHeight: '1.7',
    }}
  >
    <h1>About KK Beauty Lab</h1>
    <p>Where your story meets our craft.</p>
    <p>Every face tells a story. Yours deserves to be unforgettable.</p>
    <h2>Our Mission</h2>
    <p>
      KK Beauty Lab exists to rewrite the rules of skincare. We believe beauty is your birthright,
      confidence is your superpower, and self-expression is your art form.
    </p>
    <p>We don&apos;t create products. We craft transformations.</p>
    <h2>What We Stand For</h2>
    <p>
      Authenticity over everything. Your skin, your story, your way. We formulate for real people
      living real lives—not filtered fantasies.
    </p>
    <p>
      Results that speak louder than promises. Every serum, every cream, every innovation is tested
      by our community and proven in the mirror.
    </p>
    <p>
      Transparency in every ingredient. You deserve to know exactly what you&apos;re putting on your
      skin and why it works.
    </p>
    <h2>Your Journey Starts Here</h2>
    <p>
      Whether you&apos;re discovering skincare for the first time or you&apos;re a seasoned beauty
      lover, we&apos;re here to support your story. Expert advice, curated collections, and a
      community that celebrates every version of you.
    </p>
    <p>This is more than skincare. This is your spotlight moment.</p>
    <p>Thank you for choosing KK Beauty Lab. Your story is just beginning.</p>
  </main>
);

export default AboutUs;
