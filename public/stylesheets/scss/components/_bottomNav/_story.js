
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Bottom Navigation', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
