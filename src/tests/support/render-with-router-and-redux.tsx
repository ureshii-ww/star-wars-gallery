import { ReactElement } from 'react';
import { MockStoreEnhanced } from 'redux-mock-store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export const renderWithRouterAndRedux = (element: ReactElement, store: MockStoreEnhanced<unknown, {}>) => {
  return render(
    <MemoryRouter>
      <Provider store={store}>{element}</Provider>
    </MemoryRouter>
  );
};