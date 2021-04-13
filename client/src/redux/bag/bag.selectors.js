import { createSelector } from 'reselect';

const selectBag = state => state.bag;

export const selectBagItems = createSelector(
    [selectBag],
    bag => bag.bagItems
);

export const selectBagItemsCount = createSelector(
    [selectBagItems],
    bagItems => bagItems.reduce(
        (accumalatedQuantity, bagItem) => accumalatedQuantity + bagItem.quantity, 0
    )
);

export const selectBagItemsTotal = createSelector(
    [selectBagItems],
    bagItems => bagItems.reduce(
        (accumalatedQuantity, bagItem) => accumalatedQuantity + bagItem.quantity * bagItem.price, 0
    ).toFixed(2)
);