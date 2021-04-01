import { BagActionTypes } from './bag.types';;

export const addItemToBag = item => ({
    type: BagActionTypes.ADD_ITEM_TO_BAG,
    payload: item
});