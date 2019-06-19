
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Progress Bar', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })