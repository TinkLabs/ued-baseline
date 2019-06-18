### Selection Control
Selection control consist of Checkbox, Radio Button, and Toggle Button.

### Usage
```html
<div class="form-group">
    <input type="checkbox" id="checkbox_n">
    <label class="label" for="checkbox_n">
        <span class="label-mark"></span> label text
    </label>
<div>
<div class="form-group">
    <input type="radio" id="radio_n">
    <label class="label" for="radio_n">
        <span class="label-mark"></span> label text
    </label>
<div>
<div class="demo_toggle_wrapper">
    <div class="form-group">
        <input type="checkbox" id="toggle_1" class="btn-toggle">
        <label for="toggle_1"></label>
    </div>
</div>

```


### Drop Down Button
Drop Down Button provides user with a list of options

### Usage
#### plain HTML
```html
<a id="dd_1">
    <span class="dd-default" data-value="default"> default </span>
    <div class="dd-list" id="demo_dd_list">
        <ul class="list">
            <li class="list-row">
                <div class="list-content">
                    <span class="list-text">item 1 </span>
                </div>
            </li>
            <li class="list-row">
                <div class="list-content">
                    <span class="list-text">item 2 </span>
                </div>
            </li>
            <li class="list-row">
                <div class="list-content">
                    <span class="list-text">item 3 </span>
                </div>
            </li>
        </ul>
    </div>
</a>
```

#### generate with JS
```html
<a id="demo_dd"></a>
```

```js
// settings and inputs
let dd = new dropdown({
    id: "demo_dd",
    allValues: ["a", "b", "c"],
    defaultValue: "a"
});
// create button
dd.init();
// get current value
dd.currentValue;
```

