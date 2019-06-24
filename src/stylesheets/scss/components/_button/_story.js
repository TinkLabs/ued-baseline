// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
import markdownNotes_roundBtn from './readme_round.md';
import markdownNotes_squareBtn from './readme_square.md';
// component
import Button from "./index.jsx";
// controls
import {
  boolean,
  radios,
  text,
} from '@storybook/addon-knobs';

const label = ['Style', 'Color', 'Icon'];
const options = [
  {
    "None": "None",
    "Outlined": "Outlined",
    "Contained": "Contained",
  },
  {
    "Gold": "Gold",
    "Navy": "Navy",
  },{
    "None": "None",
    "To Left": "Left",
    "To Right": "Right",
  }];
const defaultValue = ['None', 'Gold', "None"];

const mediumSizeLabel = "Medium Size";
const mediumSizeDefault = false;
// const largeSizeLabel = "Large Size";
// const largeSizeDefault = false;

const disableLabel = "Disable";
const disableDefault = false;

const elevationLabel = "Elevation";
const elevationDefault = false;


storiesOf('Component|Button', module)
  .add('general',
    () => {
      // init everytime display is rendered
      const style = radios(label[0], options[0], defaultValue[0]);
      const color = radios(label[1], options[1], defaultValue[1]);
      const withIcon = radios(label[2], options[2], defaultValue[2]);
      const medium = boolean(mediumSizeLabel, mediumSizeDefault);
      const disable = boolean(disableLabel, disableDefault);
      const btnText = text("Button Text", "Button");

      return (
        <Button
          medium={medium}
          style={style}
          color={color}
          disable={disable}
        >
          {withIcon === "Left" && <i className="icon icon-content_add_24px icon-left" />}
          {btnText}
          {withIcon === "Right" && <i className="icon icon-content_add_24px icon-right" />}
        </Button>
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  )
  .add('round',
    () => {
      const elevation = boolean(elevationLabel, elevationDefault);
      // const large = boolean(largeSizeLabel, largeSizeDefault);
      const disable = boolean(disableLabel, disableDefault);
      const btnText = text("Button Text", "");

      return (
        <Button
          type={"round"}
          disable={disable}
          // large={large}
          elevation={elevation}
        >
          {
            (btnText.length === 0 ? <i className="icon icon-content_add_24px" /> : btnText)
          }
        </Button>
      )
    },
    {
      notes: { markdown: markdownNotes_roundBtn }
    }
  )
  .add('square',
    () => {
      const disable = boolean(disableLabel, disableDefault);
      // const large = boolean(largeSizeLabel, largeSizeDefault);
      const btnText = text("Button Text", "");

      return (
        <Button
          type={"square"}
          disable={disable}
        // large={large}
        >
          {
            (btnText.length === 0 ? <i className="icon icon-content_add_24px" /> : btnText)
          }
        </Button>
      )
    },
    {
      notes: { markdown: markdownNotes_squareBtn }
    }
  )
