// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import markdownNotes from './readme.md';
// component
import Divider from "./index.jsx";

storiesOf("Component | Divider", module)
    .add('general',
        () => {
            return (
                <Divider />
            )
        }, {
            notes: { markdown: markdownNotes }
        }
    )
