import { configure } from '@storybook/react';

// local
// import '../public/stylesheets/style.scss';
// import '../public/stylesheets/demo.css';

// staging / prod doc
import '../dist/stylesheets/handyBaseline.css';
import '../public/stylesheets/demo.css';

const req = require.context('../public/stylesheets/scss', true, /_story\.js$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
