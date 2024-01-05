import React, { Component, useEffect } from 'react'
import './styles.css';
import CallGroup from '../../Components/CallGroup';
import ActionButton from '../../Components/ActionButton';
import ArchiveIcon from '../../Common/Components/Icons/Archive';
import getCallsRequest from '../../Requests/getCalls';

function Inbox() {
    useEffect(() => {
        getCallsRequest();
    }, [])
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
    );
}

export default Inbox;