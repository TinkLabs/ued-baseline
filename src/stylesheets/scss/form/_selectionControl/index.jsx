import React from 'react';

export default function SelectionControl(props) {
    if (props.type === "radio") {

        return (
            <div className="form-group">
                <input
                    type="radio"
                    id={`radio_${props.index}`}
                    name={props.groupName}
                />
                <label className="label" htmlFor={`radio_${props.index}`}>
                    <span className="label-mark"></span>
                    label text
                </label>
            </div>
        )
    } else if (props.type === "checkbox") {
        return (
            <div className="form-group">
                <input
                    type="checkbox"
                    id={`checkbox_${props.index}`}
                    name={props.groupName}
                />
                <label className="label" htmlFor={`checkbox_${props.index}`}>
                    <span className="label-mark"></span>
                    label text
                </label>
            </div>
        )
    } else if (props.type === "toggle") {
        return (
            <div className="demo_toggle_wrapper">
                <div className="form-group">
                    <input  
                        type="checkbox"
                        id="toggle_1"
                        className = "btn-toggle"
                        checked={props.state}
                    />
                    <label htmlFor="toggle_1"></label>
                </div>
            </div>
        )
    } else if (props.type === "dropdown") {
        return (
            <div>
                <a id="dd_1" className="btn dropdown">
                    <span className="dd-default" data-value="default"> default </span>
                </a>
                <div
                    id="demo_dd_list"
                    className={`dd-list ${props.showDD && "dd-show"}`}
                >
                    <ul className="list">
                        {
                            props.data.map((d, index) => (
                                <li className="list-row" key={index}>
                                    <div className="list-content">
                                        <span className="list-text"> {d} </span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
