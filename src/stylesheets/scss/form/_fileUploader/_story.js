// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import FileUploader from "./index.jsx";
// controls
import {
  number,
  radios,
} from '@storybook/addon-knobs';

const stateLabel = "State";
const stateOptions = {
  "None chosen": "none",
  "File chosen": "chosen",
};
const stateDefaultValue = "none";

storiesOf('Form | File Uploader', module)
  .add('normal',
    () => {
      const state = radios(stateLabel, stateOptions, stateDefaultValue);

      let fileCount = 0;
      if (state === "chosen") {
        fileCount = number("File count", 1, { step: 1 });
      }

      return (
        <FileUploader
          state={state}
          files={new Array(fileCount)}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
