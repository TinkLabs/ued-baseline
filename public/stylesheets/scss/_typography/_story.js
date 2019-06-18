
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Typography', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
