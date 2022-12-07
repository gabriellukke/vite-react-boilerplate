import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);

    const pageTitle = screen.getByRole('heading', {
      name: /rayo reader/i,
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
  });
});
