import React from 'react';
import classNames from 'classnames';

export default function Tab(props) {
    return (
        <div className="tabs">
            {
                props.tabTexts.map((text, index) => (
                    <div
                        className={generateClass(props.active === index + 1)}
                        key={index}
                    >
                        <span className="tab-text"> {text} </span>
                    </div>
                ))
            }
        </div>
    )
}

function generateClass(active) {
    return classNames ({
        'tab': true,
        'active': active
    });
}
