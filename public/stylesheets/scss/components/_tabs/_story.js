
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Tab', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
