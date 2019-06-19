// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import CarouselIndicator from "./index.jsx";
// controls
import {
  boolean,
} from '@storybook/addon-knobs';

storiesOf('Carousel Indicator', module)
  .add('normal',
    () => {
      const darkMode = boolean("Dark Mode", false);
      
      return (<CarouselIndicator darkMode={darkMode} />)
    },
    { notes: { markdown: markdownNotes } }
  )
