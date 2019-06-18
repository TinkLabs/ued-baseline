
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Normalize', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
