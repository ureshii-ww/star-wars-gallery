import { loadPeopleSaga, resetPeopleSaga, watchLoadPeople, watchResetPeople } from '../people';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { LoadPeopleAction, PeopleActionsEnum } from '../../reducers/people/types';
import { personStub } from '../../../tests/stubs/person.stub';
import { call } from 'redux-saga-test-plan/matchers';
import PeopleService from '../../../services/people.service';
import createDataListStub from '../../../tests/support/createDataListStub';
import createAxiosResponseStub from '../../../tests/support/createAxiosResponseStub';
import rootReducer from '../../reducers';
import { RootState } from '../../index';
import createInitialStateStub from '../../../tests/support/createInitialStateStub';
import { throwError } from 'redux-saga-test-plan/providers';
import DataList from '../../../models/data-list.model';
import Person from '../../../models/person.model';

describe('watchLoadPeople', () => {
  it('takes every loadPeople and spawns loadPeopleSaga', () => {
    testSaga(watchLoadPeople)
      .next()
      .takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleSaga)
      .next()
      .isDone();
  });
});

describe('watchPeopleReset', () => {
  it('takes every resetPeople action and spawns watchPeopleSaga', () => {
    testSaga(watchResetPeople)
      .next()
      .takeEvery(PeopleActionsEnum.RESET_PEOPLE, resetPeopleSaga)
      .next()
      .isDone();
  });
});

describe('loadPeopleSaga', () => {
  const loadPeopleActionStub: LoadPeopleAction = {
    type: PeopleActionsEnum.LOAD_PEOPLE,
    payload: {
      page: 1,
      search: '',
    },
  };

  const initialStateStub = createInitialStateStub();
  const responseStub = createAxiosResponseStub<DataList<Person>>(createDataListStub([personStub]));

  it('puts an loadPeopleSuccessAction after a successful api call', async () => {
    return expectSaga(loadPeopleSaga, loadPeopleActionStub)
      .withReducer(rootReducer, initialStateStub)
      .provide([[call.fn(PeopleService.getAll), responseStub]])
      .dispatch(loadPeopleActionStub)
      .hasFinalState<RootState>({
        ...initialStateStub,
        people: {
          ...initialStateStub.people,
          count: responseStub.data.count,
          next: responseStub.data.next,
          previous: responseStub.data.previous,
          data: responseStub.data.results,
        },
      })
      .run();
  });

  it('puts an loadPeopleErrorAction after an unsuccessful api call', async () => {
    return expectSaga(loadPeopleSaga, loadPeopleActionStub)
      .withReducer(rootReducer, initialStateStub)
      .provide([
        [
          call.fn(PeopleService.getAll),
          throwError({
            message: 'error',
            name: 'error',
          }),
        ],
      ])
      .dispatch(loadPeopleActionStub)
      .hasFinalState<RootState>({
        ...initialStateStub,
        people: {
          ...initialStateStub.people,
          error: 'error',
        },
      })
      .run();
  });
});