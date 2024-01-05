import apiCall from "./apiCall";

export default async function getCallsRequest() {
    try {
        const r = await apiCall('/activities');
        console.log(r);
        return r;
    } catch (ex) {
        console.log(ex);
    }
}