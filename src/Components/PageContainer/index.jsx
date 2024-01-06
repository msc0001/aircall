import React, { useCallback } from 'react'
import './styles.css';
import { useSelector } from 'react-redux';
import CallGroup from '../../Components/CallGroup';
import ActionButton from '../../Components/ActionButton';
import ArchiveIcon from '../../Common/Components/Icons/Archive';
import Message from '../../Components/Message';
import { archiveAllActivitiesUseCase } from '../../UseCases/archiveActivityUseCase';
import Skeleton from '../../Common/Components/Skelton';

const styles = {
    height: '40px',
    marginTop: '16px'
}

export default function PageContainer({ groupedData, isArchived }) {
    const { loading, error } = useSelector(state => ({
        loading: state.loading,
        error: state.error
    }));
    
    const archiveAllCalls = useCallback(
        () => archiveAllActivitiesUseCase(isArchived), [isArchived]
    );

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
                <span className='archive-btn-text'>{isArchived ? 'Unarchive' : 'Archive'} all calls</span>
            </ActionButton>
            {groupedData?.map(groupedActivity => (
                <CallGroup key={groupedActivity.meta.key} data={groupedActivity} />
            ))}
        </>
    }

    return (<section className='page-container'>{renderContent()}</section>);
}