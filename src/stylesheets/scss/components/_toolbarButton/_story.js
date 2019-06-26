// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import ToolbarButton from "./index.jsx";
// controls
import {
  boolean,
} from '@storybook/addon-knobs';

const label = "Fill the bar, max 5";
const defaultValue = false;

storiesOf('Component|Toolbar Button', module)
  .add('normal',
    () => {
      const multiple = boolean(label, defaultValue);

      return (
        <ToolbarButton multiple={multiple} />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
