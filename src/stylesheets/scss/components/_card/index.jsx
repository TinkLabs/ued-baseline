import React from 'react';
import classNames from 'classnames';

export default function Card(props) {
    const cardClass = classNames({
        'card': true,
        'card-fw': props.size === "card-fw",
        'card-l': props.size === "card-l",
        'card-m-wide': props.size === "card-m-wide",
        'card-m': props.size === "card-m",
    });

    const sizeForHeader = ['card-fw', 'card-l'];
    const sizeForTicketing = ['card-fw', 'card-l'];
    const sizeForMediaOverlay = ['card-fw', 'card-l'];

    return (
        <div className={cardClass}>
            <div className="card-container">
                {/* Card Head */}
                {
                    (props.withHeader && sizeForHeader.indexOf(props.size) !== -1) &&

                    <div className="card-head">
                        <img className="card-head-avatar avatar" alt="avatar" src={props.avatar} />
                        <div className="card-head-text">
                            <span className="card-head-title"> {props.headerTitle} </span>
                            <span className="card-head-subtitle"> {props.headerSubtitle} </span>
                        </div>
                        <i className="card-head-icon icon icon-general_favorite_24px"></i>
                    </div>
                }

                {/* Card Media */}
                {
                    props.mediaSrc &&

                    <div className="card-media-container">
                        <img className="card-media" alt="card-media" src={props.mediaSrc} />
                        {
                            (sizeForMediaOverlay.indexOf(props.size) !== -1) &&

                            <div className="card-media-overlay">
                                <div className="card-media-overlay-top">
                                    {
                                        props.withTag && <span className="tag"> {props.mediaTag} </span>
                                    }
                                    {
                                        props.withVideoBtn && <i className="card-media-overlay-videoBtn icon icon-av_play_circle_outline_24px"></i>
                                    }
                                </div>

                                {/* Card Media Overlay and Text */}
                                <div className="card-media-overlay-bottom">
                                    <span className="card-media-overlay-bottom-title"> {props.mediaTitle} </span>
                                    <span className="card-media-overlay-bottom-subtitle"> {props.mediaSubtitle} </span>
                                </div>
                            </div>
                        }
                    </div>
                }

                {/* Card Body */}
                <div className="card-body">
                    {/* Body Title */}
                    <span className="card-body-title"> {props.bodyTitle} </span>

                    {/* Body Content */}
                    <span className="card-body-content"> {props.bodySubtitle} </span>

                    {/* Body Tags */}
                    <span className="tag"> {props.bodyTag} </span>

                    {/* Body Ticketing infos */}
                    {
                        (sizeForTicketing.indexOf(props.size) !== -1 && props.withTicketing) &&

                        <div className="card-body-ticketing">

                            {/* Ratings */}
                            <div className="card-body-ticketing-rating">
                                <i className="icon icon-toggle_star_24px"></i>
                                <i className="icon icon-toggle_star_24px"></i>
                                <i className="icon icon-toggle_star_24px"></i>
                                <i className="icon icon-toggle_star_24px"></i>
                                <i className="icon icon-toggle_star_border_24px"></i>
                            </div>

                            {/* Pricing */}
                            <div className="card-body-ticketing-pricing">
                                <span className="card-body-ticketing-price-previous"> HK$ 888 </span>
                                <span className="card-body-ticketing-price"> HK$ 558 </span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
