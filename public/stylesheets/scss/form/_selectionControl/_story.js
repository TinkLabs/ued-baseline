
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Selection Controls', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
