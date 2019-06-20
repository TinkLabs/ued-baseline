// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Topbar from "./index.jsx";
// controls
import {
  boolean,
  radios,
  text,
} from '@storybook/addon-knobs';

const actionBtnLabel = "Action buttons";
const actionBtnOptions = {
  "None": "none",
  "With Menu": "menu",
  "More": "more",
};
const actionBtnDefaultValue = "more";

storiesOf('Top Bar', module)
  .add('normal',
    () => {
      const backBtn = boolean("Back button", true);
      const title = text("Title text", "Page Title");
      const actionButtons = radios(actionBtnLabel, actionBtnOptions, actionBtnDefaultValue);

      return (
        <Topbar
          backBtn={backBtn}
          title={title}
          actionButtons={actionButtons}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
