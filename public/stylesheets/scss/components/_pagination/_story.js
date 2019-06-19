// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Pagination from "./index.jsx";
// controls
import {
  number,
  radios,
} from '@storybook/addon-knobs';


const lengthLabel = "Page count";
const lengthOption = {
  "More than 7": "10",
  "Less than 7": "5",
};
const lengthDefaultValue = "10";

storiesOf('Pagination', module)
  .add('normal',
    () => {
      const pageCount = radios(lengthLabel, lengthOption, lengthDefaultValue);

      const currentPageLabel = "Current page";
      const currentPageOption = {
        range: true,
        min: 1,
        max: parseInt(pageCount, 10),
        step: 1,
      };
      const currentPageDefaultValue = 1;
      const currentPage = number(currentPageLabel, currentPageDefaultValue, currentPageOption);

      return (
        <Pagination
          maxPage={parseInt(pageCount, 10)}
          currentPage={currentPage}
        />
      )
    },
    {
      notes: { markdown: markdownNotes }
    }
  );
