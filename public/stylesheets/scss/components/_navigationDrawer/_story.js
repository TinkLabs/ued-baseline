
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Navigation Drawer', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
