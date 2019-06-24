// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Variables from "./index.jsx";

storiesOf('Variables', module)
  .add('normal', () => (<Variables />), { notes: { markdown: markdownNotes } })
