import React from 'react';
import classNames from 'classnames';

export default function Tag(props) {
    let chipClass = classNames({
        'tag': true,
    });

    return (
        <p className={chipClass}>
            {props.children}
        </p>
    )
}
