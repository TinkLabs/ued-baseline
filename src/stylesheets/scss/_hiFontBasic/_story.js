// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import FontStyle from "./index.jsx";

storiesOf('hi Font Basic', module)
  .add('normal', () => (<FontStyle />), { notes: { markdown: markdownNotes } })
