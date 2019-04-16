### Tool Tip
A tooltip provides quick explanation on an element or a function on screen.

### Usage
Wrap up the element that requires a tooltip.

Use class name `tp-left`, `tp-center` and `tp-right` to define tool tip position.

Put tool tip text in `data-tip` attribute.

```html
<span class="tooltip tp-left" data-tip="Tips"> content </span>
```

### Tool Tip
A screen centered tooltip provides instantaneous information of current activity.

### Usage

Centered tooltip, default hidden, toggle class name `tp-show` to toggle appearence.

```html
<div class="tooltip tp-activity tp-show">
    <i class="icon icon-av_mic_24px"></i>
    <span class="tp-text"> This is the tooltip </span>
</div>
```
