import { BagActionTypes } from './bag.types';;

export const addItemToBag = item => ({
    type: BagActionTypes.ADD_ITEM_TO_BAG,
    payload: item
});

export const removeItemFromBag = item => ({
    type: BagActionTypes.REMOVE_ITEM_FROM_BAG,
    payload: item
});