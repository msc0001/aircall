import archiveActivityRequest from "../Requests/archiveActivityRequest";
import store from "../Store";
import { archiveActivity, archiveActivityFailure, archiveActivitySuccess } from "../Store/actions";
import getActivitiesUseCase from "./getActivitiesUseCase";

export async function archiveActivityUseCase(callId, isArchived) {
    try {
        archiveActivity();
        await archiveActivityRequest(callId, { is_archived: isArchived });
        archiveActivitySuccess({
            callId,
            isArchived
        });
    } catch (error) {
        archiveActivityFailure(callId);
    }
}



export async function archiveAllActivitiesUseCase(currentStatus) { // <currentStatus: isArchived>
    try {
        const { archivedActivities, groupedActivities } = store.getState();
        let ids = [];

        if (currentStatus) {
            ids = archivedActivities;
        } else {
            groupedActivities.forEach(ga => {
                ids = [...ids, ...ga];
            });
        }

        for (let batch=0; batch < ids.length / 10; batch ++) {
            await Promise.all(ids.slice(batch, batch + 10).map(callId => archiveActivityUseCase(callId, !currentStatus)));
        }

        // this can be improved using a single patch api with multiple ids

        await getActivitiesUseCase();

    } catch (error) {
       // do nothing
    }
}