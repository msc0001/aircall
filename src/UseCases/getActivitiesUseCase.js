import { formatResponse } from "../Helpers";
import getActivitiesRequest from "../Requests/getActivitiesRequest";
import resetActivitiesRequest from "../Requests/resetActivitiesRequest";
import store from "../Store";
import { 
    getActivities,
    getActivitiesFailure,
    getActivitiesSuccess,
    resetActivity,
    resetActivityFailure,
    resetActivitySuccess
} from "../Store/actions";


export default async function getActivitiesUseCase() {
    try {
        getActivities();
        const response = await getActivitiesRequest();
        const result = formatResponse(response);
        getActivitiesSuccess(result);
    } catch (error) {
        console.log(error);
        getActivitiesFailure(error);
    }
}

export async function resetActivitiesUseCase() {
    try {
        resetActivity();
        await resetActivitiesRequest();
        resetActivitySuccess();
        await getActivitiesUseCase();
    } catch (e) {
        resetActivityFailure();
    }
}