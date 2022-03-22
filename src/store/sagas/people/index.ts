import { fork, takeEvery, debounce, call, put } from 'redux-saga/effects';
import {
  LoadPeopleAction,
  PeopleActionsEnum,
  SearchPeopleAction,
} from '../../reducers/people/types';
import PeopleService from '../../../services/people.service';
import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from '../../reducers/people/actions';
import { initialState } from '../../reducers/people';
import axios from 'axios';

export function* watchLoadPeople() {
  yield takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleSaga);
}

export function* debounceSearchPeople() {
  yield debounce(800, PeopleActionsEnum.SEARCH_PEOPLE, searchPeopleSaga);
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
    if (axios.isAxiosError(error)) {
      yield put(
        loadPeopleFailure(
          error.response?.status || 500,
          error.response?.data?.detail || 'Unknown error'
        )
      );
    } else {
      yield put(loadPeopleFailure(500, 'Unknown error'));
    }
  }
}

export function* searchPeopleSaga(action: SearchPeopleAction) {
  yield put(loadPeople(1, action.payload));
}

export function* resetPeopleSaga() {
  yield put(loadPeople(initialState.page, initialState.search));
}

export default function* peopleSaga() {
  yield fork(watchLoadPeople);
  yield fork(watchResetPeople);
  yield fork(debounceSearchPeople);
}
