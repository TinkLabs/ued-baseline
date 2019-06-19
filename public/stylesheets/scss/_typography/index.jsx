import React from 'react';

export default function Typography(props) {
    return (
        <div class="demo_showcase flex flex-row">
            <div className="demo_half_w">
                <div className="demo_title_wrapper">
                    <p className="headline demo_title_border">Headline : Montserrat SemiBold 20px Line:30</p>
                </div>
                <div className="demo_title_wrapper">
                    <p className="subtitle1 demo_title_border">Subtitle1 : Montserrat SemiBold 16px Line:24</p>
                </div>
                <div className="demo_title_wrapper">
                    <p className="subtitle2 demo_title_border">Subtitle2 : Montserrat SemiBold 14px Line:24</p>
                </div>
                <div className="demo_title_wrapper">
                    <p className="body1 demo_title_border">Body1 : Montserat Medium 14px Line24</p>
                </div>
                <div className="demo_title_wrapper">
                    <p className="body2 demo_title_border">Body2 : Montserat Medium 12px Line:20</p>
                </div>
                <div className="demo_title_wrapper">
                    <p className="caption demo_title_border">Caption : Montserat Medium 10px Line:14</p>
                </div>
            </div>
        </div>
    )
}
