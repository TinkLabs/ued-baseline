import React from 'react';
import classnames from 'classnames';

export default function Chip(props) {
    let chipClass = classnames({
        'chip': true,
        'chip-focused': props.state === "Active",
        'chip-pressed': props.state === "Pressed",
        'chip-disabled': props.disable,
    });

    return (
        <p class={chipClass}>
            {props.children}
        </p>
    )
}
