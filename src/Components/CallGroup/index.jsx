
import React from 'react'
import Call from '../Call'
import './styles.css';

function CallGroup() {
    return (
        <div className='call-group'>
            <span className='call-group-caption light-text'>
                {'Jan 4, 2024'}
            </span>
            <Call />
            <Call />
            <Call />
        </div>
    );
}

export default CallGroup;