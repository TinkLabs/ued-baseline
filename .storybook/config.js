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
    theme: themes.dark,
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
