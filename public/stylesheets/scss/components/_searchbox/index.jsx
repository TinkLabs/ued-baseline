import React from 'react';

export default function SearchBox(props) {
    return (
        <div className={`searchbox ${props.disabled && "disabled"}`}>
            {
                props.label && <p class="search-label"> {props.label} </p>
            }
            <div className="search-wrapper">
                <input className="search-input" type="text" placeholder={props.placeholder} />
                {
                    props.withHistory &&
                    <ul className="search-history list">
                        <li className="list-row" key={1}>
                            <div className="list-content">
                                <div className="list-text">
                                    <span className="list-text-secondary"> search history 1 </span>
                                </div>
                            </div>
                        </li>
                        <li className="list-row" key={2}>
                            <div className="list-content">
                                <div className="list-text">
                                    <span className="list-text-secondary"> search history 2 </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                }
            </div>
            {
                props.helper && <p className="search-helper"> {props.helper} </p>
            }
        </div>
    )
}
