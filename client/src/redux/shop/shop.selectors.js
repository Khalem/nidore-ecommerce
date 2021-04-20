import { createSelector } from 'reselect';

import { appendCategory } from './shop.utils';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.data
);

export const selectAllItems = createSelector(
    [selectShopData],
    data => [...appendCategory(data[0].items, 'mens'), ...appendCategory(data[1].items, 'womens')]
);