import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.data
);

export const selectAllItems = createSelector(
    [selectShopData],
    data => data ? [...data[0].items, ...data[1].items] : []
);

export const selectCategory = memoize(category => 
    createSelector(
        [selectShopData],
        data => data ? data.filter(item => item.id === category) : []
    )
);

export const selectIsDataLoaded = createSelector(
    [selectShop],
    shop => shop.isLoaded
);

export const selectItem = memoize(id => 
    createSelector(
        [selectAllItems],
        items => items ? items.filter(item => item.id === id) : []
    )
);