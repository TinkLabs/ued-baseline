import React from 'react';

export default function ProgressBar(props) {
    return (
        <div className="progress-bar">
            <div className="pb-container">
                {
                    props.infinite
                    ? <div className="pb-bar pb-infinite"></div>
                    : <div className="pb-bar" style={{width: `${props.percent}%`}}></div>
                }
            </div>
        </div>
    )
}
