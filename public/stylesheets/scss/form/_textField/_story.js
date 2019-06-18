
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Text Field', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
