import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-react');
  expect(linkElement).toBeInTheDocument();
});

test('the link url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-react');
  expect(linkElement.href).toContain('https://reactjs.org');
});
