# Hiinc Style Baseline and Fonts
---
### Index

[1. How to use](#How-to-use)

[2. How to contribute](#How-to-contribute)

[3. Demo Link](#Demo-Link)

[4. Production Build](#Production-Build)

[5. Hosting](#Hosting)



---
## How to use

Add the following lines of code to your `html` file.

If you are using React, only add the css to your `index.html`, you will need to write your own JS,

Staging
```html
<link rel="stylesheet" href="https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/dist/stylesheets/handyBaseline.css">
<script src="https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/dist/javascripts/handyBaseline.min.js"></script>
```

Production
```html
<link rel="stylesheet" href="http://cdn.handy.travel/baseline/dist/stylesheets/handyBaseline.css">
<script src="http://cdn.handy.travel/baseline/dist/javascripts/handyBaseline.min.js"></script>
```

---

## How to contribute

1. Download or clone this project from git hub
2. `npm install`
3. If you don't have `gulp` installed globally, run `npm install gulp -g`
4. Make Pull Request for your changes

##### Styles and Components
`gulp hotreload`
This will compile `style.scss` to `style.css` live, start a hotreload server watching css and html changes.

##### Adding Custom Fonts
We are converting svg icons into font
1. Place your svg icon in `/public/images/svg`
2. Run `gulp svg`

##### Local Pages

Demo page: `./index.html`

svg icon reference page: `./iconFactory/result/icon-reference.html`

##### Writing Descriptions for components
1. Goto `./readme` folder
2. Find / Create the markdown file for the component
3. Edit content
4. Run `gulp md` and a html file with the same name as markdown file is generated
5. Copy content in the html file
6. Paste it in `index.html` within `demo_description` div


### Demo Link
https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/index.html


### Production Build
`gulp production`
This will compile all file and copy necessary assets to `/dist` folder

### Hosting
##### Staging
1. Run `gulp production` to get latest compiled files inside `/dist`.
2. Go to s3 bucket `/handy-staging-test` > `/design_baseline_demo`.
3. Copy the whole `/dist` folder into s3 bucket.
4. Also copy `index.html` or `/public` folder if you made changes in them.

##### Production
1. PR and merge to master


### TODO
- Add intro section to explain how to use, what is included etc
- automate description update
- Safari touch effect all no show
