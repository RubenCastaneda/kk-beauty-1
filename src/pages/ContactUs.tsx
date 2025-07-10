import React, { useState } from 'react';
import styled from 'styled-components';
import HeroTextSection from '../components/Hero/HeroTextSection';

const Section = styled.section`
  width: 75%;
  max-width: 700px;
  margin: 2.5rem auto;
  padding: 2.5rem 2rem;
  background: #181818;
  border-radius: 0.7rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.1rem;
  background: #222;
  color: #fff;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.1rem;
  background: #222;
  color: #fff;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  background: #ffd6e0;
  color: #222;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;

const SuccessMsg = styled.div`
  color: #ffd6e0;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const ContactUs: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <>
      <HeroTextSection title="Contact Us" subtitle="We’re here to help!">
        <span style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', margin: '0 auto', color: '#eee' }}>
          Reach out to us with any questions, feedback, or business inquiries. We’ll respond as soon as possible!
        </span>
      </HeroTextSection>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input type="tel" name="phone" placeholder="Your Phone Number" />
          <Textarea name="question" placeholder="How can we help you?" required />
          <Button type="submit">Send Message</Button>
        </Form>
        {success && <SuccessMsg>Thank you for reaching out! We’ll get back to you soon.</SuccessMsg>}
      </Section>
    </>
  );
};

export default ContactUs;
