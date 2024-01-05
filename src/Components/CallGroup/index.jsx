
import React from 'react'
import Call from '../Call'
import './styles.css';

function CallGroup({
    data
}) {
    return (
        <div className='call-group'>
            <span className='call-group-caption light-text'>
                {`${data.meta.month} ${data.meta.date}, ${data.meta.year}`}
            </span>
            {data.map(activityId => (
                <Call key={activityId} id={activityId} />
            ))}
        </div>
    );
}

export default CallGroup;