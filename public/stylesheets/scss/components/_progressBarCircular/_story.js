// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
import markdownNotes_controlled from './readme_controlled.md';
// component
import ProgressBarCircular from "./index.jsx";

storiesOf('Circular Progress Bar', module)
  .add('no control',
    () => (
      <ProgressBarCircular />
    ),
    {
      notes: { markdown: markdownNotes }
    }
  )
  .add('controlled animation',
    () => (
      <span className="subtitle2">
        Controllable circular progress bar requires JS file of this library, and is not available in React yet.
     </span>
    ),
    {
      notes: { markdown: markdownNotes_controlled }
    }
  );
