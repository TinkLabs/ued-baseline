// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Accordion from "./index.jsx";
// controls
import {
  boolean,
  radios,
} from '@storybook/addon-knobs';

const behavoirLabel = "Accordion behavoir";
const behavoirOptions = {
  "Open only one item": "single",
  "Open multiple items": "multiple",
}
const behavoirDefaultValue = "single";

storiesOf('Accordion', module)
  .add('normal',
    () => {
      const behavoir = radios(behavoirLabel, behavoirOptions, behavoirDefaultValue);
      const large = boolean("Larger size", false);

      return (<Accordion behavoir={behavoir} large={large} />)
    },
    { notes: { markdown: markdownNotes } }
  )
