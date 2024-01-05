/**
 * 
 * Creating the store with single reducer just to save time,
 * we can choose to devide root reducers to smallers chunks and combine them after.
 * 
 */

import { createStore } from 'redux';

const initialState = {
    loading: false,
    error: false,
    calls: {},
       
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state;
    
        default:
            return state;
    }
}


const store = createStore(rootReducer);