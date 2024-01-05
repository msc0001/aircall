import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getActivitiesUseCase from '../../UseCases/getActivitiesUseCase';
import PageContainer from '../../Components/PageContainer/index.jsx';

function Inbox() {
    const groupedActivities = useSelector(state => (state.groupedActivities));

    useEffect(() => {
        getActivitiesUseCase();
    }, []);

    return <PageContainer groupedData={groupedActivities} isArchived={false} />
}

export default Inbox;