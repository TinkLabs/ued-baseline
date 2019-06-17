### Progress Bar Linear
Progress bar shows user the progress of a loading process.
Infinite rolling is used when progress percentage is not important to user.

### Usage
##### Infinite
Use `pb-infinite` together with `pb-bar` to get infinite loading animation
```html
<div class="progress-bar">
    <div class="pb-container">
        <div class="pb-bar pb-infinite"></div>
    </div>
</div>
```

##### Live Progress
Alter inline CSS width to control length of progress bar by your JS.
```html
<div class="progress-bar">
    <div class="pb-container">
        <div class="pb-bar" style="width: 75%"></div>
    </div>
</div>
```
