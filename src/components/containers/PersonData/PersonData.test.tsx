import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import PersonData from './PersonData';
import { loadPerson } from '../../../store/reducers/person/actions';
import createInitialStateStub from '../../../tests/support/createInitialStateStub';
import { personStub } from '../../../tests/stubs/person.stub';

const mockStore = configureStore();

describe('PersonData', () => {
  let store: MockStoreEnhanced<unknown, {}>;
  const id = '1';

  beforeEach(() => {
    const stateStub = createInitialStateStub();
    stateStub.person.data = {
      ...personStub,
    };
    store = mockStore(stateStub);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <PersonData id={id} />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('starts to load a person data', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(loadPerson(id));
  });
  
  it('renders loader while data is being loaded', () => {
    const stateStub = createInitialStateStub();
    stateStub.person.loading = true;
    store = mockStore(stateStub);
  
    render(
      <Provider store={store}>
        <PersonData id={id} />
      </Provider>
    );
    
    expect(screen.getByTestId('loader')).toBeVisible();
  })

  it('renders the whole person data object except url if it was loaded successfully', () => {
    for (const key in personStub) {
      if (key === 'url') {
        continue;
      }
      const value = personStub[key as keyof typeof personStub];
      if (!Array.isArray(value)) {
        expect(screen.getByText(value)).toBeVisible();
      } else {
        value.forEach(v => {
          expect(screen.getByText(v)).toBeVisible();
        });
      }
    }
  });
  
  it(`renders error message if person doesn't exist`, () => {
    const stateStub = createInitialStateStub();
    stateStub.person.error = {
      status: 404,
      message: 'Not found'
    };
    store = mockStore(stateStub);
    
    render(
      <Provider store={store}>
        <PersonData id={id} />
      </Provider>
    );
    
    expect(screen.getByText(`Person with such id doesn't exist`)).toBeVisible();
  })
});
