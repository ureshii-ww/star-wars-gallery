import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { LoadPeopleAction, PeopleActionsEnum } from '../../reducers/people/types';
import PeopleService from '../../../services/people.service';
import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from '../../reducers/people/actions';
import { initialState } from '../../reducers/people';

export function* watchLoadPeople() {
  yield takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleSaga);
}

export function* watchResetPeople() {
  yield takeEvery(PeopleActionsEnum.RESET_PEOPLE, resetPeopleSaga);
}

export function* loadPeopleSaga(action: LoadPeopleAction) {
  const { search, page } = action.payload;

  try {
    const response: Awaited<ReturnType<typeof PeopleService.getAll>> = yield call(
      PeopleService.getAll,
      page,
      search
    );

    yield put(loadPeopleSuccess(response.data));
  } catch (error: any) {
    yield put(loadPeopleFailure(error.message));
  }
}

export function* resetPeopleSaga() {
  yield put(loadPeople(initialState.page, initialState.search));
}

export default function* peopleSaga() {
  yield fork(watchLoadPeople);
  yield fork(watchResetPeople);
}
