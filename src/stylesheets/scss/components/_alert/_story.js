// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Alert from "./index.jsx";
// controls
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Component|Alert', module)
  .add('general',
    () => {
      const error = boolean("Error", false)
      const children = text("Children", "Normal Message");

      return (
        <Alert error={error}>
          {children}
        </Alert>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
