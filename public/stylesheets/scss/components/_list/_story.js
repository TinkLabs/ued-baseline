// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import List from "./index.jsx";
// controls
import {
  boolean,
  number,
  radios,
  text,
} from '@storybook/addon-knobs';

import avatar from './avatar.png';

const metaOptions = {
  "icon": "icon",
  "caption": "caption",
  "checkbox": "checkbox",
};
const metaDefaultValue = "icon";

storiesOf('List', module)
  .add('normal',
    () => {
      let data = new Array;

      const lengthLabel = "List length";
      const lengthOption = {
        range: true,
        min: 2,
        max: 5,
        step: 1,
      };
      const lengthDefaultValue = 2;
      const length = number(lengthLabel, lengthDefaultValue, lengthOption);

      for (let i = 0; i < length; i++) {
        let groupId = `List_${i + 1}`;
        let dataPkg = {
          avatar: (boolean(`Avatar ${i+1}`, false, groupId) && avatar),
          overline: text(`Overline ${i+1}`, "overline", groupId),
          primary: text(`Primary Text ${i+1}`, "primary", groupId),
          secondary: text(`Secondary Text ${i+1}`, "secondary", groupId),
          caption: text(`Caption  ${i+1}`, "caption", groupId),
          meta: radios(`Meta ${i+1}`, metaOptions, metaDefaultValue, groupId)
        }
        data = data.concat(dataPkg);
      }

      return (
        <List
          data={data}
        />
      )
    },
    { notes: { markdown: markdownNotes } }
  );
