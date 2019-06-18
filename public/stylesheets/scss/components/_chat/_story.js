
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Chat', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
