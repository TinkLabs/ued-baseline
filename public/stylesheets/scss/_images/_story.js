// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
import markdownNotesAvatar from './readme_avatar.md';
// component
import Image from "./index.jsx";
import Avatar from "./avatar.jsx";
// controls
import {
  boolean,
  radios,
} from '@storybook/addon-knobs';

let sizeLabel = "Size";
let sizeOptions = {
  "16:9 full width": "image-l-fw",
  "16:9 large": "image-l",
  "16:9 medium": "image-m-wide",
  "4:3  medium": "image-m",
  "1:1  list image": "image-s",
}
let sizeDefaultValue = "image-l-fw";

storiesOf('Images', module)
  .add('avatar',
    () => {
      return <Avatar />
    },
    {
      notes: { markdown: markdownNotesAvatar }
    }
  )
  .add('Image',
    () => {
      const size = radios(sizeLabel, sizeOptions, sizeDefaultValue);
      const rounded = boolean("Rounded corner", false);

      return (
        <Image
          size={size}
          rounded={rounded}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );

