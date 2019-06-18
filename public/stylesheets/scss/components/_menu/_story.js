
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Menu', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
