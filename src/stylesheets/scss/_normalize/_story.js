// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import NormalizeCSS from './index.jsx';

storiesOf('Normalize', module)
  .add('normal',
    () => (<NormalizeCSS />),
    { notes: { markdown: markdownNotes } });
