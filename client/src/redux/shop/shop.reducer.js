import SHOP_DATA from '../../data/shopData';

const INITIAL_STATE = {
    data: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;