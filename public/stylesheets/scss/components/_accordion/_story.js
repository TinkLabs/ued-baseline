
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Accordion', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
