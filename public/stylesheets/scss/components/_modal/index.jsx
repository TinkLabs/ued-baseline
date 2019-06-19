import React from 'react';

export default function Modal(props) {
    return (
        <div className="modal" id="modal1">
            <div className="modal-wrapper">
                <div className="modal-header">
                    {
                        props.headerIcon && <i className="icon icon-device_access_alarm_24px"></i>
                    }
                    <h3 className="modal-title">Modal Title</h3>
                </div>
                <div className="modal-body">
                    <p className="modal-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="modal-footer">
                    {
                        props.btnCount === "1"
                        ?
                        <div className="modal-footer">
                            <button className="btn btn-contained" id="close-modal1">Close</button>
                        </div>
                        :
                        <div className={`modal-footer ${props.stackBtn && "stacked"}`}>
                            <button className="btn btn-contained" id="modal-btn-secondary"> cancel </button>
                            <button className="btn btn-contained" id="modal-btn-primary"> OK </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
