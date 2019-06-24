// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Ellipsis from "./index.jsx";
// controls
import {
  radios,
  text,
} from '@storybook/addon-knobs';

const typographyLabel = "Typography";
const typographyOptions = {
  "subtitle1": "subtitle1",
  "subtitle2": "subtitle2",
  "body1": "body1",
  "body2": "body2",
  "caption": "caption",
};
const typographyDefaultValue = "subtitle1";

storiesOf('Wrapped Text Ellipsis', module)
  .add('normal', () => {
    const displayText = text("Text", "Very long text that you want to wrap and truncate");
    const typography = radios(typographyLabel, typographyOptions, typographyDefaultValue);

    return (
      <Ellipsis
        typography={typography}
        displayText={displayText}
      />
    )
  },
    {
      notes: {
        markdown: markdownNotes
      }
    }
  );
