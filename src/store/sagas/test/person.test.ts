import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { loadPersonSaga, watchLoadPerson } from '../person';
import { LoadPersonAction, PersonActionsEnum } from '../../reducers/person/types';
import rootReducer from '../../reducers';
import createInitialStateStub from './support/createInitialStateStub';
import { call } from 'redux-saga-test-plan/matchers';
import PersonService from '../../../services/person.service';
import createAxiosResponseStub from './support/createAxiosResponseStub';
import { personStub } from './stubs/person.stub';
import { throwError } from 'redux-saga-test-plan/providers';

describe('watchLoadPerson', () => {
  it('takes every loadPerson and spawns loadPersonSaga', () => {
    testSaga(watchLoadPerson)
      .next()
      .takeEvery(PersonActionsEnum.LOAD_PERSON, loadPersonSaga)
      .next()
      .isDone();
  });
});

describe('loadPersonSaga', () => {
  const loadPersonActionStub: LoadPersonAction = {
    type: PersonActionsEnum.LOAD_PERSON,
    payload: {
      id: '1',
    },
  };
  const initialState = createInitialStateStub();
  const responseStub = createAxiosResponseStub(personStub);

  it('puts an loadPersonSuccess action after a successful api call', () => {
    return expectSaga(loadPersonSaga, loadPersonActionStub)
      .withReducer(rootReducer, initialState)
      .provide([[call.fn(PersonService.getOne), responseStub]])
      .dispatch(loadPersonActionStub)
      .hasFinalState({
        ...initialState,
        person: {
          ...initialState.person,
          data: { ...responseStub.data },
        },
      })
      .run();
  });

  it('puts an loadPersonFailure action after a unsuccessful api call', () => {
    return expectSaga(loadPersonSaga, loadPersonActionStub)
      .withReducer(rootReducer, initialState)
      .provide([
        [
          call.fn(PersonService.getOne),
          throwError({
            name: 'error',
            message: 'error',
          }),
        ],
      ])
      .dispatch(loadPersonActionStub)
      .hasFinalState({
        ...initialState,
        person: {
          ...initialState.person,
          error: 'error',
        },
      })
      .run();
  });
});
