
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Font Style', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
