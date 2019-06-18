
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('hi Fonts', module)
  .add('normal', () => " ", { notes: { markdown: markdownNotes } })
