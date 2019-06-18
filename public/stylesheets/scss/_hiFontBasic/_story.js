
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('hi Font Basic', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
