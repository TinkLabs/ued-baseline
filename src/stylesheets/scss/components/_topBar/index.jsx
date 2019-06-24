import React from 'react';

export default function Topbar(props) {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                {
                    props.backBtn && <i className="top-bar-icon icon icon-hardware_keyboard_arrow_left_24px"></i>
                }
            </div>
            <div className="top-bar-body">
                <h3 className="top-bar-title"> {props.title} </h3>
            </div>
            {
                props.actionButtons === "menu" &&

                <div className="top-bar-right">
                    <div className="top-bar-menu">
                        <i className="icon icon-navigation_more_horiz_24px"></i>
                    </div>
                </div>
            }
            {
                props.actionButtons === "more" &&

                <div className="top-bar-right">
                    <div className="top-bar-actions">
                        <i className="icon icon-device_gps_fixed_24px"></i>
                        <i className="icon icon-content_copy_24px"></i>
                    </div>
                    <div className="top-bar-menu">
                        <i className="icon icon-navigation_more_horiz_24px"></i>
                    </div>
                </div>
            }
        </div>
    )
}
