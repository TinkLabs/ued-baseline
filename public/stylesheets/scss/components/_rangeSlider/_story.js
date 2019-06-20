// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';

storiesOf('Range Slider', module)
  .add('normal',
    () => (
      <a className="hyper"> This component supported by noUiSlider </a>
    ),
    {
      notes: { markdown: markdownNotes }
    }
  );
