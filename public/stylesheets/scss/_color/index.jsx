import React from 'react';

export default function Color(props) {
    return (
        <div className="demo_showcase demo_main_colors">
            <div className="demo_main_col">
                <div className="demo_color_box bg-navy-900"></div>
                <div className="demo_color_box bg-navy-800 demo_round flex just-center align-center">
                    <p className="demo_label white">N</p>
                </div>
                <div className="demo_color_box bg-navy-700"></div>
                <div className="demo_color_box bg-navy-600"></div>
                <div className="demo_color_box bg-navy-500"></div>
                <div className="demo_color_box bg-navy-400"></div>
                <div className="demo_color_box bg-navy-300"></div>
                <div className="demo_color_box bg-navy-200"></div>
                <div className="demo_color_box flex just-center align-center">Navy</div>
            </div>
            <div className="demo_main_col">
                <div className="demo_variant">900</div>
                <div className="demo_variant">800</div>
                <div className="demo_variant">700</div>
                <div className="demo_variant">600</div>
                <div className="demo_variant">500</div>
                <div className="demo_variant">400</div>
                <div className="demo_variant">300</div>
                <div className="demo_variant">200</div>
                <div className="demo_variant">Variant</div>
            </div>
            <div className="demo_main_col">
                <div className="demo_color_box bg-gold-900"></div>
                <div className="demo_color_box bg-gold-800"></div>
                <div className="demo_color_box bg-gold-700"></div>
                <div className="demo_color_box bg-gold-600"></div>
                <div className="demo_color_box bg-gold-500 demo_round flex just-center align-center">
                    <p className="demo_label dark">G</p>
                </div>
                <div className="demo_color_box bg-gold-400"></div>
                <div className="demo_color_box bg-gold-300"></div>
                <div className="demo_color_box bg-gold-200"></div>
                <div className="demo_color_box flex just-center align-center">Gold</div>
            </div>
        </div>
    )
}
