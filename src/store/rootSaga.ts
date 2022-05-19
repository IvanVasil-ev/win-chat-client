import { all } from 'redux-saga/effects';

import { applicationSaga } from './application';

export function* rootSaga() {
  yield all([
    applicationSaga(),
  ]);
}
