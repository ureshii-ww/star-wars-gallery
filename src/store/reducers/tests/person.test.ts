import { personStub } from '../../../tests/stubs/person.stub';
import { PersonAction } from '../person/types';
import personReducer from '../person';
import { initialState } from '../person';
import { loadPerson, loadPersonFailure, loadPersonSuccess } from '../person/actions';

describe('person reducer', () => {
  it('returns initial state', () => {
    expect(personReducer(undefined, {} as PersonAction)).toEqual({
      ...initialState,
    });
  });

  it('handles the loadPerson action', () => {
    expect(personReducer(initialState, loadPerson('3'))).toEqual({
      ...initialState,
      loading: true,
      id: '3',
    });
  });

  it('handles the loadPersonSuccess action', () => {
    expect(
      personReducer(
        {
          ...initialState,
          loading: true,
        },
        loadPersonSuccess(personStub)
      )
    ).toEqual({
      ...initialState,
      loading: false,
      data: personStub,
    });
  });

  it('handles the loadPersonFailure action', () => {
    expect(
      personReducer(
        {
          ...initialState,
          loading: true,
        },
        loadPersonFailure('error')
      )
    ).toEqual({
      ...initialState,
      loading: false,
      error: 'error',
    });
  });
});
