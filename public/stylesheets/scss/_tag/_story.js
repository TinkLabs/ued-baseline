
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Tag', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
