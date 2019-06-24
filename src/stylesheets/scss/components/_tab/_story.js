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
  boolean,
} from '@storybook/addon-knobs';

const label = 'Tab Text';
const defaultValue = ['Tab1', 'Tab2 with long text', 'Tab3'];

storiesOf('Component|Tab', module)
  .add('normal',
    () => {
      const tabTexts = array(label, defaultValue);
      const equalWidth = boolean("Equal tab width", false);

      return (
        <Tab
          tabTexts={tabTexts}
          active={1}
          equalWidth={equalWidth}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
