import { BagActionTypes } from './bag.types';

import { addItemToBag, removeItemFromBag, clearItems } from './bag.utils';

const INITIAL_STATE = {
    bagItems: []
};

const bagReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BagActionTypes.ADD_ITEM_TO_BAG:
            return {
                ...state,
                bagItems: addItemToBag(state.bagItems, action.payload)
            };
        case BagActionTypes.REMOVE_ITEM_FROM_BAG:
            return {
                ...state,
                bagItems: removeItemFromBag(state.bagItems, action.payload)
            };
        case BagActionTypes.CLEAR_ITEMS:
            return {
                ...state,
                bagItems: clearItems(state.bagItems, action.payload)
            };
        case BagActionTypes.CLEAR_ALL_ITEMS_FROM_BAG:
            return {
                ...state,
                bagItems: []
            };
        default:
            return state;
    }
};

export default bagReducer;