// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import FontStyle from "./index.jsx";
// controls
import {
  radios,
} from '@storybook/addon-knobs';

const fontLabel = "Family";
const fontOptions = {
  "Montserrat": "Montserrat",
  "Merriweather Sans": "Merriweather Sans",
};
const fontDefaultValue = "Montserrat";

storiesOf('Font Style', module)
  .add('normal',
    () => {
      const family = radios(fontLabel, fontOptions, fontDefaultValue);

      return (
        <FontStyle family={family}></FontStyle>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
