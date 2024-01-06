import archiveActivityRequest from "../Requests/archiveActivityRequest";
import store from "../Store";
import { archiveActivity, archiveActivityFailure, archiveActivitySuccess, hideCallDetails } from "../Store/actions";
import getActivitiesUseCase from "./getActivitiesUseCase";

export async function archiveActivityUseCase(callId, isArchived) {
    try {
        console.log(callId);
        archiveActivity();
        await archiveActivityRequest(callId, { is_archived: isArchived });
        archiveActivitySuccess({
            callId,
            isArchived
        });
        hideCallDetails();
    } catch (error) {
        archiveActivityFailure({ callId, isArchived });
    }
}



export async function archiveAllActivitiesUseCase(currentStatus) { // <currentStatus: isArchived>
    try {
        const { archivedActivities, groupedActivities } = store.getState();
        let ids = [];

        if (currentStatus) {
            archivedActivities.forEach(ga => {
                ids = [...ids, ...ga];
            });
        } else {
            groupedActivities.forEach(ga => {
                ids = [...ids, ...ga];
            });
        }
        const size = 10;
        for (let batch=0; batch < Math.ceil(ids.length / size); batch++) {
            const batchedIds = ids.slice(size * batch, (batch + 1) * size);
            await Promise.all(batchedIds.map(callId => archiveActivityUseCase(callId, !currentStatus)));
        }

        // this can be improved using a single patch api with multiple ids

        await getActivitiesUseCase();

    } catch (error) {
       // do nothing
    }
}