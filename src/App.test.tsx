import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('renders home page with title', () => {
    render(<WrappedApp />);

    const pageTitle = screen.getByRole('heading', {
      name: /rayo reader/i,
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders not found in a route that does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/xablau']}>
        <App />
      </MemoryRouter>,
    );

    const notFound = screen.getByRole('heading', {
      name: /page not found/i,
      level: 1,
    });
    expect(notFound).toBeInTheDocument();
  });
});
