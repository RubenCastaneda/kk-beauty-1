import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with publishable key from environment variables
const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  console.error('REACT_APP_STRIPE_PUBLISHABLE_KEY is not defined in environment variables');
  throw new Error('Stripe publishable key is required but not found in environment variables');
}

const stripePromise = loadStripe(publishableKey);

interface StripeProviderProps {
  children: React.ReactNode;
}

const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
