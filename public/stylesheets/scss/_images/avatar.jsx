import React from 'react';
import avatar from './avatar.png';

export default function Avatar(props) {
    return (
        <img
            className="avatar"
            src={avatar}
            alt="avatar"
        />
    )
}
