// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Tooltip from "./index.jsx";
// controls
import {
  boolean,
  radios,
  text,
} from '@storybook/addon-knobs';

const typeLabel = "Tooltip type";
const typeOptions = {
  "Normal": "normal",
  "Screen centered": "centered",
};
const typeDefaultValue = "normal";

const horizontalLabel = "Horizontal Position";
const horizontalOptions = {
  "Left": "left",
  "Center": "center",
  "Right": "right",
};
const horizontalDefaultValue = "center";

const verticalLabel = "Vertical Position";
const verticalOptions = {
  "Top": "top",
  "Bottom": "bottom",
};
const verticalDefaultValue = "top";

storiesOf('Tooltip', module)
  .add('normal',
    () => {
      const type = radios(typeLabel, typeOptions, typeDefaultValue);
      let show, horizontalPosition, verticalPosition, tip;
      if (type === "centered") {
        show = boolean("Show", true);
      } else {
        horizontalPosition = radios(horizontalLabel, horizontalOptions, horizontalDefaultValue);
        verticalPosition = radios(verticalLabel, verticalOptions, verticalDefaultValue);
        tip = text("Tip text", "Tips");
      }

      return (
        <Tooltip
          show={show}
          type={type}
          horizontalPosition={horizontalPosition}
          verticalPosition={verticalPosition}
          tip={tip}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
