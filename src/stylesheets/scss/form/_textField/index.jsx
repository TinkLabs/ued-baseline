import React from 'react';
import className from 'classnames';

export default function TextField(props) {
    const fieldClass = className({
        "textfield": true,
        "outlined": props.outlined,
        "activated": props.state === 'activated',
        "enabled": props.state === 'enabled',
        "error": props.state === 'error',
        "disabled": props.state === 'disabled',
    });

    return (
        <div className="form-group">
            <div className={fieldClass}>
                <span className="field-label"> label text </span>
                <div className="input-wrapper">
                    {
                        props.useTextArea
                        ? <textarea placeholder="placeholder" disabled={props.state === "disabled"}></textarea>
                        : <input type="text" placeholder="placeholder" disabled={props.state === "disabled"} />
                    }
                    
                </div>
                <span className="helper-text"> helper text </span>
            </div>
        </div>
    )
}
