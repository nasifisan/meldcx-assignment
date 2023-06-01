import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from '@/layout/Header';

describe('Header', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('no user', () => {
    const mockState = {
        Auth: {
          user: {
            Name: ''
          },
        },
      };
    const store = mockStore(mockState);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const heading = screen.getByRole('singup-button');
    const headingText = 'Signin/Signup';

    expect(heading).toHaveTextContent(headingText);
  });


  it('Logged in user', () => {
    const mockState = {
        Auth: {
          user: {
            Name: 'ddsf'
          },
        },
      };
    const store = mockStore(mockState);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const heading = screen.getByRole('loggedIn');
    const headingText = 'Logout';

    expect(heading).toHaveTextContent(headingText);
  });
});
