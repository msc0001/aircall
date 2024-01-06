import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import ActionButton from '../ActionButton';
import './styles.css';
import IncomingCall from '../../Common/Components/Icons/IncomingCall';
import MissedCallIcon from '../../Common/Components/Icons/MissedCallIcon';
import OutgoingCallIcon from '../../Common/Components/Icons/OutgoingCallIcon';
import DialedCallIcon from '../../Common/Components/Icons/DialedCallIcon';
import { showCallDetails } from '../../Store/actions';

const CALL_TYPES  = {
    MISSED: 'missed',
    ANSWERED: 'answered',
    VOICE_MAIL: 'voicemail',
}

function CallIcon({ type }) {
    switch (type) {
        case CALL_TYPES.MISSED:
            return <MissedCallIcon />
        case CALL_TYPES.ANSWERED:
            return <IncomingCall />
        case CALL_TYPES.VOICE_MAIL:
            return <DialedCallIcon />
        default:
            return <OutgoingCallIcon />;
    }
}

const formatTime = ({ hh, mm }) => `${hh<10 ? '0' : ''}${hh}:${mm<10 ? '0' : ''}${mm}`;

function Call({ id, disabled }) {
    const { call_type: type, formattedDate, to, from, counts, is_archived: isArchived } = useSelector(state => (state.activities[id]));

    const openDetails = useCallback(() => {
        showCallDetails(id);
    }, [id]);

    return (
        <ActionButton className="call-flex-box" onClick={openDetails} disabled={disabled}>
            <div className='call-icon'>
                <CallIcon type={type} />
            </div>
            <div className='call-content'>
                <h3 className='call-name dark-text bold'>
                    <span className='call-title'>{from}</span>
                    {counts > 1 ? <span className='call-counts'>{counts}</span> : null}
                </h3>
                <h5 className='call-desc light-text'>{`tried to call on ${to}`}</h5>
            </div>
            <div className='call-time'>
                <span className='call-time-value'>{formatTime(formattedDate)}</span>
                <span className='call-format'>{formattedDate.t}</span>
            </div>
        </ActionButton>
    )
}

export default Call;