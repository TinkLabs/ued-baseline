import React from 'react';
import classNames from 'classnames';

export default function Tab(props) {
    const tabContainerClass = classNames({
        'tabs': true,
        'fixed-width': props.equalWidth,
    })
    return (
        <div className={tabContainerClass} style={{width: '360px'}}>
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
