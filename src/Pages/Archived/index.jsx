import React from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../../Components/PageContainer/index.jsx';

function Archived() {
    const archivedActivities = useSelector(state => (state.archivedActivities));

    return <PageContainer groupedData={archivedActivities} isArchived={true} />
}

export default Archived;