import React from 'react';
import ActionButton from '../ActionButton';
import './styles.css';
import IncomingCall from '../../Common/Components/Icons/IncomingCall';
import MissedCallIcon from '../../Common/Components/Icons/MissedCallIcon';
import OutgoingCallIcon from '../../Common/Components/Icons/OutgoingCallIcon';
import DialedCallIcon from '../../Common/Components/Icons/DialedCallIcon';

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

function Call({ type = 'missed' }) {
    return (
        <ActionButton className="call-flex-box">
            <div className='call-icon'>
                <CallIcon type={type} />
            </div>
            <div className='call-content'>
                <h3 className='call-name dark-text bold'>
                    <span className='call-title'>Name Name Name Name Name Name Name Name Name </span>
                    <span className='call-counts'>8</span>
                </h3>
                <h5 className='call-desc light-text'>tried to call in xaviortried to call in xaviortried to call in xaviortried to call in xaviortried to call in xaviortried to call in xaviortried to call in xavior</h5>
            </div>
            <div className='call-time'>
                <span className='call-time-value'>12:30</span>
                <span className='call-format'>PM</span>
            </div>
        </ActionButton>
    )
}

export default Call;