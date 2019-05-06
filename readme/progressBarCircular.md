### Progress Bar Circular
Progress bar shows user the progress of a loading process.
Infinite rolling is used when progress percentage is not important to user.
Javascript library is required for this component to work.

### Usage
##### Basic
Add the following element to your code.
```html
<div id="circular-progress-1"></div>
```

Create a new progress bar, use the id of the element created above.
```js
let cpb = new circularProgressBar({id: "circular-progress-1"});
```

##### Update Progress
Use the `update(percent)` function to update progress, where `0 <= percent <= 1`
```js
cpb.update(0.2);
```

##### Infinite Rotation
Use the `infinite()` function to start rotation animation.
```js
cpb.infinite();
```

##### Toggle Rotation
Use the `toggleInfinite()` function to toggle rotation animation, after using `infinite()` function.
```js
cpb.toggleInfinite();
```

##### Reset Rotation
Use the `reset()` function to reset bar position.
```js
cpb.reset();
```
