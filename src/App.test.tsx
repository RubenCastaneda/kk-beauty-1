import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KK Beauty Lab header', () => {
  render(<App />);
  const headerElement = screen.getByText('KK Beauty Lab');
  expect(headerElement).toBeInTheDocument();
});
