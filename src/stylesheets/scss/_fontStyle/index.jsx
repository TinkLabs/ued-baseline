import React from 'react';

export default function Color(props) {
    if (props.family === "Montserrat") {
        return (
            <div className="demo_showcase flex flex-row flex-wrap">
                <div className="demo_typeface_wrapper montserrat-extraLight">
                    <p className="demo_font_family">Montserrat ExtraLight</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-extraLight-italic">
                    <p className="demo_font_family">Montserrat ExtraLight Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-light">
                    <p className="demo_font_family">Montserrat Light</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-light-italic">
                    <p className="demo_font_family">Montserrat Light Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat">
                    <p className="demo_font_family">Montserrat</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-italic">
                    <p className="demo_font_family">Montserrat Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-medium">
                    <p className="demo_font_family">Montserrat Medium</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-medium-italic">
                    <p className="demo_font_family">Montserrat Medium Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-semibold">
                    <p className="demo_font_family">Montserrat SemiBold</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-semibold-italic">
                    <p className="demo_font_family">Montserrat SemiBold Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-bold">
                    <p className="demo_font_family">Montserrat Bold</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-bold-italic">
                    <p className="demo_font_family">Montserrat Bold Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-extraBold">
                    <p className="demo_font_family">Montserrat ExtraBold</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-extraBold-italic">
                    <p className="demo_font_family">Montserrat ExtraBold Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-black">
                    <p className="demo_font_family">Montserrat Black</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper montserrat-black-italic">
                    <p className="demo_font_family">Montserrat Black Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="demo_showcase flex flex-row flex-wrap">
                <div className="demo_typeface_wrapper merriweather-sans-light">
                    <p className="demo_font_family">Merriweather Sans Light</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-light-italic">
                    <p className="demo_font_family">Merriweather Sans Light Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans">
                    <p className="demo_font_family">Merriweather Sans</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-italic">
                    <p className="demo_font_family">Merriweather Sans Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-bold">
                    <p className="demo_font_family">Merriweather Sans Bold</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-bold-italic">
                    <p className="demo_font_family">Merriweather Sans Bold Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-extraBold">
                    <p className="demo_font_family">Merriweather Sans ExtraBold</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
                <div className="demo_typeface_wrapper merriweather-sans-extraBold-italic">
                    <p className="demo_font_family">Merriweather Sans ExtraBold Italic</p>
                    <p className="demo_uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="demo_lowercase">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="demo_number">0123456789</p>
                </div>
            </div>
        )
    }
}
