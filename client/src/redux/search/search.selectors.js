import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchStatus = createSelector(
    [selectSearch],
    search => search.hidden
);