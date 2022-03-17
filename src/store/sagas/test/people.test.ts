import { loadPeopleSaga, watchLoadPeople } from '../people';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { LoadPeopleAction, PeopleActionsEnum } from '../../reducers/people/types';
import { personStub } from './stubs/person.stub';
import { call } from 'redux-saga-test-plan/matchers';
import PeopleService from '../../../services/people.service';
import createDataListStub from './support/createDataListStub';
import createAxiosResponseStub from './support/createAxiosResponseStub';
import rootReducer from '../../reducers';
import { RootState } from '../../index';
import createInitialStateStub from './support/createInitialStateStub';
import { throwError } from 'redux-saga-test-plan/providers';

describe('watchLoadPeople', () => {
  it('takes every loadPeople and spawns loadPeopleSaga', () => {
    testSaga(watchLoadPeople)
      .next()
      .takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleSaga)
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
  const responseStub = createAxiosResponseStub(createDataListStub([personStub]));

  it('puts an loadPeopleSuccessAction after a successful api call', async () => {
    return expectSaga(loadPeopleSaga, loadPeopleActionStub)
      .withReducer(rootReducer, initialStateStub)
      .provide([[call.fn(PeopleService.getAll), responseStub]])
      .dispatch(loadPeopleActionStub)
      .hasFinalState<RootState>({
        ...initialStateStub,
        people: {
          ...initialStateStub.people,
          data: [personStub]
        }
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
          error: 'error'
        }
      })
      .run();
  });
});
