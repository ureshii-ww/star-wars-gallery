import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { LoadPersonAction, PersonActionsEnum } from '../../reducers/person/types';
import PersonService from '../../../services/person.service';
import { loadPersonFailure, loadPersonSuccess } from '../../reducers/person/actions';

export function* watchLoadPerson() {
  yield takeEvery(PersonActionsEnum.LOAD_PERSON, loadPersonSaga);
}

export function* loadPersonSaga(action: LoadPersonAction) {
  const { id } = action.payload;

  try {
    const response: Awaited<ReturnType<typeof PersonService.getOne>> = yield call(
      PersonService.getOne,
      id
    );
    yield put(loadPersonSuccess(response.data));
  } catch (error: any) {
    yield put(loadPersonFailure(error.message))
  }
}

export function* personSaga() {
  yield fork(watchLoadPerson);
}