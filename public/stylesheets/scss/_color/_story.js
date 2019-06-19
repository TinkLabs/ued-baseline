// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
import markdownNotes_support from './readme_support.md';
// component
import Color from "./index.jsx";

storiesOf('Color', module)
  .add('main color',
    () => (<Color />),
    { notes: { markdown: markdownNotes } }
  )
  .add('supporting color',
    () => (<Color palette="supporting" />),
    { notes: { markdown: markdownNotes_support } }
  )
