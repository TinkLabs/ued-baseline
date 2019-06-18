
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('General CSS', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
