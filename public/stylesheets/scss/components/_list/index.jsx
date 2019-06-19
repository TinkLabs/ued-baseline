import React from 'react';

export default function List(props) {
    return (
        <ul className="list">
            {
                props.data.map((curr, index) => (
                    <li className="list-row" key={index}>
                        <div className="list-content multiline">

                            {/* thumbnail */}
                            <i className="list-thumbnail icon icon-toggle_star_24px"></i>

                            {/* body */}
                            <div className="list-text">
                                {
                                    curr.overline && <span className="list-text-overline"> {curr.overline} </span>
                                }
                                {
                                    curr.primary && <span className="list-text-primary"> {curr.primary} </span>
                                }
                                {
                                    curr.secondary && <span className="list-text-secondary"> {curr.secondary} </span>
                                }
                            </div>

                            {/* meta */}
                            {
                                curr.meta === "icon" && <i className="list-meta icon icon-general_favorite_24px"></i>
                            }
                            {
                                curr.meta === "caption" && <span className="list-meta">Caption</span>
                            }
                            {
                                curr.meta === "checkbox" &&

                                <div className="list-meta form-group">
                                    <input type="checkbox" id="checkbox_list_2" />
                                    <label htmlFor="checkbox_list_2">
                                        <span className="label-mark"></span>
                                    </label>
                                </div>
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
