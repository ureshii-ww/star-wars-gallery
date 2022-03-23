import configureStore from 'redux-mock-store';
import { RootState } from '../../store';

export const mockCustomStore = (stateStub: RootState) => {
  const mockStore = configureStore();
  let store = mockStore(stateStub);
  store.dispatch = jest.fn();
  
  return store;
};