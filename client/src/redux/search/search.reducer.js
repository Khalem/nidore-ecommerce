import { SearchActionTypes } from './search.types';

const INITIAL_STATE = {
    hidden: true
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SearchActionTypes.SHOW_SEARCH:
            return {
                ...state,
                hidden: true
            };
        case SearchActionTypes.HIDE_SEARCH:
            return {
                ...state,
                hidden: false
            };
        default:
            return state;
    }
};

export default searchReducer;