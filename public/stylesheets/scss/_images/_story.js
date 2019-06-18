
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Images', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
