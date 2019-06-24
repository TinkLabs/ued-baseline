### Progress Bar Circular
Progress bar shows user the progress of a loading process.

Javascript library is required if you want to have control on the component.

Otherwise you can use `fixed-arc indicator` to place an infinite rotation indicator.

### Usage (Controlable)
#### Basic

Add the following element to your code.

```html
<div id="circular-progress-1"></div>
```

Create a new progress bar, use the id of the element created above.

```js
let cpb = new circularProgressBar({id: "circular-progress-1"});
```

#### Update Progress

Use the `update(percent)` function to update progress, where `0 <= percent <= 1`

```js
cpb.update(0.2);
```

#### Infinite Rotation

Use the `infinite()` function to start rotation animation.

```js
cpb.infinite();
```

#### Toggle Rotation

Use the `toggleInfinite()` function to toggle rotation animation, after using `infinite()` function.

```js
cpb.toggleInfinite();
```

#### Reset Rotation

Use the `reset()` function to reset bar position.

```js
cpb.reset();
```
