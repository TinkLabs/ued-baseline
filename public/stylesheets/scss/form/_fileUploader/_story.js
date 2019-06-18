
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('File Uploader', module)
  .add('normal', () => "", { notes: { markdown: markdownNotes } })
