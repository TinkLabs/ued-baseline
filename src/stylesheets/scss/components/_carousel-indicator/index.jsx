import React from 'react';
import classNames from 'classnames';

export default function CarouselIndicator(props) {
    const indicatorClass = classNames({
        'carousel-indicator': true,
        'indicator-dark': props.darkMode,
    });

    const bgClass = classNames({
        "flex": true,
        "just-center": true,
        "align-center": true,
        "bg-dark": !props.darkMode,
    })

    return (
        <div className={bgClass}>
            <div className={indicatorClass}>
                <a key="1" className="indicator active"></a>
                <a key="2" className="indicator"></a>
                <a key="3" className="indicator"></a>
                <a key="4" className="indicator"></a>
                <a key="5" className="indicator"></a>
            </div>
        </div>
    )
}
