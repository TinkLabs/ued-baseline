/*
 *
 * Basic storybook config / function
 *
 */

import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';

/*
 *
 * Knobs
 *  - control panel for user to toggle component's style
 * 
 */

import { withKnobs } from '@storybook/addon-knobs';
addDecorator(withKnobs);

/*
 *
 * Console Log
 *  - receive all console messages, warnings, errors in action logger panel
 *  - Everything except HMR logs
 * 
 */

import { withConsole } from '@storybook/addon-console';
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

/*
 *
 * Theming storybook
 * 
 */

import { themes } from '@storybook/theming';
addParameters({
  options: {
    // https://storybook.js.org/docs/configurations/theming/
    theme: {
      ...themes.dark,
      base: 'dark',
      addonNotesTheme: {
        code: {
          color: 'rebeccapurple',
        },
        "table tr": {
          "background-color": 'transparent !important',
        },
        "table tr:nth-of-type(2n)": {
          "background-color": 'rgba(0,0,0,0.1) !important',
        },
      }
    },
  },
});

/*
 *
 * Load all stories
 * 
 */

function loadStories() {
  // You can require as many stories as you need.
  require('../stories/index.js');
}
configure(loadStories, module);
