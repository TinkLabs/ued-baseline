import React from 'react';
import className from 'classnames';

export default function Ellipsis(props) {
    const displayClass = className({
        'wrap-ellipsis': true,
        'subtitle1': props.typography === 'subtitle1',
        'subtitle2': props.typography === 'subtitle2',
        'body1': props.typography === 'body1',
        'body2': props.typography === 'body2',
        'caption': props.typography === 'caption',
    });

    return (
        <div
            className={displayClass}
            style={{
                width: '200px'
            }}
        >
            {props.displayText}
        </div>
    )
}
