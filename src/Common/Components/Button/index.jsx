import React from 'react'
import './styles.css';

export default function Button({
    children,
    onClick,
    className,
    disabled
}) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}