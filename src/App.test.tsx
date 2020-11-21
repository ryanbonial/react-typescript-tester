import React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('App tests', () => {
  test('it loads', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('heading', { name: /typescript, yarn, and _redirects/i })).toBeInTheDocument();
  });

  test('it gets a random dad joke', async () => {
    const { getByRole, getByTestId } = render(<App />);
    expect(getByRole('heading', { name: /typescript, yarn, and _redirects/i })).toBeInTheDocument();
    const randJokeButton = getByRole('button', { name: /click for a random dad joke via proxy/i });
    user.click(randJokeButton)
    await waitFor(() => {
      expect(getByTestId('dad-joke-text')).toHaveTextContent('this is a random joke');
    })
  });

  test('it gets a specific dad joke', async () => {
    const { getByRole, getByTestId } = render(<App />);
    const jokeSearchInput = getByRole('searchbox');
    user.type(jokeSearchInput, 'search term')
    const specificJokeButton = getByRole('button', { name: /click for a dad joke via proxy about search term/i });
    user.click(specificJokeButton)
    await waitFor(() => {
      expect(getByTestId('dad-joke-text')).toHaveTextContent('this is a joke about search term');
    })
  });
});
