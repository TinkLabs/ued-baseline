
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Toolbar Button', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
