import React from 'react';

export default function Color(props) {
    if (props.palette === "supporting") {
        return (
            <div class="demo_showcase">
                <div class="flex flex-row flex-wrap">
                    <div class="demo_color_box bg-blue flex flex-col just-end">
                        <p class="color white">Blue</p>
                        <p class="hex white">#8DC8E8</p>
                    </div>
                    <div class="demo_color_box bg-purple flex flex-col just-end">
                        <p class="color white">Purple</p>
                        <p class="hex white">#B06C95</p>
                    </div>
                    <div class="demo_color_box bg-red flex flex-col just-end">
                        <p class="color white">Red</p>
                        <p class="hex white">#DA291C</p>
                    </div>
                    <div class="demo_color_box bg-green flex flex-col just-end">
                        <p class="color white">Green</p>
                        <p class="hex white">#4A783C</p>
                    </div>
                </div>
                <div class=" flex flex-row flex-wrap">
                    <div class="demo_color_box bg-dark flex flex-col just-end">
                        <p class="color white">Dark</p>
                        <p class="hex white">#0F0F0F</p>
                    </div>
                    <div class="demo_color_box bg-dark-grey flex flex-col just-end">
                        <p class="color white">Dark Grey</p>
                        <p class="hex white">#C6CDCE</p>
                    </div>
                    <div class="demo_color_box bg-light-grey flex flex-col just-end">
                        <p class="color dark">Light Grey</p>
                        <p class="hex dark">#F0F5F8</p>
                    </div>
                    <div class="demo_color_box bg-light flex flex-col just-end">
                        <p class="color dark">Light</p>
                        <p class="hex dark">#F7FCFF</p>
                    </div>
                </div>
            </div>
        )
    } else {
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
}
