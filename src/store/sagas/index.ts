import { spawn, all } from 'redux-saga/effects';
import peopleSaga from './people';
import { personSaga } from './person';

export default function* rootSaga() {
  const sagas = [peopleSaga, personSaga];
  yield all(sagas.map(s => spawn(s)))
}