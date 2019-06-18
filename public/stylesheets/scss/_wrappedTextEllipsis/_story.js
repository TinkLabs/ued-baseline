
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Wrapped Text Ellipsis', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
