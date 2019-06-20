// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import TextField from "./index.jsx";
// controls
import {
  boolean,
  number,
  radios,
  text,
} from '@storybook/addon-knobs';

const stateLabel = "State";
const stateOptions = {
  "Resting": "resting",
  "Activated": "activated",
  "Enabled": "enabled",
  "Error": "error",
  "Disabled": "disabled",
};
const stateDefaultValue = "resting";

storiesOf('Text Field', module)
  .add('general',
    () => {
      const state = radios(stateLabel, stateOptions, stateDefaultValue);
      const outlined = boolean("Outlined", false);
      const useTextArea = boolean("Use TextArea", false);
      
      return (
        <TextField
          state={state}
          outlined={outlined}
          useTextArea={useTextArea}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
