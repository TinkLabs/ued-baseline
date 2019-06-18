
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Ripple Effect', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
