// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Chat from "./index.jsx";
// controls
import {
  radios,
} from '@storybook/addon-knobs';

const typeLabel = "Type";
const typeOptions = {
  "input": "input",
  "bubble": "bubble",
  "audio bubble": "audio bubble",
};
const typeDefaultValue = "input";

const sideLabel = "Side";
const sideOptions = {
  "Left": "left",
  "Right": "right",
};
const sideDefaultValue = "left";

storiesOf('Chat', module)
  .add('normal',
    () => {
      const type = radios(typeLabel, typeOptions, typeDefaultValue);
      const side = radios(sideLabel, sideOptions, sideDefaultValue);

      return (
        <div class="demo_showcase demo_screen_mob">
          <Chat
            type={type}
            side={side}
          />
        </div>
      )
    },
    { notes: { markdown: markdownNotes } }
  )
