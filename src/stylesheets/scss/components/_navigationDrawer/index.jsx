import React from 'react';
import classNames from 'classnames';

export default function NavigationDrawer(props) {
    const drawerClass = classNames({
        'nav-drawer': true,
        'nav-drawer-show': props.show,
    });

    const drawerPos = classNames({
        'nav-drawer-left': props.position === "left",
        'nav-drawer-bottom': props.position === "bottom",
    })

    return (
        <div className={drawerClass} id="bottom-nav-drawer">
            <div className={drawerPos}>
                <div className="nav-drawer-mainTitle"> Title <i
                    className="nav-drawer-close icon icon-navigation_close_24px"></i>
                </div>
                <div className="nav-drawer-row active">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
                <div className="nav-drawer-row">
                    <span className="nav-drawer-title">Item</span>
                    <i className="nav-drawer-icon-right icon icon-general_favorite_24px"></i>
                </div>
            </div>
        </div>
    )
}
