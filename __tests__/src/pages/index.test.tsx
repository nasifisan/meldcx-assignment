import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Home from '@/pages';

describe('Home', () => {
  const mockState = { out: 10 };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(mockState);

  it('should render', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const heading = screen.getByRole('home-section');
    const headingText = 'Hello World from new planet!!';

    expect(heading).toHaveTextContent(headingText);
  });
});
