import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('hero links navigate to About Us and Newsletter', () => {
  render(<App />);
  const aboutLink = screen.getByRole('link', { name: /about us/i });
  const newsletterLink = screen.getByRole('link', { name: /newsletter/i });
  expect(aboutLink).toHaveAttribute('href', '#/about-us');
  expect(newsletterLink).toHaveAttribute('href', '#/newsletter');
});
