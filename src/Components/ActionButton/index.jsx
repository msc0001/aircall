import React from 'react'
import Button from '../../Common/Button'
import './styles.css';

export default function ActionButton (props) {
    return (
        <Button 
            {...props}
            className={`action-btn border light-bg block padding-1 ${props.className || ''}`}
        />
    );
}