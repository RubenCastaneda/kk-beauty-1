import React from 'react';
import HeroTextSection from '../components/Hero/HeroTextSection';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactUs: React.FC = () => {
  return (
    <>
      <HeroTextSection title="Contact Us" subtitle="We’re here to help!">
        <span
          style={{
            maxWidth: '700px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            margin: '0 auto',
            color: '#eee',
          }}
        >
          Reach out to us with any questions, feedback, or business inquiries. We’ll respond as soon
          as possible!
        </span>
      </HeroTextSection>
      <ContactForm />
      <img
        src="/images/group-models.webp"
        alt="Group of KK Beauty Lab models"
        style={{ width: '100%', marginTop: '2rem' }}
      />
    </>
  );
};

export default ContactUs;
