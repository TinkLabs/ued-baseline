import React from 'react';

export default function Alert(props) {
    return (
        <div className={`alert-chip ${props.error && "error"}`}>
            {props.children}
        </div>
    )
}
