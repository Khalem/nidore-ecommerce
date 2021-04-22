import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    data: null,
    isLoaded: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_DATA_START:
            return {
                ...state,
                isLoaded: false
            };
        case ShopActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                data: action.payload
            };
        case ShopActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoaded: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;