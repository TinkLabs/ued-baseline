// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import NavigationDrawer from "./index.jsx";
// controls
import {
  boolean,
  radios,
} from '@storybook/addon-knobs';

const positionLabel = "Position";
const positionOptions = {
  "Left": "left",
  "Bottom": "bottom",
};
const positionDefaultValue = "left";

storiesOf('Navigation Drawer', module)
  .add('normal',
    () => {
      const position = radios(positionLabel, positionOptions, positionDefaultValue);
      const show = boolean("Show drawer", false);

      return (
        <NavigationDrawer
          position={position}
          show={show}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
