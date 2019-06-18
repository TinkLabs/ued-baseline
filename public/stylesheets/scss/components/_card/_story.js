
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Card', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
