import React from 'react';
import classnames from 'classnames';

export default function Tag(props) {
    let chipClass = classnames({
        'tag': true,
    });

    return (
        <p class={chipClass}>
            {props.children}
        </p>
    )
}
