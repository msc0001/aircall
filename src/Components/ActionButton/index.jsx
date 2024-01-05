import React from 'react'
import Button from '../../Common/Components/Button'
import './styles.css';

export default function ActionButton (props) {
    return (
        <Button 
            {...props}
            className={`action-btn border light-bg block padding-1 ${props.className || ''}`}
        />
    );
}