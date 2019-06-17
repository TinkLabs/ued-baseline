import { configure } from '@storybook/html';

import '../public/stylesheets/style.scss';

const req = require.context('../public/stylesheets', true, /_story\.js$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
