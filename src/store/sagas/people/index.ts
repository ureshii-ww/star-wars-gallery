import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { LoadPeopleAction, PeopleActionsEnum } from '../../reducers/people/types';
import PeopleService from '../../../services/people.service';
import { loadPeopleFailure, loadPeopleSuccess } from '../../reducers/people/actions';

export function* watchLoadPeople() {
  yield takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleSaga);
}

export function* loadPeopleSaga(action: LoadPeopleAction) {
  const { search, page } = action.payload;
  
  try {
    const response: Awaited<ReturnType<typeof PeopleService.getAll>> = yield call(
      PeopleService.getAll,
      page,
      search
    );
    
    yield put(loadPeopleSuccess(response.data.results));
  } catch (error: any) {
    yield put(loadPeopleFailure(error.message));
  }
}

export default function* peopleSaga() {
  yield fork(watchLoadPeople);
}
