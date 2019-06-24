// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
// doc
import landingNotes from './_landing.md';
import logNotes from './_log.md';
import detailsNotes from './_details.md';

storiesOf('Welcome | Welcome', module)
    .add('readme',
        () => (
            <div>
                <span className="headline navy"> Welcome, please read the notes below before you start. </span>
                <span className="subtitle2 navy"> See "change log" for latest updates. </span>
                <span className="subtitle2 navy"> See "details" for more details about this repo. </span>
            </div>
        ),
        {
            notes: { markdown: landingNotes }
        }
    )
    .add('change log',
        () => (
            <div className="headline navy"> Library change logs </div>
        ),
        {
            notes: { markdown: logNotes }
        }
    )
    .add('details',
        () => (
            <div className="headline navy"> Details </div>
        ),
        {
            notes: { markdown: detailsNotes }
        }
    )
