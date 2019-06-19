
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Scrollable', module)
  .add('normal', () => " ", { notes: { markdown: markdownNotes } })
