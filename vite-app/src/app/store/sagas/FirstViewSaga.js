import { takeLatest, call, put } from 'redux-saga/effects';
import { getgroupsAPI } from '../../api/modules/FirstView';
import {
  fetchgroupsSuccess,
  fetchgroupsFail,
} from '../slices/FirstViewSlice';

function* fetchGroupsSaga(payload) {
  try {
    const response = yield call(getgroupsAPI, payload);
    
    localStorage.setItem('mydataInLocal', JSON.stringify(response.data.data));
    sessionStorage.setItem('mydataInSession', JSON.stringify(response.data.data));
    yield put(fetchgroupsSuccess(response.data.data));
  } catch (error) {
    yield put(fetchgroupsFail(error));
  }
}


function* groupsSaga() {
  yield takeLatest('firstView/fetchgroups', fetchGroupsSaga);
}

export default groupsSaga;
