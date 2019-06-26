// basic
import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links'

// doc
import landingNotes from './_landing.md';
import logNotes from './_log.md';
import detailsNotes from './_details.md';

storiesOf('Welcome | Welcome', module)
    .add('readme',
        () => (
            <div>
                <div className="headline navy"> Welcome, please read the notes below before you start. </div>
                <br/>
                <div className="subtitle2 navy"> 
                    See
                    <a className="hyperlink" onClick={linkTo('Welcome | Welcome', 'change log')}> change log </a>
                    for latest updates.
                </div>
                <br/>
                <div className="subtitle2 navy">
                    See
                    <a className="hyperlink" onClick={linkTo('Welcome | Welcome', 'details')}> details </a>
                    for more details about this repo.
                </div>
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
