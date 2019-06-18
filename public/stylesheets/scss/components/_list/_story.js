
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('List', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
