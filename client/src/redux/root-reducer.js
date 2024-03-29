import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import bagReducer from'./bag/bag.reducer';
import searchReducer from './search/search.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['bag']
};

const rootReducer = combineReducers({
    user: userReducer,
    bag: bagReducer,
    search: searchReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);