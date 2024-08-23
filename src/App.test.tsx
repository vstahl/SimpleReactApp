import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Vite + React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /count is 0/i });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');
});

test('renders logos with correct links', () => {
  render(<App />);
  const viteLogo = screen.getByAltText('Vite logo');
  const reactLogo = screen.getByAltText('React logo');
  expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vitejs.dev');
  expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
});