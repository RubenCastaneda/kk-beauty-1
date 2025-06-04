import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KK Beauty header', () => {
  render(<App />);
  const headerElement = screen.getByText('KK Beauty');
  expect(headerElement).toBeInTheDocument();
});
