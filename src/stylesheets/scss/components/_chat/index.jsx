import React from 'react';

export default function Chat(props) {
    if (props.type === "input") {
        return (
            <div className="chat-input">
                <i className="chat-voice icon icon icon-av_mic_24px"></i>
                <textarea
                    className="chat-text" rows="1"
                    placeholder="type something"
                ></textarea>
                <i className="chat-send send-enabled icon icon-content_send_24px"></i>
            </div>
        )
    } else if (props.type === "bubble") {
        return (
            <div className={`chat-bubble bubble-${props.side}`}>
                <div className="msg-wrapper">
                    <span className="chat-msg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna malesuada, eleifend elit luctus, aliquam elit. Nam at vulputate leo. </span>
                </div>
            </div>
        )
    } else if (props.type === "audio bubble") {
        return (
            <div className={`chat-bubble bubble-${props.side}`}>
                <div className="msg-wrapper playing infinite-animation">
                    <i className="audio-control icon icon-av_pause_circle_filled_24px"></i>
                    <span className="audio-timer">0:01</span>
                </div>
            </div>
        )
    }
}
