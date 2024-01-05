import apiCall from "./apiCall";

export default function archiveActivityRequest(callId, updates) {
    return apiCall(
        `/activities/${callId}`,
        'PATCH',
        { body: updates } // { is_archived: bool }
    )
}