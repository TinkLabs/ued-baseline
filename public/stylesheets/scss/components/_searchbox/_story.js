// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import SearchBox from "./index.jsx";
// controls
import {
  boolean,
  text,
} from '@storybook/addon-knobs';

storiesOf('Search Box', module)
  .add('normal',
    () => {
      const label = text("Label", "label");
      const helper = text("Helper", "helper");
      const placeholder = text("Placeholder", "placeholder");
      const disabled = boolean("Disabled", false);
      const withHistory = boolean("With History", false);

      return (
        <SearchBox
          label={label}
          helper={helper}
          placeholder={placeholder}
          disabled={disabled}
          withHistory={withHistory}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
