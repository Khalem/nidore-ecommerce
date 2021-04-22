import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap, appendItemsToData } from '../../firebase/firebase.utils';

import { fetchDataFailure, fetchDataSuccess } from './shop.actions';

import { ShopActionTypes } from './shop.types';

export function* fetchDataAsync() {
    try {
        const shopRef = firestore.collection('shop');
        const snapshot = yield shopRef.get();
        const partialData = yield call(convertCollectionsSnapshotToMap, snapshot, shopRef);

        const mens = yield shopRef.doc('mens').collection('items').get();
        const womens = yield shopRef.doc('womens').collection('items').get();

        const itemSnapshots = [mens, womens];
        const shopData = yield call(appendItemsToData, partialData, itemSnapshots);

        yield put(fetchDataSuccess(shopData));
    } catch (error) {
        yield put(fetchDataFailure(error));
    }
}

export function* fetchDataStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_DATA_START,
        fetchDataAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchDataStart)
    ]);
}