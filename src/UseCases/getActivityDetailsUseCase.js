import getActivityDetailsRequest from "../Requests/getActivityDetailsRequest";
import { getCallDetail, getCallDetailFailure, getCallDetailSuccess } from "../Store/actions";

export default async function getActivityDetailsUseCase(callId) {
    try {
        getCallDetail(callId);
        const callDetail = await getActivityDetailsRequest();
        getCallDetailSuccess({
            callId,
            callDetail
        });
        return callDetail;
    } catch (error) {
        getCallDetailFailure(callId);
    }
}