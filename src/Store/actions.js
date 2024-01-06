import store, {
    ARCHIVE_ACTIVITY,
    ARCHIVE_ACTIVITY_FAILURE,
    ARCHIVE_ACTIVITY_SUCCESS,
    CALL_DETAILS_FAILURE,
    CALL_DETAILS_SUCCESS,
    GET_ACTIVITIES,
    GET_ACTIVITIES_FAILURE,
    GET_ACTIVITIES_SUCCESS,
    HIDE_CALL_DETAILS,
    RESET_ACTIVITY,
    RESET_ACTIVITY_FAILURE,
    RESET_ACTIVITY_SUCCESS,
    SET_ACTIVE_TAB,
    SHOW_CALL_DETAILS
} from ".";

const dispatch = (action) => store.dispatch(action);

// GET STATE
export const getActivities = () => dispatch({
    type: GET_ACTIVITIES
});

export const getActivitiesSuccess = (payload) => dispatch({
    type: GET_ACTIVITIES_SUCCESS,
    payload
});

export const getActivitiesFailure = (payload) => dispatch({
    type: GET_ACTIVITIES_FAILURE,
    payload
});

// RESET
export const resetActivity = () => dispatch({
    type: RESET_ACTIVITY
})

export const resetActivitySuccess = () => dispatch({
    type: RESET_ACTIVITY_SUCCESS,
})

export const resetActivityFailure = () => dispatch({
    type: RESET_ACTIVITY_FAILURE
})

// ARCHIVE
export const archiveActivity = (payload) => dispatch({
    type: ARCHIVE_ACTIVITY,
    payload
})

export const archiveActivitySuccess = (payload) => dispatch({
    type: ARCHIVE_ACTIVITY_SUCCESS,
    payload
})

export const archiveActivityFailure = (payload) => dispatch({
    type: ARCHIVE_ACTIVITY_FAILURE,
    payload
})

// CALL DETAIL
export const getCallDetail = payload => dispatch({
    type: CALL_DETAILS,
    payload
})

export const getCallDetailSuccess = payload => dispatch({
    type: CALL_DETAILS_SUCCESS,
    payload
})

export const getCallDetailFailure = payload => dispatch({
    type: CALL_DETAILS_FAILURE,
    payload
})

export const setActiveTab = (tabId) => dispatch({
    type: SET_ACTIVE_TAB,
    payload: tabId
})

export const showCallDetails = (callId) => dispatch({
    type: SHOW_CALL_DETAILS,
    payload: callId
})

export const hideCallDetails = () => dispatch({
    type: HIDE_CALL_DETAILS,
})
