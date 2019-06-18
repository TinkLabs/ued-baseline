
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Tooltip', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
