
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Variables', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
