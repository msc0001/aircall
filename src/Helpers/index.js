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