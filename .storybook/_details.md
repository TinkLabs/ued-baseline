# Details

### Documentations

Storybook is used for documentation in this project, you can check [here](https://storybook.js.org/).

Storybook [addons](https://storybook.js.org/addons/) enable advanced functionality and unlock new workflows.

### Setup

1. Download or clone this project from git hub
2. `npm install`
3. If you don't have `gulp` installed globally, run `npm install gulp -g`
4. Make Pull Request for your changes

#### How to edit

1. Go to `src/stylesheets/scss`, find the targeted component / style folder
2. Change file content accordingly
    - `_story.js` contains logic on how storybook display demo code and documents
    - `index.jsx` contains react code for demo component / styling
    - `.md` files contain description of that component / styling
    - `style.scss` contains styling


#### How to add new svg into icon-font file

We are converting svg icons into font

1. Place / Add your svg icons in `/src/images/svg`
2. Run `gulp svg`


### Production

#### Bundle CSS and JS

Compile all file and copy necessary assets to `/dist` folder:

```bash
gulp production
```

Commit and push and merge into master branch.

CDN is hooked with repo and will auto deploy CSS and JS.

#### Build and serve documents

Compile storybook by:

```bash
gulp production

npm run build-storybook
```

Copy content of `/storybook-static` folder and `icons-reference.html` into s3 bucket `handy-staging-test/design_baseline_storybook/`
