import { take, fork, takeEvery, call, put, select } from 'redux-saga/effects';
import { LocationChangeAction, ROUTER_ON_LOCATION_CHANGED } from '@lagunovsky/redux-react-router';
import { LoadPeopleAction, PeopleActionsEnum, PeopleState } from '../../reducers/people/types';
import PeopleService from '../../../services/people.service';
import { loadPeople, loadPeopleFailure, loadPeopleSuccess } from '../../reducers/people/actions';
import { matchPath } from 'react-router-dom';
import RouteNames from '../../../routes/route-names.enum';
import { RootState } from '../../index';

export function* loadPeopleList(action: LoadPeopleAction) {
  const { search, page } = action.payload;
  try {
    const response: Awaited<ReturnType<typeof PeopleService.getAll>> = yield call(
      PeopleService.getAll,
      page,
      search
    );
    yield put(loadPeopleSuccess(response.data.results));
  } catch (error: any) {
    yield put(loadPeopleFailure(error));
  }
}

export function* routeChangeSaga() {
  while (true) {
    const action: LocationChangeAction = yield take(ROUTER_ON_LOCATION_CHANGED);
    if (matchPath(action.payload.location.pathname, RouteNames.PEOPLE)) {
      const { page, search }: PeopleState = yield select((state: RootState) => state.people);
      yield put(loadPeople(page, search));
    }
  }
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(PeopleActionsEnum.LOAD_PEOPLE, loadPeopleList);
}
