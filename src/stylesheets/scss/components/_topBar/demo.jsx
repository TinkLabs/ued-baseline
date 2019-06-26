import React from 'react';
import avatar from './avatar.png';

export default function TopbarDemo(props) {
    if (props.demo === "chat") {
        return (
            <div className="top-bar top-bar-chat">
                <div className="top-bar-left">
                    <div className="top-bar-icon">
                        <i className="icon icon-hardware_keyboard_arrow_left_24px"></i>
                    </div>
                </div>
                <div className="top-bar-body">
                    <div className="chat-info-strip">
                        <img className="avatar" src={avatar} alt="avatar" />
                        <div className="chat-info">
                            <p className="chat-name">Name</p>
                            <p className="chat-number">+123 123 456 789</p>
                        </div>
                    </div>
                </div>
                <div className="top-bar-right">
                    <div className="top-bar-actions">
                        <i className="icon icon-maps_local_phone_24px"></i>
                    </div>
                </div>
            </div>
        )
    }
}
