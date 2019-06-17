import { configure } from '@storybook/html';

function loadStories() {
  // You can require as many stories as you need.
  require('../stories/index.js');
}

configure(loadStories, module);
