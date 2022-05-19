import {
  call, delay, put, takeLatest,
} from 'redux-saga/effects';

import {
  setIsLoading, setError, setIsAvailable,
} from './application';
import {
  API_LOGIN, API_REGISTRATE, API_GET_IS_AVAILABLE, API_FORGOT_PASSWORD, API_RESET_PASSWORD,
} from './actions';
import { redirectTo } from '../../utilities';
import { UNKNOWN_ERROR } from '../../configuration';

function* getIsAvailable() {
  try {
    yield put(setIsLoading(true));
    const isAvailable = true;

    yield delay(1000);

    yield put(setIsAvailable(isAvailable));
    yield put(setIsLoading(false));
  } catch (error: Error | unknown) {
    yield put(setIsLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
      return;
    }
    yield put(setError(UNKNOWN_ERROR));
  }
}

function* apiRegistration() {
  try {
    yield put(setIsLoading(true));

    yield call(redirectTo, '/');
    yield put(setIsLoading(false));
  } catch (error: Error | unknown) {
    yield put(setIsLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
      return;
    }
    yield put(setError(UNKNOWN_ERROR));
  }
}

function* apiLogin() {
  try {
    yield put(setIsLoading(true));
    const data = {
      id: '0',
      email: 'joe@doe.com',
      username: 'Ivan Vasilev',
    };

    localStorage.setItem('token', JSON.stringify(data));
    yield put(setIsLoading(false));
  } catch (error: Error | unknown) {
    yield put(setIsLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
      return;
    }
    yield put(setError(UNKNOWN_ERROR));
  }
}

function* apiForgotPassword() {
  try {
    yield put(setIsLoading(true));

    yield put(setIsLoading(false));
  } catch (error: Error | unknown) {
    yield put(setIsLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
      return;
    }
    yield put(setError(UNKNOWN_ERROR));
  }
}

function* apiResetPassword() {
  try {
    yield put(setIsLoading(true));

    yield call(redirectTo, '/', true);
    yield put(setIsLoading(false));
  } catch (error: Error | unknown) {
    yield put(setIsLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
      return;
    }
    yield put(setError(UNKNOWN_ERROR));
  }
}

export function* applicationSaga() {
  yield takeLatest(API_GET_IS_AVAILABLE, getIsAvailable);
  yield takeLatest(API_FORGOT_PASSWORD, apiForgotPassword);
  yield takeLatest(API_RESET_PASSWORD, apiResetPassword);
  yield takeLatest(API_REGISTRATE, apiRegistration);
  yield takeLatest(API_LOGIN, apiLogin);
}
