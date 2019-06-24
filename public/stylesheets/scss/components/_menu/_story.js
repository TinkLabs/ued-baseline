// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Menu from "./index.jsx";
// controls
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Component|Menu', module)
  .add('normal',
    () => {
      const showMenu = boolean('Show menu', false);
      const fullWidth = boolean('Full width', false);


      return (
        <Menu
          showMenu={showMenu}
          fullWidth={fullWidth}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  )
