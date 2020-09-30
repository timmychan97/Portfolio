import React from 'react';
import App from './App';
import { render } from '@testing-library/react'

test('renders one welcome message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Welcome to the WebGallery");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeVisible();
});