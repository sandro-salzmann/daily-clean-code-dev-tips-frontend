import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Get clean code tips as notifications text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get clean code tips as notifications/i);
  expect(linkElement).toBeInTheDocument();
});
