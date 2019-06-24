import React from 'react';
import classNames from 'classnames';

export default function Chip(props) {
    let chipClass = classNames({
        'chip': true,
        'chip-focused': props.state === "Active",
        'chip-pressed': props.state === "Pressed",
        'chip-disabled': props.disable,
    });

    return (
        <p className={chipClass}>
            {props.children}
        </p>
    )
}
