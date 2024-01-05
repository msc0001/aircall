import apiCall from "./apiCall";

export default function getActivityDetailsRequest(callId) {
    return apiCall(
        `/activities/${callId}`
    )
}