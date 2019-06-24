
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Flexbox', module)
  .add('normal', () => " ", { notes: { markdown: markdownNotes } })
