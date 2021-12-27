import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daily Clean Code Dev Tips text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Daily Clean Code Dev Tips/i);
  expect(linkElement).toBeInTheDocument();
});
