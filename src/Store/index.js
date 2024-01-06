/**
 * 
 * Creating the store with single reducer just to save time,
 * we can choose to devide root reducers to smallers chunks and combine them after.
 * 
 */

import { createStore } from 'redux';
import { removeFromFirstAndAddToSecond } from '../Helpers';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS';
export const GET_ACTIVITIES_FAILURE = 'GET_ACTIVITIES_FAILURE';

// TODO: not implemented the store updates rest is working
export const RESET_ACTIVITY = 'RESET_ACTIVITY';
export const RESET_ACTIVITY_SUCCESS = 'RESET_ACTIVITY_SUCCESS';
export const RESET_ACTIVITY_FAILURE = 'RESET_ACTIVITY_FAILURE';

export const ARCHIVE_ACTIVITY = 'ARCHIVE_ACTIVITY';
export const ARCHIVE_ACTIVITY_SUCCESS = 'ARCHIVE_ACTIVITY_SUCCESS';
export const ARCHIVE_ACTIVITY_FAILURE = 'ARCHIVE_ACTIVITY_FAILURE';

export const CALL_DETAILS = 'CALL_DETAILS';
export const CALL_DETAILS_SUCCESS = 'CALL_DETAILS_SUCCESS';
export const CALL_DETAILS_FAILURE = 'CALL_DETAILS_FAILURE';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const SHOW_CALL_DETAILS = 'SHOW_CALL_DETAILS';
export const HIDE_CALL_DETAILS = 'HIDE_CALL_DETAILS'

const initialState = {
    activeTab: 0,
    loading: false,
    error: false,
    activeCallDetailsId: null,
    archiving: {},
    activities: {}, // <activity_id, activity>
    groupedActivities: [], // Graph data in format - [{ date: string, items: [[activityId, count], ...] }, ...]
    archivedActivities: [] // Graph data in format - [{ date: string, items: [[activityId, count], ...] }, ...]
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
                groupedActivities: action.payload.groupedActivities,
                archivedActivities: action.payload.archivedActivities
            };
        case GET_ACTIVITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }
        case ARCHIVE_ACTIVITY: {
            const { callId, isArchived } = action.payload;

            return {
                ...state,
                archiving: {
                    ...state.archiving,
                    [callId]: { isArchived, loading: true }
                }
            }
        }

        case ARCHIVE_ACTIVITY_SUCCESS: {
            const { callId, isArchived } = action.payload;

            const copiedArchivedState = {...state.archivedActivities};
            const copiedGroupedActivities = {...state.groupedActivities};

            if (isArchived) {
                removeFromFirstAndAddToSecond(callId, copiedArchivedState, copiedGroupedActivities, isArchived);
            } else {
                removeFromFirstAndAddToSecond(callId, copiedGroupedActivities, copiedArchivedState, isArchived);
            }

            const activities  = {
                ...state.activities,
                [callId]: {
                    ...state.activities[callId],
                    is_archived: isArchived
                }
            }

            const copiedData = {...state.archiving};
            delete copiedData[callId];

            return {
                ...state,
                archiving: copiedData,
                archivedActivities: copiedArchivedState,
                groupedActivities: copiedGroupedActivities,
                activities
            }
        }

        case ARCHIVE_ACTIVITY_FAILURE: {
            const { callId } = action.payload;

            const copiedData = {...state.archiving};
            delete copiedData[callId];

            return {
                ...state,
                archiving: copiedData,
            }
        }

        case SHOW_CALL_DETAILS: {
            return {
                ...state,
                activeCallDetailsId: action.payload 
            }
        }

        case HIDE_CALL_DETAILS: {
            return {
                ...state,
                activeCallDetailsId: null
            }
        }
        default:
            return state;
    }
}


const store = createStore(rootReducer);

export default store;