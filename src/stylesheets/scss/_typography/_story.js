// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Typography from "./index.jsx";

storiesOf('Typography', module)
  .add('normal', () => (<Typography/>), { notes: { markdown: markdownNotes } })
