// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Color from "./index.jsx";

storiesOf('Color', module)
  .add('normal',
    () => {
      return (
        <Color></Color>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
