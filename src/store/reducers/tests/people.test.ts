import peopleReducer, { initialState } from '../people';
import { PeopleAction, PeopleState } from '../people/types';
import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from '../people/actions';
import { personStub } from '../../../tests/stubs/person.stub';
import createDataListStub from '../../../tests/support/createDataListStub';

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

  it('handles the loadPeopleSuccess action if data was empty', () => {
    const dataList = createDataListStub([personStub]);
    expect(peopleReducer(initialState, loadPeopleSuccess(dataList))).toEqual({
      ...initialState,
      loading: false,
      count: dataList.count,
      next: dataList.next,
      previous: dataList.previous,
      data: dataList.results
    });
  });
  
  it('handles the loadPeopleSuccess action if data was not empty', () => {
    const dataList = createDataListStub([personStub]);
    const state: PeopleState = {
      ...initialState,
      data: [personStub]
    }
    expect(peopleReducer(state, loadPeopleSuccess(dataList))).toEqual({
      ...initialState,
      loading: false,
      count: dataList.count,
      next: dataList.next,
      previous: dataList.previous,
      data: [personStub, ...dataList.results]
    });
  });

  it('handles the loadPeopleFailure action', () => {
    expect(peopleReducer(initialState, loadPeopleFailure('error'))).toEqual({
      ...initialState,
      error: 'error',
    });
  });
});