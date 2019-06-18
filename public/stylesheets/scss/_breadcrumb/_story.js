// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Breadcrumb from "./index.jsx";
// controls
import {
  radios,
  text,
} from '@storybook/addon-knobs';

const label = 'Active';
const options = {
  "First": "1",
  "Second": "2",
  "Third": "3",
};
const defaultValue = '1';

storiesOf('Breadcrumb', module)
  .add('general',
    () => {
      // init everytime display is rendered
      const value = radios(label, options, defaultValue);

      return (
        <div>
          <Breadcrumb
            active={value === '1'}
            key="1"
          >
            {text("Children 1", "Breadcrumb 1")}
          </Breadcrumb>
          <Breadcrumb
            active={value === '2'}
            key="2"
          >
            {text("Children 2", "Breadcrumb 2")}
          </Breadcrumb>
          <Breadcrumb
            active={value === '3'}
            key="3"
          >
            {text("Children 3", "Breadcrumb 3")}
          </Breadcrumb>
        </div>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
