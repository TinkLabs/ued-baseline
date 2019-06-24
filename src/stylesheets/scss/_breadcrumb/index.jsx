import React from 'react';

export default function Breadcrumb(props) {
    return (
        <a href="#" className={`breadcrumb ${props.active && "active"}`}>
            {props.children}
        </a>
    )
}
