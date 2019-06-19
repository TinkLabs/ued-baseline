// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import BottomNavigation from "./index.jsx";

storiesOf('Bottom Navigation', module)
  .add('normal',
    () => {
      return (<BottomNavigation />)
    },
    { notes: { markdown: markdownNotes } }
  )
