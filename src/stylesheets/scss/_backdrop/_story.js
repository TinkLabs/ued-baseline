// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Backdrop from "./index.jsx";
// controls
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Backdrop', module)
  .add('general',
    () => {
      const collapse = boolean("Collapse", false);

      return (
        <Backdrop collapse={collapse}></Backdrop>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
