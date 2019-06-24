import React from 'react';
import classNames from 'classnames';

export default function Tooltip(props) {
    if (props.type === "centered") {
        const tooltipClass = classNames({
            'tooltip': true,
            'tp-activity': true,
            "tp-show": props.show,
        });

        return (
            <div className={tooltipClass}>
                <i className="icon icon-av_mic_24px"></i>
                <span className="tp-text"> This is the tooltip </span>
            </div>
        )
    } else {
        const tooltipClass = classNames({
            'tooltip': true,
            'tp-left': props.horizontalPosition === 'left',
            'tp-center': props.horizontalPosition === 'center',
            'tp-right': props.horizontalPosition === 'right',
            'tp-bottom': props.verticalPosition === 'bottom',
        });

        const style = {};
        if (props.horizontalPosition === 'left') style['justify-content'] = 'flex-start';
        if (props.horizontalPosition === 'right') style['justify-content'] = 'flex-end';

        return (
            <span
                className={tooltipClass}
                data-tip={props.tip}
                style={style}
            >
                Hover to see tooltip
            </span>
        )
    }

}
