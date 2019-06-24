// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Ellipsis from "./index.jsx";

storiesOf('Wrapped Text Ellipsis', module)
  .add('normal', () => (<Ellipsis />), { notes: { markdown: markdownNotes } })
