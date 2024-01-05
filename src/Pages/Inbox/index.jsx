import React from 'react'
import CallGroup from '../../Components/CallGroup';
import ActionButton from '../../Components/ActionButton';
import './styles.css';
import ArchiveIcon from '../../Common/Icons/Archive';

function Inbox() {
    return (
        <section className='inbox-container'>
            <ActionButton className="archive-btn">
                <ArchiveIcon />
                <span className='archive-btn-text'>Archive all calls</span>
            </ActionButton>
            <CallGroup />
            <CallGroup />
            <CallGroup />
        </section>
    )
}

export default Inbox;