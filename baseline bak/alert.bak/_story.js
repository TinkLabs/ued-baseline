import { storiesOf } from '@storybook/react';

import markdownNotes from './readme.md';

storiesOf('Alert', module)
  .add('normal', () => `<div class="alert-chip"> Normal Message </div>`, { notes: { markdown: markdownNotes } })
  .add('error', () => `<div class="alert-chip error"> Error Message </div>`, { notes: { markdown: markdownNotes } })
