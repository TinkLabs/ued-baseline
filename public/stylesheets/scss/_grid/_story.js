
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Grid', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
