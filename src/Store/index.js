/**
 * 
 * Creating the store with single reducer just to save time,
 * we can choose to devide root reducers to smallers chunks and combine them after.
 * 
 */

import { createStore } from 'redux';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS';
export const GET_ACTIVITIES_FAILURE = 'GET_ACTIVITIES_FAILURE';

export const RESET_ACTIVITY = 'RESET_ACTIVITY';
export const RESET_ACTIVITY_SUCCESS = 'RESET_ACTIVITY_SUCCESS';
export const RESET_ACTIVITY_FAILURE = 'RESET_ACTIVITY_FAILURE';

export const ARCHIVE_ACTIVITY = 'ARCHIVE_ACTIVITY';
export const ARCHIVE_ACTIVITY_SUCCESS = 'ARCHIVE_ACTIVITY_SUCCESS';
export const ARCHIVE_ACTIVITY_FAILURE = 'ARCHIVE_ACTIVITY_FAILURE';

export const CALL_DETAILS = 'CALL_DETAILS';
export const CALL_DETAILS_SUCCESS = 'CALL_DETAILS_SUCCESS';
export const CALL_DETAILS_FAILURE = 'CALL_DETAILS_FAILURE';

const initialState = {
    loading: false,
    error: false,
    activities: {}, // <activity_id, activity>
    groupedActivities: [] // [{ date: string, items: [[activityId, count], ...] }, ...]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                activities: action.payload.activities,
                groupedActivities: action.payload.groupedActivities
            };
        case GET_ACTIVITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}


const store = createStore(rootReducer);

export default store;