// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Hyperlink from "./index.jsx";

storiesOf("Component | Hyperlink", module)
    .add('general',
        () => {
            return (
                <Hyperlink />
            )
        }, {
            notes: { markdown: markdownNotes }
        }
    )
