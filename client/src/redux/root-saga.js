import { all, call } from 'redux-saga/effects';

import { fetchDataStart } from './shop/shop.sagas';
import { shopSagas } from './shop/shop.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchDataStart),
        call(shopSagas)
    ]);
}