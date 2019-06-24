// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Modal from "./index.jsx";
// controls
import {
  boolean,
  radios,
} from '@storybook/addon-knobs';

const btnCountLabel = "Button count";
const btnCountOptions = {
  "1" : "1",
  "2" : "2",
};
const btnCountDefaultValue = "1";

storiesOf('Component|Modal', module)
  .add('normal',
    () => {
      const btnCount = radios(btnCountLabel, btnCountOptions, btnCountDefaultValue)
      const stackBtn = boolean("Stack Button?", false);
      const headerIcon = boolean("With Icon?", false);

      return (
        <Modal
          headerIcon={headerIcon}
          btnCount={btnCount}
          stackBtn={stackBtn}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
