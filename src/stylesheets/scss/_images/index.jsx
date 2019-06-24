import React from 'react';

import image_l_fw from "./image-l-fw.png";
import image_l from "./image-l.png";
import image_m_wide from "./image-m-wide.png";
import image_m from "./image-m.png";
import image_s from "./image-s.png";

const imageSrc = {
    "image-l-fw": image_l_fw,
    "image-l": image_l,
    "image-m-wide": image_m_wide,
    "image-m": image_m,
    "image-s": image_s,
}

export default function Image(props) {
    return (
        <img
            className={`${props.size} ${props.rounded && "image-rounded"}`}
            src={imageSrc[props.size]}
            alt="image" />
    )
}
