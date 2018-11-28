import { createStore, combineReducers } from 'redux';

const PayLoadReducer = function(state = {}, action) {
    return state;
};

export const reducer = combineReducers({
    payload: PayLoadReducer
});