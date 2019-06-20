### Tool Tip
A tooltip provides quick explanation on an element or a function on screen.

### Usage
Wrap up the element that requires a tooltip.

Use class name `tp-left`, `tp-center` and `tp-right` according to position of wrapped element to define tool tip position relative to the screen.

Use class name `tp-bottom` to place tooltip at the bottom if necessary.

Put tool tip text in `data-tip` attribute.


```html
<span class="tooltip tp-left" data-tip="Tips"> content that needs tooltip </span>
```

### Tool Tip
A screen centered tooltip provides instantaneous information of current activity.

### Usage

Screen centered tooltip, default hidden, toggle class name `tp-show` to toggle appearence.

```html
<div class="tooltip tp-activity tp-show">
    <i class="icon icon-av_mic_24px"></i>
    <span class="tp-text"> This is the tooltip </span>
</div>
```
