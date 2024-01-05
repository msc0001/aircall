import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import CallGroup from '../../Components/CallGroup';
import ActionButton from '../../Components/ActionButton';
import ArchiveIcon from '../../Common/Components/Icons/Archive';
import getActivitiesUseCase from '../../UseCases/getActivitiesUseCase';
import Message from '../../Components/Message';
import { archiveAllActivitiesUseCase } from '../../UseCases/archiveActivityUseCase';
import Skeleton from '../../Common/Components/Skelton';

const styles = {
    height: '40px',
    marginTop: '16px'
}

function Inbox() {
    const { groupedActivities, loading, error } = useSelector(state => ({
        groupedActivities: state.groupedActivities,
        loading: state.loading,
        error: state.error
    }));

    useEffect(() => {
        getActivitiesUseCase();
    }, []);

    const archiveAllCalls = useCallback(() => archiveAllActivitiesUseCase(false));

    const renderContent = () => {
        if (loading) {
            return <>
                <div className='loader-wrapper'>
                    <Skeleton style={styles} />
                </div>
                <Skeleton height={'6px'} />
                <div className='loader-wrapper'>
                    <Skeleton style={styles} />
                    <Skeleton style={styles} />
                </div>
                <Skeleton height={'6px'} />
                <div className='loader-wrapper'>
                    <Skeleton style={styles} />
                    <Skeleton style={styles} />
                    <Skeleton style={styles} />
                </div>
            </>
        }
        
        if (error) {
            return <Message text='something went wrong' />;
        }

        return <>
            <ActionButton className="archive-btn" onClick={archiveAllCalls}>
                <ArchiveIcon />
                <span className='archive-btn-text'>Archive all calls</span>
            </ActionButton>
            {groupedActivities?.map(groupedActivity => (
                <CallGroup key={groupedActivity.meta.key} data={groupedActivity} />
            ))}
        </>
    }

    return (<section className='inbox-container'>{renderContent()}</section>);
}

export default Inbox;