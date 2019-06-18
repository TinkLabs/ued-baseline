
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Search Box', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
