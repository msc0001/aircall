import apiCall from "./apiCall";

export default async function getActivitiesRequest() {
    return apiCall('/activities');
}