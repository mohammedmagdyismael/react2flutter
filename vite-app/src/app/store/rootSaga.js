import { fork } from 'redux-saga/effects';
import firstViewSaga from './sagas/FirstViewSaga';

function* rootSaga() {
  yield fork(firstViewSaga);
}

export default rootSaga;
