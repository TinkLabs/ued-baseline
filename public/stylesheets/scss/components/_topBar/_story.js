
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Top Bar', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
