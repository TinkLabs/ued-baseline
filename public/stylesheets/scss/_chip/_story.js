// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Chip from "./index.jsx";
// controls
import {
  boolean,
  radios,
  text,
} from '@storybook/addon-knobs';

let iconLabel = "Icon";
let iconOptions = {
  "None": "None",
  "To Left": "Left",
  "To Right": "Right",
}
let iconDefaultValue = "None";

let stateLabel = "State";
let stateOptions = {
  "None": "None",
  "Pressed": "Pressed",
  "Active": "Active",
}
let stateDefaultValue = "None";

storiesOf('Chip', module)
  .add('general',
    () => {
      const disable = boolean("Disable", false);
      const children = text("Children", "Chip Text");
      const withIcon = radios(iconLabel, iconOptions, iconDefaultValue);
      const state = radios(stateLabel, stateOptions, stateDefaultValue);

      return (
        <Chip
          state={state}
          disable={disable}
        >
          {withIcon === "Left" && <i class="icon icon-general_bookmarks_24px" />}
          {withIcon === "None" ? children : <span className="chip-text">children</span>}
          {withIcon === "Right" && <i class="icon icon-general_highlight_off_24px" />}
        </Chip>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
