const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (dateString) => {
    const d = new Date(dateString);
    const year = d.getFullYear();
    
    const m = d.getMonth();
    const month = months[m];
    
    const date = d.getDate();

    const hh = d.getHours();
    const h = hh > 12 ? hh - 12 : hh;
    const t = hh >= 12 ? 'PM' : 'AM';

    const mm = d.getMinutes();

    return { year, month, m, date, h, hh, t, mm };
}

export const formatGroupedData = (groupedActivities) => Object.keys(groupedActivities)
.sort((a, b) => {
    const aData = groupedActivities[a].meta;
    const bData = groupedActivities[b].meta;

    if (aData.year < bData.year) {
        return 1;
    }
    if (aData.m < bData.m) {
        return 1;
    }
    if (aData.date < bData.date) {
        return 1;
    }
    return -1;
})
.map(key => groupedActivities[key])

export const formatResponse = (activities) => {
    const activitiesDict = {};
    const archivedActivities = {};
    const groupedActivities = {};

    activities.forEach(activity => {
      const { created_at: createdAt, id, is_archived: isArchived, to, from } = activity;
    
      const formattedDate = formatDate(createdAt);
      
      const { year, date, m, month } = formattedDate;
      
      const updatedActivity = {
        ...activity,
        formattedDate
      }

      activitiesDict[id] = updatedActivity;

      const key = `${year}-${m}-${date}`;

      let result =  groupedActivities;

      if (isArchived) {
        result = archivedActivities
      }

      if (from !== undefined) {
        if (!result[key]) {
            result[key] = [];
            // this will be used to sort the groups in an lastest first order
            result[key].meta = { year, m, month, date, key };
        }
        
        result[key].push(id);
    }
    });

    return {
        activities: activitiesDict,
        groupedActivities: formatGroupedData(groupedActivities),
        archivedActivities: formatGroupedData(archivedActivities)
    }
}

export const removeFromFirstAndAddToSecond = (
    callId,
    activityList1,
    activityList2,
    activities
) => {
    
    const group1 = Object.keys(activityList1);
    const activity = activities[callId];

    for (let i=0; i<group1.length; i++) {
        const callIds = activityList1[group1[i]];
        for (let j=0; j<callIds.length; j++) {
            if (callIds[j] == callId) {
                activityList1[group1[i]] = callIds.filter(id => id != callId);
                break;
            }
        }
    }

    const { year, month, m, date } = activity.formattedDate;

    const key = `${year}-${m}-${date}`;

    if (!activityList2[key]) {
        activityList2[key] = [];
        activityList2[key].meta = { year, m, month, date, key }
    }

    activityList2[key].push(callId);

    activityList2[key].sort((id1, id2) => 
        new Date(activities[id1].created_at) > new Date(activities[id2].created_at) ? -1 : 1
    );
}