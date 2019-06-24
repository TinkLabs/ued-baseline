import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
    let compClass = classNames(processBtnClass(props));

    return (
        <a className={compClass}>
            {props.children}
        </a>
    )
}

const processBtnClass = (props) => {
    if (props.type === 'round') {
        return {
            'btn': true,
            'btn-round': true,
            'btn-disabled': props.disable,
            // 'btn-large': props.large,
            'btn-float': props.elevation,
            // 'btn-shadow': props.shadow,
        }
    } else if (props.type === 'square') {
        return {
            'btn': true,
            'btn-square': true,
            'btn-disabled': props.disable,
            // 'btn-large': props.large,
            'btn-float': props.elevation,
        }
    } else {
        return {
            'btn': true,
            'btn-m': props.medium,
            'btn-disabled': props.disable,
            'btn-navy': props.color === "Navy",
            'btn-outlined': props.style === 'Outlined',
            'btn-contained': props.style === 'Contained',
        }
    }
};
