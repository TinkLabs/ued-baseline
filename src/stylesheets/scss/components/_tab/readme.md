### Tabs

Tabs organize content across different screens, data sets, and other interactions.

Keep tab text short and simple.

If you set a width to `tabs` and use class `fixed-width` with `tabs`, long text will be wrapped, then truncated.

You can have as many tabs as needed, out of screen tabs will be scrollable.

###Usage

```html
<div class="tabs fixed-width" style={width: 360px}>
    <div class="tab active">
        <span class="tab-text"> tab text </span>
    </div>
    <div class="tab">
        <span class="tab-text"> tab text </span>
    </div>
</div>
```

