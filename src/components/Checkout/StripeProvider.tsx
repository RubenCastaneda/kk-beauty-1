import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
// For testing, you can use the test key: 'pk_test_51O...'
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ||
    'pk_test_51Rqgi72Nl0j3WNqlqzOJ7sfBjXnqljFvneGqLjHuDFE4MnpopVYXdryuV2uiH9hAosImB8nKTXemD1WiZtxdSjSt00EGHfvVdj',
);

interface StripeProviderProps {
  children: React.ReactNode;
}

const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
