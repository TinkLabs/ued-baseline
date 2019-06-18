
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Range Slider', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
