import { render, screen, within } from '@testing-library/react';
import App from './App';

// Smoke test for the home page (run 002, T18)
describe('home page', () => {
  beforeEach(() => render(<App />));

  test('has exactly one h1, the intro line', () => {
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: "Hi, I'm Lauden." })).toBeInTheDocument();
  });

  test('nav links to About, ESG, Work and Contact', () => {
    const nav = screen.getByRole('navigation');
    ['About', 'ESG', 'Work', 'Contact'].forEach((name) => {
      expect(within(nav).getByRole('link', { name })).toBeInTheDocument();
    });
  });

  test('shows published case studies and hides unpublished ones', () => {
    expect(screen.getByRole('button', { name: 'Takeout the fees.' })).toBeInTheDocument(); // M Cafe
    expect(screen.queryByText(/Complicated B2B tax rules/)).not.toBeInTheDocument(); // E-Cig Masters
  });
});
