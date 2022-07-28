import { render, screen } from '@testing-library/react';
import App from './App';

test('renders properly', () => {
  render(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: "Send" })).toBeInTheDocument()
  expect(screen.getByText('Results:')).toBeInTheDocument()
})