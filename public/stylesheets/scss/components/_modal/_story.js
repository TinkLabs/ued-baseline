
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Modal', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
