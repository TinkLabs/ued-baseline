import React from 'react';

export default function ToolbarButton(props) {
    if (props.multiple) {
        return (
            <div className="demo_showcase  demo_screen_mob">
                <div className="flex">
                    <div className="toolbar-btn">
                        <div className="toolbar-btn-icon-wrapper">
                            <i className="toolbar-btn-icon icon icon-general_account_balance_24px"></i>
                        </div>
                        <p className="toolbar-btn-text">Text</p>
                    </div>
                    <div className="toolbar-btn">
                        <div className="toolbar-btn-icon-wrapper">
                            <i className="toolbar-btn-icon icon icon-general_map_24px"></i>
                        </div>
                        <p className="toolbar-btn-text">Maps</p>
                    </div>
                    <div className="toolbar-btn">
                        <div className="toolbar-btn-icon-wrapper">
                            <i className="toolbar-btn-icon icon icon-international_call"></i>
                        </div>
                        <p className="toolbar-btn-text">Currency Converter</p>
                    </div>
                    <div className="toolbar-btn">
                        <div className="toolbar-btn-icon-wrapper">
                            <i className="toolbar-btn-icon icon icon-notification_wifi_24px"></i>
                        </div>
                        <p className="toolbar-btn-text">Wi-Fi Hotspot</p>
                    </div>
                    <div className="toolbar-btn">
                        <div className="toolbar-btn-icon-wrapper">
                            <i className="toolbar-btn-icon icon icon-vip_concierge"></i>
                        </div>
                        <p className="toolbar-btn-text">VIP Concierge</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="demo_showcase  demo_screen_mob">
                <div className="toolbar-btn">
                    <div className="toolbar-btn-icon-wrapper">
                        <i className="toolbar-btn-icon icon icon-general_account_balance_24px"></i>
                    </div>
                    <p className="toolbar-btn-text">Text</p>
                </div>
            </div>
        )
    }
}
