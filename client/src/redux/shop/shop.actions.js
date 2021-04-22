import { ShopActionTypes } from './shop.types';

export const fetchDataStart = () => ({
    type: ShopActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = shopData => ({
    type: ShopActionTypes.FETCH_DATA_SUCCESS,
    payload: shopData
});

export const fetchDataFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_DATA_FAILURE,
    payload: errorMessage
});