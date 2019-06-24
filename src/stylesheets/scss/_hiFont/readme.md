### hi Fonts

Contains a few shortened icons' class names.

Contains mixin `labelMark` for icon to be used anywhere in the library.

#### Material Icons

All icons from Material Icons and made into svg fonts.

<!-- #### Color Icons -->
<!-- Colored icons are mostly brand logos, eg hiinc, ali pay, wechat pay etc. -->
<!-- You can find them in `/src/images/colorIcons` or `/dist/images/colorIcons` -->

#### Documentation
Look up `className` and `content` [here](https://handy-staging-test.s3.amazonaws.com/design_baseline_demo/icons-reference.html)

### Usage
In your project

```html
<i class="icon icon-content_add_24px icon-right"></i>
```

Or in this library

```scss
.element:before {
    @include labelMark;
    content: "\EC10";
}
```
