import React from 'react';

export default function Backdrop(props) {
    return (
        <div className="backdrop">
            <div className="bd-back bg-white">
                {"Back"}
            </div>
            <div className={`bd-front bg-navy-200 ${props.collapse && "collapse"}`}>
                {"Front"}
            </div>
        </div>
    )
}
