### Form Control
For now, form control consist of Text Fields, Checkbox, and Radio Button.
For text field, 5 visual states are provided for different use-cases.
### Usage
```html
<div class="form-group">
    <div class="textfield outlined error">
        <span class="field-label"> label text </span>
        <div class="input-wrapper">
            <input type="text" placeholder="placeholder">
        </div>
        <span class="helper-text"> helper text </span>
    </div>
<div>
```

### Remark
##### Change Log
- 9 May, 2019
- To fix bug when `field-label` or `helper-text` is not present, an `input-wrapper` is added to keep icon in place.
