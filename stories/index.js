import { configure } from '@storybook/react';

// local
import '../src/stylesheets/style.scss';
import '../src/stylesheets/demo.css';

// staging / prod doc
// import '../dist/stylesheets/handyBaseline.css';
// import '../src/stylesheets/demo.css';

const req = require.context('../src/stylesheets/scss', true, /_story\.js$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
