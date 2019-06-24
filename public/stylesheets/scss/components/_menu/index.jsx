import React from 'react';

export default function Menu(props) {
    return (
        <div className="top-bar menu-anchor">
            <div className="top-bar-left">
                <i className="top-bar-icon icon icon-hardware_keyboard_arrow_left_24px"></i>
            </div>
            <div className="top-bar-body" id="top-bar-dd-btn">
                <h3 className="top-bar-title">Page Title</h3>
                <i className="icon icon-navigation_expand_more_24px"></i>
            </div>
            <div className={`menu ${props.fullWidth && "m-full"} ${props.showMenu && "m-show"}`} id="menu_3">
                <ul className="list">
                    <li className="list-row">
                        <div className="list-content">
                            <span className="list-text">item</span>
                        </div>
                    </li>
                    <li className="list-row">
                        <div className="list-content">
                            <span className="list-text">item</span>
                            <i className="list-meta icon icon-navigation_chevron_right_24px"></i>
                        </div>
                    </li>
                    <li className="list-row">
                        <div className="list-content">
                            <i className="list-thumbnail icon icon-toggle_star_24px"></i>
                            <span className="list-text">item</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
