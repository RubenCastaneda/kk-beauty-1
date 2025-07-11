import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 75%;
  max-width: 700px;
  margin: 2.5rem auto;
  padding: 2rem 1rem;
  background: #111;
  border-radius: 0.1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 420px;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 0.1rem;
  border: 1.5px solid #fff;
  font-size: 1.05rem;
  background: #000;
  color: #fff;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #bbb;
  }
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 0.1rem;
  border: 1.5px solid #fff;
  font-size: 1.05rem;
  background: #000;
  color: #fff;
  min-height: 100px;
  outline: none;
  transition: border 0.2s;
  resize: vertical;
  &:focus {
    border: 1.5px solid #bbb;
  }
`;

const Button = styled.button`
  padding: 0.9rem 1rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 0.1rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  &:hover {
    background: #222;
    color: #fff;
  }
`;

const SuccessMsg = styled.div`
  color: #fff;
  background: #222;
  border-radius: 0.1rem;
  padding: 1rem;
  font-size: 1.05rem;
  margin-top: 1.2rem;
  text-align: center;
`;

const ContactForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
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
  );
};

export default ContactForm;
