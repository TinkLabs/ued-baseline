// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import ProgressBar from "./index.jsx";
// controls
import {
  boolean,
  number,
} from '@storybook/addon-knobs';

const progressLabel = "Progress(%)";
const progressOption = {
  range: true,
  min: 0,
  max: 100,
  step: 10,
};
const progressDefaultValue = 10;

storiesOf('Progress Bar', module)
  .add('normal',
    () => {
      const infinite = boolean("Infinite loop", true);
      const percent = number(progressLabel, progressDefaultValue, progressOption);

      return (
        <ProgressBar
          infinite={infinite}
          percent={percent}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
