### Drop Down Button
Drop Down Button provides user with a list of options

### Usage
##### plain HTML
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

##### generate with JS
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

