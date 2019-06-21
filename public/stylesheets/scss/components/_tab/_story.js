// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Tab from "./index.jsx";
// controls
import {
  array,
} from '@storybook/addon-knobs';

const label = 'Tab Text';
const defaultValue = ['Tab1', 'Tab2', 'Tab3'];

storiesOf('Component|Tab', module)
  .add('normal',
    () => {
      const tabTexts = array(label, defaultValue);

      return (
        <Tab
          tabTexts={tabTexts}
          active={1}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
