import { BagActionTypes } from './bag.types';

import { addItemToBag, removeItemFromBag } from './bag.utils';

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
        default:
            return state;
    }
};

export default bagReducer;