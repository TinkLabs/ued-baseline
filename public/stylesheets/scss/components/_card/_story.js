// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Card from "./index.jsx";
// controls
import {
  boolean,
  radios,
  text,
} from '@storybook/addon-knobs';

import avatar from './avatar.png';

import img_l_fw from './image-l-fw.png';
import img_l from './image-l.png';
import img_m_wide from './image-m-wide.png';
import img_m from './image-m.png';

const cardMedia = {
  "card-fw": img_l_fw,
  "card-l": img_l,
  "card-m-wide": img_m_wide,
  "card-m": img_m,
}

const sizeLabel = "Size";
const sizeOptions = {
  "Full Width Card, 16:9, no padding": "card-fw",
  "Large Card 16:9": "card-l",
  "Medium Size Card, 16:9": "card-m-wide",
  "Medium Size Card, 4:3": "card-m",
}
const sizeDefaultValue = "card-fw";

storiesOf('Card', module)
  .add('normal',
    () => {
      const size = radios(sizeLabel, sizeOptions, sizeDefaultValue);

      const withHeader = boolean("With Header", true);
      const headerTitle = text("Header Title", "Header Title");
      const headerSubtitle = text("Header Subtitle", "Header Subtitle");

      const withVideoBtn = boolean("Play Button", true);
      const withTag = boolean("With Tag", true);
      const mediaTag = text("Media Tag", "Tag");
      const mediaTitle = text("Media Title", "Media Title");
      const mediaSubtitle = text("Media Subtitle", "Media Subtitle");

      const bodyTitle = text("Body Title", "Body Title");
      const bodySubtitle = text("Body Subtitle", "Body Subtitle");
      const bodyTag = text("Body Tag", "Body tag");

      const withTicketing = boolean("With Ticketing", true);

      return (
        <Card
          size={size}

          withHeader={withHeader}
          headerTitle={headerTitle}
          headerSubtitle={headerSubtitle}
          avatar={avatar}

          mediaSrc={cardMedia[size]}
          mediaTitle={mediaTitle}
          mediaSubtitle={mediaSubtitle}
          withTag={withTag}
          mediaTag={mediaTag}
          withVideoBtn={withVideoBtn}

          bodyTitle={bodyTitle}
          bodySubtitle={bodySubtitle}
          bodyTag={bodyTag}

          withTicketing={withTicketing}
        />
      )
    },
    { notes: { markdown: markdownNotes } }
  )
