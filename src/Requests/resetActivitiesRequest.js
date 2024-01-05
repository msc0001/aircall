import apiCall from "./apiCall";

export default async function resetActivitiesRequest() {
   return apiCall('/reset');
}