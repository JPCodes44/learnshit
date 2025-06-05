import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test('renders weather generator button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Generate the weather/i);
  expect(buttonElement).toBeInTheDocument();
});
