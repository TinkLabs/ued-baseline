import { configure } from '@storybook/react';

import '../public/stylesheets/style.scss';
import '../public/stylesheets/demo.css';

const req = require.context('../public/stylesheets/scss', true, /_story\.js$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
