import resetActivitiesRequest from "../Requests/resetActivitiesRequest";
import { resetActivity, resetActivityFailure, resetActivitySuccess } from "../Store/actions";
import getActivitiesUseCase from "./getActivitiesUseCase";

export default async function resetActivityUseCase() {
    try {
        resetActivity();
        await resetActivitiesRequest();
        resetActivitySuccess();
        await getActivitiesUseCase();
    } catch (error) {
        resetActivityFailure();
    }
}