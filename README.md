# Hiinc Style Baseline and Fonts
---
### Index

[1. How to use](#How to use)

[2. How to contribute](#How to contribute)

[3. Demo Link](#Demo Link)

[8. Production Build](#Production Build)

[9. Hosting](#Hosting)



---
## How to use
```html
<link rel="stylesheet" href="https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/dist/stylesheets/handyBaseline.css">
<script src="https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/dist/javascripts/handyBaseline.min.js"></script>
```

## How to contribute
1. Download or clone this project from git hub
2. `npm install`
3. If you don't have `gulp` installed globally, run `npm install gulp -g`

##### Styles and Components
`gulp watch`
This will compile `style.scss` to `style.css` live

##### Adding Custom Fonts
We are converting svg icons into font
1. Place your svg icon in `/public/images/svg`
2. Run `gulp svg`


### Demo Link
##### Staging
https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/index.html





### Production Build
`gulp production`
This will compile all file and copy necessary assets to `/dist` folder

### Hosting
##### Staging
1. Run `gulp prod` to get latest compiled files inside `/dist`.
2. Go to s3 bucket `/handy-staging-test` > `/design_baseline_demo`.
3. Copy the whole `/dist` folder into s3 bucket.
