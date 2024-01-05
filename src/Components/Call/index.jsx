import React from 'react';
import ActionButton from '../ActionButton';
import './styles.css';
import IncomingCall from '../../Common/Icons/IncomingCall';

function Call() {
    return (
        <ActionButton className="call-flex-box">
            <div className='call-icon'>
                <IncomingCall />
            </div>
            <div className='call-content'>
                <h3 className='call-name dark-text bold'>
                    <span className='call-title'>Name</span>
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