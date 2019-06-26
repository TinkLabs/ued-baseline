import React from 'react';

export default function BottomNavigation(props) {
    return (
        <div className="demo_showcase demo_screen_mob">
            <div className="bottom-nav bottom-nav-gold">
                <a className="bottom-nav-btn bottom-nav-btn-active">
                    <i className="bottom-nav-icon icon icon-general_home_24px"></i>
                    <p className="bottom-nav-text">caption</p>
                </a>
                <a className="bottom-nav-btn">
                    <i className="bottom-nav-icon icon icon-general_home_24px"></i>
                    <p className="bottom-nav-text">caption</p>
                </a>
                <a className="bottom-nav-btn">
                    <i className="bottom-nav-icon icon icon-general_home_24px"></i>
                    <p className="bottom-nav-text">caption</p>
                </a>
                <a className="bottom-nav-btn">
                    <i className="bottom-nav-icon icon icon-general_home_24px"></i>
                    <p className="bottom-nav-text">caption</p>
                </a>
                <a className="bottom-nav-btn bottom-nav-btn-disabled">
                    <i className="bottom-nav-icon icon icon-general_home_24px"></i>
                    <p className="bottom-nav-text">long long caption</p>
                </a>
            </div>
        </div>
    )
}
