import { SearchActionTypes } from './search.reducer';

export const hideSearch = () => ({
    type: SearchActionTypes.HIDE_SEARCH
});

export const showSearch = () => ({
    type: SearchActionTypes.SHOW_SEARCH
});