import { personStub } from '../../../tests/stubs/person.stub';
import { PersonAction } from '../person/types';
import personReducer from '../person';
import { initialState } from '../person';
import { loadPerson, loadPersonFailure, loadPersonSuccess } from '../person/actions';

describe('people reducer', () => {
  it('returns initial state', () => {
    expect(personReducer(undefined, {} as PersonAction)).toEqual({
      ...initialState,
    });
  });
  
  it('handles the loadPeople action', () => {
    expect(personReducer(initialState, loadPerson('3'))).toEqual({
      ...initialState,
      loading: true,
      id: '3'
    });
  });
  
  it('handles the loadPeopleSuccess action', () => {
    expect(personReducer(initialState, loadPersonSuccess(personStub))).toEqual({
      ...initialState,
      loading: false,
      data: personStub,
    });
  });
  
  it('handles the loadPeopleFailure action', () => {
    expect(personReducer(initialState, loadPersonFailure('error'))).toEqual({
      ...initialState,
      error: 'error',
    });
  });
});