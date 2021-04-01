import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import bagReducer from'./bag/bag.reducer';

export default combineReducers({
    user: userReducer,
    bag: bagReducer
});