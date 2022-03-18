import peopleReducer, { initialState } from '../people';
import { PeopleAction } from '../people/types';
import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from '../people/actions';
import { personStub } from '../../../tests/stubs/person.stub';

describe('people reducer', () => {
  it('returns initial state', () => {
    expect(peopleReducer(undefined, {} as PeopleAction)).toEqual({
      ...initialState,
    });
  });

  it('handles the loadPeople action', () => {
    expect(peopleReducer(initialState, loadPeople(2, ''))).toEqual({
      ...initialState,
      loading: true,
      page: 2,
      search: '',
    });
  });

  it('handles the loadPeopleSuccess action', () => {
    expect(peopleReducer(initialState, loadPeopleSuccess([personStub]))).toEqual({
      ...initialState,
      loading: false,
      data: [personStub],
    });
  });

  it('handles the loadPeopleFailure action', () => {
    expect(peopleReducer(initialState, loadPeopleFailure('error'))).toEqual({
      ...initialState,
      error: 'error',
    });
  });
});