
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Pagination', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
