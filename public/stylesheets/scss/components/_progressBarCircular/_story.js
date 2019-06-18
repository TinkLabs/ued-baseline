
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Circular Progress Bar', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
