# Hiinc Style Baseline and Fonts

---
## Documentation

[online doc](https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/index.html)

## Index
[1. Introduction](.storybook/_landing.md)

[2. Change Logs](.storybook/_log.md)

[3. Details](.storybook/_details.md)

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

## Local development

```bash
yarn storybook
```

svg icon reference page: `./iconFactory/result/icon-reference.html`

### TODO
