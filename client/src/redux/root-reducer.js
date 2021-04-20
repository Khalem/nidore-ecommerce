import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import bagReducer from'./bag/bag.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    user: userReducer,
    bag: bagReducer,
    search: searchReducer
});

export default persistReducer(persistConfig, rootReducer);