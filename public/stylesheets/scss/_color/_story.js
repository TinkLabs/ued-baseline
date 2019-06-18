
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Color', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
