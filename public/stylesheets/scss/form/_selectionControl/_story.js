// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import SelectionControl from "./index.jsx";
// controls
import {
  boolean,
  number,
  radios,
  text,
} from '@storybook/addon-knobs';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

storiesOf('Selection Controls', module)
  .add('radio',
    () => {
      let count = number("Button count", 1, { steps: 1 });
      let groupName = text("Group name", "name");

      return (
        <div className="demo_showcase demo_no_bg bg-white flex flex-col">
          <form>
            {
              renderChildren('radio', count, groupName)
            }
          </form>
        </div>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  )
  .add('checkbox',
    () => {
      let count = number("Button count", 1, { steps: 1 });
      let groupName = text("Group name", "name");

      return (
        <div className="demo_showcase demo_no_bg bg-white flex flex-col">
          <form>
            {
              renderChildren('checkbox', count, groupName)
            }
          </form>
        </div>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  )
  .add('toggle',
    () => {
      let toggleState = boolean("Toggle on", false);
      return (
        <div className="demo_showcase demo_no_bg bg-white flex flex-col">
          <form>
            <SelectionControl
              type="toggle"
              state={toggleState}
            />
          </form>
        </div>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  )
  .add('drop down',
    () => {
      const showDD = boolean("Show drop down", false);
      const itemCount = number("List length", 3, { steps: 1 });
      let data = new Array();
      for (let i = 0; i < itemCount; i++) {
        data = data.concat(`value ${i + 1}`);
      }

      return (
        <SelectionControl
          type="dropdown"
          showDD={showDD}
          data={data}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );

function renderChildren(type, count, groupName, toggleOn) {
  let elementsArray = [];
  for (let i = 0; i < count; i++) {
    elementsArray.push(
      <SelectionControl
        type={type}
        index={i}
        groupName={groupName}
      />
    )
  }
  return elementsArray;
}
